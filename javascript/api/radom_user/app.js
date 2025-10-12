const url = 'https://icanhazdadjoke.com/';

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

// console.log(btn,result);

const fetchData = async() => {
    result.innerHTML = 'loading...';
    try {
        const res = await fetch(url ,
            {
                headers: {
                    Accept: 'application/json',
                    'User-Agent': 'learning app',
                }
            });
        if (!res.ok){
            throw new Error('Error');
        }
        const data = await res.json();
        result.textContent = data.joke;
    }catch (error){
        console.log(error.message);
        result.innerHTML = 'There was an error ...'
    }
}

btn.addEventListener('click', () =>{
    fetchData();
})
