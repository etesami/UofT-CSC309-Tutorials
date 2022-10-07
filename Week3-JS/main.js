

/* TODO: Look at the section "Some Functions to Check" in the README file.
    Then try to complete the line below to capture all div blocks that
    have the class "flex-item"
*/
const items = document.getElementsByClassName('flex-item item-description');
console.log(items);


/* TODO: Complete the code below to find the minimum height of the <img> 
    element that exists in <div> blocks with "flex-item" class.
*/
let min_img_height = Infinity; 
let divs = items.querySelectorAll("div");
for( div of divs){
  if (div.height < min_img_height)
  {
    min_img_height = div.clientHeight;
  }
  
}

/* TODO: We want to add some functionality to the "Adjust!" button. When 
    a user clicks on the "Adjust!" button, it sets the height of every <img>
    within the <div> block with "flex-item" class to the minimum height you 
    found in the previous step (in pixel, i.e. px). In addition, we want to 
    have "margin-bottom: 0.1rem" style added to each <img> element as well. 
*/
const adjust_btn = document.querySelector("#adjust-btn");
adjust_btn.onclick = function(){
  let imgList = divs.querySelector("img")
    for (img of imgList){
      img.style.height =min_img_height;
      img.style["margin-bottom"] = "0.2em";

    
  }};

/* TODO: Let's iterate through items again. But now, let's add two event 
    listeners to each <div> block with class "flex-item". When a mouse 
    enters the <div> block, the colour of its border changes randomly. 
    In addition, the font weight of the product name changes to bold. 
    When a mouse leaves the <div> block, everything reverts to its normal state.
*/
let colors = ['red', 'blue', 'cyan', 'green', 'orange', 'brown', 'purple'];

for(item of divs){
  /* TODO: For each <div> block add a "mouseenter" event. When the mouse
    enters the block, randomly pick a colour from the array above. You 
    might use Math.floor(), Math.random() functions. Once you pick the 
    colour, set the border colour usiSng the selected colour. Make sure 
    the font weight of the product name changes to bold.
  */
  item.addEventListener("mouseenter", (event) => {
    let color = colors[0];
    this.style.color = color;
    
      

    });
  
  /* TODO: For each <div> block add a "mouseleave" event. When the mouse leaves 
      the block, revert all changes (i.e. border colour and font weight) to default.
  */  
  item.addEventListener("mouseleave", (event) => {
    this.style.color = colors[1]

  });
}


