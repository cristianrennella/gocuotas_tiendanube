(() => {
  //Force script only on Argentina
  if(LS.country != "AR"){
    return false
  }
  
    if (window.location.pathname.includes('/productos/') && window.location.pathname != 'productos') {
        var installmentsTitle_1 = document.querySelector('#installment_gocuotas_ .box-title');

        if (installmentsTitle_1) {
          installmentsTitle_1.textContent = 'Tarjeta de DÉBITO en CUOTAS y SIN interés';
        }

        var installmentsSubtitle_1 = document.querySelector('#installment_gocuotas_ .subtitle');

        if (installmentsSubtitle_1) {
          installmentsSubtitle_1.textContent = 'Pagá 4, 5 y hasta 6 cuotas SIN interés con DÉBITO';
        }


        var installmentsTitle_2 = document.querySelector('#installment_gocuotas_ > div > h6');

        if (installmentsTitle_2) {
          installmentsTitle_2.textContent = 'Tarjeta de DÉBITO en CUOTAS y SIN interés';
        }

        var installmentsSubtitle_2 = document.querySelector('#installment_gocuotas_ > div > div > h4');

        if (installmentsSubtitle_2) {
          installmentsSubtitle_2.textContent = 'Pagá en 4, 5 y hasta 6 cuotas SIN interés con DÉBITO';
        }


        var installmentsTitle_3 = document.querySelector('#installment_gocuotas_ > div > h4');

        if (installmentsTitle_3) {
          installmentsTitle_3.textContent = 'Tarjeta de DÉBITO en CUOTAS y SIN interés';
        }

        var installmentsTitle_4 = document.querySelectorAll('#installment_gocuotas_>h6.mb-3');

        if(installmentsTitle_4.length > 0){
          installmentsTitle_4[0].textContent = "Tarjeta de DÉBITO en CUOTAS y SIN interés"
          installmentsTitle_4[1].textContent = "Pagá en 4, 5 y hasta 6 cuotas SIN interés con DÉBITO"
        }
    }
})();