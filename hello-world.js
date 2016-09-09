//
// This is a stub file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at hello-world.spec.js--that should give you some hints about what is
// expected here.

var HelloWorld = function() {};

HelloWorld.prototype.hello = function(input) {
//
// YOUR CODE GOES HERE
//
var world;
input ? world = ("Hello, " + input + "!") : world =  ("Hello, World!");
return world;
};

module.exports = HelloWorld;
