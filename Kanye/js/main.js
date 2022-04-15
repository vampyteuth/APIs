document.querySelector('button').addEventListener('click', kanyeQuote)

function kanyeQuote(){

    fetch(`https://api.kanye.rest`)
    .then(res => res.json())
    .then(data => {
        console.log(data.quote)
        document.querySelector('h2').innerText = data.quote
  })
    .catch(err => {
        console.log(`error ${err}`)
    })
}
