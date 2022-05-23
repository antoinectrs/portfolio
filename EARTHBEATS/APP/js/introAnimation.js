window.addEventListener("load", function (event) {
    // playingTrack();
    // whichUser(window.location.search);
    console.log("loading");
    getElement();
    document.addEventListener('touchstart', checkLevel);
    PARAMS.intro.number1.addEventListener('touchstart', selectUser1);
    PARAMS.intro.number2.addEventListener('touchstart', selectUser1);
    //    console.log( PARAMS.intro.number);

});
function checkLevel() {
    if (PARAMS.intro.stateMachine <= 2) {
        PARAMS.intro.stateMachine++;
    }
    if (PARAMS.intro.stateMachine == 1) {
        description();
    } else if (PARAMS.intro.stateMachine == 2) {
        rules();
    }
}
function description(param) {
    PARAMS.intro.moonDescription[0]
    document.querySelector("#earthBeats h1:first-child").style.top = "0%"
    document.querySelector("#earthBeats h1:last-child").style.bottom = "2%"
    PARAMS.intro.moonDescription[0].style.opacity = "1";
    PARAMS.intro.moonDescription[1].style.opacity = "1";
    // document.querySelector(".home").style.background="rgb(54, 227, 92)";
    // document.querySelector(".home").classList.remove("blue");
    // document.querySelector(".home").classList.add("green");
}
function rules(param) {
    document.querySelector("#earthBeats h1:first-child").innerHTML = "rules"
    document.querySelector("#earthBeats h1:last-child").innerHTML = "phone"
    console.log();
    PARAMS.intro.moonDescription[0].querySelector("p").innerHTML = "éloignez vous chacun de votre coté";
    PARAMS.intro.moonDescription[1].querySelector("p").style.display = "none";
    PARAMS.intro.userChoice[0].style.display = "block";
    PARAMS.intro.userChoice[1].style.display = "block";
    PARAMS.intro.moonDescription[1].style.background = "none";
    PARAMS.intro.moonDescription[1].style.borderRadius = " 0px 0px 0px 0px";
    // PARAMS.intro.moonDescription[0].querySelector("h1").style.display="block";
    document.querySelector(".home").classList.remove("blue");
    document.querySelector(".home").classList.add("green");
    // PARAMS.intro.moonDescription[0].classList.remove("green");
    // PARAMS.intro.moonDescription[0].classList.add("blue");
    // document.querySelector(".home").classList.remove("green");
    // document.querySelector(".home").classList.add("blue");
    PARAMS.intro.moonDescription[0].classList.remove("blueFont");
    PARAMS.intro.moonDescription[0].classList.add("greenFont");

}
function getElement(param) {
    PARAMS.intro.moonDescription = document.getElementsByClassName("moonDescription");
    PARAMS.intro.userChoice = document.querySelectorAll(".moonDescription h1")
    PARAMS.intro.userChoice = document.querySelectorAll(".moonDescription h1")
    PARAMS.intro.number1 = document.getElementById("point1")
    PARAMS.intro.number2 = document.getElementById("point2")
}
function selectUser1() {

    if (this.classList.contains("moveLeft")) {
        console.log(this);
        this.classList.remove("moveLeft");
        this.classList.add("moveRight");
        this.querySelector("h1").innerHTML = "2"
        document.querySelector(".home").classList.remove("green");
        document.querySelector(".home").classList.add("blue");
        PARAMS.intro.moonDescription[0].classList.remove("greenFont");
        PARAMS.intro.moonDescription[0].classList.add("blueFont");
        //   PARAMS.intro.number1.classList.remove("moveUp");
        //   PARAMS.intro.number1.classList.add("moveDown"); 
        // PARAMS.intro.number2.classList.remove("moveDown");
        // PARAMS.intro.number2.classList.add("moveUp"); 
        PARAMS.intro.moonDescription[0].querySelector("p").innerHTML = PARAMS.intro.content[0];
    } else {
        this.classList.remove("moveRight");
        this.classList.add("moveLeft");
        document.querySelector(".home").classList.remove("blue");
        document.querySelector(".home").classList.add("green");
        PARAMS.intro.moonDescription[0].classList.remove("blueFont");
        PARAMS.intro.moonDescription[0].classList.add("greenFont");

        this.querySelector("h1").innerHTML = "1"
        // this.classList.remove("moveDown");
        // this.classList.add("moveUp");
        // PARAMS.intro.number2.classList.remove("moveUp"); 
        // PARAMS.intro.number2.classList.add("moveDown");
        PARAMS.intro.moonDescription[0].querySelector("p").innerHTML = PARAMS.intro.content[1];
    }

}
function selectUser2() {
    if (this.classList.contains("moveUp")) {
        // this.classList.remove("moveUp");
        // this.classList.add("moveDown");
        // PARAMS.intro.number1.classList.remove("moveDown");
        // PARAMS.intro.number1.classList.add("moveUp"); 
        // PARAMS.intro.moonDescription[0].querySelector("p").innerHTML=PARAMS.intro.content[1];
        console.log("object");
        // location.assign("chooseUser.html");
    } else {

        this.classList.remove("moveDown");
        this.classList.add("moveUp");
        PARAMS.intro.number1.classList.remove("moveUp");
        PARAMS.intro.number1.classList.add("moveDown");
        PARAMS.intro.moonDescription[0].querySelector("p").innerHTML = PARAMS.intro.content[0];
    }
}