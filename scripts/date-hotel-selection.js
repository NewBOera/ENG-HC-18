const dates = document.getElementById("dates");
const dateForm = document.getElementById("daterange2");

document.addEventListener("DOMContentLoaded", function () {
   flatpickr("#daterange", {
      mode: "range",
      dateFormat: "Y-m-d",
      minDate: "today",
      onChange: function (selectedDates, dateStr, instance) {
         if (selectedDates.length === 2) {
            const startDate = selectedDates[0];
            const endDate = selectedDates[1];
            dates.innerHTML = `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
            dateForm.value = `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
         }
      },
   });

   flatpickr("#daterange2", {
      mode: "range",
      dateFormat: "Y-m-d",
      minDate: "today",
      onChange: function (selectedDates, dateStr, instance) {
         if (selectedDates.length === 2) {
            const startDate = selectedDates[0];
            const endDate = selectedDates[1];
            dates.innerHTML = `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
            dateForm.value = `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
         }
      },
   });
});
