function selection_sort (numbers) {
    for (var i = 0; i < numbers.length; i++) {
        var currentMinIndex = i;
        var currentMinNumber = numbers[currentMinIndex];

        for (var j = i; j < numbers.length; j++) {
            if (currentMinNumber > numbers[j]) {
                currentMinIndex = j;
                currentMinNumber = numbers[j];
            }
        }

        var temp = numbers[i];
        numbers[i] = currentMinNumber;
        numbers[currentMinIndex] = temp;
    }

    return numbers;
}

var numbers = [6, 4, 2, 5];
var numbers_sorted = selection_sort(numbers);
console.log(numbers_sorted);
