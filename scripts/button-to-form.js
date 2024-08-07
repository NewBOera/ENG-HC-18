const hotelElements = [
   "doubletree",
   "prestige",
   "zedwell",
   "stgiles",
   "broadwick",
];

const $hotels = document.getElementById("hotels");
console.log($hotels);

hotelElements.forEach((id) => {
   const element = document.getElementById(id);

   element.addEventListener("click", () => {
      $hotels.value = id;
   });
});
