document.addEventListener('DOMContentLoaded', function(){

    let socialIcons = document.querySelectorAll('.an');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', function(){
            // alert(icon.dataset.id);
            let paths = document.querySelectorAll('.u1')
            paths[icon.dataset.id - 1].style.fill = "white";
        })
        icon.addEventListener('mouseout', function(){
            let paths = document.querySelectorAll('.u1')
            paths[icon.dataset.id - 1].style.fill = "#2C7566";
        })
    })

    let hamburgerIcon = document.querySelector('.hamburger-logo');
    hamburgerIcon.addEventListener('click', function(){
        display = document.querySelector('.bubble');
        console.log(hamburgerIcon)
        console.log(display)
        if (display.style.display ==='block'){
            display.style.display = 'none'
        } else{
            display.style.display = 'block'
        }
    })

    window.addEventListener('resize', function(){
        if (window.innerWidth < 685){
            document.querySelector('.header-image').src = "images/mobile/image-header.jpg";
            document.querySelector('#egg-img').src = "images/mobile/image-transform.jpg"
            document.querySelector('#pink-glass').src = "images/mobile/image-stand-out.jpg"

            document.querySelector('#milk-bottle').src = "images/mobile/image-gallery-milkbottles.jpg"
            document.querySelector('#orange').src = "images/mobile/image-gallery-orange.jpg"
            document.querySelector('#cone').src = "images/mobile/image-gallery-cone.jpg"
            document.querySelector('#sugarcube').src = "images/mobile/image-gallery-sugar-cubes.jpg"

        } else if (window.innerWidth >=685){
            document.querySelector('.header-image').src = "images/desktop/image-header.jpg";
            document.querySelector('#egg-img').src = "images/desktop/image-transform.jpg"
            document.querySelector('#pink-glass').src = "images/desktop/image-stand-out.jpg"

            document.querySelector('#milk-bottle').src = "images/desktop/image-gallery-milkbottles.jpg"
            document.querySelector('#orange').src = "images/desktop/image-gallery-orange.jpg"
            document.querySelector('#cone').src = "images/desktop/image-gallery-cone.jpg"
            document.querySelector('#sugarcube').src = "images/desktop/image-gallery-sugarcubes.jpg"

        }

    })

    if (window.innerWidth < 685){
        document.querySelector('.header-image').src = "images/mobile/image-header.jpg";
    }
})