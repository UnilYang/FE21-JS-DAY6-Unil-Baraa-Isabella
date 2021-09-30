let myBooks = JSON.parse(books);

for (let i in myBooks) {
    document.getElementById("BOX").innerHTML += `<div class="card " style="width: 18rem;">
    <img src="${myBooks[i].image}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${myBooks[i].title} ${myBooks[i].author}</p>
    </div>
  </div>`
    if (myBooks[i].read) {
        document.getElementsByClassName("card")[i].style.background = "green";
    } else {
        document.getElementsByClassName("card")[i].style.background = "red";
    }

}
//yo
//asdfghjkjhgfdsfgu