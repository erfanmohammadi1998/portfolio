import ProjectCover from './ProjectCover'

// A real screenshot when the project has one, otherwise the generated
// architecture-sketch cover. Keeps card/detail markup identical either way.
export default function ProjectMedia({ project, className = '' }) {
  if (project.cover) {
    return (
      <div className={`proj-shot ${className}`}>
        <img src={project.cover} alt="" loading="lazy" />
      </div>
    )
  }
  return <ProjectCover arch={project.arch} seed={project.slug} className={className} />
}
