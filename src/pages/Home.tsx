import React from "react";

import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Projects from "./components/Projects";
import Process from "./components/Process";
import TechSection from "./components/TechSection";
import Team from "./components/Team";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import BlogSlider from "./components/BlogSlider";
import Clients from "./components/Clients";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Process />
      <TechSection />
      <Team />
      <Skills />
      <Testimonials />
      <BlogSlider />
      <Clients />
      <FaqSection />
      <ContactSection />
    </main>
  );
};

export default Home;
