
document.querySelector('button').addEventListener('click', getChiste)

function getChiste(){
    fetch(`https://palabras-aleatorias-public-api.herokuapp.com/joke/random`)
    .then(res => res.json())
    .then(data => {
        console.log(data.body.lines)
//         data.body.lines.forEach( => {console.log()
//             const li = document.createElement('li')
//             li.textContent = el.lines
//             document.querySelector('ul').appendChild(li)
//             document.querySelector('li').innerText = data.body.lines
      document.querySelector('h3').innerText = data.body.lines
        }

    )})
    .catch(err => {
        console.log(`error ${err}`)
    })
}
