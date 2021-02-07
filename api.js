
const input=document.getElementById("mealInput");
document.getElementById("btn").addEventListener("click",function(){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input.value}`)
    .then(res=>res.json())
    .then(data=>dishmeal(data)) 
   
})





const dishmeal=meal=>{
console.log(meal);
const mealIteam=document.getElementById("meal")


meal.meals.map(iteam=>{
    
    const iteamName=iteam.strMeal
   const menuInfos=document.getElementById("menuInfo");
    const createDiv=document.createElement("div");
     createDiv.className="createDiv"
    
     const menulist=`
      
      <img  src="${iteam.strMealThumb}"   onclick=" menuDetails('${iteamName}')">
      <p onclick=" menuDetails('${iteamName}')">${ iteamName}</p>
      
     `

     createDiv.innerHTML=menulist;
     menuInfo.appendChild(createDiv);



});

}



const menuDetails=name=>{
const url=(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      fetch(url)
      .then(res=>res.json())
      .then(data=>foodInfo(data))
}




 const foodInfo= foodName =>{
     const iteam=document.getElementById("foodIteam");

 foodName.meals.map( iteamInfo =>{

    const nameFood=iteamInfo.strMeal;
    const foodDetails=document.createElement("div");
    foodDetails.className="foodDetails"
    const foodIteamList=`
    <img src="${iteamInfo.strMealThumb}">
    <p><b>food Name:</b>       ${iteamInfo.strMeal}</p>
    <p><b>food Category:</b>   ${iteamInfo.strCategory}</p>
    <p><b>food Ingredient1:</b>   ${iteamInfo.strIngredient1}</p>
    <p><b>food Ingredient2:</b>   ${iteamInfo.strIngredient2}</p>
    <p><b>food Ingredient2:</b>    ${iteamInfo.strIngredient3}</p>
    <p><b>food Country of food:</b> ${iteamInfo.strArea}</p>
    
    `
   foodDetails.innerHTML=foodIteamList;
   iteam.appendChild(foodDetails);

    })
 }