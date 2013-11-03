var CONST = 600851475143;

var largest_prime = 0;

var primes = [2, 3, 5, 7, 11, 13]

var i = 17;

var workinglim = CONST/i;

var isprime = true;

while(i < workinglim) {
    
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

    workinglim = CONST/primes[primes.length-1];

    i = i+2;
}


for(var k=primes.length-1; k>=0; k--){
    if( CONST % primes[k] === 0 ){
        largest_prime = primes[k];
    	break;
    }
}

prompt(largest_prime);
