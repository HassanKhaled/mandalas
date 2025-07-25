 let borders = [];
 let borders_count = 8;

 let mands = [];
 let mands_count = 9;

let animated = document.getElementById('animated');

 for(let i = 0 ; i < borders_count ; i++)
   borders[i]=`borders_${i+1}.svg`;

 for(let i = 0 ; i < mands_count ; i++){
  mands[i]=`mands/mand_${i+1}.svg`;
  let img = document.createElement('img');
  img.src=mands[i];
  animated.appendChild(img);

 }
    

