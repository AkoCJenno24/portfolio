import React from 'react';
import type { ContactInfo, SocialLink } from '../../types/portfolio';
import { Icon } from '../ui/Icon';

interface ContactSectionProps {
  contact: ContactInfo;
}

const SocialLinkItem: React.FC<{ item: SocialLink }> = ({ item }) => {
  const isSafeUrl = item.url && /^(https?:|\/\/)/i.test(item.url);

  const content = (
    <>
      <Icon name={item.icon} />
      <span>{item.label}</span>
    </>
  );

  if (isSafeUrl) {
    return (
      <a
        className="contact-link"
        href={item.url!}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${item.name} (opens in a new tab)`}
      >
        {content}
      </a>
    );
  }

  return (
    <span
      className="contact-link contact-placeholder"
      aria-disabled="true"
      title={`${item.name} profile URL has not been supplied`}
    >
      {content}
    </span>
  );
};

export const ContactSection: React.FC<ContactSectionProps> = ({ contact }) => {
  return (
    <footer className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact-heading">
        <h2 id="contact-title">Contact</h2>
        <p>Feel free to reach out!</p>
      </div>

      <div className="contact-links">
        <a className="contact-link" href={`mailto:${contact.email}`}>
          <Icon name="mail" />
          <span>{contact.email}</span>
        </a>

        {contact.socialLinks.map((social) => (
          <SocialLinkItem key={social.name} item={social} />
        ))}
      </div>
    </footer>
  );
};

