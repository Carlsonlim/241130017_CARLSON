document.querySelectorAll('.card-produk').forEach(card => {
    const input = card.querySelector('.quantity input');
    const minus = card.querySelector('.minus');
    const plus = card.querySelector('.plus');

    plus.addEventListener('click', () =>{
        const harga = card.querySelector('.price');
        const nominalharga = harga.textContent.match(/\d+/)[0];

        let value = parseInt(input.value);
        input.value = value + 1;

        harga.innerHTML = `$${nominalharga / value} * input.value}`
    });

    minus.addEventListener('click', () =>{
        const harga = card.querySelector('.price');
        const nominalharga = harga.textContent.match(/\d+/)[0];

        let value = parseInt(input.value);
        input.value = value - 1;

        harga.innerHTML = `$${nominalharga / value} * input.value}`
    });

    const harga = card.querySelector('.price');
    const nominalhargaawal = harga.textContent.match(/\d+/)[0];

    input.addEventListener('input', () => {
        
        let.value = parseInt(input.value);
        if (isNaN(value) || value < 1) {
            input.value =1;
        };

        harga.innerHTML = `$${(nominalhargaawal) * input.value}`
    });
});

