let container_element = document.getElementById('container');
let plus_button = document.getElementById('add-item-btn')
plus_button.dataset.toggle = 'modal'
plus_button.dataset.target = '#myModal'
plus_button.classList.add('btn')
plus_button.classList.add('btn-info')
plus_button.classList.add('btn-lg')


function closeDiv(event) {
    let new_element = document.getElementById('myModal')
    new_element.remove()

}

function boxClick(event) {
    if (event) {
        let new_element = document.createElement('div');
        new_element.style.cssText = 'width: 500px;'
        new_element.classList.add('modal')
        new_element.classList.add('fade')
        new_element.role = 'dialog'
        let inner_element = document.createElement('div')
        inner_element.classList.add('modal-content')
        inner_element.innerText = `Hello, nice to meet you`;
        inner_element.style.cssText = 'text-align: left; font-weight: bold; padding: 20px;'
        new_element.appendChild(inner_element)
        let close_button = document.createElement('input');
        close_button.type = 'button'
        close_button.value = 'Close'
        close_button.onclick = closeDiv
        close_button.classList.add('btn')
        close_button.classList.add('btn-success')
        close_button.classList.add('btn-default')
        close_button.dataset.dismiss = 'modal'
        close_button.style.cssText = 'text-align: center; width: 400px; margin-top: 20px;'
        new_element.setAttribute('id', 'myModal')
        container_element.append(new_element)
        inner_element.appendChild(close_button)
        setTimeout(function () {
            $('#myModal').modal('hide')
            new_element.remove()
        }, 5000)
    }
}

window.addEventListener('load', function () {
    const plus_element = document.getElementById('add-item-btn')
    plus_element.onclick = boxClick
})