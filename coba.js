function cetakNama(nama) {
    return `Hallo, nama saya ${nama}`;
}

const PI = 3.14;

const siswa = {
    nama: 'Tiyas Eka Ramdahan',
    umur: 18,
    cetakssw(){
        return `Hallo, nama saya ${this.nama} dan umur saya ${this.umur} tahun. `;
    },
};

class Orang {
    constructor(){
        console.log('Objek orang sudah dibuat!!')
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.siswa = siswa;
// module.exports.Orang = Orang;

// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     siswa: siswa,
//     Orang: Orang,
// };

module.exports = {cetakNama, PI, siswa, Orang};
