<script>
    // Hàm để di chuyển banner ngẫu nhiên
    function moveBanner() {
        const banner = document.getElementById('banner');
        const windowWidth = window.innerWidth - banner.clientWidth;
        const windowHeight = window.innerHeight - banner.clientHeight;

        // Tạo vị trí ngẫu nhiên trong vùng hiển thị
        const randomX = Math.floor(Math.random() * windowWidth);
        const randomY = Math.floor(Math.random() * windowHeight);

        // Di chuyển banner đến vị trí mới
        banner.style.left = `${randomX}px`;
        banner.style.top = `${randomY}px`;
    }

    // Di chuyển banner mỗi 2 giây
    setInterval(moveBanner, 2000);

    // Di chuyển banner ngay khi trang tải
    window.onload = moveBanner;
</script>
