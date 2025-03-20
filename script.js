
const form = document.querySelector("form")


form.onsubmit = (event) => {
  event.preventDefault()

  const itemText = document.getElementById('itemInput').value

  const list = document.getElementById('list')
  const newItem = document.createElement('li')
  const pText = document.createElement('p')
  const inputCheckbox = document.createElement('input')
  const imgDelete = document.createElement('img')
  const spanCheckbox = document.createElement('span')

  newItem.className = 'checkbox'

  pText.textContent = itemText
  inputCheckbox.type = 'checkbox'  
  imgDelete.src = 'assets/icons/trash.svg'

  newItem.appendChild(inputCheckbox)
  newItem.appendChild(spanCheckbox)
  newItem.appendChild(pText)
  newItem.appendChild(imgDelete)

  list.appendChild(newItem)

  const deleteItem = document.querySelectorAll('.checkbox img')
  const alertBox = document.querySelector('.alert')

  deleteItem.forEach(imgDelete => {
  imgDelete.addEventListener('click', () => {
    newItem.remove()
    alertFadeInOut(alertBox)
  })
})
}

function alertFadeInOut(element) {
  element.style.opacity = '1'
  setTimeout( () =>{
    element.style.opacity = '0'
  }, 2000)
}


