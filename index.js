 let borders = [];
 let borders_count = 27;

 let mands = [];
 let mands_count = 40
 ;

let animated = document.getElementById('animated');
let bordered = document.getElementById('bordered');

 for(let i = 0 ; i < borders_count ; i++){

  borders[i]=`border-${i+1}`;
  let img = document.createElement('img');

  for(let x =6 ; x<mands_count;x++){


  img.src=`mands/mand_${x}.svg`;

  }
  img.classList.add(borders[i]);
  img.classList.add('basic');
  img.classList.add('border');
  bordered.appendChild(img);
 }
  

 for(let i = 1 ; i < mands_count ; i++){

  mands[i]=`mands/mand_${i+1}.svg`;
  let img = document.createElement('img');
  img.src=mands[i];
  img.classList.add("basic");
  let style = i%2==0 ? 'move' : 'move-reverse';
  img.classList.add(style);

  animated.appendChild(img);

 }
    

