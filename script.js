const listItems = document.querySelector('ul');

listItems.addEventListener('click', e => {
  if (e.target.tagName === 'H4' ||
      e.target.tagName === 'SPAN' ||
      e.target.tagName === 'IMG') {
        const targetParent = e.target.closest('li');
        targetParent.classList.toggle('active');
  }
});
