type GreetCallback = () => string;

class Greeter {
  private readonly me = 'Andreas';

  public greet() {
    console.log(this);
    return `Hello me = ${this.me}`;
  }

  public getGreet1(): GreetCallback {
    return this.greet;
  }

  public getGreet2(): GreetCallback {
    return () => this.greet();
  }

  public getGreet3(): GreetCallback {
    return this.greet.bind(this);
  }
  

}

const greeter = new Greeter();
let greeting: string;

greeting = greeter.greet();
// greeting

const greet = greeter.greet;
greeting = greet();
// greeting

greeting = greeter.getGreet1()();
// greeting

greeting = greeter.getGreet2()();
// greeting

greeting = greeter.getGreet3()();
// greeting


// ================================================================================================







interface Vehicle {
  wheels: number;
}

type ErrorTester = () => string;
type ErrorTesterList = Array<ErrorTester>;
type ErrorList = Array<string>;

interface Car extends Vehicle {
  brand: string;
  kw: number;
  errorTester: (routines: ErrorTesterList) => ErrorList;
}

const errorTesterBmw = (routines: ErrorTesterList): ErrorList => {
  return routines.map(routine => routine()).filter(result => result !== 'Ok');
}

const routines: ErrorTesterList = [
  () => 'Error1',
  () => 'Error2',
  () => 'Ok',
  () => 'Ok',
  () => 'Error3'
];

const bmw3: Car = {
  wheels: 4,
  brand: 'BMW',
  kw: 200,
  errorTester: errorTesterBmw
};

// bmw3;

const errors = bmw3.errorTester(routines);
// errors

// ================================================================================================






let globalValue = 10;

const closure = () => {
  const localValue = 10;
  return () => {
    globalValue = globalValue * 2;
    return localValue + globalValue
  }
}

const function1 = closure();
const function2 = closure();
let result: number;

result = function1();
// result

result = function2();
// result
