// Call 'LoadCheckoutPaymentContext' method and pass a function as parameter
// to get access to the Checkout context and the Payment Options object.
LoadCheckoutPaymentContext(function(Checkout, PaymentOptions) {

  // Create a new instance of external Payment Option and set its properties.
  var GOcuotasOption = PaymentOptions.ExternalPayment({

    // Set the option's unique id as it is configured on the Payment Provider so Checkout can relate them.
    id: 'gocuotas_redirect_payment',

    fields: {
      billing_address: false // This parameter renders the billing information form and requires the information to the consumer
    },

    // This function handles the order submission event.
    onSubmit: function(callback) {

      // Gather the minimum required information.
      let gocuotasRelevantData = {
        // You should include all the relevant data here.
        orderId: Checkout.data.order.cart.id,
        storeId: Checkout.data.storeId,
        contactEmail: Checkout.data.order.contact.email,
        contactPhone: Checkout.data.order.contact.phone,
        callbackUrls: Checkout.data.callbackUrls,
        total: Checkout.data.order.cart.prices.total
      }

      // Use the Checkout HTTP library to post a request to our server and fetch the redirect URL.
      Checkout.http
        .post('https://gocuotas.com/tiendanube/checkout_urls', {
            data: gocuotasRelevantData
        })
        .then(function(responseBody) {
          // Once you get the redirect URL, invoke the callback by passing it as argument.
          if( responseBody.data.success ){
            callback({
              success: true,
              redirect: responseBody.data.redirect_url,
              extraAuthorize: true // Legacy paameter, but currently required with "true" value. Will be deprecrated soon.
            });
          } else {
            callback({
              success: false,
              error_code: responseBody.data.error_code
            });
          }
        })
        .catch(function(error) {
          // Handle a potential error in the HTTP request.
          callback({
            success: false,
            error_code: 'unknown_error'
          });
        });
    }

  })

  // Finally, add the Payment Option to the Checkout object so it can be
  // render according to the configuration set on the Payment Provider.
  Checkout.addPaymentOption(GOcuotasOption);
});