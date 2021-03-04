const listItems = document.querySelector('ul');

listItems.addEventListener('click', e => {
  if (e.target.tagName === 'H4') {
    const targetParent = e.target.parentElement;
    targetParent.classList.toggle('active');
  }
});
