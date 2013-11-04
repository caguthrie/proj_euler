var LIMIT = 2000000;

var sumPrimes = function( limit ){

        var i = 3;
        var isprime = true;
        var primes = [2];

        while(i < limit) {
    
            isprime = true;

            for(var j=0; j<primes.length; j++){

        		if ( primes[j]*2 > i ){
		            break;
		        }

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
  	return( sumArray(primes) );
}

var sumArray = function( array ){

	var sum = 0;

	for(var i=0; i<array.length; i++ ){
		sum = sum + array[i];
	}
    
    return(sum);
}


prompt( sumPrimes(LIMIT) );
