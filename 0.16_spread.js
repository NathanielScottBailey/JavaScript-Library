//When dealing with array or objects we can call all the data withing either by putting {...name of object} or [...name of array]


//example
var a = [1, 2, 3];
var b = [...a];
console.log(b)

//However spread syntex can only be applied to iterable objects, objects that can have loops worked with them

//A value is considered iterable if it has a method whose key is the symbol Symbol.iterator that returns a so-called iterator. The iterator is an object that returns values via its method next() 