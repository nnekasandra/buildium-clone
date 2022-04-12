'use strict';
let clickItem = document.getElementById('click');
let classHidden = document.getElementById('show-item');
clickItem.addEventListener('click', function(){
    clickItem.style.color = "#2C7873";
    classHidden.style.display ='block';
})