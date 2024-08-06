async function getCountryCode() {
   try {
      const response = await fetch("https://ipapi.co/json/");

      const data = await response.json();
      const countryCode = data.country_code; // Corregido aquí
      const countryCallingCode = data.country_calling_code;
      //Placeholder (+52 Télefono)
      document.getElementById(
         "tel-place"
      ).textContent = `(${countryCallingCode}) No. de télefono`;

      const flagUrl = `https://flagcdn.com/16x12/${countryCode.toLowerCase()}.png`;
      document.getElementById("country-flag").src = flagUrl;
      document.getElementById("country-flag2").src = flagUrl;
      const telInput = document.getElementById("tel");

      telInput.value = countryCallingCode;
   } catch (error) {
      console.error("Error obteniendo la información de IP:", error);
   }
}

document.addEventListener("DOMContentLoaded", () => {
   getCountryCode();
});
