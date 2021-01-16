const pictures = [
    { src: '/media/gallery1.jpg', alt: 'cani', title: 'Cani' },
    { src: '/media/gallery2.jpg', alt: 'cani', title: 'Cani' }
]

const gallery = document.getElementsByClassName('gallery')[0];

pictures.forEach(element => {
    // Create picture element
    const picture = document.createElement('div');
    picture.classList.add('picture');

    // Picture element
    const img = document.createElement('img');
    img.classList.add('modalImg');
    img.setAttribute('src', element.src);
    img.setAttribute('alt', element.alt)

    // Paragraph element
    const p = document.createElement('p');
    p.textContent = element.title;

    // Append the created elements
    picture.append(img);
    picture.append(p);
    gallery.append(picture);
});
