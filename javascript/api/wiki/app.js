const url ='https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

const formDOM = document.querySelector('.form');
// console.log(formDOM);
const inputDom = document.querySelector('.form-input');
// console.log(inputDom);
const resultDom = document.querySelector('.results');
// console.log(resultDom);

formDOM.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = inputDom.value;
    if(!value){
        resultDom.innerHTML = '<div class="error">please enter value search</div>';
        return;
    }
    fetchPage(value);
});

const fetchPage = async (searchValue) => {
    resultDom.innerHTML = '<div class="loading"></div>'
    try {
        const respone = await fetch(`${url}${searchValue}`);
        const data = await respone.json();
        const result = data.query.search;
        if(result.length < 1){
            resultDom.innerHTML = '<div class="error">Please Try Again</div>';
            return;
        }
        renderResults(result);
    } catch (error) {
        resultDom.innerHTML = '<div class="error">Error ...</div>';
    }
}

const renderResults = (list) => {
    const cardslist = list.map((item,index) => {
        const {title,snippet,pageid} = item;
        return `
                <a href=http://en.wikipedia.org/?curid=${pageid} >
                <h4>${title}</h4>
                <p>${snippet}</p>
                </a>
        `
    }).join('');
    resultDom.innerHTML = `
    <div class="articles">
        ${cardslist}
    </div>
    `
}