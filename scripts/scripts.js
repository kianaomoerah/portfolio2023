const mobileNavButton = document.querySelector('.mobileMenuButton');

const mobileNav = document.querySelector('.mobileMenu');

const menuIcon = document.querySelector('.fa-bars')

mobileNavButton.addEventListener('click', function(){

    mobileNav.classList.toggle('revealMenu')
    menuIcon.classList.toggle("fa-xmark")

});

const projectsList = document.querySelectorAll('.overlay');

for (let i = 0; i < projectsList.length; i++) {

    projectsList[i].addEventListener("click", function(e){

        const project = projectsList[i];

        if(e.target.classList.contains("overlayClose")){
            return
        }

        project.classList.add('reveal')
    })
}

const overlayCloseButtons = document.querySelectorAll('.overlayClose');

for (let i = 0; i < overlayCloseButtons.length; i++) {

    overlayCloseButtons[i].addEventListener("click", function(e){

        this.parentElement.classList.remove("reveal")

    })
};



