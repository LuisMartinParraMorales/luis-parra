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
          backLabel="Back to home projects summary"
          eyebrow="Detailed view"
          title="Four systems that show how I build."
          summary="These case studies are where the engineering story is clearest: algorithms, ML systems, cloud runtimes, and product delivery shaped into tools people can use, inspect, and trust."
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
