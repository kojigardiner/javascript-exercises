const findTheOldest = function (people) {
    const sorted = people.sort((a, b) => {
        if (!a.yearOfDeath) aAge = (new Date()).getFullYear() - a.yearOfBirth;
        else aAge = a.yearOfDeath - a.yearOfBirth;
        if (!b.yearOfDeath) bAge = (new Date()).getFullYear() - b.yearOfBirth;
        else bAge = b.yearOfDeath - b.yearOfBirth;

        return aAge < bAge ? 1 : -1;
    });
    return sorted[0];
}

// Do not edit below this line
module.exports = findTheOldest;
