var num1 = 1;
var num2 = 2;
var num3 = num1 + num2;

var sum = num2;

while( num3 < 4000000 ){
    if ( num3 % 2 === 0 ){
        sum = sum + num3;
    }
    num1 = num2;
    num2 = num3;
    num3 = num1+num2;
}
document.write(sum);
