function howdy() {
    console.log('Josh Bassett says "Hello!"');
}

howdy();

var numba =
    function (string) {
        if (string.length < 7) {
            console.log("What a short little word!");
        } else if (string.length > 7) {
            console.log("I'm sorry, but that's too many to count");
        } else if (string.length === 7) {
            console.log("7, What a perfect choice!")
        };
    };

    numba("7");
    numba("seventy");
    numba("university");


function inception(callback, value) {
    callback(value);
};

function movie(title) {
	console.log(title + " is a fantastic movie!")
}

var title = "Yentl"

inception(movie, title);