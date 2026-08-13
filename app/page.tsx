import { BackgroundField } from "@/components/layout/background-field";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { FeaturedProject } from "@/components/sections/featured-project";
import { Projects } from "@/components/sections/projects";
import { GithubStats } from "@/components/sections/github-stats";
import { Timeline } from "@/components/sections/timeline";
import { Certificates } from "@/components/sections/certificates";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <BackgroundField />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProject />
        <Projects />
        <GithubStats />
        <Timeline />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
