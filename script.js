function findLargest() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let n3 = parseFloat(document.getElementById("num3").value);
    let n4 = parseFloat(document.getElementById("num4").value);
    let n5 = parseFloat(document.getElementById("num5").value);

    let largest;

    // if-else logic
    if (n1 >= n2 && n1 >= n3 && n1 >= n4 && n1 >= n5) {
        largest = n1;
    } else if (n2 >= n1 && n2 >= n3 && n2 >= n4 && n2 >= n5) {
        largest = n2;
    } else if (n3 >= n1 && n3 >= n2 && n3 >= n4 && n3 >= n5) {
        largest = n3;
    } else if (n4 >= n1 && n4 >= n2 && n4 >= n3 && n4 >= n5) {
        largest = n4;
    } else {
        largest = n5;
    }

    document.getElementById("result").innerText = "Largest Number is: " + largest;
}
