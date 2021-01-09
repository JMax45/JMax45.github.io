const content = [
    { body: "Testo 1 | Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure magni soluta facilis quasi voluptates voluptate id tempora consectetur nisi perferendis!" },
    { body: "Testo 2 | Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure magni soluta facilis quasi voluptates voluptate id tempora consectetur nisi perferendis!" },
    { body: "Testo 3 | Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure magni soluta facilis quasi voluptates voluptate id tempora consectetur nisi perferendis!" },
    { body: "Testo 4 | Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure magni soluta facilis quasi voluptates voluptate id tempora consectetur nisi perferendis!" }
]

const slideshow = document.getElementsByClassName('interesting-facts')[0];

// Generate dots
for(let i=0; i<content.length; i++){
    const dot = document.createElement('i');
    dot.classList.add('fas', 'fa-circle', 'slideshow-circle');
    dot.setAttribute('onClick', `setSlide(${i})`);
    document.getElementsByClassName('dots')[0].append(dot);
}

function clearCircles(){
    const circles = document.getElementsByClassName('slideshow-circle');
    for(let i=0; i<circles.length; i++){
        circles[i].classList.remove('active');
    }
}

function setSlide(id){
    let nextId = id;
    switch(id){
        case -1:
            nextId = content.length-1;
            break;
        case content.length:
            nextId = 0;
            break;
        default:
            break;
    }
    console.log(id, nextId)
    clearCircles();
    slideshow.childNodes[1]
        .childNodes[5]
        .childNodes[3]
        .textContent = content[nextId].body
    document.getElementsByClassName('slideshow-circle')[nextId].classList.add('active');
    slideshow.setAttribute('current-slide', nextId);
}

function arrowSwitch(key){
    let currentSlide = slideshow.getAttribute('current-slide');
    switch(key){
        case 'next':
            currentSlide++;
            break;
        case 'back':
            currentSlide--;
            break;
        default:
            console.log('invalid key');
            break;
    }
    setSlide(currentSlide);
}

setSlide(0);