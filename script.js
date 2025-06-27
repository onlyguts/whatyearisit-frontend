console.log('Loaded!')
console.log('again !');


fetch('https://whatyearisit-backend-olive.vercel.app/year')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#year').textContent = data.year
        console.log(year)
    })