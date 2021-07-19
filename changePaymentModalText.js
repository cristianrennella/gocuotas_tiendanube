(() => {
    if (window.location.pathname.includes('/productos/') & window.location.pathname != 'productos') {
        var installmentsTitle_1 = document.querySelector('#installment_paypal_ .box-title');

        if (installmentsTitle_1) {
          installmentsTitle_1.textContent = 'Tarjeta de DÉBITO en CUOTAS y SIN interés';
        }

        var installmentsSubtitle_1 = document.querySelector('#installment_paypal_ .subtitle');

        if (installmentsSubtitle_1) {
          installmentsSubtitle_1.textContent = 'Pagá en 3 cuotas SIN interés con tu tarjeta de DÉBITO';
        }


        var installmentsTitle_2 = document.querySelector('#installment_paypal_ > div > h6');

        if (installmentsTitle_2) {
          installmentsTitle_2.textContent = 'Tarjeta de DÉBITO en CUOTAS y SIN interés';
        }

        var installmentsSubtitle_2 = document.querySelector('#installment_paypal_ > div > div > h4');

        if (installmentsSubtitle_2) {
          installmentsSubtitle_2.textContent = 'Pagá en 3 cuotas SIN interés con tu tarjeta de DÉBITO';
        }


        var installmentsTitle_3 = document.querySelector('#installment_paypal_ > div > h4');

        if (installmentsTitle_3) {
          installmentsTitle_3.textContent = 'Tarjeta de DÉBITO en CUOTAS y SIN interés';
        }
    }
})();