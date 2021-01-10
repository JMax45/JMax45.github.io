const content = [
    { body: "Stanco di rimandare viaggi perché hai problemi con il tuo animale domestico? Contattami!" },
    { body: "Sapevi che il muso di ogni cane è unico? Non possono esistere al mondo due musi uguali, proprio come succede con le impronte digitali dell'uomo. Anche i cani hanno i propri tratti distintivi." },
    { body: "Il colore del tartufo potrebbe cambiare a causa di una bruciatura o per conto del cambio climatico." },
    { body: "I baffi dei cani, per quanto molto più corti dei corrispettivi felini, hanno la particolare funzione di percepire il benché minimo spostamento d'aria e avvisare previamente su forma, dimensione e distanza da un eventuale pericolo. Sono utilissimi specialmente di notte, quando la visione è molto ridotta." }
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