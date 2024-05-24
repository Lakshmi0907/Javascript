// optional chaining introduced in ECMA script 2020.
// it is a safe way to access nested object properties, even if the property doesn't exist.
//  if the property doesn't exisit in that object then it will throw an error. In order to avoid that error we can use this
// optional chaining character this will return null or undefined without error - this is the purpose of actual chaining

let pets={
  cat : {
    name:"cat",
  }
}
// with the below code we will get an error
// console.log(pets.dog.name);
// before this concwept optional chaining operator introduced we used to use logical and && - without getting an error like below
console.log(pets.dog && pets.do.name);
//in the above code first it will check whether pets.dog exist or not if it exist then it will check the name otherwise it will show undefined
// by using optional chaining we will get undefined.
console.log(pets.dog?.name);