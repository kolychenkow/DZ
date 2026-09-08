function getDistance(addressLat,addressLong,positionLat,positionLong) {
const rEarth = 6371;
const radAddressLat = addressLat*Math.PI/180;
const radAddressLong = addressLong*Math.PI/180;
const radPositionLat = positionLat*Math.PI/180;
const radPositionLong = positionLong*Math.PI/180;
const difLong = radPositionLong-radAddressLong;
const difLat = radPositionLat-radAddressLat;
const a = Math.sin(difLat/2)**2+Math.cos(radAddressLat)*Math.cos(radPositionLat)*Math.sin(difLong/2)**2;
const angle = 2* Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
const distance = rEarth*angle;
return distance; //километры 
}
const addressLat = 10;
const addressLong = 15;
const positionLat = 82;
const positionLong = 78;
const result = getDistance(addressLat,addressLong,positionLat,positionLong);
console.log (`${result} км`);
