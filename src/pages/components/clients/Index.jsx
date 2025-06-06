import AppearByWords from '@src/components/animationComponents/appearByWords/Index';
import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import Badge from '@src/pages/components/clients/components/Badge';
import clsx from 'clsx';
import { gsap } from 'gsap';
import styles from '@src/pages/components/clients/styles/clients.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';
import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';
import { useRef } from 'react';
import { useWindowSize } from '@darkroom.engineering/hamo';

function Clients() {
  const isMobile = useIsMobile();
  const textRefs = useRef([]);
  const badgeRefs = useRef([]);
  const rootRef = useRef();
  const windowSize = useWindowSize();

  const setupScrollAnimation = () => {
    const ctx = gsap.context(() => {
      if (!isMobile) {
        const vw = (coef) => windowSize.height * (coef / 100);
        textRefs.current.forEach((textRef, index) => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: rootRef.current,
                start: index === 0 ? `top-=${vw(35)}` : `top+=${vw(35 + 5.5555556 * index)}`,
                end: index === 0 ? `bottom-=${vw(35 + 5.5555556 * index)}` : `bottom+=${vw(25)}`,
                toggleActions: 'play none reverse none',
                scrub: true,
                scroller: document?.querySelector('main'),
                invalidateOnRefresh: true,
              },
            })
            .to(textRef, {
              top: `${10 + 30 * index + 5.5555556 * index}vw`,
            });
        });
      }
    });

    return ctx;
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = setupScrollAnimation(textRefs, rootRef, windowSize, isMobile);
    return () => ctx.kill();
  }, [isMobile, windowSize.height]);

  return (
    <section ref={rootRef} className={clsx(styles.root, 'layout-grid-inner')}>
      <h1 className={clsx(styles.sectionTitle, 'h1')}>
        <AppearByWords>Work Experience</AppearByWords>
      </h1>
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2025</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[0] = el;
        }}
        className={styles.first}
      >
        <Badge name="company1" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Founder - Krix AI</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">Founded Krix AI, a cutting-edge AI company focused on training and deploying intelligent bots</div>
            <div className="p-l">for various industries. Led the development of:</div>
            <div className="p-l">- Advanced chatbot systems with natural language understanding</div>
            <div className="p-l">- Custom AI agents for customer support and automation</div>
            <div className="p-l">- Machine learning models for predictive analytics</div>
            <div className="p-l">- Scalable AI infrastructure and deployment pipelines</div>
            <div className="p-l">Built a team of AI engineers and established industry partnerships for AI solutions.</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div className={styles.firstEmpty} />
          <div
            ref={(el) => {
              textRefs.current[0] = el;
            }}
            className={styles.firstText}
          >
            <AppearTitle>
              <h6 className="h6">2025</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Founder - Krix AI</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">Founded Krix AI, a cutting-edge AI company focused on training and deploying intelligent bots</div>
              <div className="p-l">for various industries. Led the development of:</div>
              <div className="p-l">- Advanced chatbot systems with natural language understanding</div>
              <div className="p-l">- Custom AI agents for customer support and automation</div>
              <div className="p-l">- Machine learning models for predictive analytics</div>
              <div className="p-l">- Scalable AI infrastructure and deployment pipelines</div>
              <div className="p-l">Built a team of AI engineers and established industry partnerships for AI solutions.</div>
            </AppearTitle>
          </div>
        </>
      ) : null}
      {!isMobile ? <div className={styles.secondEmpty} /> : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2023</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[1] = el;
        }}
        className={styles.second}
      >
        <Badge name="company2" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Machine Learning Intern</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">Worked on cutting-edge machine learning projects at a leading AI company. Key achievements:</div>
            <div className="p-l">- Developed and optimized ML models for computer vision tasks</div>
            <div className="p-l">- Implemented natural language processing pipelines</div>
            <div className="p-l">- Contributed to research papers on deep learning techniques</div>
            <div className="p-l">- Collaborated with senior researchers on AI projects</div>
            <div className="p-l">- Gained hands-on experience with TensorFlow and PyTorch</div>
            <div className="p-l">- Published research findings in AI conferences</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div
            ref={(el) => {
              textRefs.current[1] = el;
            }}
            className={styles.secondText}
          >
            <AppearTitle>
              <h6 className="h6">2024</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Machine Learning Intern</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">Worked on cutting-edge machine learning projects at a leading AI company. Key achievements:</div>
              <div className="p-l">- Developed and optimized ML models for computer vision tasks</div>
              <div className="p-l">- Implemented natural language processing pipelines</div>
              <div className="p-l">- Contributed to research papers on deep learning techniques</div>
              <div className="p-l">- Collaborated with senior researchers on AI projects</div>
              <div className="p-l">- Gained hands-on experience with TensorFlow and PyTorch</div>
              <div className="p-l">- Published research findings in AI conferences</div>
            </AppearTitle>
          </div>
          <div className={styles.fourthEmpty} />
        </>
      ) : null}
      {isMobile ? <div className={styles.mobileEmpty} /> : null}
      {isMobile ? (
        <div className={styles.mobileCount}>
          <AppearTitle>2021</AppearTitle>
        </div>
      ) : null}
      <div
        ref={(el) => {
          badgeRefs.current[2] = el;
        }}
        className={styles.third}
      >
        <Badge name="company3" />
      </div>
      {isMobile ? <div className={styles.mobileEmptySecond} /> : null}
      {isMobile ? (
        <div className={styles.textMobile}>
          <AppearTitle>
            <h4 className={clsx('h4', 'bold')}>Blockchain Developer</h4>
          </AppearTitle>
          <AppearTitle>
            <div className="p-l">Developed blockchain solutions and smart contracts. Key projects included:</div>
            <div className="p-l">- Building decentralized applications (DApps)</div>
            <div className="p-l">- Implementing smart contract security measures</div>
            <div className="p-l">- Creating blockchain-based data management systems</div>
            <div className="p-l">- Working with Ethereum and other blockchain platforms</div>
            <div className="p-l">- Developing tokenomics models and economic systems</div>
            <div className="p-l">- Contributing to open-source blockchain projects</div>
          </AppearTitle>
        </div>
      ) : null}
      {!isMobile ? (
        <>
          <div className={styles.fifthEmpty} />
          <div
            ref={(el) => {
              textRefs.current[2] = el;
            }}
            className={styles.thirdText}
          >
            <AppearTitle>
              <h6 className="h6">2024</h6>
            </AppearTitle>
            <AppearTitle>
              <h4 className={clsx('h4', 'bold', styles.title)}>Blockchain Developer</h4>
            </AppearTitle>
            <AppearTitle>
              <div className="p-l">Specialized in blockchain development and smart contract engineering. Key achievements:</div>
              <div className="p-l">- Developed decentralized applications (DApps) on Ethereum and other blockchain platforms</div>
              <div className="p-l">- Implemented secure smart contracts using Solidity and Vyper</div>
              <div className="p-l">- Created blockchain-based data management systems for enterprise clients</div>
              <div className="p-l">- Optimized gas usage and transaction efficiency in smart contracts</div>
              <div className="p-l">- Contributed to open-source blockchain projects and community development</div>
              <div className="p-l">- Implemented tokenomics models and economic systems for blockchain applications</div>
            </AppearTitle>
          </div>
        </>
      ) : null}
    </section>
  );
}

export default Clients;
