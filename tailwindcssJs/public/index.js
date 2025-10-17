// // console.log(document);
// // console.log(document.body);

// const tr = document.createElement('tr');
// const th = document.createElement('th');
// const td = document.createElement('td');
// const span = document.createElement('span');


// th.className = 'new item px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white post'
// // console.log(th);
// th.innerHTML  = 'Oppo Find X';
// td.className = 'px-6 py-4';
// span.className = 'fa-solid fa-circle-xmark';

// // console.log(th);
// // console.log(td)
// // console.log(span);

// td.append(span);
// // console.log(td);
// tr.append(th,td);
// // console.log(tr);
// tr.className = 'bg-white dark:bg-gray-800'

// // document.querySelector('tbody').append(tr);
// const tbody = document.querySelector('tbody');
// // console.log(tbody);
// tbody.append(tr)

// // const data = document.querySelector('#text');
// // console.log(data);


// function DataTable(){
//     const data = document.querySelector('#text').value;

// const tr = document.createElement('tr');
// const th = document.createElement('th');
// const td = document.createElement('td');
// const span = document.createElement('span');


// th.className = 'new item px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white post'
// th.innerHTML  = data;
// th.setAttribute('title', 'post-title')
// td.className = 'px-6 py-4';
// span.className = 'fa-solid fa-circle-xmark';

// // console.log(th);
// // console.log(td)
// // console.log(span);

// td.append(span);
// // console.log(td);
// tr.append(th,td);
// console.log(tr);
// tr.className = 'bg-white dark:bg-gray-800'

// document.querySelector('tbody').append(tr);
// }


// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.body);
// console.log(document.URL);
// console.log(document.body.lastChild);
// console.log(document.body.firstChild);
// console.log(document.body.firstChild.baseURI);
// console.log(document.domain);

// BY CLASS
// let header = document.getElementsByClassName('headers');
// let header = document.querySelector('.headers');

// header = Array.from(header);

// header.forEach((item,index) => {
//     // console.log(item.className);
//     item.style.color = 'white';
//     item.style.background = 'black';
//     item.innerHTML = `HI : ${index}`
// });

// BY ID
// let header = document.getElementById('header');
let header = document.querySelector('.headers');
console.log(header);
console.log(header.id);
console.log(header.className);
console.log(header.classList);

    header.style.color = 'white';
    header.style.background = 'black';
    header.style.padding = '20px'
    header.innerHTML = 'New Text'
    header.textContent = 'New Test'
