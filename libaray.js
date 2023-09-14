const bookInput =document.getElementById('book')
const authorInput =document.getElementById('author')
const pagesInput=document.getElementById('pages')
const submit=document.getElementById('submit')
const card= document.getElementById('card')




const myLibrary = [];

function Book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
 const title =bookInput.value
   const author =authorInput.value
    const pages=pagesInput.value
   
    if( title && author && pages){
   
     const newBook = new Book(title,author,pages)
     myLibrary.push(newBook)
     renderLibarary()
}else{
    alert("Please fill the fields")
}
}

function renderLibarary(){
     card.innerHTML='';
    
    myLibrary.forEach((book,index) =>{
        const divElement = document.createElement('div')
    divElement.className = 'added-details'
  
    const titleElement = document.createElement('h2')
    const authorElement = document.createElement('h4')
    const pagesElement = document.createElement('h6')

    titleElement.textContent =`${book.title}`
    authorElement.textContent =`${book.author}`
    pagesElement.textContent =`${book.pages}`
    divElement.appendChild(titleElement)
    divElement.appendChild(authorElement)
    divElement.appendChild(pagesElement)
    
    card.appendChild(divElement)
})
}


submit.addEventListener('click', (event) => {
    event.preventDefault();
    addBookToLibrary();
});