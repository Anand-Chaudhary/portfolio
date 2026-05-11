import About from "@/components/landing/About";
import Blogs from "@/components/landing/Blogs";
import Contact from "@/components/landing/Contact";
import Experience from "@/components/landing/Experience";
import Hero from "@/components/landing/Hero";
import Marquee from "@/components/landing/Marquee";
import Projects from "@/components/landing/Projects";
import Services from "@/components/landing/Services";
import Testimonial from "@/components/landing/Testimonial";
import Tools from "@/components/landing/Tools";

const Home = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <About />
      <Tools />
      <Projects />
      <Experience />
      <Blogs />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Home;