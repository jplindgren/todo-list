function warningMaker( obstacle ){
  var count = 0;
  var zones = [];
  var locationAlert = function(_location, _number){
    locationAlert.number = function(){
      return _number;
    },
    locationAlert.location = function(){
      return _location;
    }
  } 
 
  return function ( number, location ) {
    count++;
    locationAlert(location, number);
    //locationAlert.location(location);
    
    zones.push(locationAlert);

    var list = "";
    for(var i = 0; i<zones.length; i++){        
        list = list + "\n" + zones[i].location() + " (" + zones[i].number() + ")";  
    }
    alert("Beware! There have been " +
          obstacle +
          " sightings in the Cove today!\n" +
          number +
          " " +
          obstacle +
          "(s) spotted at the " +
          location +
          "!\n" +
          "This is Alert #" +
          count +
          " today for " +
          obstacle +
          " danger.\n" +
          "Current danger zones are:" +
          list
         );
  };
}
