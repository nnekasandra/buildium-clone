"use strict";
/*let clickItem = document.getElementById("click");
let classHidden = document.getElementById("show-item");
let tabs = document.getElementsByClassName("tabs");
let description = document.getElementsByClassName("product-description");
let test = document.getElementById('testing');
let trial = document.getElementById('try');
for(let i = 0; i<tabs.length; i++){
    let key1 = tabs[0];
    let key2 = tabs[1];
    let key3 = tabs[2];
    let key4 = tabs[3];
    let key5 = tabs[4];
    let key6 = tabs[5];
    tabs[i].addEventListener("click", function () {
      tabs[i].style.borderLeftColor = "#2C7873";
      tabs[i].style.color = "#2C7873";
    });
    key2.addEventListener("click", function () {
      trial.innerHTML = test;
    });
}

for (let j = 0; j < description.length; j++) {
   let value1 = description[0];
   let value2 = description[1];
   let value3 = description[2];
   let value4 = description[3];
   let value5 = description[4];
   let value6 = description[5];
}
// value1.innerHTML = ''
const features = {
  key1: value1,
  key2: value2,
  key3: value3,
  key4: value4,
  key5: value5,
  key6: value6
};
*/
/**Descriptions */
let firstDescription = document.getElementById("description-1");
let secondDescription = document.getElementById("description-2");
let thirdDescription = document.getElementById("description-3");
let fourthDescription = document.getElementById("description-4");
let fifthDescription = document.getElementById("description-5");
let sixthDescription = document.getElementById("description-6");
let mainDescription = document.getElementById("main-description");
/*Tabs */
let tab1 = document.getElementById("tab-1");
let tab2 = document.getElementById("tab-2");
let tab3 = document.getElementById("tab-3");
let tab4 = document.getElementById("tab-4");
let tab5 = document.getElementById("tab-5");
let tab6 = document.getElementById("tab-6");
tab1.addEventListener('click', function(){
    tab1.style.borderLeftColor = "#2C7873";
    tab1.style.color = "#2C7873";
    firstDescription.style.display = "flex";
    secondDescription.style.display = 'none';
    thirdDescription.style.display = 'none';
    fourthDescription.style.display = 'none';
    fifthDescription.style.display = 'none';
    sixthDescription.style.display = 'none';
    mainDescription.innerHTML = firstDescription;
    tab2.style.borderLeftColor = "#DBDBDC";
    tab2.style.color = "#021C1E";
    tab3.style.borderLeftColor = "#DBDBDC";
    tab3.style.color = "#021C1E";
    tab4.style.borderLeftColor = "#DBDBDC";
    tab4.style.color = "#021C1E";
    tab5.style.borderLeftColor = "#DBDBDC";
    tab5.style.color = "#021C1E";
    tab6.style.borderLeftColor = "#DBDBDC";
    tab6.style.color = "#021C1E";
})
tab2.addEventListener('click', function(){
    tab2.style.borderLeftColor = "#2C7873";
    tab2.style.color = "#2C7873";
    firstDescription.style.display = "none";
    secondDescription.style.display = "flex";
    thirdDescription.style.display = "none";
    fourthDescription.style.display = "none";
    fifthDescription.style.display = "none";
    sixthDescription.style.display = "none";
    mainDescription.innerHTML = secondDescription;
    tab1.style.borderLeftColor = "#DBDBDC";
    tab1.style.color = "#021C1E";
    tab3.style.borderLeftColor = "#DBDBDC";
    tab3.style.color = "#021C1E";
    tab4.style.borderLeftColor = "#DBDBDC";
    tab4.style.color = "#021C1E";
    tab5.style.borderLeftColor = "#DBDBDC";
    tab5.style.color = "#021C1E";
    tab6.style.borderLeftColor = "#DBDBDC";
    tab6.style.color = "#021C1E";
})
tab3.addEventListener('click', function(){
    tab3.style.borderLeftColor = "#2C7873";
    tab3.style.color = "#2C7873";
    thirdDescription.style.display = "flex";
    firstDescription.style.display = "none";
    secondDescription.style.display = "none";
    fourthDescription.style.display = "none";
    fifthDescription.style.display = "none";
    sixthDescription.style.display = "none";
    mainDescription.innerHTML = thirdDescription;
    tab2.style.borderLeftColor = "#DBDBDC";
    tab2.style.color = "#021C1E";
    tab1.style.borderLeftColor = "#DBDBDC";
    tab1.style.color = "#021C1E";
    tab4.style.borderLeftColor = "#DBDBDC";
    tab4.style.color = "#021C1E";
    tab5.style.borderLeftColor = "#DBDBDC";
    tab5.style.color = "#021C1E";
    tab6.style.borderLeftColor = "#DBDBDC";
    tab6.style.color = "#021C1E";
})
tab4.addEventListener('click', function(){
    tab4.style.borderLeftColor = "#2C7873";
    tab4.style.color = "#2C7873";
    fourthDescription.style.display = 'flex';
    firstDescription.style.display = "none";
    secondDescription.style.display = "none";
    thirdDescription.style.display = "none";
    fifthDescription.style.display = "none";
    sixthDescription.style.display = "none";
    mainDescription.innerHTML = fourthDescription;
    tab2.style.borderLeftColor = "#DBDBDC";
    tab2.style.color = "#021C1E";
    tab3.style.borderLeftColor = "#DBDBDC";
    tab3.style.color = "#021C1E";
    tab1.style.borderLeftColor = "#DBDBDC";
    tab1.style.color = "#021C1E";
    tab5.style.borderLeftColor = "#DBDBDC";
    tab5.style.color = "#021C1E";
    tab6.style.borderLeftColor = "#DBDBDC";
    tab6.style.color = "#021C1E";
})
tab5.addEventListener('click', function(){
    tab5.style.borderLeftColor = "#2C7873";
    tab5.style.color = "#2C7873";
    fifthDescription.style.display = "flex";
    firstDescription.style.display = "none";
    secondDescription.style.display = "none";
    thirdDescription.style.display = "none";
    fourthDescription.style.display = "none";
    sixthDescription.style.display = "none";
    mainDescription.innerHTML = fifthDescription;
    tab2.style.borderLeftColor = "#DBDBDC";
    tab2.style.color = "#021C1E";
    tab3.style.borderLeftColor = "#DBDBDC";
    tab3.style.color = "#021C1E";
    tab4.style.borderLeftColor = "#DBDBDC";
    tab4.style.color = "#021C1E";
    tab1.style.borderLeftColor = "#DBDBDC";
    tab1.style.color = "#021C1E";
    tab6.style.borderLeftColor = "#DBDBDC";
    tab6.style.color = "#021C1E";
})
tab6.addEventListener('click', function(){
    tab6.style.borderLeftColor = "#2C7873";
    tab6.style.color = "#2C7873";
    sixthDescription.style.display = "flex";
    firstDescription.style.display = "none";
    secondDescription.style.display = "none";
    thirdDescription.style.display = "none";
    fourthDescription.style.display = "none";
    fifthDescription.style.display = "none";
    mainDescription.innerHTML = sixthDescription;
    tab2.style.borderLeftColor = "#DBDBDC";
    tab2.style.color = "#021C1E";
    tab3.style.borderLeftColor = "#DBDBDC";
    tab3.style.color = "#021C1E";
    tab4.style.borderLeftColor = "#DBDBDC";
    tab4.style.color = "#021C1E";
    tab5.style.borderLeftColor = "#DBDBDC";
    tab5.style.color = "#021C1E";
    tab1.style.borderLeftColor = "#DBDBDC";
    tab1.style.color = "#021C1E";
})
 