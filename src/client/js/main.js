// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});

// ** Begin Stripe API ** //
Stripe.setPublishableKey('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

$(function($) {
  $('#payment-form').submit(function(event) {
    var $form = $(this);

    // Disable the submit button to prevent repeated clicks
    $form.find('button').prop('disabled', true);

    Stripe.card.createToken($form, stripeResponseHandler);

    // Prevent the form from submitting with the default action
    return false;
  });
});

function stripeResponseHandler(status, response) {
  var $form = $('#payment-form');

  if (response.error) {
    // Show the errors on the form
    $form.find('.payment-errors').text(response.error.message);
    $form.find('button').prop('disabled', false);
  } else {
    // response contains id and card, which contains additional card details
    var token = response.id;
    Stripe.card.validateCardNumber(token.number);
    Stripe.card.validateExpiry(token.exp_month, token.exp_year);
    Stripe.card.validateCVC(token.cvc);
  }
}
// ** End Stripe API ** //

// ** Begin copying info from shipping to billing ** //
$(document).on('ready', function() {
  console.log('sanity check!');
  $('#copyInfo').on('click', function() {
    var firstNameShip = $('#first-name-ship').val();
    var lastNameShip = $('#last-name-ship').val();
    var companyShip = $('#company-ship').val();
    var adOneShip = $('#address-line1-ship').val();
    var adTwoShip = $('#address-line2-ship').val();
    var cityShip = $('#city-ship').val();
    var regionShip = $('#region-ship').val();
    var postalShip = $('#postal-code-ship').val();
    $('#first-name-bill').val(firstNameShip);
    $('#last-name-bill').val(lastNameShip);
    $('#company-bill').val(companyShip);
    $('#address-line1-bill').val(adOneShip);
    $('#address-line2-bill').val(adTwoShip);
    $('#city-bill').val(cityShip);
    $('#region-bill').val(regionShip);
    $('#postal-code-bill').val(postalShip);
  });
});
// // ** End copying info from shipping to billing ** //



