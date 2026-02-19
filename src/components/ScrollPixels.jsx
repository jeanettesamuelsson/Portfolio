import React, { useEffect, useRef } from 'react';

const ScrollPixels = ({ scrollProgress }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrame;

    const resize = () => {
      canvas.width = 100;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * 100 + 50; 
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedY = Math.random() * 0.5 + 0.5;
        this.chaos = Math.random() * 20;
      }

      update(targetY) {
        // Pixlarna dras mot den aktuella skroll-positionen
        const distY = targetY - this.y;
        
        if (Math.abs(distY) < 100) {
          // Vid skroll-positionen: Pixlarna bildar en rak linje
          this.x += (50 - this.x) * 0.1;
          this.size = 4;
        } else {
          // Långt ifrån: Pixlarna flyter runt kaotiskt
          this.x += Math.sin(this.y / 10) * 0.5;
          this.size = Math.random() * 2;
        }

        this.y += this.speedY;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.fillStyle = '#db976d'; // Din primärfärg
        ctx.shadowBlur = 5;
        ctx.shadowColor = '#db976d';
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    const init = () => {
      particles = Array.from({ length: 150 }, () => new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const targetY = (scrollProgress / 100) * canvas.height;
      
      particles.forEach(p => {
        p.update(targetY);
        p.draw();
      });
      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, [scrollProgress]);

  return <canvas ref={canvasRef} className="pixel-canvas" />;
};

export default ScrollPixels;