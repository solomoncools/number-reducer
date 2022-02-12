document.getElementById("number-input").addEventListener('keyup', (event) => {
    inputChanged(event.target.value);
    event.preventDefault();
});

function reduce(_input) {
    console.log("Input: " + _input);
    let __input = "" + _input;
    const _chararray = __input.split("");
    const filteredItems = _chararray.filter(char => char !== ".");
    let total = 0;
    for(let i = 0; i < filteredItems.length; i++) {
        total += +filteredItems[i];
    }
    return +total;
}

function inputChanged(input) {
    if (input != null) {
        const iteration_one = reduce(input);
        console.log("Iteration 1: " + iteration_one);
        console.log("Count: " + (iteration_one + "").split("").length);
        let iteration_two = "";
        if((iteration_one + "").split("").length >= 2) {
            iteration_two = reduce(reduce(iteration_one));
            console.log("Iteration 2: " + iteration_two);
            document.getElementById("i2_container").style.display = "block";
        } else {
            console.log("Hide i2");
            document.getElementById("i2_container").style.display = "none";
        }

        // UPDATE UI ELEMENTS
        document.getElementById("i1").innerHTML = "1st iteration ~ " + iteration_one;
        document.getElementById("i2").innerHTML = "2nd iteration ~ " + iteration_two;
    }
}
