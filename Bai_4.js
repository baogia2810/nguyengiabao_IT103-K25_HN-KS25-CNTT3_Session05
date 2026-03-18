let n = +prompt("Có bao nhiêu sách cần kiểm tra?");

let codes = [];
let names = [];
let status = [];

for (let i = 0; i < n; i++) {
  let code = prompt("Nhập mã sách:");
  let name = prompt("Nhập tên sách:");
  let stt = +prompt("Tình trạng (1:Hỏng nhẹ 2:Hỏng nặng 3:Cần sửa)");

  codes.push(code);
  names.push(name);
  status.push(stt);
}

let choice;

do {
  choice = +prompt("1.Sửa  2.Xóa  0.Thoát");

  if (choice === 1) {
    let codeEdit = prompt("Nhập mã sách cần sửa:");

    for (let i = 0; i < codes.length; i++) {
      if (codes[i] === codeEdit) {
        let newStatus = +prompt(
          "Nhập trạng thái mới (4:Đã sửa xong 5:Loại bỏ)",
        );
        status[i] = newStatus;
      }
    }
  }

  if (choice === 2) {
    let codeDelete = prompt("Nhập mã sách cần xóa:");

    for (let i = 0; i < codes.length; i++) {
      if (codes[i] === codeDelete) {
        codes.splice(i, 1);
        names.splice(i, 1);
        status.splice(i, 1);
        break;
      }
    }
  }
} while (choice !== 0);

let daSuaXong = 0;
let loaiBo = 0;

for (let i = 0; i < status.length; i++) {
  if (status[i] === 4) {
    daSuaXong++;
  }
  if (status[i] === 5) {
    loaiBo++;
  }
}

console.log("Tổng số sách còn lại:", codes.length);
console.log('Số sách đã "Đã sửa xong":', daSuaXong);
console.log('Số sách "Loại bỏ":', loaiBo);

console.log("Danh sách các sách còn lại:");

for (let i = 0; i < codes.length; i++) {
  console.log(i + 1 + ". " + codes[i] + " - " + names[i] + " - " + status[i]);
}
