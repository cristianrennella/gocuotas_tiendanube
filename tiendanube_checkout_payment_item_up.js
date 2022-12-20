(() => {
    if (window.location.pathname.includes('/checkout/')) {
      var gocuotas_radio_option = document.querySelector('#radio-option-gocuotas_redirect_payment');

      if (gocuotas_radio_option) {
        if (gocuotas_radio_option.previousElementSibling) {
          gocuotas_radio_option.parentNode.insertBefore(gocuotas_radio_option, gocuotas_radio_option.previousElementSibling);
        }
      }
    }
})();