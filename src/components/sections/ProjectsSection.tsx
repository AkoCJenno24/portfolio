import React from 'react';
import type { Project, ProjectTechnology } from '../../types/portfolio';

const KNOWN_TECH_LOGOS: Record<string, string> = {
  react: '/assets/icons/react.svg',
  'react.js': '/assets/icons/react.svg',
  nodejs: '/assets/icons/nodejs.jpg',
  'node.js': '/assets/icons/nodejs.jpg',
  node: '/assets/icons/nodejs.jpg',
  express: '/assets/icons/express.jpg',
  'express.js': '/assets/icons/express.jpg',
  mongodb: '/assets/icons/mongodb.jpg',
  javascript: '/assets/icons/javascript.jpg',
  js: '/assets/icons/javascript.jpg',
  html: '/assets/icons/html.jpg',
  css: '/assets/icons/css.jpg',
  tailwind: '/assets/icons/tailwindcss.svg',
  tailwindcss: '/assets/icons/tailwindcss.svg',
  'tailwind css': '/assets/icons/tailwindcss.svg',
  typescript: '/assets/icons/typescript.svg',
  ts: '/assets/icons/typescript.svg',
  github: '/assets/icons/github.svg',
  firebase: '/assets/icons/firebase.svg',
  supabase: '/assets/icons/supabase.svg',
  figma: '/assets/icons/figma.jpg',
  vscode: '/assets/icons/vscode.svg',
  cursor: '/assets/icons/cursor.svg',
  antigravity: '/assets/icons/antigravity.svg',
  claude: '/assets/icons/claude.svg',
  gemini: '/assets/icons/gemini.svg',
  codex: '/assets/icons/codex.svg',
};

function getTechInfo(tech: string | ProjectTechnology): { name: string; logoUrl: string | null } {
  if (typeof tech === 'string') {
    const key = tech.toLowerCase().trim();
    return {
      name: tech,
      logoUrl: KNOWN_TECH_LOGOS[key] || null,
    };
  }
  return {
    name: tech.name,
    logoUrl: tech.logo || KNOWN_TECH_LOGOS[tech.name.toLowerCase().trim()] || null,
  };
}

interface ProjectsSectionProps {
  projects: Project[];
}

interface ProjectLinkProps {
  label: 'Preview' | 'Source';
  url: string | null;
  projectName: string;
}

const ProjectLink: React.FC<ProjectLinkProps> = ({ label, url, projectName }) => {
  // Validate external url protocol
  const isSafeUrl = url && /^(https?:|\/\/)/i.test(url);

  if (isSafeUrl) {
    return (
      <a
        className="button project-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} for ${projectName} (opens in a new tab)`}
      >
        {label}
      </a>
    );
  }

  return (
    <button
      className="button project-link"
      type="button"
      disabled
      title={`${label} link has not been supplied`}
      aria-label={`${label} for ${projectName} — unavailable`}
    >
      {label}
      <span className="unavailable-marker" aria-hidden="true">
        ·
      </span>
    </button>
  );
};

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title">Project</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <img
              className="project-image"
              src={project.image}
              alt={`${project.name} preview`}
              width="250"
              height="167"
              loading="lazy"
            />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <ul className="project-tech-logos" aria-label="Technologies used">
              {project.technologies.map((tech, idx) => {
                const { name, logoUrl } = getTechInfo(tech);
                return (
                  <li key={`${name}-${idx}`} className="project-tech-item" title={name}>
                    {logoUrl ? (
                      <img
                        src={logoUrl}
                        alt={name}
                        width="24"
                        height="24"
                        loading="lazy"
                      />
                    ) : (
                      <span className="project-tech-fallback">{name}</span>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="project-actions">
              <ProjectLink
                label="Preview"
                url={project.demoUrl}
                projectName={project.name}
              />
              <ProjectLink
                label="Source"
                url={project.sourceUrl}
                projectName={project.name}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

