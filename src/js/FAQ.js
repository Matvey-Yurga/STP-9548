document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const currentItem = q.parentElement;
    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== currentItem) {
        item.classList.remove('active');
      }
    });
    currentItem.classList.toggle('active');
  });
});
