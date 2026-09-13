import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Experience } from "@/components/Experience/Experience";
import { Expertise } from "@/components/Expertise/Expertise";
import { Skills } from "@/components/Skills/Skills";
import { Projects } from "@/components/Projects/Projects";
import { Certifications } from "@/components/Certifications/Certifications";
import { Education } from "@/components/Education/Education";
import { Philosophy } from "@/components/Philosophy/Philosophy";
import { Contact } from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <hr className="section-divider" />
      <About />
      <hr className="section-divider" />
      <Experience />
      <hr className="section-divider" />
      <Expertise />
      <hr className="section-divider" />
      <Skills />
      <hr className="section-divider" />
      <Projects />
      <hr className="section-divider" />
      <Certifications />
      <hr className="section-divider" />
      <Education />
      <Philosophy />
      <hr className="section-divider" />
      <Contact />
    </>
  );
}
