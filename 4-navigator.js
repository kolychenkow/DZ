const addressLat = 10;
const addressLong = 15;
const positionLat = 114;
const positionLong = 110;
const distance = Math.sqrt((positionLong-addressLong)**2+(positionLat-addressLat)**2);
console.log (distance);