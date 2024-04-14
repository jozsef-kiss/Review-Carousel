//Variables

let btnLeft = document.querySelector(".slide-left");
let btnRight = document.querySelector(".slide-right");
let btnRandom = document.querySelector(".random-btn");
let profile1 = document.querySelector(".profile1").classList;
let profile2 = document.querySelector(".profile2").classList;
let profile3 = document.querySelector(".profile2").classList;
let profile4 = document.querySelector(".profile4").classList;
let profile5 = document.querySelector(".profile5").classList;
let profile6 = document.querySelector(".profile6").classList;
let profile7 = document.querySelector(".profile7").classList;
let profile8 = document.querySelector(".profile8").classList;
let profile9 = document.querySelector(".profile9").classList;
let profile10 = document.querySelector(".profile10").classList;


// Profile Array

let profileArray = [profile1,profile2,profile3,profile4,profile5,profile6,profile7,profile8,profile9,profile10];


// Current profile

let activeProfileIndex = 0;

function updateActiveProfile() {
    
    profileArray.forEach(profile => {
        profile.remove('content-active');
        profile.add('content-inactive');
    });

    profileArray[activeProfileIndex].remove('content-inactive');
    profileArray[activeProfileIndex].add('content-active');
}


//Create Slide logic

function slideLeft(){
    if (activeProfileIndex === 0) {
        activeProfileIndex = profileArray.length - 1;  
    } else {
        activeProfileIndex--;  
    }
    updateActiveProfile();
}

function slideRight(){
    if (activeProfileIndex === profileArray.length - 1) {
        activeProfileIndex = 0;  
    } else {
        activeProfileIndex++;  
    }
    updateActiveProfile();
}

function slideRandom() {
    
    activeProfileIndex = Math.floor(Math.random() * profileArray.length);

    updateActiveProfile();
}


//Create slideLeft button eventlistener

btnLeft.addEventListener("click", slideLeft);


//Create slideLeft button eventlistener

btnRight.addEventListener("click", slideRight);


//Create slideLeft button eventlistener

btnRandom.addEventListener("click", slideRandom);


