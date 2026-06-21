let karyawan = {
    id: 123,
    nama: "John Doe",
    age: 30,
    salary: 54000,
    subordinates: [
        {
            id: 124,
            nama: "Jane Smith",
            age: 25,
            salary: 45000
        }
    ]
};

console.log(karyawan.id);
console.log(karyawan.nama);
console.log(karyawan.age);
console.log(karyawan.salary);
console.log(karyawan.subordinates[0].nama);