const isActive = true;
const number = 10;


// Menggunakan operator logika AND (&&) untuk memeriksa kedua kondisi
if (isActive && number > 5) {
    console.log("Aktif");
} else {
    console.log("Tidak Aktif");
}

// Menggunakan operator logika OR (||) untuk memeriksa salah satu kondisi
if (isActive || number > 5) {
    console.log("Aktif");
} else {
    console.log("Tidak Aktif");
}

// Menggunakan operator == untuk membandingkan nilai
if (number == 10) {
    console.log("Number is 10");
} else {
    console.log("Number is not 10");
}

// Menggunakan operator === untuk membandingkan nilai dan tipe data
if (number === 10) {
    console.log("Number is exactly 10");
} else {
    console.log("Number is not exactly 10");
}

// Menggunakan operator != untuk memeriksa ketidaksamaan nilai
if (number != 5) {
    console.log("Number is not 5");
} else {
    console.log("Number is 5");
}

// Menggunakan operator !== untuk memeriksa ketidaksamaan nilai dan tipe data
if (number !== "10") {
    console.log("Number is not the string '10'");
} else {
    console.log("Number is the string '10'");
}

// Buatlah if else dengan ketentuan sebagai berikut:
/*  Jika umur kurang dari 17 tahun, maka anak-anak
    Jika umur lebih dari 17 - 25 tahun , maka remaja
    Jika umur lebih dari 25 tahun, maka dewasa
*/
const umur = 24;

if (umur < 17) {
    console.log("Anak-anak");
} else if (umur >= 17 && umur <= 25) {
    console.log("Remaja");
} else {
    console.log("Dewasa");
}