import { useEffect, useState } from "react";
import { gsap } from "gsap";
import styles from "./styles.module.css";
import SupermanLogo from "@site/static/img/supermanlogo.svg";

export const SupermanLogoWithAnimation = () => {
  const [isAnimation, setIsAnimation] = useState(true);

  useEffect(() => {
    const paths = document.querySelectorAll('.superman-logo-svg path');
    
    paths.forEach(path => {
      const length = (path as SVGPathElement).getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        stroke: 'var(--ifm-color-primary)',
        fill: 'transparent'
      });
    });

    gsap.set('.superman-logo-svg-fixed', {
      opacity: 0.4,
    });

    const tl = gsap.timeline();
    const tl2 = gsap.timeline();

    tl.to('.superman-logo-svg path', {
      strokeDashoffset: 0,
      duration: 2,
      stagger: {
        each: 0.2,
        from: "start"
      },
      ease: "power1.inOut"
    })
    .to('.superman-logo-svg path', {
      duration: 2,
      strokeWidth: 1,
      ease: "power1.out",
      opacity: 0.5,
      onComplete: () => {
        setIsAnimation(false);
      }
    })
    tl2.to('.superman-logo-svg-fixed', {
      opacity: 1,
      duration: 1,
      ease: "power1.in"
    });


    return () => {
      tl.kill();
    };
  }, [isAnimation]);

  return (
    <div className={styles.supermanLogo}>
      {isAnimation && <SupermanLogo className="superman-logo-svg" />}
      {!isAnimation && <SupermanLogo className="superman-logo-svg-fixed" />}
    </div>
  );
};