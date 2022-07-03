const search = document.getElementById('search_group')
const hide = document.querySelector('.hide')

search.addEventListener('click', () => {
  if (hide.classList.contains('off')) {
    hide.classList.remove('off')
  } else {
    hide.classList.add('off')
  }
})
