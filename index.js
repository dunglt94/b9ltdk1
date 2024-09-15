// Bài 1
function bai1_check() {
    let bai1_a = +document.getElementById("bai1_a").value;
    let bai1_b = +document.getElementById("bai1_b").value;
    let bai1_result = document.getElementById("bai1_result");
    if (bai1_a % bai1_b == 0) {
        bai1_result.innerText = `Result: ${bai1_a} chia hết cho ${bai1_b}`;
    } else {
        bai1_result.innerText = `Result: ${bai1_a} không chia hết cho ${bai1_b}`;
    }
}

// Bài 2
function bai2_check() {
    let bai2_age = +document.getElementById("bai2_age").value;
    let bai2_result = document.getElementById("bai2_result");
    if (bai2_age < 15) {
        bai2_result.innerText = `Result: ${bai2_age} tuổi, không đủ điều kiện vào học lớp 10`;
    } else {
        bai2_result.innerText = `Result: ${bai2_age} tuổi, đủ điều kiện vào học lớp 10`;
    }
}

// Bài 3
function bai3_check() {
    let bai3_number = +document.getElementById("bai3_number").value;
    let bai3_result = document.getElementById("bai3_result");
    if (bai3_number < 0) {
        bai3_result.innerText = `Result: ${bai3_number} là số nhỏ hơn 0`;
    } else {
        if (bai3_number > 0) {
            bai3_result.innerText = `Result: ${bai3_number} là số lớn hơn 0`;
        } else {
            bai3_result.innerText = `Result: Đây là số ${bai3_number}`;
        }

    }
}

//Bài 4
function bai4_check() {
    let bai4_num1 = +document.getElementById("bai4_num1").value;
    let bai4_num2 = +document.getElementById("bai4_num2").value;
    let bai4_num3 = +document.getElementById("bai4_num3").value;
    let bai4_max = bai4_num1;
    let bai4_result = document.getElementById("bai4_result");
    if (bai4_max > bai4_num2 && bai4_max > bai4_num3) {
        bai4_max = bai4_num1;
    } else {
        if (bai4_num2 > bai4_max && bai4_num2 > bai4_num3) {
            bai4_max = bai4_num2;
        } else {
            bai4_max = bai4_num3;
        }
    }
    bai4_result.innerText = `Result: ${bai4_max} là số lớn nhất`;
}

//Bài 5
function bai5_check() {
    let tests = +document.getElementById('bai5_tests').value;
    let mid = +document.getElementById('bai5_mid').value;
    let end = +document.getElementById('bai5_end').value;
    let bai5_avg = (tests + mid + end) / 3;
    let bai5_content = `Điểm trung bình của bạn là: ${bai5_avg}`;
    if (bai5_avg < 5) {
        bai5_content += ' - kém';
    } else {
        if (bai5_avg <= 6) {
            bai5_content += ' - trung bình';
        } else {
            if (bai5_avg <= 7) {
                bai5_content += ' - khá';
            } else {
                if (bai5_avg <= 8) {
                    bai5_content += ' - tốt';
                } else {
                    bai5_content += ' - xuất sắc'
                }
            }
        }
    }
    document.getElementById('bai5_result').innerText = `Result: ${bai5_content};`
}

//Bài 6
function bai6_cal() {
    let bai6_sale = +document.getElementById('bai6_sale').value;
    let bai6_bonus;
    if (bai6_sale <= 100000000) {
        bai6_bonus = bai6_sale * 0.05;
    } else {
        if (bai6_sale <= 300000000) {
            bai6_bonus = bai6_sale * 0.1;
        } else {
            if (bai6_sale <= 500000000) {
                bai6_bonus = bai6_sale * 0.15;
            } else {
                if (bai6_sale < 800000000) {
                    bai6_bonus = bai6_sale * 0.15;
                } else {
                    bai6_bonus = bai6_sale * 0.2;
                }
            }
        }
    }
    document.getElementById('bai6_result').innerText = `Result: Bạn nhận được ${bai6_bonus} đ tiền hoa hồng`;
}

// Bài 7
function bai7_cal() {
    let bai7_minute = +document.getElementById('bai7_minute').value;
    let bai7_Fee = 22000;
    if (bai7_minute <= 50) {
        bai7_Fee += bai7_minute * 600;
    } else {
        if (bai7_minute <= 200) {
            bai7_Fee += (bai7_minute - 50) * 400 + 50 * 600;
        } else {
            bai7_Fee += (bai7_minute - 200) * 200 + 150 * 400 + 50 * 600;
        }
    }
    document.getElementById('bai7_result').innerText = `Result: Cước phí của bạn là ${bai7_Fee} đ`;
}

