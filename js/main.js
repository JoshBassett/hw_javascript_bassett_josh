function howdy() {
    console.log('Josh Bassett says "Hello!"');
}

howdy();

var myVar =
    function numba(string) {
        if (string < 7) {
            console.log("What a short little word!");
        } else if (string > 7) {
            console.log("I'm sorry, but that's too many to count");
        } else if (string === 7) {
            console.log("7, What a perfect choice!")
        };
    };

function inception(callback, value) {
    callback(value);
};

function movie(title) {
	console.log(title + " is a fantastic movie!")
}

var title = "Yentl"

inception(movie, title);