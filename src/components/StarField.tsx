import { useEffect, useRef } from 'react';

const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animId: number;

    const dots: { x: number; y: number; r: number; baseOpacity: number; phase: number; speed: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initDots = () => {
      dots.length = 0;
      const count = Math.floor((canvas.width * canvas.height) / 14000);
      for (let i = 0; i < count; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.3 + 0.2,
          baseOpacity: Math.random() * 0.3 + 0.08,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.008 + 0.003,
        });
      }
    };

    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;
      dots.forEach((d) => {
        const opacity = d.baseOpacity + Math.sin(d.phase + frame * d.speed) * 0.12;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 215, 255, ${Math.max(0, opacity)})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };

    resize();
    initDots();
    animate();

    const handleResize = () => { resize(); initDots(); };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default StarField;