function bubble_sort (numbers) {
    do {
        var swaped = false;

        for (var i = 0; i < numbers.length; i++) {
            if (numbers[i] > numbers[i + 1]) {
                var temp = numbers[i];
                numbers[i] = numbers[i + 1];
                numbers[i + 1] = temp;

                swaped = true;
            }
        }
    } while (swaped === true);

    return numbers;
}

var numbers = [3, 44, 38, 5, 47, 3, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48, 1];
var sorted_numbers = bubble_sort(numbers);
console.log(sorted_numbers);
