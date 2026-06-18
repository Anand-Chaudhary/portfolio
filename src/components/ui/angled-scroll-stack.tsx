'use client';

import React, { useEffect, useRef, useCallback, useMemo } from 'react';

/**
 * AngledScrollStack
 * A premium landing-page component that stacks cards with 3D perspective
 * and scroll-driven animations.
 *
 * Features:
 * - 3D perspective with skew effects
 * - Scroll-triggered card stacking
 * - Smooth scaling and depth transitions
 * - Lenis integration for buttery-smooth scrolling
 *
 * Transform Logic:
 * - scale: Cards scale down progressively as they enter the stack
 * - translateY: Cards move upward to form the stack
 * - z: Cards move backward on Z-axis for depth
 * - skewY: Cards get angled for the 3D deck effect
 */

// --- Types ---

interface AngledScrollStackProps {
  children: React.ReactNode;

  /** Distance between cards in normal state */
  itemDistance?: number;

  /** Distance cards move when stacking */
  itemStackDistance?: number;

  /** Base scale of cards */
  baseScale?: number;

  /** Scale decrement per card */
  itemScale?: number;

  /** Z-axis depth distance per card */
  depthDistance?: number;

  /** Amount of Y-axis skew to apply */
  skewAmount?: number;

  /** Blur amount applied to stacked cards */
  blurAmount?: number;

  /** Scroll position (pixels) where cards start pinning */
  stackPosition?: number;

  /** Scroll position (pixels) where cards reach final scale */
  scaleEndPosition?: number;

  /** Additional CSS classes */
  className?: string;

  /** Active card index in the 3D rotating deck */
  activeIndex?: number;
}

interface StackCardProps {
  children: React.ReactNode;
  className?: string;
  cardIndex?: number;
  onClick?: () => void;
}

// --- Constants ---

const DEFAULTS = {
  itemDistance: 150,
  itemStackDistance: 40,
  baseScale: 0.9,
  itemScale: 0.04,
  depthDistance: 80,
  skewAmount: 6,
  blurAmount: 1,
  stackPosition: 300, // Pixels from top
  scaleEndPosition: 100, // Pixels from top
};

// --- Styles (injected) ---

const styles = `
/* AngledScrollStack base styles */
.scroll-stack-card {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
              filter 0.3s ease;
}

/* Mobile responsive adjustments */
@media (max-width: 768px) {
  .scroll-stack-card {
    border-width: 1px;
    border-radius: 24px;
  }
}
`;

// --- StackCard Component ---

/**
 * StackCard
 * Individual card component to be used within AngledScrollStack.
 * Provides consistent styling and 3D context.
 *
 * Key visual properties:
 * - Rounded corners (rounded-3xl)
 * - Subtle border with white/10 opacity
 * - Semi-transparent background with backdrop blur
 * - Strong shadow for depth
 * - Backface hidden for proper 3D rendering
 */
export const StackCard: React.FC<StackCardProps> = ({ children, className = '', cardIndex, onClick }) => {
  const hasBg = className.includes('bg-');
  const hasBorder = className.includes('border-');
  const hasText = className.includes('text-');

  return (
    <div
      className={`
        scroll-stack-card
        relative
        rounded-3xl
        border
        ${hasBorder ? '' : 'border-white/10'}
        ${hasBg ? '' : 'bg-slate-900/90 backdrop-blur-md'}
        ${hasText ? '' : 'text-white'}
        overflow-hidden
        will-change-transform
        cursor-pointer
        select-none
        active:scale-[0.98]
        transition-transform
        duration-150
        ${className}
      `}
      data-card-index={cardIndex}
      onClick={onClick}
      style={{
        backfaceVisibility: 'hidden',
        boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15)',
      }}
    >
      {/* Card Content Container */}
      <div className="p-6 md:p-8 lg:p-10">
        {children}
      </div>
    </div>
  );
};

// --- AngledScrollStack Component ---

/**
 * AngledScrollStack
 * Main container component that manages scroll-driven card stacking.
 *
 * How it works:
 * 1. Uses Lenis for smooth scrolling with natural easing
 * 2. Tracks scroll position via requestAnimationFrame
 * 3. Calculates transform values based on scroll progress
 * 4. Directly manipulates DOM nodes for optimal performance
 *
 * Transform Calculations:
 * =======================
 *
 * For each card at index i with scroll progress p:
 *
 * scale = 1 - p * (1 - (baseScale + i * itemScale))
 *   - Cards start at scale 1 and shrink as they enter the stack
 *   - Earlier cards (higher index) shrink more
 *
 * translateY = p * (i * itemStackDistance)
 *   - Cards move upward to form the stack
 *   - Distance controlled by itemStackDistance
 *
 * z = -(totalCards - i) * depthDistance
 *   - Cards move backward on Z-axis
 *   - Creates depth perception
 *
 * skewY = -skewAmount * p
 *   - Cards get angled (negative skew for right-leaning deck)
 *
 * Example Usage:
 * ==============
 *
 * ```tsx
 * <AngledScrollStack>
 *   <StackCard>
 *     <h3>Feature 1</h3>
 *   </StackCard>
 *   <StackCard>
 *     <h3>Feature 2</h3>
 *   </StackCard>
 *   <StackCard>
 *     <h3>Feature 3</h3>
 *   </StackCard>
 * </AngledScrollStack>
 * ```
 */
export const AngledScrollStack: React.FC<AngledScrollStackProps> = ({
  children,
  itemDistance = DEFAULTS.itemDistance,
  itemStackDistance = DEFAULTS.itemStackDistance,
  baseScale = DEFAULTS.baseScale,
  itemScale = DEFAULTS.itemScale,
  depthDistance = DEFAULTS.depthDistance,
  skewAmount = DEFAULTS.skewAmount,
  blurAmount = DEFAULTS.blurAmount,
  stackPosition = DEFAULTS.stackPosition,
  scaleEndPosition = DEFAULTS.scaleEndPosition,
  className = '',
  activeIndex = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const rafRef = useRef<number | null>(null);
  const scrollPosRef = useRef<number>(0);
  const containerTopRef = useRef<number>(0);
  const isDestroyedRef = useRef(false);

  /**
   * Calculate scroll progress for a specific card
   *
   * Progress is 0 when card is not yet in stack position
   * Progress is 1 when card reaches scaleEndPosition
   *
   * @param index - Card index (0 = top card, higher = deeper in stack)
   * @param totalCards - Total number of cards
   * @returns Progress value between 0 and 1
   */
   const getScrollProgress = useCallback(
    (index: number, totalCards: number) => {
      if (!containerRef.current) return 0;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
      
      // Calculate how far the container is from the vertical center of the viewport
      const containerCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      
      const distanceFromCenter = Math.abs(containerCenter - viewportCenter);
      
      // The cards start fanning out when they enter the viewport 
      // and reach full fan-out when the container is centered.
      const maxDistance = viewportHeight * 0.7; 
      
      // Progress is 1 when centered, and goes to 0 when far away.
      // Each card has a slight delay based on its index to stagger the fan-out!
      const cardDelay = index * 0.12;
      let progress = 1 - (distanceFromCenter / maxDistance) - cardDelay;
      
      return Math.max(0, Math.min(1, progress));
    },
    []
  );

  /**
   * Animation frame loop
   *
   * Updates transforms on all cards based on current scroll position.
   * Uses requestAnimationFrame for smooth 60fps animations.
   */
  const animate = useCallback(() => {
    if (isDestroyedRef.current || !containerRef.current || cardsRef.current.length === 0) return;

    const totalCards = cardsRef.current.length;

    cardsRef.current.forEach((card, index) => {
      const isActive = index === activeIndex;

      if (isActive) {
        card.style.transform = 'translate3d(0, 0, 0) scale(1)';
        card.style.opacity = '1';
        card.style.filter = 'none';
        card.style.zIndex = `${totalCards}`;
        card.style.pointerEvents = 'auto';
      } else {
        // Stack behind: slight downward offset and scale down per distance
        const diff = (index - activeIndex + totalCards) % totalCards;
        const translateY = diff * 30;
        const scale = 1 - diff * 0.05;

        card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
        card.style.opacity = '0';
        card.style.filter = 'none';
        card.style.zIndex = `${totalCards - diff}`;
        card.style.pointerEvents = 'none';
      }
    });

    rafRef.current = requestAnimationFrame(animate);
  }, [activeIndex]);

  // Cleanup animation frame
  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [animate]);

  // Track scroll position and container position using standard browser listeners
  useEffect(() => {
    isDestroyedRef.current = false;

    const updateContainerPosition = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        containerTopRef.current = rect.top + window.scrollY;
      }
    };

    const handleScroll = () => {
      scrollPosRef.current = window.scrollY;
    };

    const handleResize = () => {
      if (!isDestroyedRef.current) {
        updateContainerPosition();
      }
    };

    // Initial position and scroll setups
    updateContainerPosition();
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      isDestroyedRef.current = true;
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Process children to extract valid StackCard elements with indices
  const validCards = useMemo(() => {
    const cards: React.ReactNode[] = [];
    React.Children.forEach(children, (child, index) => {
      if (React.isValidElement(child) && child.type === StackCard) {
        // Clone element with cardIndex for styling
        cards.push(
          React.cloneElement(child as React.ReactElement<StackCardProps>, {
            cardIndex: index,
          })
        );
      }
    });
    return cards;
  }, [children]);

  return (
    <>
      {/* Inject styles */}
      <style>{styles}</style>

      <div
        ref={containerRef}
        className={`
          relative
          w-full
          ${className}
        `}
      >
        {/* Cards Container */}
        <div className="relative w-full">
          {validCards.map((child, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el && el.firstElementChild) {
                  cardsRef.current[index] = el.firstElementChild as HTMLDivElement;
                }
              }}
              className={`w-full max-w-3xl mx-auto ${index === 0 ? 'relative' : 'absolute inset-0'}`}
              style={{
                transformOrigin: 'center center',
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// --- Default Export with Named Components ---

export default AngledScrollStack;
