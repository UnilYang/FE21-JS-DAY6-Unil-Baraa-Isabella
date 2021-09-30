let jfood1 = JSON.parse(sandwiches);
let jfood2 = JSON.parse(fries);

document.getElementById("foodresult").innerHTML = `My favorite sandwich is a ${jfood1.sandwich} which has approximately ${jfood1.calories} calories, along with it I enjoy eating ${jfood2.fries_size} which have about ${jfood2.calories} calories.`