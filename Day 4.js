// Mengembalikan nama kalian

function namaaja() {
  const nama = 'TIYAS';
  return nama;
}

console.log(namaaja());

// Perkalian

function kali(x, y) {
  return x * y;
}

let hasilkali = kali(9, 2);
console.log("Hasil perkalian:", hasilkali);

// Biodata

function data_diri(nama, umur, alamat, hobby, notlp) {
  console.log("Nama saya " + nama + ", umur saya " + umur + " tahun, alamat saya di " + alamat + ", hobby saya adalah " + hobby +", dan notlp saya " + notlp + ".");
}

data_diri("TIYAS", 18, "Bandung", "Futsal", "089638685738");