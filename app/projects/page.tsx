import { PageIntro } from "@/components/page-intro";
import { PageWithLocalNav } from "@/components/page-with-local-nav";
import { ProjectCaseStudy } from "@/components/project-case-study";
import { featuredProjects, projectsPageSectionNav } from "@/lib/site-content";

export default function ProjectsPage() {
  return (
    <PageWithLocalNav items={projectsPageSectionNav}>
      <div className="space-y-10">
        <PageIntro
          id="projects-overview"
          backHref="/#projects"
          eyebrow="Detailed view"
          title="Project case studies for the four strongest public proof points."
          summary="This page goes deeper than the homepage overview. Each case study expands the problem, what I built, and why the system matters, with visuals that make the architecture and product surface easier to inspect."
        />

        <section className="grid gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCaseStudy key={project.id} project={project} priority={index === 0} />
          ))}
        </section>
      </div>
    </PageWithLocalNav>
  );
}
