import { About } from "@/widgets/About";
import { Additional } from "@/widgets/Additional";
import { Education } from "@/widgets/Education";
import { Experience } from "@/widgets/Experience";
import { Hero } from "@/widgets/Hero";
import { NavBar } from "@/widgets/NavBar";
import { Projects } from "@/widgets/Projects";
import { SiteFooter } from "@/widgets/SiteFooter";
import { Skills } from "@/widgets/Skills";
import { Stats } from "@/widgets/Stats";

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Additional />
        <SiteFooter />
      </main>
    </>
  );
}
