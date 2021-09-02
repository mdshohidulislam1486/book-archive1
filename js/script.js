// featchin data from API 
const bookSearch = ()=>{
const search = document.getElementById('search');
const searchText =search.value
search.value ='';

const ulr = (`https://openlibrary.org/search.json?q=${searchText}`)
fetch(ulr)
.then(res => res.json())
.then(data => displayBook(data.docs)).catch(error =>{
    console.log(error)})

fetch(ulr)
.then(res => res.json())
.then(data =>displayTotalResult(data)).catch(error =>{
    console.log(error)
})
}

const displayTotalResult = total=>{
const totalResult =document.getElementById('total-result');
totalResult.textContent ='';
const div2 = document.createElement('div')
div2.innerHTML= `
<h3 class="text-light" class=""><span>Number of result found </span>${total.num_found}</h3>
`
totalResult.appendChild(div2)
}


const displayBook=books=>{
const bookCard = document.getElementById('disply-card')
bookCard.textContent ='';
books.forEach( des =>{
const div = document.createElement('div')
div.classList.add('col')


div.innerHTML = `
    <div class="card  h-100">
        <img src='https://covers.openlibrary.org/b/id/${des.cover_i}-M.jpg' class="card-img-top" alt="">
     <div class="card-body">
            <h5 class="card-title">${des.title}</h5>
            <p><span>Author: </span>${(des.author_name).slice(0,1)}</p>
            <p><span>Publisher: </span>${(des.publisher).slice(0, 1)}</p>
            <p><span>Publication year: </span>${des.first_publish_year}</p>
     </div>
    </div>
`
bookCard.appendChild(div)


    })

    


}