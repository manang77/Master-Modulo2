const list1 = ["spanish", "english", "french", "german", "italian"];
const list2 = [
  {
    id: 1,
    name: "Manuel",
    location: {
      id: 45,
      city: "Sevilla"
    }
  },
  {
    id: 2,
    name: "Pedro",
    location: {
      id: 29,
      city: "Malaga"
    }
  },
  {
    id: 3,
    name: "Juan",
    location: {
      id: 18,
      city: "Granada"
    }
  },
  {
    id: 4,
    name: "Jose",
    location: {
      id: 14,
      city: "Cordoba"
    }
  }
]
const list3 = ["greek", "polish", "finish"];
const list4 = ["russian", "swedish", "portuguese", "bulgarian"];
const list5 = ["swiss"];

//*************************************************************************************************************************
// head
//*************************************************************************************************************************
console.log("******************************* H E A D *******************************************");

const head = (collection: any[]): any => {
  let first: any;
  [first] = collection;
  return first;
};
console.log("HEAD -> ", head(list1));
console.log("HEAD -> ", head(list2));

//*************************************************************************************************************************
// tail
//*************************************************************************************************************************
console.log("******************************* T A I L *******************************************");

const tail = (collection: any[]): any[] => {
  let first: any, rest: any[];
  [first, ...rest] = collection;
  return rest;
};
console.log("TAIL -> ", tail(list1));
console.log("TAIL -> ", tail(list2));

//Otra implementacion
const tail2 = (collection: any[]): any[] => collection.filter((elem: any, index: number) => index > 0);
console.log("TAIL2 -> ", tail2(list1));
console.log("TAIL2 -> ", tail2(list2));

//*************************************************************************************************************************
// init
//*************************************************************************************************************************
console.log("******************************* I N I T *******************************************");

const init = (collection: any[]): any[] => collection.slice(0, -1);
console.log("INIT -> ", init(list1));
console.log("INIT -> ", init(list2));

//Otra implementacion
const init2 = (collection: any[]): any[] =>
  collection.filter((elem: any, index: number, list: any[]) => index < list.length - 1);
console.log("INIT2 -> ", init2(list1));
console.log("INIT2 -> ", init2(list2));

//*************************************************************************************************************************
// last
//*************************************************************************************************************************
console.log("******************************* L A S T *******************************************");

const last = (collection: any[]): any => collection[collection.length - 1];
console.log("LAST -> ", last(list1));
console.log("LAST -> ", last(list2));

//Otras implementaciones
const last2 = (collection: any[]): any => collection.slice(collection.length - 1)[0];
console.log("LAST -> ", last2(list1));
console.log("LAST -> ", last2(list2));


const last3 = (collection: any[]): any =>
  collection.reduce((acum: any, elem: any, index: number, lista: any[]) => {
    if (index === lista.length - 1) {
      acum = lista[index];
    }
    return acum;
  }, undefined);
console.log("LAST -> ", last3(list1));
console.log("LAST -> ", last3(list2));

//*************************************************************************************************************************
// concat
//*************************************************************************************************************************
console.log("***************************** C O N C A T *****************************************");

const concat = (collection1: any[], collection2: any[]) => [...collection1, ...collection2];
console.log("CONCAT -> ", concat(list1, list3));

//*************************************************************************************************************************
// concat
//*************************************************************************************************************************
console.log("************************ C O N C A T M U L T I *************************************");

const concatMulti = (...collections: any[]): any[] => {
  let outputCollection: any[] = [];
  collections.forEach(item => {
    outputCollection = [...outputCollection, ...item];
  });
  return outputCollection;
};
console.log("CONCATMULTI -> ", concatMulti(list1, list3, list4, list5));
console.log("CONCATMULTI -> ", concatMulti(list1, list2, list3));

//Otra implementacion
const concatMulti2 = (...collections: any[]): any[] =>
  collections.reduce((concatList: any[], elem: any) => {
    concatList = [...concatList, ...elem];
    return concatList;
  }, []);
console.log("CONCATMULTI2 -> ", concatMulti2(list1, list3, list4, list5));
console.log("CONCATMULTI2 -> ", concatMulti2(list1, list2, list3));

//*************************************************************************************************************************
// clone
//*************************************************************************************************************************
console.log("****************************** C L O N E ******************************************");

function clone<T>(source: T): T {
  return { ...source };
}

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = clone(a);
console.log("CLONE -> ", b);

//*************************************************************************************************************************
// merge
//*************************************************************************************************************************
console.log("****************************** M E R G E ******************************************");

function merge(source: any, target: any): any {
  return { ...target, ...source };
}

const x = { name: "Maria", surname: "Ibañez", country: "SPA" };
const y = { name: "Luisa", age: 31, married: true };
console.log("MERGE -> ", merge(x, y));

//*************************************************************************************************************************
// isBookRead
//*************************************************************************************************************************
console.log("************************* I S B O O K R E A D *************************************");

interface book {
  title: string;
  isRead: boolean;
}

let books: book[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

function isBookRead(books: book[], titleToSearch: string): boolean {
  const askedBook: book = books.find(book => book.title === titleToSearch);
  return Boolean(askedBook && askedBook.isRead);
}

console.log("ISBOOKREAD -> ", isBookRead(books, "Devastación")); // true
console.log("ISBOOKREAD -> ", isBookRead(books, "Canción de hielo y fuego")); // false
console.log("ISBOOKREAD -> ", isBookRead(books, "Los Pilares de la Tierra")); // false
console.log("ISBOOKREAD -> ", isBookRead(books, "Harry Potter y la piedra filosofal")); // true

//Otras implementaciones
function isBookRead2(books: book[], titleToSearch: string): boolean {
  return books.reduce((read: boolean, book: book) => {
    if (book.title === titleToSearch && book.isRead) {
      read = true;
    }
    return read;
  }, false);
}
console.log("ISBOOKREAD2 -> ", isBookRead2(books, "Devastación")); // true
console.log("ISBOOKREAD2 -> ", isBookRead2(books, "Canción de hielo y fuego")); // false
console.log("ISBOOKREAD2 -> ", isBookRead2(books, "Los Pilares de la Tierra")); // false
console.log("ISBOOKREAD2 -> ", isBookRead2(books, "Harry Potter y la piedra filosofal")); // true

function isBookRead3(books: book[], titleToSearch): boolean {
  return books.some(book => book.title === titleToSearch && book.isRead);
}
console.log("ISBOOKREAD3 -> ", isBookRead3(books, "Devastación")); // true
console.log("ISBOOKREAD3 -> ", isBookRead3(books, "Canción de hielo y fuego")); // false
console.log("ISBOOKREAD3 -> ", isBookRead3(books, "Los Pilares de la Tierra")); // false
console.log("ISBOOKREAD3 -> ", isBookRead3(books, "Harry Potter y la piedra filosofal")); // true

//*************************************************************************************************************************
// slotMachine
//*************************************************************************************************************************
console.log("************************ S L O T M A C H I N E ************************************");

class SlotMachine {
  private coins: number;

  constructor() {
    this.coins = 0;
  }

  play() {
    let combination = [...this.generateShot()];
    this.coins++;
    if (combination.every(oneShot => oneShot)) {
      console.log(`Congratulations!!!. You won ${this.coins} coin${this.coins > 1 ? 's' : ''}!!`);
      this.coins = 0;
    } else {
      console.log("Good Luck next time!!!");
    }
  }

  generateShot() {
    return [this.shot(), this.shot(), this.shot()];
  }

  shot() {
    return Boolean(Math.floor(Math.random() * 2))
  }
}

const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
