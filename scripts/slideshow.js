const content = [
    { body: "Stanco di rimandare viaggi perché hai problemi con il tuo animale domestico? Contattami!", thumbnail: 'media/philipp-kammerer-6Mxb_mZ_Q8E-unsplash.jpg' },
    { body: "Sapevi che il muso di ogni cane è unico? Non possono esistere al mondo due musi uguali, proprio come succede con le impronte digitali dell'uomo. Anche i cani hanno i propri tratti distintivi.", thumbnail: "media/marliese-streefland-2l0CWTpcChI-unsplash.jpg" },
    { body: "Il colore del tartufo potrebbe cambiare a causa di una bruciatura o per conto del cambio climatico.", thumbnail: 'media/jamie-street-UtrE5DcgEyg-unsplash.jpg' },
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
    clearCircles();
    slideshow.childNodes[1]
        .childNodes[5]
        .childNodes[3]
        .textContent = content[nextId].body
    document.getElementsByClassName('slideshow-circle')[nextId].classList.add('active');
    slideshow.setAttribute('current-slide', nextId);
    slideshow.getElementsByClassName('thumbnail')[0].setAttribute('src', content[nextId].thumbnail)
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