'use client';

import { AngledScrollStack, StackCard } from '@/components/ui/angled-scroll-stack';
import Link from 'next/link';
import DualToneButton from '@/components/ui/DualToneButton';

/**
 * AngledScrollStackExample
 *
 * Example usage of the AngledScrollStack component.
 * Demonstrates how to use StackCard within the AngledScrollStack container.
 *
 * This component showcases a feature/feature showcase section where cards
 * stack as the user scrolls, creating a premium 3D effect.
 *
 * The effect works like this:
 *
 * Initial state:
 *   Card 1 (top)
 *   Card 2
 *   Card 3
 *
 * After scrolling:
 *   Card 3 (back)
 *   Card 2
 *   Card 1 (front, slightly scaled)
 *
 * Cards gradually:
 * - Move upward to form a stacked deck
 * - Scale down as they enter the stack
 * - Move backward on Z-axis for depth
 * - Get skewed for the 3D angled effect
 */
const AngledScrollStackExample = () => {
  return (
    <section className="w-full bg-slate-950 py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-4">
            Features That Set Us Apart
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Scroll down to see our premium features stack up with a beautiful
            3D card effect created by the AngledScrollStack component.
          </p>
        </div>

        {/*
          AngledScrollStack Props:
          - itemStackDistance: How far cards move when stacking (default: 40)
          - baseScale: Base scale of cards (default: 0.9)
          - itemScale: Scale decrement per card (default: 0.04)
          - depthDistance: Z-axis depth per card (default: 80)
          - skewAmount: Amount of skew in degrees (default: 6)
          - blurAmount: Blur effect intensity (default: 1)
          - stackPosition: Scroll position where cards start pinning (default: 300px)
          - scaleEndPosition: Scroll position where cards reach final scale (default: 100px)
        */}
        <AngledScrollStack
          className="mb-16"
          itemStackDistance={60}
          baseScale={0.85}
          itemScale={0.05}
          depthDistance={100}
          skewAmount={8}
          blurAmount={1.5}
          stackPosition={250}
          scaleEndPosition={80}
        >
          <StackCard className="h-[400px] md:h-[350px]">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  Lightning Fast Performance
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Our optimized infrastructure ensures your application runs at
                  peak speeds with sub-millisecond latency. Experience the
                  difference real-time optimization makes.
                </p>
              </div>
              <Link href="#" className="text-indigo-400 hover:text-indigo-300 mt-6 inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </StackCard>

          <StackCard className="h-[400px] md:h-[350px]">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  Enterprise-Grade Security
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Bank-level encryption and comprehensive security features keep
                  your data safe and compliant with industry standards like GDPR
                  and SOC2.
                </p>
              </div>
              <Link href="#" className="text-emerald-400 hover:text-emerald-300 mt-6 inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </StackCard>

          <StackCard className="h-[400px] md:h-[350px]">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  Real-time Analytics
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Monitor your app's performance with live dashboards and
                  real-time insights to make data-driven decisions faster.
                </p>
              </div>
              <Link href="#" className="text-amber-400 hover:text-amber-300 mt-6 inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </StackCard>

          <StackCard className="h-[400px] md:h-[350px]">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-pink-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  Easy Integration
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Plug into our SDK in minutes with comprehensive documentation
                  and sample implementations for all major frameworks.
                </p>
              </div>
              <Link href="#" className="text-pink-400 hover:text-pink-300 mt-6 inline-flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </StackCard>
        </AngledScrollStack>

        <div className="text-center">
          <DualToneButton text="Get Started Now" />
        </div>

        {/* Mobile Note */}
        <div className="mt-12 text-center md:hidden">
          <p className="text-sm text-slate-500">
            For best experience, view on desktop to see 3D card stacking effect
          </p>
        </div>
      </div>
    </section>
  );
};

export default AngledScrollStackExample;
