
var arrNum = [12, 19, 20, 17, 41, 38, 45, -43, -35, -21, -18];
domID('addNumber').onclick = function () {//thêm ở đầu mảng
    var num = themSo('num');
    arrNum.push(num);
    domID('ketQua').innerHTML = arrNum;
}

domID('deleteNumber').onclick = function () {//xoá số ở cuối mảng 
    arrNum.pop();
    domID('ketQua').innerHTML = arrNum;
}
// bài 1
document.getElementById('tinhTong').onclick = function () {
    var tongSoDuong = 0;//output
    //process
    var soDuong = [];
    if (checkNegativeNumber(soDuong, arrNum)) {
        tongSoDuong = total(soDuong);
    }
    domID('ketQua1').innerHTML = 'Tổng số dương: ' + tongSoDuong;
}
//bài 2
document.getElementById('demSo').onclick = function () {
    var cacSoDuong = 0;//output

    // var soDuong = [];
    // if (checkNegativeNumber(soDuong, arrNum)) {
    //     //tìm số dương (với hàm có sẵn ở bài 1)sau đó đếm số lượng mảng soDuong[mảng mới]
    //     cacSoDuong = nightNo(soDuong);
    // }
    cacSoDuong = positive(arrNum);

    domID('ketQua2').innerHTML = ' Số dương: ' + cacSoDuong;
}
//bài 3
document.getElementById('soNhoNhat').onclick = function () {
    var soNhoNhat = 0;//output
    soNhoNhat = smallestNumber(arrNum);
    domID('ketQua3').innerHTML = 'Số nhỏ nhất: ' + soNhoNhat;
}
//bài 4
document.getElementById('soDuongNhoNhat').onclick = function () {
    var soDuongNhoNhat = 0;//output
    var soDuong = [];

    if (checkNegativeNumber(soDuong, arrNum)) {
        soDuongNhoNhat = smallestNumber(soDuong);
    }
    domID('ketQua4').innerHTML = 'Số dương nhỏ nhất: ' + soDuongNhoNhat;
}
//bài 5
document.getElementById('timSoChan').onclick = function () {
    var soChanCuoi = 0;//output
    soChanCuoi = evenNumber(arrNum);
    domID('ketQua5').innerHTML = 'Số chẵn cuối cùng: ' + soChanCuoi;
}
//bài 6
document.getElementById('doiCho').onclick = function () {
    var viTri1 = domID('viTri1').value;
    var viTri2 = domID('viTri2').value;
    //prosess
    arrNum = changePosition(arrNum, viTri1, viTri2);
    domID('ketQua6').innerHTML = 'Mảng sau khi đổi: ' + arrNum;
}
//bài 7
document.getElementById('tangDan').onclick = function () {
    var arrMinEndMax = '';//output
    arrMinEndMax = arrNum.sort();//hàm của JS sắp sếp các số
    domID('ketQua7').innerHTML = 'Mảng sau khi sắp xếp: ' + arrMinEndMax;
}
//bài 8
document.getElementById('soNTDau').onclick = function () {
    var soNTDau = 0;//output
    soNTDau = firstPrimeNumber(arrNum);
    domID('ketQua8').innerHTML = soNTDau;
}
{//bài 9
    var arrayBai9 = [];
    domID('bai9ThemSo').onclick = function () {
        //input
        var arrayPushBai9 = themSo('bai9NhapSo');
        //output
        arrayBai9.push(arrayPushBai9);
        domID('ketQua1So9').innerHTML = arrayBai9;
    }
    domID('demSN').onclick = function () {
        var soNguyen = 0;//output
        soNguyen = countIntegers(arrayBai9);

        domID('ketQua2So9').innerHTML = 'Số nguyên: ' + soNguyen;
    }
}
//bài 10
domID('soSanh').onclick = function () {
    var output = '';
    //process
    var soAm = 0;
    var soDuong = 0;

    soAm = nagative(arrNum);
    soDuong = positive(arrNum);

    if (soDuong > soAm) {
        output = 'Số dương > Số âm';
    } else if (soAm > soDuong) {
        output = 'Số âm > Số dương';
    } else {
        output = 'Số dương = Số âm'
    }
    domID('ketQua10').innerHTML = output;
}