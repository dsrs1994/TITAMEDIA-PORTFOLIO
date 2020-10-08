const cambiarActive = () => {
    let buttonBan = document.querySelector('.buttonBanner');
    let subMenu = document.querySelector('.submenu');
    let menuOpen = false;
    buttonBan.addEventListener('click', () => {
        console.log('escuchaaaaaa')
        if (!menuOpen) {

            subMenu.classList.add('active');
            menuOpen = true;
        } else {
            subMenu.classList.remove('active');
            menuOpen = false;
        }
    })

}
cambiarActive()

const cambiarlinea1 = () => {
    let menuHa = document.querySelector('.menuHamb');
    let changeL = document.querySelector('.change1');
    let menuOpen = false;
    menuHa.addEventListener('click', () => {
        console.log('escuchaaaaaa')
        if (!menuOpen) {

            changeL.classList.add('active');
            menuOpen = true;
        } else {
            changeL.classList.remove('active');
            menuOpen = false;
        }
    })

}
cambiarlinea1()

const cambiarlinea2 = () => {
    let menuHa = document.querySelector('.menuHamb');
    let changeL = document.querySelector('.change2');
    let menuOpen = false;
    menuHa.addEventListener('click', () => {
        console.log('escuchaaaaaa')
        if (!menuOpen) {

            changeL.classList.add('active');
            menuOpen = true;
        } else {
            changeL.classList.remove('active');
            menuOpen = false;
        }
    })

}
cambiarlinea2()

const cambiarlinea3 = () => {
    let menuHa = document.querySelector('.menuHamb');
    let changeL = document.querySelector('.change3');
    let menuOpen = false;
    menuHa.addEventListener('click', () => {
        console.log('escuchaaaaaa')
        if (!menuOpen) {

            changeL.classList.add('active');
            menuOpen = true;
        } else {
            changeL.classList.remove('active');
            menuOpen = false;
        }
    })

}
cambiarlinea3()

const showtabs = () => {
    let menuHa = document.querySelector('.menuHamb');
    let changeL = document.querySelector('.show');
    let menuOpen = false;
    menuHa.addEventListener('click', () => {
        console.log('escuchaaaaaa')
        if (!menuOpen) {

            changeL.classList.add('active');
            menuOpen = true;
        } else {
            changeL.classList.remove('active');
            menuOpen = false;
        }
    })

}
showtabs()

const masonryLayout = (containerElement, itemsElemens, columns) => {
    containerElement.classList.add('masonry-layout', `columns-${columns}`)
    let columnsElements = []
    for (let i = 1; i <= columns; i++) {
        let column = document.createElement('div')
        column.classList.add('masonry-column', `column-${i}`)
        containerElement.appendChild(column)
        columnsElements.push(column)
    }
    for (let m = 0; m < Math.ceil(itemsElemens.length / columns); m++) {
        for (let n = 0; n < columns; n++) {
            let item = itemsElemens[m * columns + n]
            columnsElements[n].appendChild(item)
            item.classList.add('masonry_item')
        }
    }
}
let anchoPantalla = window.screen.width;
if (anchoPantalla > 601) {
    masonryLayout(document.getElementById('containerGrid'), document.querySelectorAll('.containerGrid__item'), 3)
}


if (anchoPantalla < 600) {
    masonryLayout(document.getElementById('containerGrid'), document.querySelectorAll('.containerGrid__item'), 1)

}
console.log('anchoo', anchoPantalla)