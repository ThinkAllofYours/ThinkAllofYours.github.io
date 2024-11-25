import { useEffect, useState } from "react";
import { gsap } from "gsap";
import styles from "./styles.module.css";
import SupermanLogo from "@site/static/img/supermanlogo.svg";

export const SupermanLogoWithAnimation = () => {
  useEffect(() => {
    const paths = document.querySelectorAll('.superman-logo-svg path');

    
    paths.forEach(path => {
      const length = (path as SVGPathElement).getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        stroke: '#FFD700',
        // fill: 'transparent'
      });
    });

    const tl = gsap.timeline({
      repeatDelay: 1
    })

    tl.to('.superman-logo-svg path', {
      strokeDashoffset: 0,
      duration: 1,
      fill: 'transparent',
      stagger: {
        each: 0.1,
        from: "start"
      },
      ease: "power1.inOut"
    })
    
    .to('.superman-logo-svg path', {
      stroke: 'transparent',
      repeat: 1,
      duration: 0.005,
      stagger: {
        each: 0.05,
        from: "start"
      }
    })

    .to('.superman-logo-svg path', {
      stroke: '#FFD700',
      duration: 0.1,
      stagger: {
        each: 0.05,
        from: "start"
      }
    })

    const tl2 = gsap.timeline({
      repeat: -1,
      repeatDelay: 1
    });

    tl2.to('.superman-logo-svg path', {
      duration: 0.5,
      ease: "power1.inOut",
      opacity: 0.7,
    });

    return () => {
      tl.kill();
      tl2.kill();
    };
  }, []);

  return (
    <div className={styles.supermanLogo}>
      <SupermanLogo className="superman-logo-svg" />
    </div>
  );
};