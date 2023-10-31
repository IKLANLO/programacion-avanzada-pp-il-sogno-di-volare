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
    
    getRandomMilitary() {
        let randomImage = Math.floor(Math.random() * this.militaryImages.length)
        return this.militaryImages[randomImage]
    }
    
    getAll() {
        return this.civilImages.concat(this.militaryImages)
    }
}

class Painter {
    constructor() {
    }

    createGallery() {
    }

    createImageTag(imageUrl) {
    }

    paintSingleImage(imageUrl) {
    }

    paintMultipleImages(arrayOfImages) {
    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();