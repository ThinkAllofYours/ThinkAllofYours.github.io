import { useEffect } from "react";
import { gsap } from "gsap";
import styles from "./styles.module.css";

const colors = [
  'var(--ifm-color-primary)',
  'var(--ifm-color-primary-dark)',
  'var(--ifm-color-primary-darker)',
  'var(--ifm-color-primary-darkest)',
  'var(--ifm-color-primary-light)',
  'var(--ifm-color-primary-lighter)',
  'var(--ifm-color-primary-lightest)',
];

const DevLogo = () => {
  useEffect(() => {
    const rectangles = Array.from(document.querySelectorAll("rect"))
      .sort((a, b) => {
        const aX = parseInt(a.getAttribute("x") || "0");
        const bX = parseInt(b.getAttribute("x") || "0");
        return aX - bX;
      });
    
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1
    });

    // 초기 상태 설정 (모든 사각형을 투명하고 왼쪽에서 시작)
    gsap.set(rectangles, {
      opacity: 0,
      x: -100,
    });

    tl.to(rectangles, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: "power1.out"
    }, "-=0.5")

    // 순차적으로 나타나면서 제자리로 이동
    tl.from(rectangles, {
      opacity: 0,
      x: 100,
      duration: 0.5,
      stagger: {
        each: 0.05,
        from: "start"
      },
      ease: "power1.out"
    })
    // 회전 애니메이션
    .to(rectangles, {
      opacity: 1,
      rotation: 360,
      duration: 1,
      stagger: {
        each: 0.05,
        from: "start"
      },
      ease: "power1.inOut"
    }, "-=0.5") // 이전 애니메이션이 끝나기 0.5초 전에 시작
    // 색상 변경
    .to(rectangles, {
      fill: () => colors[Math.floor(Math.random() * colors.length)],
      duration: 0.5,
      stagger: {
        each: 0.05,
        from: "start"
      },
      ease: "none"
    }, ">");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <svg
      width="901"
      height="332"
      viewBox="0 0 901 332"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="76" height="77" fill="#D9D9D9" />
      <rect x="289" width="76" height="77" fill="#D9D9D9" />
      <rect x="376" width="76" height="77" fill="#D9D9D9" />
      <rect x="463" width="76" height="77" fill="#D9D9D9" />
      <rect x="586" width="76" height="77" fill="#D9D9D9" />
      <rect x="624" y="85" width="76" height="77" fill="#D9D9D9" />
      <rect x="662" y="170" width="76" height="77" fill="#D9D9D9" />
      <rect x="709" y="255" width="76" height="77" fill="#D9D9D9" />
      <rect x="749" y="170" width="76" height="77" fill="#D9D9D9" />
      <rect x="785" y="85" width="76" height="77" fill="#D9D9D9" />
      <rect x="825" width="76" height="77" fill="#D9D9D9" />
      <rect x="289" y="85" width="76" height="77" fill="#D9D9D9" />
      <rect x="289" y="170" width="76" height="77" fill="#D9D9D9" />
      <rect x="376" y="131" width="76" height="77" fill="#D9D9D9" />
      <rect x="463" y="131" width="76" height="77" fill="#D9D9D9" />
      <rect x="289" y="255" width="76" height="77" fill="#D9D9D9" />
      <rect x="376" y="255" width="76" height="77" fill="#D9D9D9" />
      <rect x="463" y="255" width="76" height="77" fill="#D9D9D9" />
      <rect y="85" width="76" height="77" fill="#D9D9D9" />
      <rect y="170" width="76" height="77" fill="#D9D9D9" />
      <rect x="87" width="76" height="77" fill="#D9D9D9" />
      <rect x="174" y="32" width="38" height="45" fill="#D9D9D9" />
      <rect x="174" y="255" width="38" height="45" fill="#D9D9D9" />
      <rect x="87" y="255" width="76" height="77" fill="#D9D9D9" />
      <rect x="174" y="170" width="76" height="77" fill="#D9D9D9" />
      <rect x="174" y="85" width="76" height="77" fill="#D9D9D9" />
      <rect y="255" width="76" height="77" fill="#D9D9D9" />
    </svg>
  );
};

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <DevLogo />
      </div>
    </section>
  );
}
