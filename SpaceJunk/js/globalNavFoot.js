// making the nav slide in and out of view when pushing burger menu //
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');

	// toggle nav slide
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
	});
};
navSlide();

// toggle fixed nav when user scrolls on tablet and desktop//
window.addEventListener('scroll', function() {
	var navLinks = document.querySelector('.nav-links');
	if (window.scrollY > 80) {
		navLinks.classList.add('fixed');
	} else {
		navLinks.classList.remove('fixed');
	}
});

// fetching images at nasa gov //
const myApiCall = 'https://images-api.nasa.gov/search?q=space%20debris&center=JSC&media_type=image';
const myApiKey = '/apod?api_key=jkZ2uEfVPeXDxkhQcaTIyBwkTyTjsWZar48MDAw1';
const findMyImages = `${myApiCall}${myApiKey}`;
const myNasaContainer = document.getElementById('image-slides-wrapper');

//async function to fetch results//
async function fetchNASAimages() {
	const response = await fetch(myApiCall);
	const results = await response.json();

	//making a variables to reach it easier//
	const allLinksApi = results.collection.items;
	const myLinks = [ 5, 6, 7, 10, 11, 22];

	//for loop to fetch the href and data//
	for (let i = 0; i < myLinks.length; i++) {
		
		const imageSlideTitle = allLinksApi[myLinks[i]].data;
		for (let j = 0; j < imageSlideTitle.length; j++) {
			 

			// here I am creating DOM for sliders
			const figure = document.createElement('figure')
			figure.classList = 'image-slides'
			myNasaContainer.appendChild(figure)

			const myNasaWrapper = document.createElement('div')
			myNasaWrapper.classList = 'myNasaContainer'

			figure.appendChild(myNasaWrapper)

			const myImagesHere = allLinksApi[myLinks[i]].links[j].href;
			console.log(allLinksApi[myLinks[i]].links[j].href);

			const imgForSlides = document.createElement('img');
			imgForSlides.src = `${myImagesHere}`;
			imgForSlides.style.width = "100%"
			imgForSlides.style.height = "300px"; 
			imgForSlides.style.objectFit = "cover"

			myNasaWrapper.appendChild(imgForSlides);
			const myDescription = imageSlideTitle[j].title;
			const pForSlides = document.createElement('p');
			pForSlides.textContent = `${myDescription}`;
			figure.appendChild(pForSlides);
		}
	}

}
fetchNASAimages();


// fetching image for technology page
const nanoRacks = 'https://images-api.nasa.gov/search?media_type=image&nasa_id=iss056e025305';

const imageNanoRack = document.getElementById('nano-racks');
const descriptionNanoRack = document.getElementById('nano-racks-description');

async function getNanoRack() {
	try {
		const response = await fetch(nanoRacks);
		const results = await response.json();
		const firstRes = results.collection.items;

		for (let i = 0; i < firstRes.length; i++) {
			const fetchData = firstRes[i].data;
			const fetchImage = firstRes[i].links;

			for (let j = 0; j < fetchData.length; j++) {
				//console.log(fetchData[j].description)
				const description = fetchData[j].description;
				descriptionNanoRack.innerHTML = `${description}`;
			}

			for (let n = 0; n < fetchImage.length; n++) {
				//console.log(fetchImage[n].href)
				const imgNano = fetchImage[n].href;
				const containerImageNanoRacks = document.createElement('img');
				containerImageNanoRacks.src = `${imgNano}`;
				imageNanoRack.appendChild(containerImageNanoRacks);
			}
		}
	} catch (err) {
		console.log(err);
	}
}

getNanoRack();