"use strict"

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
        .catch(err => console.log(err));
})