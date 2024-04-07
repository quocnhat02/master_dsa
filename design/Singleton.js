class Singleton {
  constructor() {
    if (Singleton._instance) {
      Singleton._instance = this;
    }
    return Singleton._instance;
  }

  static getInstance() {
    if (!Singleton._instance) {
      Singleton._instance = new Singleton();
    }
    return Singleton._instance;
  }
}

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();

if (s1 === s2) {
  console.log('Equal');
} else {
  console.log('Not equal');
}
