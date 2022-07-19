
//DEPENDENCY: helperMethods.js, cube3D.css

class ComponentCube{
  constructor(cubeClassName, btnClassName) {
    this.cubeDiv = this.generateCube(cubeClassName);
    this.btn = this.generateBtn(btnClassName);
  }


  //generates the cube
  //cname: the class name
  generateCube(cname){
    var cube = create("div")
    addClass(cube, cname)
    addClass(cube, this.cname(1));
    this.setFace(1);
    const FACE = "cube_face";
    var
        front = div(FACE, "face-1"),
        top = div(FACE, "face-2"),
        back = div(FACE, "face-3"),
        bottom = div(FACE, "face-4");
    //THESE TWO ARE NOT SUPPOSED TO BE USED
    var
        left = div(FACE, "face-5"),
        right = div(FACE, "face-6");
    front.innerHTML = "front"
    top.innerHTML = "top"
    back.innerHTML = "back"
    bottom.innerHTML = "bottom"
    left.innerHTML = "left"
    right.innerHTML = "right";
    addChild(cube, front, top, back, bottom);


    return cube;
  }

  //classname
  cname(i){
    return `show-${i}`;
  }

  setFace(i){
    this.currentFace = i;
  }

  //just go to the next face (1->2->3->4->1)
  incrementFace(){
    const _ = this;
    console.log("incrementing face")
    var nextFace = (this.currentFace + 1) % 5;
    if(nextFace < 1) nextFace = 1; //modulo but starts from 1
    var cube = this.cubeDiv;
    console.log(this.cubeDiv);
    cube.classList.remove(_.cname(this.currentFace));
    cube.classList.add(_.cname(nextFace));
    this.currentFace = nextFace;
  }

  //generates the btn
  //cname: the class name
  generateBtn(cname){
    const _ = this;
    var btn = div(cname);
    btn.innerHTML = "FLIP";
    var handler = ()=>{
      _.incrementFace.call(_);
    }
    btn.addEventListener("click", handler)
    return btn;
  }

  getCube(){
    return this.cubeDiv;
  }

  getButton(){
    return this.btn;
  }
}

