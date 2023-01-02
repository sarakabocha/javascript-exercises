const removeFromArray = function(array, arg) {

    for (let i = 0; i < array.length; i++) {// Loop through each object in array
        if (arg === array[i]) { // Find matching values
            array.splice(i, 1); // Remove match from array
        }
    } return array; // Return updated array
};

// Do not edit below this line
module.exports = removeFromArray;

removeFromArray([1, 2, 3, 4], 3);