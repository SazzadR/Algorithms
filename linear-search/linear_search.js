function linear_search(haystack, needle) {
    for (var i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle) {
            return 'Found in ' + (i + 1) + ' position';
        }
    }

    return 'Element is not in the list';
}

var numbers = [51, 11, 9, 41, 67, 24];
var search_result = linear_search(numbers, 11);
console.log(search_result);
