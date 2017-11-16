// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element
const showImages = (type, json) => {
    const getIm = document.querySelector(type);
    fetch(json)
        .then((response) => {
        return response.json();
        })
        .then((json) => {
        json.forEach((image) => {
            const li = document.createElement('li');
            const figure = document.createElement('figure');
            const a = document.createElement('a');
            const img = document.createElement('img');
            const figcaption = document.createElement('figcaption');
            const h3 = document.createElement('h3');

            const title = document.createTextNode(image.mediaTitle);

            li.appendChild(figure);
            figure.appendChild(a);
            figure.appendChild(figcaption);
            a.appendChild(img);
            figcaption.appendChild(h3);
            h3.appendChild(title);

            a.setAttribute('href', 'img/original/'+image.mediaUrl);
            img.setAttribute('src', 'img/thumbs/'+image.mediaThumb);

            getIm.appendChild(li);
        })
        })
}
showImages('ul', 'images.json');