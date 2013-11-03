var QUEST = 100;

var sumSquares = function( top ){
	var sum = 0;

	for( var i=1; i<=top; i++ ){
		sum = sum + (i*i);
	}

	return(sum);

}

var squareSums = function( top ){
	var sums = 0;

	for( var j=1; j<=top; j++ ){
		sums = sums + j;
	}

	return(sums*sums);

}

prompt( squareSums(QUEST) - sumSquares(QUEST) );
