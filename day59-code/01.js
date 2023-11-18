function Person(name) {
  this.name = name; // 'this' 指向新创建的对象实例
  this.greet = function() {
      console.log("Hello, my name is " + this.name);
  };
}

var person1 = new Person("Alice");
var person2 = new Person("Bob");

console.log(person1);
person1.greet(); // 输出: Hello, my name is Alice
person2.greet(); // 输出: Hello, my name is Bob
