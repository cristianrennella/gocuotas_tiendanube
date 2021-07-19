(() => {
    if (window.location.pathname.includes('/productos/') & window.location.pathname != 'productos') {
        const installmentsParagraph = document.querySelector('#installment_gocuotas_ > div > div');
        installmentsParagraph.textContent = 'Tarjeta de débito en cuotas';
    }
})();