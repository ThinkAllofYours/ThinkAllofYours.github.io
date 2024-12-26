import { useEffect } from "react";
import { gsap } from "gsap";
import styles from "./styles.module.css";
import SupermanLogo from "@site/static/img/supermanlogo.svg";
import { DevLogo } from "./Devlogo";
import { SupermanLogoWithAnimation } from "./SupermanLogoWithAnimation";



export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.homepageFeaturesSection}>
      <div className={styles.logoContainer}>
        <div className={styles.supermanLogo}>
          <SupermanLogoWithAnimation />
        </div>
      </div>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <DevLogo />
      </div>
      {/* 아래를 코딩 철학에 관하여 작성 */}
    </section>
  );
}
