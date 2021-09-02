// featchin data from API 
const bookSearch = ()=>{
const search = document.getElementById('search');
const searchText =search.value;

const ulr = (`https://openlibrary.org/search.json?q=${searchText}`);
    fetch(ulr)
    .then(res => res.json())
    .then(data =>displayTotalResult(data)).catch(error =>{
    console.log(error)})

    fetch(ulr)
    .then(res => res.json())
    .then(data => displayBook(data.docs)).catch(error =>{
    console.log(error)})
    if(searchText === ''){
    toggleHiddenSpinner() 
    }else{
        toggleSpinner()
    }
    
}

const toggleSpinner=()=>{
    document.getElementById('spinner').style.display = 'block'
    document.getElementById('disply-card').style.visibility= 'hidden'
    // document.getElementById('total-result').style.display ='none'
}
const toggleHiddenSpinner=()=>{
    document.getElementById('spinner').style.display = 'none'
    document.getElementById('disply-card').style.visibility= 'visible'
    // document.getElementById('total-result').style.display ='block'
}

// display total result for the search 
const displayTotalResult = total=>{
    const search = document.getElementById('search')
    
    const totalResult =document.getElementById('total-result');
    totalResult.textContent ='';
    const div2 = document.createElement('div')
    div2.innerHTML= `
    <h3 class="text-secondary" class=""><span >${total.num_found}</span> <span> result found for ${search.value}</span></h3> `
    totalResult.appendChild(div2)
    search.value ='';
}

// displaying search book list 
const displayBook=books=>{
    
        const bookCard = document.getElementById('disply-card')
        bookCard.textContent ='';
        books.forEach( des =>{
        const div = document.createElement('div')
        div.classList.add('col')
        
        div.innerHTML = `
            <div class="card  h-100">
                <img id='img-default' src='https://covers.openlibrary.org/b/id/${des.cover_i ?des.cover_i:10909258}-M.jpg' class="card-img-top' alt="">
            <div class="card-body">
                    <h5 class="card-title text-uppercase">${des.title}</h5>
                    <p><span>Author: </span>${des.author_name?.slice(0,1)}</p>
                    <p><span>Publisher: </span>${des.publisher?.slice(0, 1)}</p>
                    <p><span>Publication year: </span>${des.first_publish_year}</p>
            </div>
            </div>
        `
        bookCard.appendChild(div)
        toggleHiddenSpinner();
        
        })
        
}

/* Note: hi I will appreciate if you can give some suggesions for below questions
1. How can I use my deafult image from my computer in this situation? I tried tons of things 
2. 
 */