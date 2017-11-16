// Create function 'showImages' which
// adds the loaded HTML content to <ul> element
const showImages = (url, location) => {
    const getIm = document.querySelector(location);
    fetch(url)
        .then((response) => {
        return response.text();
        })
        .then((text) => {
        getIm.innerHTML = text;
        })
}

showImages('images.html', 'ul');