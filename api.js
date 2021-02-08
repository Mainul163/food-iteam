
const input=document.getElementById("mealInput");
document.getElementById("btn").addEventListener("click",function(){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input.value}`)
    .then(res=>res.json())
    .then(data=>dishmeal(data)) 
   
})





const dishmeal=meal=>{
console.log(meal);
const mealIteam=document.getElementById("meal")
document.getElementById("menuInfo").innerHTML="";
meal.meals.map(iteam=>{
    
    const iteamName=iteam.strMeal
   const menuInfos=document.getElementById("menuInfo");
    const createDiv=document.createElement("div");
     createDiv.className="createDiv"
    
     const menulist=`
      
      <img  src="${iteam.strMealThumb}"   onclick=" menuDetails('${iteam.idMeal}')">
      <p onclick=" menuDetails('${iteam.idMeal}')">Name: ${ iteamName}</p>
      <p onclick=" menuDetails('${iteam.idMeal}')">Id: ${ iteam.idMeal}</p>
      
     `

     createDiv.innerHTML=menulist;
    
     menuInfos.appendChild(createDiv);
     
   

});

}



const menuDetails=name=>{
const url=(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`)
      fetch(url)
      .then(res=>res.json())
      .then(data=>foodInfo(data))
}



 const foodInfo= foodName =>{
     const iteam=document.getElementById("foodIteam");
      iteam.innerHTML="";
 foodName.meals.map( iteamInfo =>{
    
    const foodDetails=document.createElement("div");
    foodDetails.className="foodDetails"
   
    const foodIteamList=`
    <img src="${iteamInfo.strMealThumb}">
    <p><b>food ID:</b> ${iteamInfo.idMeal}</p>
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