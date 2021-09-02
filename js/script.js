// featchin data from API 
const bookSearch = ()=>{
const search = document.getElementById('search');
const searchText =search.value
console.log(searchText)
const ulr = (`http://openlibrary.org/search.json?q=${searchText}`)
fetch(ulr)
.then(res => res.json())
.then(data => displayBook(data.docs)).catch(error =>{
    console.log(error)
    
})
}



const displayBook=books=>{
const bookCard = document.getElementById('disply-card')
bookCard.textContent ='';
console.log(books.num_found)/* To get this yoiu have to call only data on fetch */
books.forEach( author =>{
console.log(author.author_name[0])
console.log(author.title)
console.log(author.publisher[0])
console.log(author.first_publish_year)
const div = document.createElement('div')
div.classList.add('col')

div.innerHTML = `
    <div class="card">
        <img src="" class="card-img-top" alt="...">
     <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
     </div>
    </div>
`
bookCard.appendChild(div)


    })

    


}