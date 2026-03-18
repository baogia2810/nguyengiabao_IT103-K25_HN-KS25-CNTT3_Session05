let n = +prompt("Bạn muốn trả bao nhiêu cuốn sách?");
let books = [];

for (let i = 0; i < n; i++) {
  let name = prompt("Nhập tên cuốn sách thứ " + (i + 1));
  books.push(name);
}

console.log("Tổng số sách đã được trả:", books.length);
console.log("Danh sách sách đã trả:");

for (let i = 0; i < books.length; i++) {
  console.log(i + 1 + ". " + books[i]);
}
