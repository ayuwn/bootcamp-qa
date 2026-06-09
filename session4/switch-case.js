// switch-case mirip  dengan if-else namun lebih efisien jika kondisinya berupa satu variabel dengan banyak kemungkinan nilai

let hari = "Rabu";

switch (hari) {
    case "Selasa":
        console.log("Jam 19.15 sampai 21.15");
        break;
    case "Kamis":
        console.log("Jam 19.15 sampai 21.15");
        break;
    case "Sabtu":
        console.log("Jam 10.00 sampai 12.00");
        break;
    default:
        console.log("Mini Bootcamp Libur");
}

// switch memerika nilai variabel hari dengan semua case
// jika ada yang cocok, kode akan dijalankan hingga menemui break
// break digunakan untuk menghentikan eksekusi setelah menemukan case yang cocok, jika tidak ada break, kode akan terus dijalankan hingga akhir switch atau menemukan break berikutnya
// jika tidak ada yang cocok, kode di default akan dijalankan