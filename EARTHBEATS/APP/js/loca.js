const p = document.querySelector( '#location' );

// let watchID;

const showPos = ( pos ) => {
  PARAMS.user.location.lat = pos.coords.latitude;
  PARAMS.user.location.lon = pos.coords.longitude;
  sendMessage(PARAMS.user.location,"loc");
  // point fix
  // let distance = getDistanceFromLatLonInKm(  PARAMS.user.location.lat = pos.coords.latitude, PARAMS.user.location.lon,PARAMS.userTarget.lat,PARAMS.userTarget.lon).toFixed(3);
  
  let distance = getDistanceFromLatLonInKm(  PARAMS.user.location.lat = pos.coords.latitude, PARAMS.user.location.lon,PARAMS.userTarget.lat,PARAMS.userTarget.lon).toFixed(3);
  PARAMS.actualDistance =distance*1000;
  if(PARAMS.actualDistance<PARAMS.maxDistance){
    // p.innerText = `${PARAMS.actualDistance} m`;
  }else{
    
    p.innerText = `to far!`;
  }
    let tempoMap = soundByMap(PARAMS.actualDistance);
    // console.log(PARAMS.actualDistance);
}

const showErrors = ( error ) => {
  p.innerText = error.code == 1
                ? `Error`
                : `search`;
}

const getUpdatedPos = ( ) => {
  if ( navigator.geolocation ) {
    const OPTIONS = { timeout : 1000};
    PARAMS.watchID = navigator.geolocation.watchPosition(
      showPos,
      showErrors,
      OPTIONS
    );
  } else {
    this.p.innerText = `
      geolocation dead
    `;
  }
}
const checkDistance = (pos) => {
    //console.log(pos.coords.latitude);
 //let distance = //getDistanceFromLatLonInKm(pos.coords.latitude,pos.coords.longitude,46.5371124,6.5881351).toFixed(1);
  // console.log("distance "+ distance);
}
document.addEventListener( 'load', getUpdatedPos( ) );

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}
