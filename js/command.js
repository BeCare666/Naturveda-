const logLink = document.querySelector(".form .login-form .register a");
const regLink = document.querySelector(".form .register-form .register a");
const form = document.querySelector(".form .form-box");
const logForm = document.querySelector(".form .login-form");
const regForm = document.querySelector(".form .register-form");
logLink.addEventListener("click", function(event) {
form.classList.toggle('turned')
logForm.classList.toggle('hidden');
regForm.classList.toggle('hidden');

 
  event.preventDefault();
});

regLink.addEventListener("click", function(event) {

  form.classList.toggle('turned')
  regForm.classList.toggle('hidden');
  logForm.classList.toggle('hidden');  

  
  event.preventDefault();
});

function submit() {
  // Get values from form inputs
  const Name = document.getElementById('namex').value;
  const quantity = document.getElementById('quantity').value;
  const country = document.getElementById('country').value;
  const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
  

  // Create the WhatsApp message with encoded values
  const message = `Salut Naturveda, comment allez-vous ? Je suis vraiment intéressé par cet article que j'ai vu sur votre site. 
  Voici le lien du produit : https://azizdeenx.netlify.app/product-detail.html?id=${productId}
  \n*Nom et Prénoms:* ${Name} 
  \n*Nombre de Produits:* ${quantity} 
  \n*Pays de Destination:* ${country}`;
  
  // URL encode the entire message
  const encodedMessage = encodeURIComponent(message);

  // Create the WhatsApp link
  const whatsappLink = `https://wa.me/22997329399?text=${encodedMessage}`;

  // Inject the link into the page
  document.getElementById('ToAddToCardx').innerHTML = `
     <button >  <a href="${whatsappLink}" class="p-view" style="color: black !important;">
       Confirmer 
      </a> 
      </button>
  `;
 document.getElementById('submitButton').style.display = "none"
};

