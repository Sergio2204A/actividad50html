document.querySelectorAll('.image-container').forEach(container => {
    const img = container.querySelector('img');
  
    container.addEventListener('mousemove', (e) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = ((e.clientX - left) / width - 0.5) * 20;
      const y = ((e.clientY - top) / height - 0.5) * 20;
  
      img.style.transform = `rotateY(${x}deg) rotateX(${-y}deg) scale(1.07)`;
    });
  
    container.addEventListener('mouseleave', () => {
      img.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
    });
  });
  