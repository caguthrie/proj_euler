var bigDivider = function( top ){

	var foundIt = false;

	for( var i=top;; i = i + top ){

		foundIt = true;

		for( var j=top; j>1; j-- ){
			if( i % j !== 0 ){
				foundIt = false;
				break;
			}
		}
		
		if( foundIt ){
			return(i);
		}

	}
}

prompt( bigDivider(20) );
