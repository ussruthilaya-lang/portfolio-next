import Hero from "@/components/sections/Hero";
import XPArc from "@/components/sections/XPArc";
import FeaturedProject from "@/components/sections/FeaturedProject";
import ProjectCatalogue from "@/components/sections/ProjectCatalogue";
import CurrentFocus from "@/components/sections/CurrentFocus";
import Connect from "@/components/sections/Connect";

export default function Home() {
  return (
    <>
      <Hero />
      <XPArc />
      <FeaturedProject />
      <ProjectCatalogue />
      <CurrentFocus />
      <Connect />
    </>
  );
}
