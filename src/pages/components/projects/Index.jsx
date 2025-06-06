/* eslint-disable no-return-assign */
/* eslint-disable no-nested-ternary */
import AppearByWords from '@src/components/animationComponents/appearByWords/Index';
import ButtonLink from '@src/components/animationComponents/buttonLink/Index';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { gsap } from 'gsap';
import projects from '@src/constants/projects';
import styles from '@src/pages/components/projects/styles/projects.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';
import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';
import { useRef } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useStore } from '@src/store';
import { useWindowSize } from '@darkroom.engineering/hamo';

function Projects() {
  const isMobile = useIsMobile();
  const windowSize = useWindowSize();
  const [isLoading] = useStore(useShallow((state) => [state.isLoading]));

  const rootRef = useRef();
  const projectRefs = useRef([]);

  const newProjects = [projects[0], projects[1], projects[2]];

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

  useIsomorphicLayoutEffect(() => {
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
            <Link aria-label={`Go ${project.title}`} key={project.id} href={project.link} className={clsx(styles.card)} data-project-id={project.id}>
              <div className={styles.projectsWrap}>
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
