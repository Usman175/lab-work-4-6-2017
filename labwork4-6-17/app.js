//question 1
// for (var i = 1; i < 6; i++) {
//     document.write("hello world" + "<br>");
// }
//**************************************************** */
//question 2
// for (var i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }
//question 3
// var tb = +prompt("enter which table u want ??", "2,3,4,5,6 to more");
// var iteration = +prompt("how many iteration you want", "1 to more ");
// for (var i = 1; i <= iteration; i++) {
//     document.write(tb + " x " + i + "=" + tb * i + "<br>");

// }
//question 4
// var ar = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
// for (var i = 0; i < ar.length; i++) {
//     document.write(ar[i] + "<br>");

// }
//question 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>");

// }
// document.write("<br>");
// for (var j = 0; j < fruits.length; j++) {
//     document.write("Element At Index " + j + " is " + fruits[j] + "<br>");

// }
//question 6
// var arr = [];
// var val1 = +prompt("Enter How Many time You enter Value ", "marzi hai teri :) :P");
// for (var i = 0; i < val1; i++) {
//     var info = prompt("Enter Information ");
//     arr.push(info);

// }
// document.write("Number Of Item = " + arr.length + "<br>");
// for (var j = 0; j < val1; j++) {
//     document.write(arr[j] + "<br>");
// }
//question 7
document.write("<b>Counting</b>" + "<br>");
for (var i = 1; i <= 15; i++) {
    document.write(i + ",");
}
document.write("<br><b>Reversing</b>" + "<br>");

for (var j = 10; j >= 1; j--) {
    document.write(j + ",");
}
document.write("<br><b>Even</b>" + "<br>");

for (var k = 0; k <= 20; k++) {
    if (k % 2 == 0) {
        document.write(k + ",");
    }

}
document.write("<br><b>OOD</b>" + "<br>");

for (var k = 0; k <= 20; k++) {
    if (k % 2 != 0) {
        document.write(k + ",");
    }

}
document.write("<br><b>Series</b>" + "<br>");

for (var k = 2; k <= 20; k += 2) {
    document.write(k + "k,");


}