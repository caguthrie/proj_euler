var NUM1 = 999;
var NUM2 = 999;
var FLOOR = 100;

var palin = function( num1, num2, floor ){

	var largest = 0;

	for( var i = num1; i>=floor; i--){
		for( var j = num2; j>=floor; j-- ){
			if( isPalin(i*j) ){
                if( i*j > largest){
				    largest=i*j;
                }
			}
		}
	}
	return(largest);
}

var isPalin = function( product ){

	var numString = product.toString();

	for( var k = numString; k.length > 1; ){
		if(k.charAt(0) === k.charAt(k.length - 1)){
			k = k.substring(1, k.length-1);
		}
		else {
			return(false);
		}
	}

	return(true);
}

prompt( palin( NUM1, NUM2, FLOOR ) );
