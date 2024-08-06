function sendSubscribeForm(idForm) {
   const susbcribeForm = document.getElementById(idForm);
   console.log(susbcribeForm);
   const isValidEmail = validateForm(susbcribeForm);
   if (!isValidEmail) return;
}
