$(document).ready(function() {
	let curs = 78;
	$.get( "https://www.cbr-xml-daily.ru/daily_json.js")
	  .done(function( data ) {
	    curs = data;
	  });
    $('.js-product-price').each(function(index, value) {
    	if(curs === 78) {
    		finalPrice = (parseInt($(this).text()) + (parseInt($(this).text())*0.2))*2*78;
    	} esle {
    		finalPrice = (parseInt($(this).text()) + (parseInt($(this).text())*0.2))*2*curs.Valute.EUR.value;
    	}
    	
	  console.log(finalPrice);
	});
});
