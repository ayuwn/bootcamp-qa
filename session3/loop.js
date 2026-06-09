// loop - for
// melakukan pengulangan dengan jumlah pengulangan yang sudah ditentukan

// for (let i = 0; i < 10; i++) {
//     console.log("Perulangan ke-" + i);
// }

// for (let i = 10; i >= 1; i--) {
//     console.log("Perulangan ke-" + i);
// }

// loop - while
// melakukan pengulangan dengan kondisi tertentu, selama kondisi tersebut bernilai true, maka perulangan akan terus berjalan

// let j = 0;
// while (j < 5) {
//     console.log("Perulangan ke-" + j);
//     j++;
// }

// let j = 10;
// while (j > 5) {
//     console.log("Perulangan ke-" + j);
//     j--;
// }

let angka = 3;

for (let k = 0; k < 3; k++) {
    angka += 2
    for (let l = 0; l < 2; l++) {
        angka += 1
    }
    angka += 1
    for (let m = 0; m < 1; m++) {
        angka += 3
    }

    console.log(angka);
}