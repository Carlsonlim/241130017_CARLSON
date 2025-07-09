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

const inputkodepromo = document.querySelector('#kodepromo');

inputkodepromo.addEventListener('input',() => {
    inputkodepromo.value = inputkodepromo.value.touppercase().replace(/\s+/g,'');
});

const orderform = document.querySelector('.order section form');
const output = document.querySelector('#output');

orderform.addEventListener('submit', (e)=> {
    e.preventDefault();
    output.computedStyleMap.display = 'block';
    const outputlist = document.querySelector('#output ol');
    outputlist.innerHTML = '';

    let total =0;
    document.querySelectorAll('.card-produk').foreach(card => {
        const judul = card.querySelector('h3').textContent;
        const qty = card.querySelector('.quantity input').value;
        const harga = card.querySelector('.price').textContent.match(/\d+/)[0];
        const li = document.createElement('li')
        li.innerHTML = `<p><span id ="judulproduk">${judul}</span><span id= "subtotalharga">$${harga}</span><p>`
        outputlist.appendChild(li);
        total += parseInt(harga);

        const totalhargaawal = document.querySelector('#totalhargawal');
        const totalhargaakhir = document.querySelector('#totalhargakhir');

        totalhargaawal.style.color = 'black';
        totalhargaawal.style.textdecoration = 'none';
        totalhargaakhir.style.display = 'none';

        totalhargaawal.innerHTML = `$${total}`;
        
    }
    )

});
