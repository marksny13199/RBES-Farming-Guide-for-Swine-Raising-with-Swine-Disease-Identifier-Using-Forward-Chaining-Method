window.onload = function() {

    myform = document.getElementById('myform')
    authorName = document.getElementById('authorName')
    bookName = document.getElementById('bookName')
    isbn = document.getElementById('isbn')
    dynamicHere = document.getElementById('dynamicHere')
    cardBody = document.getElementsByClassName('card-body')[0]

    myform.addEventListener('submit', function(e) {
        e.preventDefault();

        authorNameTxtValue = document.getElementById('authorName').value
        bookNameTxtValue = document.getElementById('bookName').value
        isbnTxtValue = document.getElementById('isbn').value


        if (authorNameTxtValue == '' || bookNameTxtValue == '' || isbnTxtValue == '') {
            UI.messages('Insert All Text Fields', 'danger');
            return
        } else {
            var books = new Book(authorNameTxtValue, bookNameTxtValue, isbnTxtValue);

            UI.clearFields();
            UI.displayData(books)
            Store.setStored(books)
            UI.messages('Data Inserted', 'success')
        }

    })


    dynamicHere.addEventListener('click', function(e) {
        if (e.target.classList.contains('RemoveIt')) {
            UI.removeRow(e.target)
        }

        if (e.target.classList.contains('ab1')) {
            window.location.href='SavedConclusion(a,b)1.html';
        }
        if (e.target.classList.contains('ab2')) {
            window.location.href='SavedConclusion(a,b)2.html';
        }
        if (e.target.classList.contains('ac1')) {
            window.location.href='SavedConclusion(a,c)1.html';
        }
        if (e.target.classList.contains('ac2')) {
            window.location.href='SavedConclusion(a,c)2.html';
        }
        if (e.target.classList.contains('ad1')) {
            window.location.href='SavedConclusion(a,d)1.html';
        }
        if (e.target.classList.contains('ad2')) {
            window.location.href='SavedConclusion(a,d)2.html';
        }
        if (e.target.classList.contains('bc1')) {
            window.location.href='SavedConclusion(b,c)1.html';
        }
        if (e.target.classList.contains('bc2')) {
            window.location.href='SavedConclusion(b,c)2.html';
        }
        if (e.target.classList.contains('bd1')) {
            window.location.href='SavedConclusion(b,d)1.html';
        }
        if (e.target.classList.contains('bd2')) {
            window.location.href='SavedConclusion(b,d)2.html';
        }
        if (e.target.classList.contains('cd1')) {
            window.location.href='SavedConclusion(c,d)1.html';
        }
        if (e.target.classList.contains('cd2')) {
            window.location.href='SavedConclusion(c,d)2.html';
        }

    })

    class Book {
        constructor(authorNameTxtValue, bookNameTxtValue, isbnTxtValue) {
            this.author = authorNameTxtValue;
            this.book = bookNameTxtValue;
            this.isbn = isbnTxtValue;
        }
    }

    class UI {
        static clearFields() {
            document.getElementById('authorName').value = ''
            document.getElementById('bookName').value = ''
            document.getElementById('isbn').value = ''
        }

        static displayData(obj) {
            let BookFromLocalStorage = Store.getStored()
            BookFromLocalStorage.push(obj)
            UI.populateTR(BookFromLocalStorage)

        }

        static populateTR(BookFromLocalStorage) {
            BookFromLocalStorage.forEach(function(onebyone) {
                dynamicHere.innerHTML += ` <tr>
                <td>${onebyone.isbn}</td>
                <td>${onebyone.author}</td>
                <td><button class='${onebyone.book}' id = "view">View Problem</button></td>
                <td><button class='btn btn-danger RemoveIt'id = "remove_button">X</button></td>
                
            </tr>`

            })
        }
      

        static messages(txt, className) {
            let divs = '';
            divs = document.createElement('div')
            divs.classList = `alert alert-${className}`
            divs.innerText = txt;
            cardBody.insertBefore(divs, myform)
            setTimeout(function() {
                divs.remove()
            }, 2000)
        }

        static removeRow(element) {

            isbn = element.parentElement.parentElement.firstElementChild.innerText

            element.parentElement.parentElement.remove()
            Store.removeStored(isbn)
        }
    }


    class Store {
        static getStored() {
            let books = ''
            if (localStorage.getItem('book') == null) {
                books = []
            } else {
                books = JSON.parse(localStorage.getItem('book'))
            }
            return books
        }

        static setStored(x) {

            let books = Store.getStored()
            console.log(books)
            books.push(x)
            localStorage.setItem('book', JSON.stringify(books))
        }


        static removeStored(isbn) {
            let Allvalues = Store.getStored()
            Allvalues.forEach((onebyone, index) => {
                if (onebyone.isbn == isbn) {
                    Allvalues.splice(index, 1);
                }
            })

            localStorage.setItem('book', JSON.stringify(Allvalues))
        }



    }



    UI.populateTR(Store.getStored())
}
