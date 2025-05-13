document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (event) => {
      alert(`You clicked ${link.textContent}`);
      // 페이지는 정상 이동
    });
  });
  