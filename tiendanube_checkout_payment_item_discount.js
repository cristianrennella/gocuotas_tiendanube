(() => {
    if (window.location.pathname.includes('/checkout/')) {
        var newDivForServiceDescription = document.createElement("div");
        newDivForServiceDescription.classList.add('payment-item-discount');
        newDivForServiceDescription.classList.add('text-small-extra');

        var newSpanForServiceDescription = document.createElement("span");
        newDivForServiceDescription.appendChild(newSpanForServiceDescription);

        var serviceDescription = document.createTextNode("En 2, 3 y hasta 4 cuotas con tu tarjeta de DÉBITO y SIN interés!");
        newSpanForServiceDescription.appendChild(serviceDescription);

        var gocuotas_radio_option = document.querySelector('#radio-option-gocuotas_redirect_payment .accordion-section-header-label');

        if (gocuotas_radio_option) {
          gocuotas_radio_option.appendChild(newDivForServiceDescription);
        }
      }
})();