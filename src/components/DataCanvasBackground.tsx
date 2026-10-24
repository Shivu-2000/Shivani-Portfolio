import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export const DataCanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes matching the reference big data plexus image
    // Colors from the reference image: vivid coral/red, warm amber/gold, electric cyan, and glowing white
    const particleCount = Math.min(Math.floor(width / 20), 80);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      colorDark: string;
      colorLight: string;
      lineColorDark: string;
      lineColorLight: string;
      pulse: number;
      pulseSpeed: number;
      isAccent: boolean;
    }> = [];

    const colorPalettes = [
      {
        dark: 'rgba(239, 68, 68, 0.85)',   // Vivid Coral/Red (from image)
        light: 'rgba(225, 29, 72, 0.75)',
        lineDark: 'rgba(239, 68, 68, ',
        lineLight: 'rgba(225, 29, 72, ',
      },
      {
        dark: 'rgba(245, 158, 11, 0.85)',  // Amber/Gold node (from image)
        light: 'rgba(217, 119, 6, 0.75)',
        lineDark: 'rgba(245, 158, 11, ',
        lineLight: 'rgba(217, 119, 6, ',
      },
      {
        dark: 'rgba(56, 189, 248, 0.85)',  // Electric Cyan (Azure / Fabric)
        light: 'rgba(2, 132, 199, 0.75)',
        lineDark: 'rgba(56, 189, 248, ',
        lineLight: 'rgba(2, 132, 199, ',
      },
      {
        dark: 'rgba(255, 255, 255, 0.95)', // Bright White Node Vertex
        light: 'rgba(71, 85, 105, 0.85)',
        lineDark: 'rgba(203, 213, 225, ',
        lineLight: 'rgba(100, 116, 139, ',
      },
    ];

    for (let i = 0; i < particleCount; i++) {
      const palette = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
      const isAccent = Math.random() > 0.65;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: isAccent ? Math.random() * 2.8 + 1.8 : Math.random() * 1.8 + 0.9,
        colorDark: palette.dark,
        colorLight: palette.light,
        lineColorDark: palette.lineDark,
        lineColorLight: palette.lineLight,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.025,
        isAccent,
      });
    }

    // Mouse interactive coordinates
    let mouse = { x: -1000, y: -1000, radius: 150 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particle nodes & plexus network
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse deflection
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 2.2;
          p.y -= (dy / dist) * force * 2.2;
        }

        const currentRadius = p.radius + Math.sin(p.pulse) * 0.5;

        // Render particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(currentRadius, 0.7), 0, Math.PI * 2);
        ctx.fillStyle = isDark ? p.colorDark : p.colorLight;
        ctx.fill();

        // Glowing outer halo for accent nodes (like bokeh in reference image)
        if (p.isAccent && isDark) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentRadius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = p.colorDark.replace('0.85', '0.12');
          ctx.fill();
        }

        // Connect nearby nodes to form the big data fiber plexus
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distNodes = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (distNodes < 120) {
            const alpha = (1 - distNodes / 120) * (isDark ? 0.35 : 0.2);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark
              ? `${p.lineColorDark}${alpha})`
              : `${p.lineColorLight}${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDark]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 
        Reference Image Layer:
        High-res fiber optic data plexus background image from the user's reference
      */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 ${
          isDark ? 'opacity-35 mix-blend-screen scale-105' : 'opacity-10 mix-blend-multiply scale-105'
        }`}
        style={{
          backgroundImage: `url('/data-bg.jpg')`,
          filter: isDark ? 'contrast(120%) saturate(130%)' : 'grayscale(30%)',
        }}
      />

      {/* Atmospheric gradients */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isDark
            ? 'bg-gradient-to-b from-[#060913]/90 via-[#070c18]/85 to-[#060913]/95'
            : 'bg-gradient-to-b from-slate-50/92 via-white/88 to-slate-100/94'
        }`}
      />

      {/* Interactive HTML5 Canvas Plexus */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />
    </div>
  );
};
