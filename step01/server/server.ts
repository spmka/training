class HelloWorld {

  /** Greets all. */
  public greetAll() {
    console.log('Hello world!');
  }

  /**
   * Greets a given name.
   * @param name who is to greet?
   */
  public greetOne(name: string) {
    console.log('Hello ' + name);
    console.log(`Hello ${name}`);
  }
}

const helloWorld: HelloWorld = new HelloWorld();
helloWorld.greetAll();
helloWorld.greetOne('Andreas');
