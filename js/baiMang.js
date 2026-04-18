// BÀI TẬP MẢNG
// làm theo style object DOM + tách hàm xử lý giống form code đã gửi

const element = {
    inputSoN: document.getElementById("soN"),
    btnThemSo: document.getElementById("btnThemSo"),
    mangHienTai: document.getElementById("mangHienTai"),
    errorSoN: document.getElementById("errorSoN"),

    inputViTri1: document.getElementById("viTri1"),
    inputViTri2: document.getElementById("viTri2"),
    errorViTri1: document.getElementById("errorViTri1"),
    errorViTri2: document.getElementById("errorViTri2"),

    btnTongSoDuong: document.getElementById("btnTongSoDuong"),
    btnDemSoDuong: document.getElementById("btnDemSoDuong"),
    btnTimSoNhoNhat: document.getElementById("btnTimSoNhoNhat"),
    btnTimSoDuongNhoNhat: document.getElementById("btnTimSoDuongNhoNhat"),
    btnTimSoChanCuoiCung: document.getElementById("btnTimSoChanCuoiCung"),
    btnDoiCho: document.getElementById("btnDoiCho"),
    btnSapXepTangDan: document.getElementById("btnSapXepTangDan"),
    btnTimSoNguyenToDauTien: document.getElementById("btnTimSoNguyenToDauTien"),
    btnDemSoNguyen: document.getElementById("btnDemSoNguyen"),
    btnSoSanhAmDuong: document.getElementById("btnSoSanhAmDuong"),

    ketQuaTongSoDuong: document.getElementById("ketQuaTongSoDuong"),
    ketQuaDemSoDuong: document.getElementById("ketQuaDemSoDuong"),
    ketQuaTimSoNhoNhat: document.getElementById("ketQuaTimSoNhoNhat"),
    ketQuaTimSoDuongNhoNhat: document.getElementById("ketQuaTimSoDuongNhoNhat"),
    ketQuaTimSoChanCuoiCung: document.getElementById("ketQuaTimSoChanCuoiCung"),
    ketQuaDoiCho: document.getElementById("ketQuaDoiCho"),
    ketQuaSapXepTangDan: document.getElementById("ketQuaSapXepTangDan"),
    ketQuaTimSoNguyenToDauTien: document.getElementById("ketQuaTimSoNguyenToDauTien"),
    ketQuaDemSoNguyen: document.getElementById("ketQuaDemSoNguyen"),
    ketQuaSoSanhAmDuong: document.getElementById("ketQuaSoSanhAmDuong")
}

const danhSachSo = []

const hideError = (errElement) => {
    errElement.innerText = ""
    errElement.classList.add("hidden")
}

const showError = (errElement, message) => {
    errElement.innerText = message
    errElement.classList.remove("hidden")
}

const renderMang = () => {
    if (danhSachSo.length === 0) {
        element.mangHienTai.innerText = "Chưa có số nào trong mảng"
        return
    }

    element.mangHienTai.innerText = danhSachSo.join(", ")
}

const kiemTraMangRong = () => {
    if (danhSachSo.length === 0) {
        alert("Vui lòng thêm số vào mảng trước")
        return true
    }

    return false
}

const validationSoN = (soN) => {
    let isValid = true
    hideError(element.errorSoN)

    if (isNaN(soN)) {
        showError(element.errorSoN, "Vui lòng nhập số hợp lệ")
        isValid = false
    }

    return isValid
}

const validationViTri = (viTri1, viTri2) => {
    let isValid = true

    hideError(element.errorViTri1)
    hideError(element.errorViTri2)

    if (!Number.isInteger(viTri1) || viTri1 < 0 || viTri1 >= danhSachSo.length) {
        showError(element.errorViTri1, `Vị trí 1 phải từ 0 đến ${danhSachSo.length - 1}`)
        isValid = false
    }

    if (!Number.isInteger(viTri2) || viTri2 < 0 || viTri2 >= danhSachSo.length) {
        showError(element.errorViTri2, `Vị trí 2 phải từ 0 đến ${danhSachSo.length - 1}`)
        isValid = false
    }

    return isValid
}

const laSoNguyenTo = (n) => {
    if (!Number.isInteger(n) || n < 2) {
        return false
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }

    return true
}

// thêm số vào mảng

element.btnThemSo.addEventListener("click", () => {
    const soN = Number(element.inputSoN.value)
    const isValid = validationSoN(soN)

    if (!isValid) {
        return
    }

    danhSachSo.push(soN)
    renderMang()
    element.inputSoN.value = ""
    hideError(element.errorSoN)
})

// 1. tổng số dương

element.btnTongSoDuong.addEventListener("click", () => {
    if (kiemTraMangRong()) {
        return
    }

    let tongSoDuong = 0

    for (let i = 0; i < danhSachSo.length; i++) {
        if (danhSachSo[i] > 0) {
            tongSoDuong += danhSachSo[i]
        }
    }

    element.ketQuaTongSoDuong.innerText = `Tổng số dương là: ${tongSoDuong}`
})

// 2. đếm số dương

element.btnDemSoDuong.addEventListener("click", () => {
    if (kiemTraMangRong()) {
        return
    }

    let demSoDuong = 0

    for (let i = 0; i < danhSachSo.length; i++) {
        if (danhSachSo[i] > 0) {
            demSoDuong++
        }
    }

    element.ketQuaDemSoDuong.innerText = `Số lượng số dương là: ${demSoDuong}`
})

// 3. tìm số nhỏ nhất

element.btnTimSoNhoNhat.addEventListener("click", () => {
    if (kiemTraMangRong()) {
        return
    }

    let soNhoNhat = danhSachSo[0]

    for (let i = 1; i < danhSachSo.length; i++) {
        if (danhSachSo[i] < soNhoNhat) {
            soNhoNhat = danhSachSo[i]
        }
    }

    element.ketQuaTimSoNhoNhat.innerText = `Số nhỏ nhất là: ${soNhoNhat}`
})

// 4. tìm số dương nhỏ nhất

element.btnTimSoDuongNhoNhat.addEventListener("click", () => {
    if (kiemTraMangRong()) {
        return
    }

    let soDuongNhoNhat = -1

    // tìm số dương đầu tiên làm mốc
    for (let i = 0; i < danhSachSo.length; i++) {
        if (danhSachSo[i] > 0) {
            soDuongNhoNhat = danhSachSo[i]
            break
        }
    }

    // nếu không có số dương
    if (soDuongNhoNhat === -1) {
        element.ketQuaTimSoDuongNhoNhat.innerText = "Không có số dương trong mảng"
        return
    }

    // tìm số dương nhỏ nhất
    for (let i = 0; i < danhSachSo.length; i++) {
        if (danhSachSo[i] > 0 && danhSachSo[i] < soDuongNhoNhat) {
            soDuongNhoNhat = danhSachSo[i]
        }
    }

    element.ketQuaTimSoDuongNhoNhat.innerText = `Số dương nhỏ nhất là: ${soDuongNhoNhat}`
})

// 5. tìm số chẵn cuối cùng

element.btnTimSoChanCuoiCung.addEventListener("click", () => {
    if (kiemTraMangRong()) {
        return
    }

    let soChanCuoiCung = -1

    for (let i = 0; i < danhSachSo.length; i++) {
        if (danhSachSo[i] % 2 === 0) {
            soChanCuoiCung = danhSachSo[i]
        }
    }

    element.ketQuaTimSoChanCuoiCung.innerText = `Số chẵn cuối cùng là: ${soChanCuoiCung}`
})

// 6. đổi chỗ

element.btnDoiCho.addEventListener("click", () => {
    if (kiemTraMangRong()) {
        return
    }

    const viTri1 = Number(element.inputViTri1.value)
    const viTri2 = Number(element.inputViTri2.value)

    const isValid = validationViTri(viTri1, viTri2)
    if (!isValid) {
        return
    }

    const bienTam = danhSachSo[viTri1]
    danhSachSo[viTri1] = danhSachSo[viTri2]
    danhSachSo[viTri2] = bienTam

    renderMang()
    element.ketQuaDoiCho.innerText = `Mảng sau khi đổi chỗ: ${danhSachSo.join(", ")}`
})

// 7. sắp xếp tăng dần

element.btnSapXepTangDan.addEventListener("click", () => {
    if (kiemTraMangRong()) {
        return
    }

    for (let i = 0; i < danhSachSo.length - 1; i++) {
        for (let j = i + 1; j < danhSachSo.length; j++) {
            if (danhSachSo[i] > danhSachSo[j]) {
                const bienTam = danhSachSo[i]
                danhSachSo[i] = danhSachSo[j]
                danhSachSo[j] = bienTam
            }
        }
    }

    renderMang()
    element.ketQuaSapXepTangDan.innerText = `Mảng sau khi sắp xếp tăng dần: ${danhSachSo.join(", ")}`
})

// 8. tìm số nguyên tố đầu tiên

element.btnTimSoNguyenToDauTien.addEventListener("click", () => {
    if (kiemTraMangRong()) {
        return
    }

    let soNguyenToDauTien = -1

    for (let i = 0; i < danhSachSo.length; i++) {
        if (laSoNguyenTo(danhSachSo[i])) {
            soNguyenToDauTien = danhSachSo[i]
            break
        }
    }

    element.ketQuaTimSoNguyenToDauTien.innerText = `Số nguyên tố đầu tiên là: ${soNguyenToDauTien}`
})

// 9. đếm số nguyên

element.btnDemSoNguyen.addEventListener("click", () => {
    if (kiemTraMangRong()) {
        return
    }

    let demSoNguyen = 0

    for (let i = 0; i < danhSachSo.length; i++) {
        if (Number.isInteger(danhSachSo[i])) {
            demSoNguyen++
        }
    }

    element.ketQuaDemSoNguyen.innerText = `Số lượng số nguyên là: ${demSoNguyen}`
})

// 10. so sánh số lượng số âm và dương

element.btnSoSanhAmDuong.addEventListener("click", () => {
    if (kiemTraMangRong()) {
        return
    }

    let demSoAm = 0
    let demSoDuong = 0

    for (let i = 0; i < danhSachSo.length; i++) {
        if (danhSachSo[i] > 0) {
            demSoDuong++
        }

        if (danhSachSo[i] < 0) {
            demSoAm++
        }
    }

    let ketQua = ""

    if (demSoDuong > demSoAm) {
        ketQua = "Số dương nhiều hơn số âm"
    } else if (demSoDuong < demSoAm) {
        ketQua = "Số âm nhiều hơn số dương"
    } else {
        ketQua = "Số âm và số dương bằng nhau"
    }

    element.ketQuaSoSanhAmDuong.innerText = `${ketQua} (${demSoDuong} số dương / ${demSoAm} số âm)`
})
