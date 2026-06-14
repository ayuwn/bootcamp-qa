let umur = -9;

try {
    if (umur < 0) {
        throw new Error("Umur tidak boleh negatif");
    }
    if (umur >= 1 && umur < 17) {
        console.log("Masih di bawah umur");
    } else if (umur >= 18 && umur <= 25) {
        console.log("Kamu sudah remaja");
    } else {
        console.log("Kamu TUA");
    }
} catch (error) {
    console.error("Terjadi kesalahan: " + error.message);
}