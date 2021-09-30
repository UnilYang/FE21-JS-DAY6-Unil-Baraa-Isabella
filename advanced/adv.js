let myBooks = JSON.parse(books);
console.log(myBooks);

for (let i in myBooks) {
    document.getElementById("bs").innerHTML +=

        `
        <div class="card ps-5" style="width: 18rem;">
  <img src="${myBooks[i].img}"  height ="30%" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${myBooks[i].title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
    if (myBooks[i].read == true) {
        document.getElementsByClassName("card")[i]
    }

};



/* document.getElementById("bs").innerHTML += ` <p> ${myBooks[i].title} </p> <br> <img src="${myBooks[i].img}"> ` */