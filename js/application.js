$('document').ready(function() {

  // var subtotal;
  
  function getTotalPrice () {
    var price = $($('.item-price').first()).text();
    var priceToNum = Number(price.replace(/[^0-9\.-]+/g,""));

    var quantity = $('.quantity').val();
    var quantityToNum = Number(quantity);

    var subtotal = priceToNum * quantityToNum;
    
    var subTotalElement = document.getElementById('subtotal1');
    subTotalElement.innerText = "$" + subtotal;
}

$('.quantity').on('input',function() {
  getTotalPrice();
  })

 
})
