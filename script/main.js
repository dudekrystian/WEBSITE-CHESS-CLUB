const buttonBurgerMenu = document.querySelector('div.button-burger-menu');
const activeElement = document.querySelectorAll('.active');
const btnOffer = [...document.getElementsByClassName('fas fa-plus')];
const tableIndywidualOffers = document.getElementById('tab1');
const tableGroupOffers = document.getElementById('tab2');


const showMenu = () => {
    for (i = 0; i < activeElement.length; i++) {
        activeElement[i].classList.toggle('show');
    }
}


buttonBurgerMenu.addEventListener('click', showMenu);

btnOffer.forEach(element => {

    element.addEventListener('click', () => {

        if (element.id === "btn1") {
            tableIndywidualOffers.classList.toggle('active');

        }

        else {
            tableGroupOffers.classList.toggle('active');
        }

    })

});












