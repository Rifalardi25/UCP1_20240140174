let dataAnggota = [];

const formDaftar = document.getElementById('formDaftar');

if (formDaftar) {
    formDaftar.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah halaman reload

    
        let namaVal = document.getElementById('nama').value;
        let emailVal = document.getElementById('email').value;
        let minatVal = document.getElementById('minat').value;

        let anggotaBaru = { nama: namaVal, email: emailVal, minat: minatVal };
        dataAnggota.push(anggotaBaru);

        // Menampilkan alert
        alert("Pendaftaran berhasil! Data telah disimpan di array sementara.");

        // Menampilkan hasil input di bagian bawah form
        const hasilDiv = document.getElementById('hasilInput');
        hasilDiv.style.display = "block";
        hasilDiv.innerHTML = `
            <strong>Data Tersimpan:</strong><br>
            Nama: ${namaVal} <br>
            Email: ${emailVal} <br>
            Minat: ${minatVal} <br>
            <em>Total anggota di array saat ini: ${dataAnggota.length}</em>
        `;

        // Reset form setelah disubmit
        formDaftar.reset();
        console.log(dataAnggota); // Cek array di console browser
    });
}

function gantiGambar() {
    const img = document.getElementById('gambarTech');
    // Ganti gambar bergantian berdasarkan kata kunci URL
    if (img.src.includes("300x150")) {
        img.src = "https://via.placeholder.com/300x160/0000FF/808080 ?Text=Gambar+Baru";
    } else {
        img.src = "https://via.placeholder.com/300x150";
    }
}

