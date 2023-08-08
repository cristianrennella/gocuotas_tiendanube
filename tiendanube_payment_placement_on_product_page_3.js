(() => {
  if (window.location.pathname.includes('/productos/')) {

    // Option 1 for Tiendanube Theme

    var newDivForGocuotasDescription = document.createElement("div");
    newDivForGocuotasDescription.classList.add('js-max-installments-container', 'installments', 'm-bottom-quarter');

      // SVG option 1

      var svg_format_option = document.querySelector('.m-right-quarter');

      if (svg_format_option && (LS.theme.name !== "Silent")) {
        console.log("inside svg 1")
        var newSvgForPayment = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        newSvgForPayment.classList.add('payment-credit-card', 'm-right-quarter', 'svg-primary-fill');
        newSvgForPayment.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        newSvgForPayment.setAttribute('baseProfile', 'tiny');
        newSvgForPayment.setAttribute('viewBox', '854 -476.1 2304 1792');

          var newPath = document.createElementNS('http://www.w3.org/2000/svg', "path");
          newPath.setAttribute('d', "M854 1027.9v-608h2304v608c0 44-15.7 81.7-47 113s-69 47-113 47H1014c-44 0-81.7-15.7-113-47s-47-69-47-113zm640-224v128h384v-128h-384zm-384 0v128h256v-128h-256zm1888-1152c44 0 81.7 15.7 113 47s47 69 47 113v224H854v-224c0-44 15.7-81.7 47-113s69-47 113-47h1984z");
          newSvgForPayment.appendChild(newPath);

        newDivForGocuotasDescription.appendChild(newSvgForPayment);
      }

      var newDivForSubPaymentDescription = document.createElement("div");
      newDivForSubPaymentDescription.classList.add('js-max-installments', 'installments', 'd-inline-block');

      var installmentStrongDescription = document.createElement("strong");
      var installmentDescription = document.createTextNode("4");
      installmentStrongDescription.appendChild(installmentDescription);

      var paymentDescription = document.createTextNode(" cuotas SIN interés con ");

      var methodStrongDescription = document.createElement("strong");
      var methodDescription = document.createTextNode("tarjeta de DÉBITO");
      methodStrongDescription.appendChild(methodDescription);

      newDivForSubPaymentDescription.appendChild(installmentStrongDescription);
      newDivForSubPaymentDescription.appendChild(paymentDescription);
      newDivForSubPaymentDescription.appendChild(methodStrongDescription);

    newDivForGocuotasDescription.appendChild(newDivForSubPaymentDescription);

    var payment_placement_options = document.querySelector('.js-product-payments-container .js-max-installments-container.installments.m-bottom-quarter');

    if (payment_placement_options) {
      console.log("Payment Placemente Option: 1")
      payment_placement_options.insertAdjacentElement('afterend', newDivForGocuotasDescription);
      return;
    }

    // Option 2 for Tiendanube Theme

    var newDivForGocuotasDescription = document.createElement("div");
    newDivForGocuotasDescription.classList.add('js-max-installments-container', 'row-fluid');

      var newDivForPaymentDescription = document.createElement("div");
      newDivForPaymentDescription.classList.add('installments', 'text-tertiary', 'text-left-xs');

      var newSubDivForPaymentDescription = document.createElement("div");
      newSubDivForPaymentDescription.classList.add('js-max-installments', 'label-line', 'label-featured', 'd-inline-block');

        var installmentStrongDescription = document.createElement("strong");
        var installmentDescription = document.createTextNode("4");
        installmentStrongDescription.appendChild(installmentDescription);

        var paymentDescription = document.createTextNode(" cuotas SIN interés con ");

        var methodStrongDescription = document.createElement("strong");
        var methodDescription = document.createTextNode("tarjeta de DÉBITO");
        methodStrongDescription.appendChild(methodDescription);

    newSubDivForPaymentDescription.appendChild(installmentStrongDescription);
    newSubDivForPaymentDescription.appendChild(paymentDescription);
    newSubDivForPaymentDescription.appendChild(methodStrongDescription);
    newDivForPaymentDescription.appendChild(newSubDivForPaymentDescription);
    newDivForGocuotasDescription.appendChild(newDivForPaymentDescription);

    var payment_placement_options = document.querySelector('.js-product-payments-container .m-bottom-half');

    if (payment_placement_options) {
      console.log("Payment Placemente Option: 2")
      payment_placement_options.appendChild(newDivForGocuotasDescription);
      return;
    }

    // Option 3 for Tiendanube Theme

      var newSpanForPaymentDescription = document.createElement("span");
      newSpanForPaymentDescription.classList.add('float-left','mr-2');

        // SVG option 2

        var svg_format_option = document.querySelector('.float-left .icon-lg');

        if (svg_format_option) {
          console.log("inside svg 2")
          var newSvgForPayment = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            newSvgForPayment.classList.add('icon-inline', 'svg-icon-accent', 'icon-lg');
            newSvgForPayment.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            newSvgForPayment.setAttribute('viewBox', '0 0 576 512');

              var newPath = document.createElementNS('http://www.w3.org/2000/svg', "path");
              newPath.setAttribute('d', "M498.5,470.3H77.5C34.7,470.3,0,435.6,0,392.9V119.1c0-42.7,34.7-77.5,77.5-77.5h421.1c42.7,0,77.5,34.7,77.5,77.5v273.7 C576,435.6,541.3,470.3,498.5,470.3z M77.5,70.3c-27,0-48.9,21.9-48.9,48.9v273.7c0,27,21.9,48.9,48.9,48.9h421.1 c27,0,48.9-21.9,48.9-48.9V119.1c0-27-21.9-48.9-48.9-48.9H77.5z M218.1,371.8c0-7.9-6.4-14.3-14.3-14.3H98.5 c-7.9,0-14.3,6.4-14.3,14.3s6.4,14.3,14.3,14.3h105.3C211.7,386.1,218.1,379.7,218.1,371.8z M365.5,371.8c0-7.9-6.4-14.3-14.3-14.3 H245.9c-7.9,0-14.3,6.4-14.3,14.3s6.4,14.3,14.3,14.3h105.3C359.1,386.1,365.5,379.7,365.5,371.8z M512.8,371.8 c0-7.9-6.4-14.3-14.3-14.3H393.3c-7.9,0-14.3,6.4-14.3,14.3s6.4,14.3,14.3,14.3h105.3C506.4,386.1,512.8,379.7,512.8,371.8z M512.8,140.2c0-7.9-6.4-14.3-14.3-14.3h-42.1c-7.9,0-14.3,6.4-14.3,14.3c0,7.9,6.4,14.3,14.3,14.3h42.1 C506.4,154.5,512.8,148.1,512.8,140.2z M203.8,259.8H98.5c-7.9,0-14.3-6.4-14.3-14.3V140.2c0-7.9,6.4-14.3,14.3-14.3h105.3 c7.9,0,14.3,6.4,14.3,14.3v105.3C218.1,253.4,211.7,259.8,203.8,259.8z M112.8,231.2h76.7v-76.7h-76.7V231.2z");
              newSvgForPayment.appendChild(newPath);

            newSpanForPaymentDescription.appendChild(newSvgForPayment);
        }

        // SVG option 3

        var svg_format_option = document.querySelector('.svg-inline--fa');

        if (svg_format_option) {
          console.log("inside svg 3")
          var newSvgForPayment = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          newSvgForPayment.classList.add('svg-inline--fa', 'fa-lg', 'svg-icon-accent', 'float-left','mr-2');
          newSvgForPayment.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
          newSvgForPayment.setAttribute('viewBox', '0 0 576 512');

            var newPath = document.createElementNS('http://www.w3.org/2000/svg', "path");
            newPath.setAttribute('d', "M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM48 64h480c8.8 0 16 7.2 16 16v48H32V80c0-8.8 7.2-16 16-16zm480 384H48c-8.8 0-16-7.2-16-16V224h512v208c0 8.8-7.2 16-16 16zm-336-84v8c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v8c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12zm160-166H32v-41h512v41z");
            newSvgForPayment.appendChild(newPath);

          newSpanForPaymentDescription.appendChild(newSvgForPayment);
        }

      var newSpanForSubPaymentDescription = document.createElement("div");
      newSpanForSubPaymentDescription.classList.add('js-max-installments-container','js-max-installments','product-detail-installments','d-table');

        var newSpanForInstallment = document.createElement("span");
        newSpanForInstallment.classList.add('js-max-installments');

        var installmentStrongDescription = document.createElement("span");
        installmentStrongDescription.classList.add('text-accent', 'font-weight-bold');
        var installmentDescription = document.createTextNode("4");
        installmentStrongDescription.appendChild(installmentDescription);
        newSpanForInstallment.appendChild(installmentStrongDescription);

        var paymentDescription = document.createTextNode(" cuotas SIN interés con ");
        newSpanForInstallment.appendChild(paymentDescription);

        var methodStrongDescription = document.createElement("span");
        methodStrongDescription.classList.add('text-accent', 'font-weight-bold');
        var methodDescription = document.createTextNode("tarjeta de DÉBITO");
        methodStrongDescription.appendChild(methodDescription);
        newSpanForInstallment.appendChild(methodStrongDescription);

        newSpanForSubPaymentDescription.appendChild(newSpanForInstallment);


    var payment_placement_options = document.querySelector('.js-product-payments-container');

    var col12ForGocuotasDescription = document.createElement("div");
    col12ForGocuotasDescription.classList.add('col-12','mb-2');

    col12ForGocuotasDescription.appendChild(newSpanForPaymentDescription);
    col12ForGocuotasDescription.appendChild(newSpanForSubPaymentDescription);

    if (payment_placement_options) {
      console.log("Payment Placemente Option: 3")
      payment_placement_options.insertAdjacentElement('afterbegin', col12ForGocuotasDescription);
      return;
    }
  }
})();