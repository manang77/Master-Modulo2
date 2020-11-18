var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var list1 = ["spanish", "english", "french", "german", "italian"];
var list2 = [
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
];
var list3 = ["greek", "polish", "finish"];
var list4 = ["russian", "swedish", "portuguese", "bulgarian"];
var list5 = ["swiss"];
//*************************************************************************************************************************
// head
//*************************************************************************************************************************
console.log("******************************* H E A D *******************************************");
var head = function (collection) {
    var first;
    first = collection[0];
    return first;
};
console.log("HEAD -> ", head(list1));
console.log("HEAD -> ", head(list2));
//*************************************************************************************************************************
// tail
//*************************************************************************************************************************
console.log("******************************* T A I L *******************************************");
var tail = function (collection) {
    var first, rest;
    first = collection[0], rest = collection.slice(1);
    return rest;
};
console.log("TAIL -> ", tail(list1));
console.log("TAIL -> ", tail(list2));
//Otra implementacion
var tail2 = function (collection) { return collection.filter(function (elem, index) { return index > 0; }); };
console.log("TAIL2 -> ", tail2(list1));
console.log("TAIL2 -> ", tail2(list2));
//*************************************************************************************************************************
// init
//*************************************************************************************************************************
console.log("******************************* I N I T *******************************************");
var init = function (collection) { return collection.slice(0, -1); };
console.log("INIT -> ", init(list1));
console.log("INIT -> ", init(list2));
//Otra implementacion
var init2 = function (collection) {
    return collection.filter(function (elem, index, list) { return index < list.length - 1; });
};
console.log("INIT2 -> ", init2(list1));
console.log("INIT2 -> ", init2(list2));
//*************************************************************************************************************************
// last
//*************************************************************************************************************************
console.log("******************************* L A S T *******************************************");
var last = function (collection) { return collection[collection.length - 1]; };
console.log("LAST -> ", last(list1));
console.log("LAST -> ", last(list2));
//Otras implementaciones
var last2 = function (collection) { return collection.slice(collection.length - 1)[0]; };
console.log("LAST2 -> ", last2(list1));
console.log("LAST2 -> ", last2(list2));
var last3 = function (collection) {
    return collection.reduce(function (acum, elem, index, lista) {
        if (index === lista.length - 1) {
            acum = lista[index];
        }
        return acum;
    }, undefined);
};
console.log("LAST3 -> ", last3(list1));
console.log("LAST3 -> ", last3(list2));
//*************************************************************************************************************************
// concat
//*************************************************************************************************************************
console.log("***************************** C O N C A T *****************************************");
var concat = function (collection1, collection2) { return __spreadArrays(collection1, collection2); };
console.log("CONCAT -> ", concat(list1, list3));
console.log("CONCAT -> ", concat(list1, list2));
//*************************************************************************************************************************
// concat
//*************************************************************************************************************************
console.log("************************ C O N C A T M U L T I *************************************");
var concatMulti = function () {
    var collections = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        collections[_i] = arguments[_i];
    }
    var outputCollection = [];
    collections.forEach(function (item) {
        outputCollection = __spreadArrays(outputCollection, item);
    });
    return outputCollection;
};
console.log("CONCATMULTI -> ", concatMulti(list1, list3, list4, list5));
console.log("CONCATMULTI -> ", concatMulti(list1, list2, list3));
//Otra implementacion
var concatMulti2 = function () {
    var collections = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        collections[_i] = arguments[_i];
    }
    return collections.reduce(function (concatList, elem) {
        concatList = __spreadArrays(concatList, elem);
        return concatList;
    }, []);
};
console.log("CONCATMULTI2 -> ", concatMulti2(list1, list3, list4, list5));
console.log("CONCATMULTI2 -> ", concatMulti2(list1, list2, list3));
//*************************************************************************************************************************
// clone
//*************************************************************************************************************************
console.log("****************************** C L O N E ******************************************");
function clone(source) {
    return __assign({}, source);
}
var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = clone(a);
console.log("CLONE -> ", b);
console.log("a === b -> ", a === b);
//*************************************************************************************************************************
// merge
//*************************************************************************************************************************
console.log("****************************** M E R G E ******************************************");
function merge(source, target) {
    return __assign(__assign({}, target), source);
}
var x = { name: "Maria", surname: "Ibañez", country: "SPA" };
var y = { name: "Luisa", age: 31, married: true };
console.log("MERGE -> ", merge(x, y));
//*************************************************************************************************************************
// isBookRead
//*************************************************************************************************************************
console.log("************************* I S B O O K R E A D *************************************");
var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
function isBookRead(books, titleToSearch) {
    var askedBook = books.find(function (book) { return book.title === titleToSearch; });
    return Boolean(askedBook && askedBook.isRead);
}
console.log("ISBOOKREAD -> ", isBookRead(books, "Devastación")); // true
console.log("ISBOOKREAD -> ", isBookRead(books, "Canción de hielo y fuego")); // false
console.log("ISBOOKREAD -> ", isBookRead(books, "Los Pilares de la Tierra")); // false
console.log("ISBOOKREAD -> ", isBookRead(books, "Harry Potter y la piedra filosofal")); // true
//Otras implementaciones
function isBookRead2(books, titleToSearch) {
    return books.reduce(function (read, book) {
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
function isBookRead3(books, titleToSearch) {
    return books.some(function (book) { return book.title === titleToSearch && book.isRead; });
}
console.log("ISBOOKREAD3 -> ", isBookRead3(books, "Devastación")); // true
console.log("ISBOOKREAD3 -> ", isBookRead3(books, "Canción de hielo y fuego")); // false
console.log("ISBOOKREAD3 -> ", isBookRead3(books, "Los Pilares de la Tierra")); // false
console.log("ISBOOKREAD3 -> ", isBookRead3(books, "Harry Potter y la piedra filosofal")); // true
//*************************************************************************************************************************
// slotMachine
//*************************************************************************************************************************
console.log("************************ S L O T M A C H I N E ************************************");
var SlotMachine = /** @class */ (function () {
    function SlotMachine() {
        this.coins = 0;
    }
    SlotMachine.prototype.play = function () {
        this.coins++;
        var combination = __spreadArrays(this.generateShot());
        if (combination.every(function (oneShot) { return oneShot; })) {
            console.log("Congratulations!!!. You won " + this.coins + " coin" + (this.coins > 1 ? 's' : '') + "!!");
            this.coins = 0;
        }
        else {
            console.log("Good Luck next time!!!");
        }
    };
    SlotMachine.prototype.generateShot = function () {
        return [this.shot(), this.shot(), this.shot()];
    };
    SlotMachine.prototype.shot = function () {
        return Boolean(Math.floor(Math.random() * 2));
    };
    return SlotMachine;
}());
var machine1 = new SlotMachine();
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
