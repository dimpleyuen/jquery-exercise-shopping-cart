$('document').ready(function() {

  // CALCULATE SUBTOTALS
  var elementTotalPrice = $('#total-price')[0];

  $(document).on('input', '.quantity', function() {
    if ( isNaN( $(this).val() ) == true ) {
      alert("Please Input A Valid Number");
    } 
    else {
      var price = $($(this).parent().parent().children()[1]).text();
      var priceToNum = Number(price.replace("$",""));

      var quantity = $(this).val();
      var quantityToNum = Number(quantity);

      var elementSubTotal = $($(this).parent().siblings()[2]).children()[0];
      elementSubTotal.innerText = "$" + (priceToNum * quantityToNum).toFixed(2);
      grandTotalCalc();
    }
  })

  //CALCULATE GRANDTOTAL
  function grandTotalCalc() {
  var grandTotal = 0;
    
    for (var i = 0; i <= $('.sub-total').length; i++) {
      var subtotal = $($('.sub-total')[i]).text();
      var subtotalToNum = Number(subtotal.replace("$",""));
      grandTotal = grandTotal + subtotalToNum;
    }
    elementTotalPrice.innerText = "$" + grandTotal.toFixed(2);
  }

  //CANCEL BUTTON
  $(document).on('click', '.cancel', function() {
    var subTotalToDelete = $($(this).parent().siblings()[2]).children()[0];
    subTotalToDelete.innerText = "$0.00";
    
    $($($(this).parent()).parent()).fadeOut(1000);
    grandTotalCalc();
  })

  //CALCULATE GRANDTOTAL BUTTON
  $('#calc-price-button').click(function() {
    grandTotalCalc();
  })

  //ADD ITEMS
  $('.create').click(function() {

  if ( isNaN($('.input-price').val()) == true ) {
      alert("Please Input A Valid Number");
    }
    else {
    var newItem = $('.input-item').val();
    var newPrice = $('.input-price').val();
    var newPriceToNum = Number(newPrice);

    var newHTML = '<div class="row"> \
                    <div class="item-name col-xs-3"> \
                      ProductName \
                    </div> \
                    <div class="item-price col-xs-2"> \
                      Price \
                    </div> \
                    <div class="item-qty col-xs-7 col-sm-5"> \
                      <label>QTY</label> \
                      <input class="quantity"> \
                      <button class="cancel"> \
                        Cancel \
                      </button> \
                    </div> \
                    <div class="sub-total-wrap hidden-xs col-sm-2"> \
                      <div class="sub-total" id="subtotal">$0.00</div> \
                    </div> \
                  </div>';

    $('.input-new').before(newHTML);
    
    var newInputRow = $('.input-new').prev();
    newInputRow.children()[0].innerText = newItem;
    newInputRow.children()[1].innerText = "$" + newPriceToNum.toFixed(2);

    $('form')[0].reset();
    $('form')[1].reset();

  }})

})