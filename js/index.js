// 1- Pegar os elementos
const accordionItems = document.querySelectorAll('.accordion-item-header');

// 2- Adicionar um evento de click onde o mesmo possa abrir efechar a resposta.
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