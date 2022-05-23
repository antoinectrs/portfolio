window.addEventListener("load", function (event) {
    // playingTrack();
    whichUser(window.location.search);
   console.log( "loading");
 
    // animation();
});
function whichUser(user) {
    if (user == "?A") {
        PARAMS.user.id = "A";
        sendMessage(true, "isUsing");
    } else if (user == "?B") {
        PARAMS.user.id = "B";
        sendMessage(true, "isUsing");
    }else if(user=="?DESK"){
        PARAMS.user.id ="DESK"
    }
}

