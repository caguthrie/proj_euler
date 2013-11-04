var LIMIT = 1000;

var pythag = function( sum ){

	var working = 0;

	for( var a=1; a < sum; a++ ){
		for( var b=1; b < sum; b++ ){
			working = (a*a) + (b*b);
			working = Math.sqrt(working);
			if( working === Math.round(working) ){
				if( a+b+working === sum ){
					return(a*b*working);
				}
			}
		}
	}
	return(0);
}

prompt( pythag(LIMIT) );
