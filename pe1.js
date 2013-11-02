var sum3 = 0;
var sum5 = 0;

for ( var i = 3; i<1000; i=i+3 ){
    if(i%15 !== 0){
        sum3 = sum3 + i;
    }
}

for ( var j = 5; j<1000; j=j+5 ){
    sum5 = sum5 + j;
}

document.write(sum3+sum5);
