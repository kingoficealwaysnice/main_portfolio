/* eslint-disable no-return-assign */
/* eslint-disable no-nested-ternary */
import AppearByWords from '@src/components/animationComponents/appearByWords/Index';
import ButtonLink from '@src/components/animationComponents/buttonLink/Index';
import Image from 'next/image';
import clsx from 'clsx';
import { gsap } from 'gsap';
import projects from '@src/constants/projects';
import styles from '@src/pages/components/projects/styles/projects.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';
import { useEffect, useState, useRef } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useStore } from '@src/store';
import { useWindowSize } from '@darkroom.engineering/hamo';
import { useInView } from 'react-intersection-observer';
import { useAppContext } from '@/components/dom/context/AppContext';
import { useScrollDirection } from '@/components/dom/hooks/useScrollDirection';
import { useTheme } from '@/components/dom/hooks/useTheme';

const Projects = () => {
  const { isMobile } = useAppContext();
  const { scrollDirection } = useScrollDirection();
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [currentProject, setCurrentProject] = useState(null);
  const [newProjects, setNewProjects] = useState([]);
  const [isLoading] = useStore(useShallow((state) => [state.isLoading]));
  const windowSize = useWindowSize();
  const rootRef = useRef();
  const projectRefs = useRef([]);

  useEffect(() => {
    setNewProjects(projects);
  }, [projects]);

  const setupProjectAnimations = () => {
    const ctx = gsap.context(() => {
      if (!isLoading) {
        projectRefs.current.forEach((projectRef, index) => {
          gsap.set(projectRef, { yPercent: 0 });
          gsap
            .timeline({
              scrollTrigger: {
                id: `projectRef-${index}`,
                trigger: rootRef.current,
                start: `top+=${windowSize.height * 0.5 * index}`,
                end: () => `+=${windowSize.height * 0.5 * (projectRefs.current.length - 1)}`,
                scrub: true,
                scroller: document?.querySelector('main'),
                invalidateOnRefresh: true,
                markers: false
              },
            })
            .to(projectRef, {
              yPercent: 100,
              duration: 1,
              ease: 'power2.inOut'
            });
        });
      }
    });

    return ctx;
  };

  useEffect(() => {
    const ctx = setupProjectAnimations();
    return () => ctx.kill();
  }, [isLoading, windowSize.height]);

  return (
    <>
      <section className={clsx(styles.titleContainer, 'layout-grid-inner')}>
        <h1 className={clsx(styles.title, 'h1')}>
          <AppearByWords>Selected Projects</AppearByWords>
        </h1>
      </section>
      <section ref={rootRef} className={clsx(styles.root, 'layout-block-inner')}>
        <div className={styles.innerContainer}>
          {newProjects.map((project, index) => (
            <Link key={project.id} href={project.link} className={clsx(styles.card)} data-project-id={project.id}>
              <div ref={(el) => (projectRefs.current[index] = el)} className={styles.projectsWrap}>
                <div className={clsx(styles.container, 'layout-grid-inner')}>
                  <div className={styles.projectsDetails}>
                    <h6 className="h6">{project.date}</h6>
                    <h3 className="h3">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className={styles.canvas}>
                <Image priority src={project.img} fill sizes="100%" alt={project.title} />
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <ButtonLink href="/projects" label="ALL PROJECTS" />
        </div>
      </section>
    </>
  );
}

export default Projects;
