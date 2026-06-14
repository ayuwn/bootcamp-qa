let mobil = ["Toyota", "Honda", "Suzuki", "Daihatsu"];

// console.log(mobil[2]);
// console.log(mobil.length);

// console.log(mobil[0]);
// console.log(mobil[1]);
// console.log(mobil[2]);
// console.log(mobil[3]);

for (let i = 0; i < mobil.length; i++) {
    console.log(mobil[i]);
}

console.log("================================");

for (let i = mobil.length - 1; i >= 0; i--) {
    console.log(mobil[i]);
}

mobil.pop(); // Menghapus elemen terakhir
console.log(mobil);

mobil.push("Mitsubishi"); // Menambahkan elemen baru di akhir array
console.log(mobil);

mobil.shift(); // Menghapus elemen pertama
console.log(mobil);

mobil.unshift("Nissan"); // Menambahkan elemen baru di awal array
console.log(mobil);

mobil.splice(1, 0, "Mazda"); // Menambahkan elemen baru di indeks 1 tanpa menghapus elemen lain
console.log(mobil);

mobil.splice(2, 1); // Menghapus elemen di indeks 2
console.log(mobil);

