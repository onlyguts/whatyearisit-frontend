console.log('Loaded!')


fetch('https://whatyearisit-backend-olive.vercel.app/date')
    .then(response => response.json())
    .then(data => {
        document.querySelector('#year').textContent = data.date
        console.log(data)
    })