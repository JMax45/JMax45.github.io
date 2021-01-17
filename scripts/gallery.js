const pictures = [
    { src: '/media/pauline-loroy-U3aF7hgUSrk-unsplash.jpg', alt: 'cani', title: 'Cani' },
    { src: '/media/karsten-winegeart-5PVXkqt2s9k-unsplash.jpg', alt: 'cani', title: 'Cani' },
    { src: '/media/angel-luciano-LATYeZyw88c-unsplash.jpg', alt: 'cani', title: 'Cani' },
    { src: '/media/alvan-nee-T-0EW-SEbsE-unsplash.jpg', alt: 'cani', title: 'Cani' },
    { src: '/media/anna-dudkova-urs_y9NwFcc-unsplash.jpg', alt: 'cani', title: 'Cani' },
    { src: '/media/cristian-castillo-73pyV0JJOmE-unsplash.jpg', alt: 'cani', title: 'Cani' }
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

const picture_upload = document.createElement('div');
picture_upload.classList.add('picture');
const image = document.createElement('img');
image.classList.add('uploadImg');
image.setAttribute('src', '/media/upload-logo.svg');
picture_upload.append(image);
gallery.append(picture_upload);


var span = document.getElementsByClassName("uploadImg")[0];
var upload_modal = document.getElementsByClassName("upload-modal")[0];
span.onclick = function() {
  upload_modal.style.display = "flex";
}

var span = document.getElementsByClassName("close")[1];
span.onclick = function() {
  upload_modal.style.display = "none";
}