function generateLink() {
    // Mengambil nama dari input
    const name = document.getElementById("guestName").value.trim();
    
    // Jika nama kosong, tampilkan pesan peringatan
    if (!name) {
        alert("Please enter a guest name.");
        return;
    }

    // Menghasilkan link dengan parameter nama
    const baseUrl = "https://haikalmadu05.github.io/uji/";
    const generatedLink = `${baseUrl}?name=${encodeURIComponent(name)}`;

    // Menampilkan link yang dihasilkan
    const linkOutput = document.getElementById("generated-link");
    linkOutput.innerHTML = `Generated Link: <a href="${generatedLink}" target="_blank">${generatedLink}</a>`;
}
