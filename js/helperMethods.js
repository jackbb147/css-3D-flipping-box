//=================== HELPERS =========================
//helper function to replace console.log
function print(...thing){
  console.log(...thing);
}

//helper function to do document.createElement("tag")
//returns whatever document.createElement returns
function create(tag, ...classNames){
  var el = document. createElement(tag);
  addClass(el, ...classNames);
  return el
}


function div( ...cnames){
  print("div")
  return create("div",...cnames)
}
//helper function to do parent.appendChild(child)
function addChild(parent, ...children){

  children.forEach(child => {
    parent.appendChild(child);
  })
}



//helper function to do querySelector
function q(selector){
  var ans = document.querySelector(selector);
  print(ans);
  return ans;
}

function addClass(el,...names){
  el.classList.add(...names);
}
//=================== /HELPERS =========================

