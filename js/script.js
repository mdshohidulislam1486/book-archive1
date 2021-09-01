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
    return error
})
}



const displayBook=books=>{

console.log(books.num_found)/* To get this yoiu have to call only data on fetch */
books?.forEach( author =>{
console.log(author.author_name[0])
console.log(author.title)
console.log(author.publisher[0])
console.log(author.first_publish_year)

    })

    


}