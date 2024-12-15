let orderList = [];
let totalAmount = 0;

function addToOrder(itemName, itemPrice) {
    orderList.push({ name: itemName, price: itemPrice });
    totalAmount += itemPrice;
    document.getElementById('order-list').innerHTML += `<li>${itemName} - Rp ${itemPrice}</li>`;
    showModal();
}

function showModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

function checkout() {
    // Simpan rincian pesanan dan total ke localStorage
    localStorage.setItem('orderList', JSON.stringify(orderList));
    localStorage.setItem('totalAmount', totalAmount);
    
    // Arahkan ke halaman checkout
    window.location.href = 'checkout.html'; // Ganti dengan nama file checkout Anda
}