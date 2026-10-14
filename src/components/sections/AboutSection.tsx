import React from 'react';
import type { FAQItem } from '../../types/portfolio';
import { Accordion } from '../ui/Accordion';

interface AboutSectionProps {
  about: string | string[];
  faqs: FAQItem[];
}

export const AboutSection: React.FC<AboutSectionProps> = ({ about, faqs }) => {
  const paragraphs = Array.isArray(about) ? about : [about];

  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <h2 id="about-title">About Me</h2>
      <div className="about-content">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="about-copy">
            {paragraph}
          </p>
        ))}
      </div>

      <h3 className="faq-title">Frequently Ask Question (FAQ)</h3>
      <div className="faq-list">
        {faqs.map(({ question, answer }, index) => (
          <Accordion
            key={`${question}-${index}`}
            question={question}
            answer={answer}
            defaultOpen={index === 0}
          />
        ))}
      </div>
    </section>
  );
};

