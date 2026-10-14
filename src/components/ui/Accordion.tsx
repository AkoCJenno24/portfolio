import React, { useState } from 'react';

interface AccordionProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
  name?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  question,
  answer,
  defaultOpen = false,
  name = 'portfolio-faq',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <details
      className="faq"
      name={name}
      open={isOpen}
      onToggle={(e) => {
        setIsOpen((e.currentTarget as HTMLDetailsElement).open);
      }}
    >
      <summary>
        <span>{question}</span>
        <span className="chevron" aria-hidden="true" />
      </summary>
      <p>{answer}</p>
    </details>
  );
};

