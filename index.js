function findMatching(string, name) {
    return string.filter(
        function (search) {
            if (search.toUpperCase() === name.toUpperCase()) {
                return true;
            }
        }
    )
}

function fuzzyMatch(string, name) {
    return string.filter(
        function (search) {
            if (search.slice(0, name.length) === name) {
                return true;
            }
        }
    )
}

function matchName(string, name) {
    return string.filter(
        function (search) {
            if (search.name === name) {
                return true;
            }
        }
    )
}
