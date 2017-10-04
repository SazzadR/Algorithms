function insertion_sort(numbers) {
    for (var index = 2; index < numbers.length; index++) {
        var value = numbers[index];

        var i = index - 1;

        while (i >= 0) {
            if (value < numbers[i]) {
                numbers[i + 1] = numbers[i];
                numbers[i] = value;
                i--;
            } else {
                break;
            }
        }
    }

    return numbers;
}

var numbers = [3, 44, 38, 5, 47, 3, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48, 1];
var sorted_numbers = insertion_sort(numbers);
console.log(sorted_numbers);
