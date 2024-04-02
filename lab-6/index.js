function sortArray() {
    const input = document.getElementById('arrayInput').value;
    let numbers = input.split(',').map(num => parseInt(num.trim(), 10));
    numbers = numbers.sort((a, b) => a - b);
    document.getElementById('sortedArray').innerText = 'Sorted Array: ' + numbers.join(', ');
}