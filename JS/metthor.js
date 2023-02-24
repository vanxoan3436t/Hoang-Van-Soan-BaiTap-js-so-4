{//Thêm class cho thẻ span
    var classSpanHTML = document.querySelectorAll('.shadows-self-build h3 span');
    for (var index = 0; index < classSpanHTML.length; index++) {
        classSpanHTML[index].className = 'badge bg-primary m-3 '
    }
}
//Viết hàm trả về 1 thẻ sau khi dom = id
function domID(id) {
    return document.getElementById(id);
}
//Viết hàm trả về 1 thẻ sau khi dom = querySelector
function domClassName(className) {
    return document.querySelector(className);
}

function themSo(num) {//hàm để dom tới các bài dưới ngắn gọn
    var soCanThem = Number(document.getElementById(num).value);
    return soCanThem;
}
{//bài 1 
    function checkNegativeNumber(positive, array) {//  positive :giá trị sô dương cần lấy 
        var output = [];
        for (var index = 0; index < array.length; index++) {
            if (array[index] > 0) {//lớn hơn 0 thì có nghĩa nó là số dương
                positive.push(array[index]);//đúng thì push lên mảng 
            }
        }
        return output;
    }
    function total(array) {//tính tổng
        var output = 0;
        for (var index = 0; index < array.length; index += 1) {
            output += array[index];
        }
        return output;
    }
}
//bài 2
function nightNo(array) {//hàm đếm length
    var output = 0;
    for (var index = 0; index <= array.length; index++) {
        output = array.length;

    }
    return output;
}
//bài 3 , bài 4
function smallestNumber(array) {
    var output = Infinity;
    for (var index = 0; index <= array.length; index++) {

        if (array[index] < output) {
            output = array[index];
        }
    }
    return output;
}
//bài 5
function evenNumber(array) {//evenNumbe : số chẵn 
    var output = 0;
    for (var index = 0; index <= array.length; index++) {
        if (array[index] % 2 === 0) {
            output = array[index]
        }
    }
    return output;
}

// bài 6
function changePosition(array, from, to) {//đổi vị trí
    array.splice(to, 0, array.splice(from, 1)[0])
    return array

}

{//bài 8
    function isprime(n) {//hàm tìm số nguyên tố ; n = array[index] 
        var output = true;
        if (n < 2) {
            return output = 0;
        }
        var i = 2;//ước
        while (i < n) {
            if (n % i == 0) {
                output = false;
                break;
            }
            i++;
        }
        return output;
    }

    function firstPrimeNumber(array) {// hàm tìm số nguyên tố đầu tiên
        var output = 0;
        var newArray = [];
        for (var index = 0; index <= array.length; index++) {
            if (isprime(array[index]) == true) {
                newArray.push(array[index]);
            }
        }
        output = newArray[0];
        return output;
    }
}
//bài 9
function countIntegers(array) {//đếm số nguyên
    var output = 0;
    var interger = 0;//số nguyên
    for (index = 0; index <= array.length; index++) {
        if (interger = Number.isInteger(array[index])) {
            output += interger;
        }
    }
    return output;
}

{ //bài 10
    function nagative(array) {//tìm số âm
        return array.filter((cur) => cur < 0).length;
    }
    function positive(array) {//tìm số dương
        return array.filter((cur) => cur > 0).length;
    }
}