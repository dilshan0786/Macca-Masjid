<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Macca Masjid - Sonapur, Dhamdaha</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
</head>
<body>

    <!-- Header Section -->
    <header>
        <h1>مكة مسجد</h1>
        <p>Sonapur, Dhamdaha, Purnia - 854205</p>
    </header>

    <!-- Image Slider with 3D Animation -->
    <section class="slider">
        <div class="slides">
            <img src="masjid1.jpg" class="active" alt="Masjid Image 1">
            <img src="masjid1.jpg" alt="Masjid Image 2">
            <img src="masjid1.jpg" alt="Masjid Image 3">
            <img src="masjid1.jpg" alt="Masjid Image 4">
            <img src="masjid1.jpg" alt="Masjid Image 5">
        </div>
    </section>

    <!-- Financial Data Section -->
    <section class="financial">
        <h2>📊 Financial Status</h2>
        <p class="date-info">📅 Data from 21/03/2025 onwards</p>
        <div class="stats">
            <div id="tc" class="stat">
                <h3>Total Collection</h3>
                <p id="collection">₹0</p>
            </div>
            <div id="te" class="stat">
                <h3>Total Expenses</h3>
                <p id="expenses">₹0</p>
            </div>
            <div id="cb" class="stat">
                <h3>Current Balance</h3>
                <p id="balance">₹0</p>
            </div>
        </div>
    </section>

    <!-- Donation Section -->
    <section class="donation">
        <h2>🤲 Donate for the Masjid</h2>
        <img src="qr-code.png" alt="QR Code for Donation">
        <p>Scan the QR Code to Donate</p>
    </section>
    
<!-- Donor List Section -->
<section class="donor-list">
    <h2>💝 Recent Donations</h2>
    <ul id="donorNames">
        <!-- Donors will be added dynamically from JavaScript -->
    </ul>
</section>



    <!-- Footer -->
    <footer>
        <p>© 2025 Makka Masjid, Sonapur. All Rights Reserved.</p>
    </footer>

</body>
</html>
