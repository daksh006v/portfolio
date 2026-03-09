import { Navbar } from "@/components/pages/sections/navbar";
import { Hero } from "@/components/pages/sections/hero";
import { About } from "@/components/pages/sections/about";
import { Projects } from "@/components/pages/sections/projects";
import { Contact } from "@/components/pages/sections/contact";
import { Footer } from "@/components/pages/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
