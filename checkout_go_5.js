LoadCheckoutPaymentContext(function (Checkout, PaymentMethods) {

  var ExternalPaymentOption = PaymentMethods.ExternalPayment({
    id: "gocuotas_redirect_payment", 
    version: "v2", 

    fields: {
      billing_address: false, 
    },

    onSubmit: function (callback) {
      let extra = {
        orderId: Checkout.getData("order.cart.id"), 
        storeId: Checkout.getData("storeId"), 
        contactEmail: Checkout.getData("order.contact.email"), 
        contactPhone: Checkout.getData("order.contact.phone"), 
        shippingAddress: Checkout.getData("order.shippingAddress"), 
        callbackUrls: Checkout.getData("callbackUrls"), 
        total: Checkout.getData("totalPrice"), 
      };

      Checkout.processPayment(extra)
        .then(function (payment) {
          window.parent.location.href = payment.redirect_url;
        })
        .catch(function (error) {
          Checkout.showErrorCode(error.response.data.message);
        });
    },
  });

  Checkout.addPaymentOption(ExternalPaymentOption);
});
