import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { ProjectCaseStudy } from "@/components/project-case-study";
import { featuredProjects } from "@/lib/site-content";

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <PageIntro
        backHref="/#projects"
        eyebrow="Detailed view"
        title="Project case studies for the four strongest public proof points."
        summary="This page goes deeper than the homepage overview. Each case study expands the problem, what I built, and why the system matters, with visuals that make the architecture and product surface easier to inspect."
      />

      <nav className="site-panel flex flex-wrap gap-3 rounded-[1.6rem] px-4 py-4 sm:px-5">
        {featuredProjects.map((project) => (
          <Link key={project.id} href={`#${project.id}`} className="jump-pill">
            {project.title}
          </Link>
        ))}
      </nav>

      <section className="grid gap-6">
        {featuredProjects.map((project, index) => (
          <ProjectCaseStudy key={project.id} project={project} priority={index === 0} />
        ))}
      </section>
    </div>
  );
}
