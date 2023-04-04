this.book = "Alchemist";
this.person = {
    book: "The Monk who sold his Ferrari"
}
let Parth = {
    book: "Doglapan"
}

const namePrinter = function (rating){
    console.log(`Name of the book is ${this.book}.`);
    const review = () => {
        console.log(`Rating of ${this.book}: ${rating}`);
    }
    review();
}



namePrinter.call(this, 8);
namePrinter.call(this.person, 7);
namePrinter.call(Parth, 10);