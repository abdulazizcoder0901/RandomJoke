const jokeContainer = document.querySelector('.joke')
const btn = document.querySelector('.btn')
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=political,explicit&type=single"

function getJokes(){
    jokeContainer.classList.remove('fade')
    fetch(url)
    .then((item) => item.json())
    .then((data) =>{
        jokeContainer.classList.add('fade')
        jokeContainer.textContent = `${data.joke}`
    })
}
btn.addEventListener('click', getJokes)
getJokes()