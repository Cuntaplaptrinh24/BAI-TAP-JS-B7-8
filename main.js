// tạo mảng lưu dữ liệu
let danhSachSo = []

// DOM tới các thẻ trên HTML
const element = {
    formMang: document.getElementById("formMang"),
    soN: document.getElementById("soN"),
    hienThiMang: document.getElementById("hienThiMang"),
    ketQua: document.getElementById("ketQua"),

    viTri1: document.getElementById("viTri1"),
    viTri2: document.getElementById("viTri2"),

    btnTongSoDuong: document.getElementById("btnTongSoDuong"),
    btnDemSoDuong: document.getElementById("btnDemSoDuong"),
    btnTimSoNhoNhat: document.getElementById("btnTimSoNhoNhat"),
    btnTimSoDuongNhoNhat: document.getElementById("btnTimSoDuongNhoNhat"),
    btnTimSoChanCuoi: document.getElementById("btnTimSoChanCuoi"),
    btnDoiCho: document.getElementById("btnDoiCho"),
    btnSapXepTangDan: document.getElementById("btnSapXepTangDan"),
    btnTimSoNguyenToDauTien: document.getElementById("btnTimSoNguyenToDauTien"),
    btnDemSoNguyen: document.getElementById("btnDemSoNguyen"),
    btnSoSanhAmDuong: document.getElementById("btnSoSanhAmDuong"),

    danhSachNutMo: document.querySelectorAll(".btnMo")
}

// hàm hiển thị mảng
const renderMang = () => {
    element.hienThiMang.innerText = danhSachSo.length
        ? `👉 ${danhSachSo.join(", ")}`
        : "👉"
}

// hàm hiển thị kết quả
const showResult = (message) => {
    element.ketQua.innerText = message
}

// hàm kiểm tra mảng rỗng
const checkArrayEmpty = () => {
    if (danhSachSo.length === 0) {
        showResult("Vui lòng nhập số vào mảng trước")
        return true
    }
    return false
}

// thêm số vào mảng
element.formMang.addEventListener("submit", (event) => {
    event.preventDefault()

    const giaTri = Number(element.soN.value)

    if (element.soN.value.trim() === "") {
        showResult("Vui lòng nhập số")
        return
    }

    danhSachSo.push(giaTri)
    renderMang()
    showResult(`Đã thêm số ${giaTri} vào mảng`)
    element.soN.value = ""
})

// 1. tổng số dương
element.btnTongSoDuong.addEventListener("click", () => {
    if (checkArrayEmpty()) return

    let tong = 0
    for (let i = 0; i < danhSachSo.length; i++) {
        if (danhSachSo[i] > 0) {
            tong += danhSachSo[i]
        }
    }
    showResult(`Tổng số dương là: ${tong}`)
})

// 2. đếm số dương
element.btnDemSoDuong.addEventListener("click", () => {
    if (checkArrayEmpty()) return

    let count = 0
    for (let i = 0; i < danhSachSo.length; i++) {
        if (danhSachSo[i] > 0) {
            count++
        }
    }
    showResult(`Số dương có trong mảng là: ${count}`)
})

// 3. tìm số nhỏ nhất
element.btnTimSoNhoNhat.addEventListener("click", () => {
    if (checkArrayEmpty()) return

    let min = danhSachSo[0]
    for (let i = 1; i < danhSachSo.length; i++) {
        if (danhSachSo[i] < min) {
            min = danhSachSo[i]
        }
    }
    showResult(`Số nhỏ nhất là: ${min}`)
})

// 4. tìm số dương nhỏ nhất
element.btnTimSoDuongNhoNhat.addEventListener("click", () => {
    if (checkArrayEmpty()) return

    let soDuongNhoNhat = null

    for (let i = 0; i < danhSachSo.length; i++) {
        if (danhSachSo[i] > 0) {
            if (soDuongNhoNhat === null || danhSachSo[i] < soDuongNhoNhat) {
                soDuongNhoNhat = danhSachSo[i]
            }
        }
    }

    showResult(
        soDuongNhoNhat === null
            ? "Không có số dương trong mảng"
            : `Số dương nhỏ nhất là: ${soDuongNhoNhat}`
    )
})

// 5. tìm số chẵn cuối cùng
element.btnTimSoChanCuoi.addEventListener("click", () => {
    if (checkArrayEmpty()) return

    let soChanCuoi = -1

    for (let i = danhSachSo.length - 1; i >= 0; i--) {
        if (danhSachSo[i] % 2 === 0) {
            soChanCuoi = danhSachSo[i]
            break
        }
    }

    showResult(`Số chẵn cuối cùng là: ${soChanCuoi}`)
})

// 6. đổi chỗ
element.btnDoiCho.addEventListener("click", () => {
    if (checkArrayEmpty()) return

    const viTri1 = Number(element.viTri1.value)
    const viTri2 = Number(element.viTri2.value)

    if (element.viTri1.value.trim() === "" || element.viTri2.value.trim() === "") {
        showResult("Vui lòng nhập đủ 2 vị trí")
        return
    }

    if (
        viTri1 < 0 ||
        viTri2 < 0 ||
        viTri1 >= danhSachSo.length ||
        viTri2 >= danhSachSo.length
    ) {
        showResult("Vị trí không hợp lệ")
        return
    }

    let temp = danhSachSo[viTri1]
    danhSachSo[viTri1] = danhSachSo[viTri2]
    danhSachSo[viTri2] = temp

    renderMang()
    showResult(`Đã đổi chỗ vị trí ${viTri1} và ${viTri2}`)
})

// 7. sắp xếp tăng dần
element.btnSapXepTangDan.addEventListener("click", () => {
    if (checkArrayEmpty()) return

    for (let i = 0; i < danhSachSo.length - 1; i++) {
        for (let j = i + 1; j < danhSachSo.length; j++) {
            if (danhSachSo[i] > danhSachSo[j]) {
                let temp = danhSachSo[i]
                danhSachSo[i] = danhSachSo[j]
                danhSachSo[j] = temp
            }
        }
    }

    renderMang()
    showResult("Đã sắp xếp tăng dần")
})

// kiểm tra số nguyên tố
const isPrime = (number) => {
    if (number < 2 || !Number.isInteger(number)) return false

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}

// 8. tìm số nguyên tố đầu tiên
element.btnTimSoNguyenToDauTien.addEventListener("click", () => {
    if (checkArrayEmpty()) return

    let ketQua = -1

    for (let i = 0; i < danhSachSo.length; i++) {
        if (isPrime(danhSachSo[i])) {
            ketQua = danhSachSo[i]
            break
        }
    }

    showResult(`Số nguyên tố đầu tiên là: ${ketQua}`)
})

// 9. đếm số nguyên
element.btnDemSoNguyen.addEventListener("click", () => {
    if (checkArrayEmpty()) return

    let count = 0

    for (let i = 0; i < danhSachSo.length; i++) {
        if (Number.isInteger(danhSachSo[i])) {
            count++
        }
    }

    showResult(`Có ${count} số nguyên trong mảng`)
})

// 10. so sánh số lượng âm dương
element.btnSoSanhAmDuong.addEventListener("click", () => {
    if (checkArrayEmpty()) return

    let soAm = 0
    let soDuong = 0

    for (let i = 0; i < danhSachSo.length; i++) {
        if (danhSachSo[i] > 0) soDuong++
        if (danhSachSo[i] < 0) soAm++
    }

    if (soDuong > soAm) {
        showResult(`Số dương nhiều hơn số âm (${soDuong} > ${soAm})`)
    } else if (soAm > soDuong) {
        showResult(`Số âm nhiều hơn số dương (${soAm} > ${soDuong})`)
    } else {
        showResult(`Số âm bằng số dương (${soAm} = ${soDuong})`)
    }
})

// mở đóng từng bài
element.danhSachNutMo.forEach((button) => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target")
        const content = document.getElementById(targetId)
        content.classList.toggle("hidden")
    })
})

renderMang()