// ------  SEND  ---------
function sendMessage(content, path) {
  if (PARAMS.user.id !== "guest") {
    SEND_MESSAGE(content, "beatspace/" + PARAMS.user.id + "/" + path);
  }
}
function shareSlider(content) {

  // if (PARAMS.user.id !== "guest") {
  const mouseV = (mapRange(content.clientX, 0, window.innerWidtx, 0, 100)).toFixed(2);
  SEND_MESSAGE(mouseV, "beatspace/slider");
  // }
  // console.log(mouseV);
}
function sharePositionSlider(content) { SEND_MESSAGE(content, "beatspace/slider"); }
// document.addEventListener('mousemove', shareSlider);
// document.addEventListener('touchmove', shareSlider);


// ------  LISTEN  ---------
function setUser(snapshot) {
  if (PARAMS.user.id == "A") {
    PARAMS.external = snapshot.val().beatspace.B;
    //receive loc
    PARAMS.userTarget = snapshot.val().beatspace.B.loc;
  } else if (PARAMS.user.id == "B") {
    PARAMS.external = snapshot.val().beatspace.A;
    PARAMS.userTarget = snapshot.val().beatspace.A.loc;
  }
}
function setHome(snapshot) {
  var target = document.getElementsByClassName("group");
  if (snapshot.val().beatspace.A.isUsing) {
    target[0].classList.add("isUse");
  } else {
    target[0].classList.remove("isUse");
  }
  if (snapshot.val().beatspace.B.isUsing) {
    target[1].classList.add("isUse");
  } else {
    target[1].classList.remove("isUse");
  }
}
//MASTER DATA
function calibrateSlider(snapshot) {

  const sliderValue = snapshot.val().beatspace.slider;
  document.getElementById("myRange").value = sliderValue
  animation(sliderValue);
  
  if(PARAMS.user.id!="DESK"){
    // PARAMS.softFade.speed=0.01;
    // clearInterval(PARAMS.softFade.secondeCalcul);
    // PARAMS.softFade.counterLerp = 0;
    // console.log(PARAMS.softFade.render);
    // PARAMS.softFade.render=true;
    // if(PARAMS.softFade.render==false){
    //   PARAMS.softFade.secondeCalcul = setInterval(function () {
    //     if (PARAMS.softFade.counterLerp != 1) {
    //       sample.crossfade(softSound(sliderValue, PARAMS.softFade.speed),sliderValue);
    //     }
    //   }, 200);
    // }
    // PARAMS.softFade.render=true;
    if(PARAMS.softFade.render==false){
      asyncCall(sliderValue);
      // console.log(sliderValue);
    }
     }else{
      sample.crossfade(sliderValue);
      // console.log("object");
     }
 
  // }else{
  // sample.crossfade(sliderValue);
  // }




}

