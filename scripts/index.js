"use strict"

const getAllOutput = document.querySelector("#getAllOutput");

// function createElement(type, attributes) {
//     let element = document.createElement(type);
//     for (let key in attributes) {
//         if (key == "class") {
//             // adds all classes at once
//             element.classList.add.apply(element.classList, attributes[key]);
//         } else {
//             element[key] = attributes[key];
//         }
//     }
//     someElement.appendChild(element);
// }

document.querySelector("#createForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const form = this;

    let fictionValue;

    if (document.getElementById("fiction").checked) {
        fictionValue = true;
    } else if (document.getElementById("nonFiction").checked) {
        fictionValue = false;
    }

    const data = {
        name: form.bookName.value,
        author: form.author.value,
        isFiction: fictionValue,
        genre: form.genre.value,
        isbn: form.isbn.value
    }

    console.log("Form data:", data);

    axios.post("http://localhost:8080/create", data)
        .then(res => {
            form.reset();
            form.name.focus();
            console.log(res);
        })
        .catch(err => console.error(err));
})

const getAllBooks = () => {
    axios.get("http://localhost:8080/getAll")
        .then(res => {
            console.log(res);
            const books = res.data;
            getAllOutput.innerHTML = "";
            for (let book of books) {
                const bookCol = document.createElement("div");
                bookCol.classList.add("col");

                const bookCard = document.createElement("div");
                bookCard.classList.add("card");

                const bookBody = document.createElement("div");
                bookBody.classList.add("card-body");

                const bookName = document.createElement("p");
                bookName.innerText = book.name;
                bookBody.appendChild(bookName);

                const bookAuthor = document.createElement("p");
                bookAuthor.innerText = book.author;
                bookBody.appendChild(bookAuthor);

                const bookIsFiction = document.createElement("p");
                if (book.isFiction == true) {
                    bookIsFiction.innerText = "Fiction";
                } else if (book.isFiction == false) {
                    bookIsFiction.innerText = "Non-Fiction";
                }
                bookBody.appendChild(bookIsFiction);

                const bookGenre = document.createElement("p");
                bookGenre.innerText = book.genre;
                bookBody.appendChild(bookGenre);

                const bookCover = document.createElement("img");
                bookCover.src = `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`;
                bookBody.appendChild(bookCover);

                const bookDelete = document.createElement("button");
                bookDelete.innerText = "Remove";
                bookDelete.classList.add("btn", "btn-danger");
                bookDelete.addEventListener("click", () => {
                    axios.delete(`http://localhost:8080/delete/${book.id}`)
                        .then(res => getAllBooks())
                        .catch(err => console.error(err))
                });
                bookBody.appendChild(bookDelete);

                bookCard.appendChild(bookBody);
                bookCol.appendChild(bookCard);

                getAllOutput.appendChild(bookCol);
            }
        })
        .catch(err => console.error(err));
}

getAllBooks();