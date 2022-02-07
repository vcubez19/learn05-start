const dog1 = {
    heading: "Bucket Boy",
    image: "images/black-dog.jpg",
    caption: "Where's the water?",
    altTag: "Black dog in bucket."
};


const dog2 = {
    heading: "Grass Man",
    image: "images/gold-dog.jpg",
    caption: "mmm grass",
    altTag: "Gold dog in the grass."
};


const dog3 = {
    heading: "Snowman vs puppy",
    image: "images/snow-dog.jpg",
    caption: "Tug of war?",
    altTag: "God playing in snow."
};


const dog4 = {
    heading: "Puppy love",
    image: "images/white-dogs.jpg",
    caption: "I love you",
    altTag: "Two white dogs."
};


function chooseDog(event, dog) {
    if (dog == 1) {
    loadMe(dog1, 1)
    } else if ( dog == 2 ) {
        loadMe(dog2, 2)
    } else if ( dog == 3 ) {
        loadMe(dog3, 3)
    } else {
        loadMe(dog4, 4)
    }
    event.target.style.display = "none";
}


function loadMe(dog, dogNum) {
    document.getElementById("heading" + dogNum).innerHTML = dog.heading;
    document.getElementById("img" + dogNum).src = dog.image;
    document.getElementById("img" + dogNum).style.display = "block";
    document.getElementById("p" + dogNum).innerHTML = dog.caption;
    document.getElementById("img" + dogNum).setAttribute('alt', dog.altTag);
}

