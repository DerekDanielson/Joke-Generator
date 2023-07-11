const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');


function generateJoke(){
    console.log(1123);
}

jokeBtn.addEventListener('click', generateJoke);

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.chucknorris.io/jokes/random');


xhr.onreadystatechange = function (){
    if (this.readyState === 4 && this.status === 200){

        const data = JSON.parse(this.responseText);

        data.forEach((joke) => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${value}</strong>`;
            document.querySelector('#results').appendChild(li);
        });
    }
}

xhr.send();
