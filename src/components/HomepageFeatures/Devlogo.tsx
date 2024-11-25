import { useEffect } from "react";
import { gsap } from "gsap";

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

const PIXEL_FONT = {
    'A': [
      "01110",
      "10001",
      "10001",
      "11111",
      "10001",
      "10001",
      "10001"
    ],
    'B': [
      "11110",
      "10001",
      "10001",
      "11110",
      "10001",
      "10001",
      "11110"
    ],
    'C': [
      "01110",
      "10001",
      "10000",
      "10000",
      "10000",
      "10001",
      "01110"
    ],
    'D': [
      "11110",
      "10001",
      "10001",
      "10001",
      "10001",
      "10001",
      "11110"
    ],
    'E': [
      "11111",
      "10000",
      "10000",
      "11110",
      "10000",
      "10000",
      "11111"
    ],
    'F': [
      "11111",
      "10000",
      "10000",
      "11110",
      "10000",
      "10000",
      "10000"
    ],
    'G': [
      "01110",
      "10001",
      "10000",
      "10111",
      "10001",
      "10001",
      "01110"
    ],
    'H': [
      "10001",
      "10001",
      "10001",
      "11111",
      "10001",
      "10001",
      "10001"
    ],
    'I': [
      "01110",
      "00100",
      "00100",
      "00100",
      "00100",
      "00100",
      "01110"
    ],
    'J': [
      "00111",
      "00010",
      "00010",
      "00010",
      "10010",
      "10010",
      "01100"
    ],
    'K': [
      "10001",
      "10010",
      "10100",
      "11000",
      "10100",
      "10010",
      "10001"
    ],
    'L': [
      "10000",
      "10000",
      "10000",
      "10000",
      "10000",
      "10000",
      "11111"
    ],
    'M': [
      "10001",
      "11011",
      "10101",
      "10101",
      "10001",
      "10001",
      "10001"
    ],
    'N': [
      "10001",
      "10001",
      "11001",
      "10101",
      "10011",
      "10001",
      "10001"
    ],
    'O': [
      "01110",
      "10001",
      "10001",
      "10001",
      "10001",
      "10001",
      "01110"
    ],
    'P': [
      "11110",
      "10001",
      "10001",
      "11110",
      "10000",
      "10000",
      "10000"
    ],
    'Q': [
      "01110",
      "10001",
      "10001",
      "10001",
      "10101",
      "10010",
      "01101"
    ],
    'R': [
      "11110",
      "10001",
      "10001",
      "11110",
      "10100",
      "10010",
      "10001"
    ],
    'S': [
      "01111",
      "10000",
      "10000",
      "01110",
      "00001",
      "00001",
      "11110"
    ],
    'T': [
      "11111",
      "00100",
      "00100",
      "00100",
      "00100",
      "00100",
      "00100"
    ],
    'U': [
      "10001",
      "10001",
      "10001",
      "10001",
      "10001",
      "10001",
      "01110"
    ],
    'V': [
      "10001",
      "10001",
      "10001",
      "10001",
      "10001",
      "01010",
      "00100"
    ],
    'W': [
      "10001",
      "10001",
      "10001",
      "10101",
      "10101",
      "10101",
      "01010"
    ],
    'X': [
      "10001",
      "10001",
      "01010",
      "00100",
      "01010",
      "10001",
      "10001"
    ],
    'Y': [
      "10001",
      "10001",
      "01010",
      "00100",
      "00100",
      "00100",
      "00100"
    ],
    'Z': [
      "11111",
      "00001",
      "00010",
      "00100",
      "01000",
      "10000",
      "11111"
    ],
    ' ': [
      "00000",
      "00000",
      "00000",
      "00000",
      "00000",
      "00000",
      "00000"
    ],
};

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
      
      const tl = gsap.timeline({
        onComplete: () => {
          currentTextIndex = (currentTextIndex + 1) % TEXTS.length
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
        duration: 2,
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
        });
      })

      // 각 픽셀별 파편화 애니메이션
      .add(() => {
        charGroups.forEach(group => {
          const pixels = group.querySelectorAll('rect');
          
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