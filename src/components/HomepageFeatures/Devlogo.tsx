import { useEffect } from "react";
import { gsap } from "gsap";
import { PIXEL_FONT } from "./Pixel_font";

const colors = [
  'var(--ifm-color-primary)',
  'var(--ifm-color-primary-dark)',
  'var(--ifm-color-primary-darker)',
  'var(--ifm-color-primary-darkest)',
  'var(--ifm-color-primary-light)',
  'var(--ifm-color-primary-lighter)',
  'var(--ifm-color-primary-lightest)',
];

const TEXTS = [ "Developers", "Can", "Change", "The", "World"];


export const DevLogo = () => {
  useEffect(() => {
    let currentTextIndex = 0;
    
    const createPixelText = (text: string) => {
      const container = document.querySelector('.pixel-text-container');
      if (!container) return;
      
      container.innerHTML = '';
      const pixelSize = 13;
      const gap = 2;
      const baseColor = colors[Math.floor(Math.random() * colors.length)];
      
      const charGroups: SVGGElement[] = [];
      
      text.toUpperCase().split('').forEach((char, charIndex) => {
        const charGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
        const pattern = PIXEL_FONT[char] || PIXEL_FONT[' '];
        
        pattern.forEach((row, rowIndex) => {
          row.split('').forEach((pixel, colIndex) => {
            if (pixel === '1') {
              const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
              rect.setAttribute("width", pixelSize.toString());
              rect.setAttribute("height", pixelSize.toString());
              rect.setAttribute("x", ((charIndex * 6 + colIndex) * (pixelSize + gap)).toString());
              rect.setAttribute("y", (rowIndex * (pixelSize + gap)).toString());
              rect.setAttribute("fill", baseColor);
              charGroup.appendChild(rect);
            }
          });
        });
        
        container.appendChild(charGroup);
        charGroups.push(charGroup);
      });
      
      return charGroups;
    };

    const animate = () => {
      const text = TEXTS[currentTextIndex];
      const charGroups = createPixelText(text);
      
      // charGroups가 없으면 애니메이션을 실행하지 않음
      if (!charGroups || charGroups.length === 0) {
        currentTextIndex = (currentTextIndex + 1) % TEXTS.length;
        setTimeout(animate, 500);
        return;
      }

      const tl = gsap.timeline({
        onComplete: () => {
          currentTextIndex = (currentTextIndex + 1) % TEXTS.length;
          setTimeout(animate, 500);
        }
      });

      // 초기 상태 설정
      gsap.set(charGroups, {
        opacity: 0,
        x: -100,
      });

      // 글자별 나타나는 애니메이션
      tl.to(charGroups, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: {
          each: 0.1,
          from: "start"
        },
        ease: "power2.out"
      })

      // 픽셀 단위 회전으로 수정
      .add(() => {
        charGroups.forEach(group => {
          const pixels = group.querySelectorAll('rect');
          if (pixels.length > 0) {  // pixels가 있을 때만 애니메이션 실행
            gsap.to(pixels, {
              rotation: 360,
              duration: 1,
              stagger: {
                amount: 0.2,
                from: "random"
              },
              transformOrigin: "center center",
              ease: "power2.in"
            });
          }
        });
      })

      // 각 픽셀별 파편화 애니메이션
      .add(() => {
        charGroups.forEach(group => {
          const pixels = group.querySelectorAll('rect');
          if (pixels.length > 0) {  // pixels가 있을 때만 애니메이션 실행
            gsap.to(pixels, {
              opacity: 0,
              scale: 0,
              x: () => gsap.utils.random(-200, 200),
              y: () => gsap.utils.random(-200, 200),
              rotation: () => gsap.utils.random(-360, 360),
              duration: 1,
              stagger: {
                amount: 0.3,
                from: "random"
              },
              ease: "power3.out"
            });
          }
        });
      })

      .to(charGroups, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: "power2.in"
      });

    };

    animate();

    return () => {
      gsap.killTweensOf("*");
    };
  }, []);

  return (
    <svg
      className="pixel-text-container"
      width="901"
      height="332"
      viewBox="0 0 901 332"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    />
  );
};