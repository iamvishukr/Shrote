import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/BlackHole.module.css';

const BlackholeAnimation = () => {
  const canvasRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationFrameId;

    const stars = [];
    const maxorbit = 255;
    const centerx = canvas.width / 2;
    const centery = canvas.height / 2;

    class Star {
      constructor() {
        const rands = [Math.random() * (maxorbit / 2) + 1, Math.random() * (maxorbit / 2) + maxorbit];
        this.orbital = rands.reduce((p, c) => p + c, 0) / rands.length;
        this.x = centerx;
        this.y = centery + this.orbital;
        this.yOrigin = centery + this.orbital;
        this.speed = ((Math.floor(Math.random() * 2.5) + 1.5) * Math.PI) / 180;
        this.rotation = 0;
        this.startRotation = ((Math.floor(Math.random() * 360) + 1) * Math.PI) / 180;
        this.id = stars.length;
        this.collapseBonus = Math.max(0, this.orbital - maxorbit * 0.7);
        this.color = `rgba(255,255,255,${1 - this.orbital / 255})`;
        this.hoverPos = centery + maxorbit / 2 + this.collapseBonus;
        this.expansePos = centery + (this.id % 100) * -10 + (Math.floor(Math.random() * 20) + 1);
        this.prevR = this.startRotation;
        this.prevX = this.x;
        this.prevY = this.y;
      }

      draw(context, currentTime, isHovered, isOpen) {
        if (!isOpen) {
          this.rotation = this.startRotation + currentTime * this.speed;
          if (!isHovered) {
            if (this.y > this.yOrigin) {
              this.y -= 2.5;
            }
            if (this.y < this.yOrigin - 4) {
              this.y += (this.yOrigin - this.y) / 10;
            }
          } else {
            if (this.y > this.hoverPos) {
              this.y -= (this.hoverPos - this.y) / -5;
            }
            if (this.y < this.hoverPos - 4) {
              this.y += 2.5;
            }
          }
        } else {
          this.rotation = this.startRotation + currentTime * (this.speed / 2);
          if (this.y > this.expansePos) {
            this.y -= Math.floor(this.expansePos - this.y) / -140;
          }
        }

        context.save();
        context.fillStyle = this.color;
        context.strokeStyle = this.color;
        context.beginPath();
        const oldPos = rotate(centerx, centery, this.prevX, this.prevY, -this.prevR);
        context.moveTo(oldPos[0], oldPos[1]);
        context.translate(centerx, centery);
        context.rotate(this.rotation);
        context.translate(-centerx, -centery);
        context.lineTo(this.x, this.y);
        context.stroke();
        context.restore();

        this.prevR = this.rotation;
        this.prevX = this.x;
        this.prevY = this.y;
      }
    }

    function rotate(cx, cy, x, y, angle) {
      const radians = angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = cos * (x - cx) + sin * (y - cy) + cx,
        ny = cos * (y - cy) - sin * (x - cx) + cy;
      return [nx, ny];
    }

    function init() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      for (let i = 0; i < 2500; i++) {
        stars.push(new Star());
      }
    }

    function animate() {
      const now = new Date().getTime();
      const currentTime = (now - startTime) / 50;

      context.fillStyle = 'rgba(25,25,25,0.2)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i++) {
        stars[i].draw(context, currentTime, isHovered, isOpen);
      }

      animationFrameId = window.requestAnimationFrame(animate);
    }

    const startTime = new Date().getTime();
    init();
    animate();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered, isOpen]);

  return (
    <div className={styles.blackhole}>
      <canvas ref={canvasRef} />
      
    </div>
  );
};

export default BlackholeAnimation;

