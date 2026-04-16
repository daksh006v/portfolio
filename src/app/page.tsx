import { Navbar } from "@/components/pages/sections/navbar";
import { LandingSection } from "@/components/pages/sections/landing";
import { About } from "@/components/pages/sections/about";
import { Projects } from "@/components/pages/sections/projects";
import { Skills } from "@/components/pages/sections/skills";
import { Hackathons } from "@/components/pages/sections/hackathons";
import { Certifications } from "@/components/pages/sections/certifications";
import { GithubActivity } from "@/components/pages/sections/github-activity";
import { LeetcodeStats } from "@/components/pages/sections/leetcode-stats";
import { AboutDetails } from "@/components/pages/sections/about-details";
import { Contact } from "@/components/pages/sections/contact";
import { Footer } from "@/components/pages/sections/footer";
import { BackgroundNoise } from "@/components/shared/backgrounds";

export default function Home() {
  return (
    <>
      <div className="no-scrollbar portfolio-container relative size-full snap-y snap-mandatory overflow-y-scroll bg-background">
        <BackgroundNoise className="z-50" />

        {/* ① Cinematic landing screen — full viewport height */}
        {/* <LandingSection /> */}

        {/* Main Content Wrapper */}
        <main className="before:border-border after:border-border relative z-10 min-h-screen snap-start before:absolute before:top-0 before:left-0 before:h-full before:w-12 before:border-r before:bg-[linear-gradient(-135deg,_var(--color-border)_25%,_transparent_25%,_transparent_50%,_var(--color-border)_50%,_var(--color-border)_75%,_transparent_75%,_transparent)] before:bg-[length:5px_5px] after:absolute after:top-0 after:right-0 after:h-full after:w-12 after:border-l after:bg-[linear-gradient(135deg,_var(--color-border)_25%,_transparent_25%,_transparent_50%,_var(--color-border)_50%,_var(--color-border)_75%,_transparent_75%,_transparent)] after:bg-[length:5px_5px] max-md:before:hidden max-md:after:hidden md:px-12">

          {/* ② Persistent navbar — sits at top of the scrolled content */}
          <Navbar />

          <div className="md:px-8">
            <div className="md:border-r md:border-l border-border relative">

              {/* Vintage radial glow */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.05)_120%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_120%)] z-0" />

              <div className="relative z-10">
                {/* Hero (About) + Stats Row */}
                <About />

                {/* Projects */}
                <Projects />

                {/* Skills */}
                <Skills />

                {/* Hackathons */}
                <Hackathons />

                {/* Certifications */}
                <Certifications />

                {/* GitHub Activity */}
                <GithubActivity />

                {/* LeetCode Stats */}
                <LeetcodeStats />

                {/* About Details */}
                <AboutDetails />

                {/* Contact */}
                <Contact />

                {/* Footer */}
                <Footer />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
