$('document').ready(function() {
  
var totalLog = 0;
var grandTotalElement = document.getElementById('total-price');

//INDIVIDUAL SUBTOTALS
  $('#item-qty1').on('input',function() {
    var price = $('#item-price1').text();
    var priceToNum = Number(price.replace(/[^0-9\.-]+/g,""));

    var quantity = $('#item-qty1').val();
    var quantityToNum = Number(quantity);

    var subtotal = priceToNum * quantityToNum;
    var subTotalElement = document.getElementById('subtotal1');
    subTotalElement.innerText = "$" + subtotal.toFixed(2);

    totalLog = totalLog + Number(subtotal.toFixed(2));
    grandTotalElement.innerText = "$" + totalLog.toFixed(2);
  })
    
    // if ($('#item-qty1') !== true) {
    //   totalLog = totalLog - Number(subtotal.toFixed(2));
    // }

//INDIVIDUAL SUBTOTALS
  $('#item-qty2').on('input',function() {
    var price2 = $('#item-price2').text();
    var priceToNum2 = Number(price2.replace(/[^0-9\.-]+/g,""));

    var quantity2 = $('#item-qty2').val();
    var quantityToNum2 = Number(quantity2);

    var subtotal2 = priceToNum2 * quantityToNum2;
    var subTotalElement2 = document.getElementById('subtotal2');
    subTotalElement2.innerText = "$" + subtotal2.toFixed(2);

    totalLog = totalLog + Number(subtotal2.toFixed(2));
    grandTotalElement.innerText = "$" + totalLog.toFixed(2);
  })

    // if ($('#item-qty2') !== true) {
    //   totalLog = totalLog - Number(subtotal2.toFixed(2));
    // }

  //INDIVIDUAL CANCEL BUTTON
  $('.cancel1').click(function() {
    $($($('.cancel1').parent()).parent()).fadeOut(1000);
  })

  $('.cancel2').click(function() {
    $($($('.cancel2').parent()).parent()).fadeOut(1000);
  })

  var calculatedTotal = 0;

  // CALC BUTTON
  // $('#calc-price-button').click(function() {
  //   calculatedTotal = 
  //   Number( $('#subtotal1').text() .replace(/[^0-9\.-]+/g,"")) +
  //   Number( $('#subtotal2').text() .replace(/[^0-9\.-]+/g,"")) +
  //   Number( $('#subtotal3').text() .replace(/[^0-9\.-]+/g,"")) +
  //   Number( $('#subtotal4').text() .replace(/[^0-9\.-]+/g,"")) +
  //   Number( $('#subtotal5').text() .replace(/[^0-9\.-]+/g,"")) +
  //   Number( $('#subtotal6').text() .replace(/[^0-9\.-]+/g,"")) +
  //   Number( $('#subtotal7').text() .replace(/[^0-9\.-]+/g,"")) +
  //   Number( $('#subtotal8').text() .replace(/[^0-9\.-]+/g,"")) +
  //   Number( $('#subtotal9').text() .replace(/[^0-9\.-]+/g,""));
  //   grandTotalElement.innerText = "$" + calculatedTotal.toFixed(2);

  // })

})






// FIRST SUBTOTAL
//   function getTotalPrice () {
//     var price = $($('.item-price').first()).text();
//     var priceToNum = Number(price.replace(/[^0-9\.-]+/g,""));

//     var quantity = $('.quantity').val();
//     var quantityToNum = Number(quantity);

//     var subtotal = priceToNum * quantityToNum;
    
//     var subTotalElement = document.getElementById('subtotal1');
//     subTotalElement.innerText = "$" + subtotal.toFixed(2);

//     totalLog = totalLog + Number(subtotal.toFixed(2));

//     var grandTotalElement = document.getElementById('total-price');
//     grandTotalElement.innerText = "$" + totalLog.toFixed(2);

//   }

// $('.quantity').on('input',function() {
//   getTotalPrice();
//   })


//Create An Array With Prices
// var itemPriceArray = [];
// for (var i = 0; i < $('.item-price').length; i++) {
//   var price = $($('.item-price')[0]).text();
//   itemPriceArray.push(price);
// }
