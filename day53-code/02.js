// Observer Pattern
function Subject() {
  this.observers = [];

  this.subscribe = function(observer) {
    this.observers.push(observer);
  };

  this.unsubscribe = function(observer) {
    this.observers = this.observers.filter(item => item !== observer);
  };

  this.notify = function() {
    this.observers.forEach(observer => {
      observer.update();
    });
  };
}

function Observer() {
  this.update = function() {
    console.log('Subject has been updated!');
  };
}

const subject = new Subject();
const observer = new Observer();

subject.subscribe(observer);
subject.notify();
