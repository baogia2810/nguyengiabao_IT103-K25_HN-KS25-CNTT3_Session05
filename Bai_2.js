let n = +prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn?");
let books = [];

for (let i = 0; i < n; i++) {
  let name = prompt("Nhập tên sách bị trả muộn thứ " + (i + 1));
  books.push(name);
}

console.log("Tổng số sách bị trả muộn:", books.length);
console.log("Danh sách sách bị trả muộn:");

for (let i = 0; i < books.length; i++) {
  console.log(i + 1 + ". " + books[i]);
}

let count = 0;

for (let i = 0; i < books.length; i++) {
  if (books[i].length > 20) {
    count++;
  }
}

console.log("Số lượng sách có tên dài hơn 20 ký tự:", count);
