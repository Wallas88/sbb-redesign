import { useEffect, useState } from 'react';
import { IconMail } from '../icons.jsx';
import { SITE } from '../site.js';

export default function FloatingCTA() {
  const [heroButtonHidden, setHeroButtonHidden] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const heroButton = document.querySelector('.hero-actions .btn-primary');
    const navbar = document.querySelector('.navbar');
    if (!heroButton || !navbar) return;

    let observer;

    // The sticky nav visually covers the top of the viewport, so a plain
    // intersection check would report the hero button as "still visible"
    // even once it's actually hidden behind the nav bar. Reading the
    // navbar's real height and using it as the observer's top margin
    // corrects for that - and re-measuring on resize means this stays
    // accurate at any screen width instead of one hardcoded pixel value
    // that only happened to work for a couple of breakpoints.
    const buildObserver = () => {
      if (observer) observer.disconnect();
      const navHeight = navbar.getBoundingClientRect().height;
      observer = new IntersectionObserver(
        ([entry]) => setHeroButtonHidden(!entry.isIntersecting),
        { rootMargin: `-${Math.ceil(navHeight)}px 0px 0px 0px` }
      );
      observer.observe(heroButton);
    };

    buildObserver();
    window.addEventListener('resize', buildObserver);

    return () => {
      window.removeEventListener('resize', buildObserver);
      if (observer) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const contactCard = document.querySelector('.contact-card');
    const footer = document.querySelector('.footer');
    if (!contactCard || !footer) return;

    // Two independent observers: hide the floating button while the
    // contact card itself is on screen (its own button already covers
    // that job), and hide it again once the footer comes into view, so
    // it never sits stacked next to the footer's own email link. Each
    // one only cares about "is this element currently visible," so the
    // button correctly reappears if the visitor scrolls back up into
    // open space between sections - that's the right behaviour, not a
    // bug to suppress.
    const contactObserver = new IntersectionObserver(([entry]) => {
      setContactVisible(entry.isIntersecting);
    });
    const footerObserver = new IntersectionObserver(([entry]) => {
      setFooterVisible(entry.isIntersecting);
    });

    contactObserver.observe(contactCard);
    footerObserver.observe(footer);

    return () => {
      contactObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  const shouldShow = heroButtonHidden && !contactVisible && !footerVisible;

  return (
    <a
      className={`floating-cta ${shouldShow ? 'visible' : ''}`}
      href={`mailto:${SITE.email}`}
      aria-label="Email Salome Becker"
      aria-hidden={!shouldShow}
      tabIndex={shouldShow ? 0 : -1}
      title="Email Salome"
    >
      <IconMail aria-hidden="true" />
    </a>
  );
}