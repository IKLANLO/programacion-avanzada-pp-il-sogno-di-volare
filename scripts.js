const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];

class Gallery {
  constructor(civilImages, militaryImages) {
    this.civilImages = civilImages
    this.militaryImages = militaryImages
  }
    
  getRandomCivil = () => {
    let randomImage = Math.floor(Math.random() * this.civilImages.length)
    return this.civilImages[randomImage]
  }
    
  getRandomMilitary = () => {
    let randomImage = Math.floor(Math.random() * this.militaryImages.length)
    return this.militaryImages[randomImage]
  }
    
  getAll = () => {
    return this.civilImages.concat(this.militaryImages)
  }
}

class Painter {
  constructor() {
    this.createGallery()
  }

  createGallery = () => {
    this.gallery = `<section></section>`
    let appendSection = document.body.firstElementChild.innerHTML
    appendSection += this.gallery
    document.body.firstElementChild.innerHTML = appendSection
  }

  createImageTag = (imageUrl) => {
    return `<picture>
            <img src="${imageUrl}" />
            </picture>`
  }

  paintSingleImage = (imageUrl) => {
    document.body.firstElementChild.lastElementChild.innerHTML = ''
    const imageTag = this.createImageTag(imageUrl)
    let sectionElement = document.body.firstElementChild.lastElementChild
    sectionElement.innerHTML += imageTag
  }

  paintMultipleImages(arrayOfImages) {
    document.body.firstElementChild.lastElementChild.innerHTML = ''
    arrayOfImages.forEach((image) => {
      const imageTag = this.createImageTag(image)
      let sectionElement = document.body.firstElementChild.lastElementChild
      sectionElement.innerHTML += imageTag
    })
  }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();