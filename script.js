document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();

            const parentDropdown = this.parentElement;
            const isActive = parentDropdown.classList.contains('active');

            // Tutup semua dropdown dulu
            document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));

            // Kalau dropdown ini belum aktif, buka
            if (!isActive) {
                parentDropdown.classList.add('active');
            }
        });
    });

    // Tutup dropdown kalau klik di luar menu
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
        }
    });
});