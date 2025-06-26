document.querySelectorAll('[data-faq-question]').forEach(question => {
  question.addEventListener('click', () => {
    const currentItem = question.closest('[data-faq-item]');
    document.querySelectorAll('[data-faq-item]').forEach(item => {
      if (item !== currentItem) {
        item.classList.remove('active');
      }
    });
    currentItem.classList.toggle('active');
  });
});
