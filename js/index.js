const accordionItems = document.querySelectorAll('.accordion-item-header');

accordionItems.forEach(item => {
  item.addEventListener('click', () => {
    const currentItem = item.parentNode;
    const isItemActive = currentItem.classList.contains('active');
    
    accordionItems.forEach(item => {
      item.parentNode.classList.remove('active');
      item.nextElementSibling.style.display = 'none';
    });
    
    if (!isItemActive) {
      currentItem.classList.add('active');
      currentItem.lastElementChild.style.display = 'block';
    }
  });
});