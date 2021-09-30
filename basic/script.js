let c = JSON.parse(sandwiches);
let a = JSON.parse(fries);

document.getElementById("sdw").innerHTML += `my fav sandwich is ${c.sandwich} and it has ${c.calories} kcal along with it I enjoy eating ${a.fries_size} which have about  ${a.calories} kcal`