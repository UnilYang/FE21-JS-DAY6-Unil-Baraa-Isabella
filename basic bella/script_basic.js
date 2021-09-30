var tzt = JSON.parse(sandwiches);
var ztz = JSON.parse(fries);


document.getElementById("box").innerHTML += `<p>My favorite sandwich is a ${tzt.sandwich}, which has approximately ${tzt.calories} calories, along with it I enjoy eating ${ztz.fries_size}, which have about ${ztz.calories} calories.</p>`;