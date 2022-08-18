const removeFromArray = function (array, ...args) {
    for (let i = 0; i < args.length; i++) {
        to_remove = args[i];

        array = array.filter(item => item !== to_remove);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
