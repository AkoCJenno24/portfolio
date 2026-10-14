import React from 'react';
import type { Profile } from '../../types/portfolio';
import { Button } from '../ui/Button';

interface HeroSectionProps {
  profile: Profile;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile }) => {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          Hi,{' '}
          <span className="wave" role="img" aria-label="waving hand" title="Wave!">
            👋
          </span>{' '}
          I’m {profile.name}
        </h1>
        <p>{profile.introduction}</p>
        <Button href="#contact" variant="primary">
          Contact Me
        </Button>
      </div>

      <img
        className="avatar"
        src={profile.avatar}
        alt={`A friendly illustrated avatar of ${profile.name}`}
        width="270"
        height="255"
        fetchPriority="high"
      />
    </section>
  );
};

