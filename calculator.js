//đưa tham số vào
function cell(value) {
    if (document.getElementById('screens').value == '0') {
        document.getElementById('screens').value = value;
    } else {
        document.getElementById('screens').value += value;

    }
}
//tính (+;-;*;/)bằng hàm eval
function total() {
    try{
        bieuthuc = document.getElementById('screens').value;
        ketqua = eval(bieuthuc);
        document.getElementById('expression').innerHTML = bieuthuc + " =";
        document.getElementById('screens').value = ketqua;
    } catch{
        alert("Sai biểu thức");
    }
}
function dellcharacters() {
    //lấy chuổi để xóa độ dài từng ký tự
    bieuthuc = document.getElementById('screens').value;
    xoa = bieuthuc.substring(0, bieuthuc.length - 1);
    document.getElementById('screens').value = xoa;
}
//xóa hết màng hình
function dellfull() {
    document.getElementById('screens').value = '0';
    document.getElementById('expression').innerHTML = "";
}
//bài toán nân cáo dùng hàm Math
function sin() {
    bieuThuc = document.getElementById('screens').value;
    document.getElementById('screens').value = Math.sin(bieuThuc);
}
function cos() {
    bieuThuc = document.getElementById('screens').value;
    document.getElementById('screens').value = Math.cos(bieuThuc);
}
function tan() {
    bieuThuc = document.getElementById('screens').value;
    document.getElementById('screens').value = Math.tan(bieuThuc);
}
function log() {
    bieuThuc = document.getElementById('screens').value;
    document.getElementById('screens').value = Math.log(bieuThuc);
}
function Rad() {
    bieuThuc = document.getElementById('screens').value;
    document.getElementById('screens').value = Math.random(bieuThuc);
}
//nhập từ bàn phím hiện thị ra hàng hình
function screenKeyDown(e) {
    if (e.key == "Enter") {
        document.getElementById('screens').focus();
        total();
        document.getElementById('expression').focus();
    }
}

function screenLoad(){
    document.getElementById('screens').focus();
}

//     //tạo sự kiện   addEventListener("onkeydown", function)
window.addEventListener("keydown", screenKeyDown)


