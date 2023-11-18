const submit = document.querySelector('.submit')

const output = document.querySelector('.output-container')

const books = JSON.parse(localStorage.getItem("books")) || [
    {title:"A House for Mr. Biswas",author:"V.S. Naipaul",year:1961},
    {title:"A Bunch of Old Letters",author:"Jawaharlal Nehru",year:1958}
]

submit.addEventListener('click',function(){
    const title = document.querySelector('.title')
    const author = document.querySelector('.author')
    const year = document.querySelector('.year')
    
    

    const book = {
        title: title.value,
        author: author.value,
        year: year.value
    }
    
    books.push(book)
    title.value = ''
    author.value = ''
    year.value = ''
    // console.log(books)  

    displayBooks()
})

const displayBooks = function(){
    // books.map((book)=>{
    //     const {title, author, year} = book
    //     output.innerHTML =  `
    //     <p class="book-title">${title}</p>
    //     <p class="author">${author}</p>
    //     <p class="year">${year}</p>
    //     <button class="delete">Delete</button>
    //     `
    // })

    output.innerHTML=''

    books.forEach(function(book,index){
        const {title, author, year} = book
    const pTitle = document.createElement('p')
    pTitle.innerText = title

    const pAuthor = document.createElement('p')
    pAuthor.innerText = author

    const pYear = document.createElement('p')
    pYear.innerText = year

    const deleteBtn = document.createElement('button')
    deleteBtn.className = "delete"
    deleteBtn.innerText = "Delete"

    const div = document.createElement("div")

    deleteBtn.addEventListener('click',function(){
        deleteBook(index)
    })

    div.append(pTitle,pAuthor,pYear, deleteBtn)
    output.append(div)

    })

    console.log(books)
    saveToLocalStorage()
}

const deleteBook = function(index){
    books.splice(index,1)
    displayBooks()
}

const saveToLocalStorage = function(){
    localStorage.setItem("books",JSON.stringify(books))
}

displayBooks()