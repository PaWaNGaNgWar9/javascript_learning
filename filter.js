const num=[1,2,3,4,5,6,7,8,8];
const newnum=num.filter((num)=>num>4)
console.log(newnum);
const books = [
  {
    book: "The Alchemist",
    name: "Paulo Coelho",
    year: 1988,
    publisher: "HarperCollins"
  },
  {
    book: "1984",
    name: "George Orwell",
    year: 1949,
    publisher: "Secker & Warburg"
  },
  {
    book: "Rich Dad Poor Dad",
    name: "Robert Kiyosaki",
    year: 1997,
    publisher: "Warner Books"
  }
];
let username = books.filter((bk)=> bk.name=="Paulo Coelho")
console.log(username);
username = books.filter((bk)=>{
    return bk.year==1997;
})
console.log(username);