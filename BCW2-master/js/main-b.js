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
// After the loop print the HTML into <ul> element using innerHTML.
const showImages = (json, type) => {
    const getIm = document.querySelector(type);
    fetch(json)
        .then((response) => {
        return response.json();
        })
        .then((json) => {
        json.forEach((image) => {
            let HTML = `
                    <li>
                        <figure>
                            <a href="img/original/${image.mediaUrl}"><img src="img/thumbs/${image.mediaThumb}"></a>
                            <figcaption>
                                <h3>${image.mediaTitle}</h3>
                            </figcaption>
                        </figure>
                    </li>
                           `
            getIm.innerHTML += HTML;

        })
        })
}
showImages('images.json', 'ul');