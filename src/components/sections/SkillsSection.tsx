import React from 'react';
import type { SkillGroup } from '../../types/portfolio';
import { Icon } from '../ui/Icon';

interface SkillsSectionProps {
  skillGroups: SkillGroup[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skillGroups }) => {
  return (
    <section className="section skills" id="skills" aria-labelledby="skills-title">
      <h2 id="skills-title">Skills &amp; Tools</h2>
      <div className="skill-groups">
        {skillGroups.map(({ title, items }, index) => {
          const groupId = `skill-group-${index}`;
          return (
            <article key={title} className="skill-group" aria-labelledby={groupId}>
              <h3 id={groupId}>{title}</h3>
              <ul className="skill-items">
                {items.map(({ name, logo, symbol }) => (
                  <li key={name} className="skill-item">
                    <span className="skill-mark">
                      {logo ? (
                        <img
                          src={`/assets/icons/${logo}.svg`}
                          alt=""
                          width="40"
                          height="40"
                          loading="lazy"
                        />
                      ) : symbol ? (
                        <Icon name={symbol} />
                      ) : null}
                    </span>
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
};

