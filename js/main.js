

print("hello")

var cube = new ComponentCube("cube", "btn");
print(cube)

var wrapper = document.querySelector(".wrapper");

addChild(wrapper, cube.getCube())

addChild(document.querySelector("body"), cube.getButton())
