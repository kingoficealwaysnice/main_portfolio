import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import clsx from 'clsx';
import styles from '@src/pages/about/components/overview/styles/overview.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';

function Overview() {
  const isMobile = useIsMobile();

  return (
    <section className={clsx(styles.root, 'layout-grid-inner')}>
      <div className={styles.title}>
        {isMobile ? (
          <AppearTitle key="mobile-queto">
            <h3 className="h3">Transforming data into intelligence</h3>
            <h3 className="h3">
              through <span className="medium">cutting-edge</span>
            </h3>
            <h3 className="h3">
              machine learning and <span className="medium">AI</span>
            </h3>
            <h3 className="h3">
              solutions that <span className="medium">drive</span> innovation.
            </h3>
          </AppearTitle>
        ) : (
          <AppearTitle key="desktop-queto">
            <h3 className="h3">Transforming data into intelligence through</h3>
            <h3 className="h3">
              cutting-edge machine learning and AI solutions that
            </h3>
            <h3 className="h3">
              drive innovation.
            </h3>
          </AppearTitle>
        )}
      </div>
      <div className={clsx(styles.text, 'p-l', styles.myStory)}>
        <AppearTitle>
          <span>Some words</span>
        </AppearTitle>
      </div>
      <div className={styles.desc}>
        {!isMobile ? (
          <AppearTitle key="desktop-overview">
             <h6 className="h6">Hello! I'm Khushal Singh, a dedicated machine learning engineer based in India.</h6>
              <h6 className="h6">My journey into AI began with a fascination for how machines can learn from</h6>
              <h6 className="h6">data and make intelligent decisions. Over the years, I've specialized in</h6>
              <h6 className="h6">cutting-edge machine learning techniques and their real-world applications.</h6>
              <h6 className={clsx(styles.paddingTop, 'h6')}>I've built expertise in areas like:</h6>
              <h6 className="h6">- Natural Language Processing (NLP) for advanced text analysis</h6>
              <h6 className="h6">- Computer Vision for intelligent image processing</h6>
              <h6 className="h6">- Deep Learning for complex pattern recognition</h6>
              <h6 className="h6">- Reinforcement Learning for intelligent decision-making</h6>
              <h6 className={clsx(styles.paddingTop, 'h6')}>Beyond my professional work, I actively contribute to the AI community by:</h6>
              <h6 className="h6">- Publishing research papers on ML advancements</h6>
              <h6 className="h6">- Maintaining open-source ML libraries</h6>
              <h6 className="h6">- Mentoring aspiring ML engineers</h6>
              <h6 className="h6">- Collaborating on cutting-edge AI projects</h6>

              <h6 className={clsx(styles.paddingTop, 'h6')}>I'm passionate about pushing the boundaries of what's possible with AI and</h6>
              <h6 className="h6">machine learning. I thrive on solving complex problems and creating intelligent</h6>
              <h6 className="h6">systems that make a real impact.</h6>
              <h6 className={clsx(styles.paddingTop, 'h6')}>Khushal Singh.</h6>
          </AppearTitle>
        ) : (
           <AppearTitle key="mobile-overview">
              <h6 className="h6">Hello! I'm Khushal Singh, a dedicated machine learning engineer based in India.</h6>
              <h6 className="h6">My journey into AI began with a fascination for how machines can learn from</h6>
              <h6 className="h6">data and make intelligent decisions. Over the years, I've specialized in</h6>
              <h6 className="h6">cutting-edge machine learning techniques and their real-world applications.</h6>
              <h6 className={clsx(styles.paddingTop, 'h6')}>I've built expertise in areas like:</h6>
              <h6 className="h6">- Natural Language Processing (NLP) for advanced text analysis</h6>
              <h6 className="h6">- Computer Vision for intelligent image processing</h6>
              <h6 className="h6">- Deep Learning for complex pattern recognition</h6>
              <h6 className="h6">- Reinforcement Learning for intelligent decision-making</h6>
              <h6 className={clsx(styles.paddingTop, 'h6')}>Beyond my professional work, I actively contribute to the AI community by:</h6>
              <h6 className="h6">- Publishing research papers on ML advancements</h6>
              <h6 className="h6">- Maintaining open-source ML libraries</h6>
              <h6 className="h6">- Mentoring aspiring ML engineers</h6>
              <h6 className="h6">- Collaborating on cutting-edge AI projects</h6>
              <h6 className={clsx(styles.paddingTop, 'h6')}>I'm passionate about pushing the boundaries of what's possible with AI and</h6>
              <h6 className="h6">machine learning. I thrive on solving complex problems and creating intelligent</h6>
              <h6 className="h6">systems that make a real impact.</h6>
              <h6 className={clsx(styles.paddingTop, 'h6')}>Khushal Singh.</h6>
          </AppearTitle>
        )}
      </div>
    </section>
  );
}
export default Overview;
