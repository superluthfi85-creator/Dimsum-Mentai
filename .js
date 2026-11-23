// Menyimpan produk yang dipilih
let keranjang = [];

// Fungsi menambahkan produk
function tambahKeranjang(nama, harga) {

    keranjang.push({
        nama: nama,
        harga: harga
    });

    // Mengubah jumlah keranjang
    document.getElementById("cart-count").textContent =
        keranjang.length;

    // Menampilkan notifikasi
    const toast = document.getElementById("toast");

    toast.textContent =
        nama + " berhasil ditambahkan! 🥟";

    toast.classList.add("show");

    setTimeout(function() {
        toast.classList.remove("show");
    }, 1800);

}

// Fungsi melihat keranjang
function lihatKeranjang() {

    // Mengecek keranjang kosong
    if (keranjang.length === 0) {

        alert("Keranjang kamu masih kosong!");

        return;
    }

    // Menampilkan daftar pesanan
    const daftar = keranjang.map(function(item, index) {

        return (index + 1) + ". " +
            item.nama + " - Rp" +
            item.harga.toLocaleString("id-ID");

    }).join("\n");

    // Menghitung total harga
    const total = keranjang.reduce(function(jumlah, item) {

        return jumlah + item.harga;

    }, 0);

    // Menampilkan pesanan
    alert(
        "PESANAN KAMU\n\n" +
        daftar +
        "\n\nTotal: Rp" +
        total.toLocaleString("id-ID") +
        "\n\nTerima kasih sudah memilih Mentaiku!"
    );

}