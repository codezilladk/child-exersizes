$(document).ready(function() {
    $('.js-product-price').each(function(index, value) {
    	var finalPrice = (parseInt($(this).text()) + (parseInt($(this).text())*0.2))*2;
	  console.log(finalPrice);
	});
});
