var LIMIT = 10001;

var nthPrime = function( limit ){

	var i = 3;
	var isprime = true;
	var primes = [2];

	while(primes.length < limit) {
    
	    isprime = true;

	    for(var j=0; j<primes.length; j++){
        	if ( i % primes[j] === 0 ){
                    isprime = false;
	            break;
        	}
	    }

	    if(isprime){
		primes.push(i);
	    }

	    i = i+2;
	}
    return( primes[primes.length-1] );
}

prompt( nthPrime(LIMIT) );
