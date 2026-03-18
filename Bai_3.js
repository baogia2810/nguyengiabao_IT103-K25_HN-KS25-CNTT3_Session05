let n = +prompt("Có bao nhiêu loại sách cần kiểm tra?");

let codes = [];
let names = [];
let quantities = [];

for (let i = 0; i < n; i++) {
  let code = prompt("Nhập mã sách:");
  let name = prompt("Nhập tên sách:");
  let qty = +prompt("Nhập số lượng:");

  codes.push(code);
  names.push(name);
  quantities.push(qty);
}

console.log("Danh sách sách:");

for (let i = 0; i < n; i++) {
  console.log(
    i +
      1 +
      ". Mã: " +
      codes[i] +
      " - Tên: " +
      names[i] +
      " - Còn: " +
      quantities[i],
  );
}

let lowStock = 0;

for (let i = 0; i < n; i++) {
  if (quantities[i] < 5) {
    lowStock++;
  }
}

console.log("Số sách tồn kho < 5:", lowStock);

console.log("Sách hết hàng:");

for (let i = 0; i < n; i++) {
  if (quantities[i] === 0) {
    console.log(codes[i]);
  }
}
