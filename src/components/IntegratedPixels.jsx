import React, { useEffect, useRef } from 'react';

const IntegratedPixels = ({ scrollProgress }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: 0, y: 0 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        
        // Initial "puff" vid musen
        this.speedX = (Math.random() - 0.5) * 1;
        this.speedY = (Math.random() - 0.5) * 1;
        this.life = 1;
        
        // SPRIDNING: Varje partikel får ett eget unikt mål nära sidobaren
        // Detta gör att de inte hamnar på exakt samma punkt
        this.offsetX = (Math.random() - 0.5) * 60; // Spridning i sidled
        this.offsetY = (Math.random() - 0.5) * 120; // Spridning i höjdled
        
        // VÅGRÖRELSE: Individuell sving för att skapa en "svärm-effekt"
        this.angle = Math.random() * Math.PI * 2;
        this.spin = Math.random() * 0.15 - 0.075;

       
        this.behavior = Math.random() > 0.8 ? 'attracted' : 'rebel';
        
        // Decay: attracted lever längre för att hinna färdas över skärmen
        this.decay = this.behavior === 'attracted' ? 0.004 : 0.015;
      }

      update(targetY) {
        if (this.behavior === 'attracted') {
          // Målpunkten med partikelns personliga offset
          const targetX = 100 + this.offsetX; 
          const finalTargetY = targetY + this.offsetY;
          
          const dx = targetX - this.x;
          const dy = finalTargetY - this.y;
          
          // Smidig rörelse mot sidobaren
          this.x += dx * 0.005; 
          this.y += dy * 0.005; 
          
          // LÄGG TILL SINUS-VÅG: Skapar den organiska svärm-känslan
          this.angle += this.spin;
          this.y += Math.sin(this.angle) * 1.5; 
          this.x += Math.cos(this.angle) * 0.5;

          // Krymp partikeln långsamt när den närmar sig
          this.size *= 0.992;
        } else {
          // Rebellerna flyter fritt och skakar lite
          this.x += this.speedX + (Math.random() - 0.5) * 0.5;
          this.y += this.speedY + (Math.random() - 0.5) * 0.5;
        }

        // Minska livslängden
        this.life -= this.decay;
      }

      draw(context) {
        if (this.life <= 0) return;
        
        // Din primärfärg: #db976d
        context.fillStyle = '#db976d';
        context.globalAlpha = this.life;
        
        // Rita pixeln (en liten fyrkant)
        context.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      // Skapa 1 partikel per musrörelse
      for (let i = 0; i < 1; i++) {
        particles.push(new Particle(mouse.x, mouse.y));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Beräkna var sidobarens aktiva punkt är just nu
      const barTop = window.innerHeight * 0.15;
      const barHeight = window.innerHeight * 0.7;
      const targetY = barTop + (scrollProgress / 100) * barHeight;

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(targetY);
        // Skicka med ctx så partikeln kan rita på canvasen
        particles[i].draw(ctx); 
        
        // Ta bort döda partiklar för prestanda
        if (particles[i].life <= 0 || particles[i].size < 0.1) {
          particles.splice(i, 1);
          i--;
        }
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resize);
    
    resize();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
    };
  }, [scrollProgress]);

  return <canvas ref={canvasRef} className="pointer-canvas" />;
};

export default IntegratedPixels;