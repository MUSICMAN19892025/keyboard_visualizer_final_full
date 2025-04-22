import { useEffect, useRef } from 'react';

export default function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#FF5F5F', '#5FFFB4', '#5F9FFF', '#D95FFF', '#FFF15F'];

    const drawPixel = (x, y, size, color) => {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, size, size);
    };

    const handleKeyPress = () => {
      const x = Math.floor(Math.random() * canvas.width);
      const y = Math.floor(Math.random() * canvas.height);
      const size = Math.floor(Math.random() * 30) + 10;
      const color = colors[Math.floor(Math.random() * colors.length)];
      drawPixel(x, y, size, color);
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh' }} />
  );
}
