var validate = new Validation();
var mangSinhVien = []; //Mảng chứa nội dung sinh viên được người dùng thêm vào sau khi nhập liệu


// khai báo sự kiện khi người dùng click vào nút xác nhận
document.querySelector('#btnXacNhan').onclick = function () {
    // Tạo đối tượng chứa dữ liệu nhập từ người dùng
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sv.soDienThoai = document.querySelector('#soDienThoai').value;
    sv.email = document.querySelector('#email').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    console.log('sinh viên', sv);

    // --------------------Kiểm tra dữ liệu hợp lệ --------------------
    //---------------------Kiểm tra rỗng ------------------------------
    // if(sv.maSinhVien.trim() === ''){
    //     document.querySelector('#kiemTraRong-maSinhVien').innerHTML = 'Mã sinh viên không được bỏ trống!';
    //     valid = false;
    // } else {
    //     document.querySelector('#kiemTraRong-maSinhVien').innerHTML = '';
    // }
    // if(sv.tenSinhVien.trim() === ''){
    //     document.querySelector('#kiemTraRong-tenSinhVien').innerHTML = 'Tên sinh viên không được bỏ trống!'
    //     valid = false;
    // } else {
    //     document.querySelector('#kiemTraRong-tenSinhVien').innerHTML = '';
    // }
    // if(sv.email.trim() === ''){
    //     document.querySelector('#kiemTraRong-email').innerHTML = 'Email không được bỏ trống!'
    //     valid = false;
    // } else {
    //     document.querySelector('#kiemTraRong-email').innerHTML = '';
    // }
    // if(sv.soDienThoai.trim() === ''){
    //     document.querySelector('#kiemTraRong-soDienThoai').innerHTML = 'Số điện thoại không được bỏ trống!'
    //     valid = false;
    // } else {
    //     document.querySelector('#kiemTraRong-soDienThoai').innerHTML = '';
    // }
    // if(sv.diemToan.trim() === ''){
    //     document.querySelector('#kiemTraRong-diemToan').innerHTML = 'Điểm toán không được bỏ trống!'
    //     valid = false;
    // } else {
    //     document.querySelector('#kiemTraRong-diemToan').innerHTML = '';
    // }
    // if(sv.diemLy.trim() === ''){
    //     document.querySelector('#kiemTraRong-diemLy').innerHTML = 'Điểm lý không được bỏ trống!'
    //     valid = false;
    // } else {
    //     document.querySelector('#kiemTraRong-diemLy').innerHTML = '';
    // }
    // if(sv.diemHoa.trim() === ''){
    //     document.querySelector('#kiemTraRong-diemHoa').innerHTML = 'Điểm hóa không được bỏ trống!'
    //     valid = false;
    // } else {
    //     document.querySelector('#kiemTraRong-diemHoa').innerHTML = '';
    // }
    // if(sv.diemRenLuyen.trim() === ''){
    //     document.querySelector('#kiemTraRong-diemRenLuyen').innerHTML = 'Điểm rèn luyện không được bỏ trống!'
    //     valid = false;
    // } else {
    //     document.querySelector('#kiemTraRong-diemRenLuyen').innerHTML = '';
    // }

    var valid = true;
    valid &= validate.kiemTraRong(sv.maSinhVien, 'Mã sinh viên', '#kiemTraRong-maSinhVien')
        & validate.kiemTraRong(sv.tenSinhVien, 'Tên sinh viên', '#kiemTraRong-tenSinhVien') &
        validate.kiemTraRong(sv.email, 'Email sinh viên', '#kiemTraRong-email') &
        validate.kiemTraRong(sv.soDienThoai, 'Số điện thoại', '#kiemTraRong-soDienThoai') &
        validate.kiemTraRong(sv.diemToan, 'Điểm toán', '#kiemTraRong-diemToan') &
        validate.kiemTraRong(sv.diemLy, 'Điểm lý', '#kiemTraRong-diemLy') &
        validate.kiemTraRong(sv.diemHoa, 'Điểm hóa', '#kiemTraRong-diemHoa') &
        validate.kiemTraRong(sv.diemRenLuyen, 'Điểm rèn luyện', '#kiemTraRong-diemRenLuyen')

    //kiểm tra định dạng
    valid &= validate.kiemTraTatKyTu(sv.tenSinhVien, 'Tên sinh viên', '#kiemTraDinhDang-tenSinhVien') &
        validate.kiemTraEmail(sv.email, 'Email', '#kiemTraDinhDang-email') &
        validate.kiemTraTatCaLaSo(sv.soDienThoai, 'Số điện thoại', '#kiemTraDinhDang-soDienThoai') &
        validate.kiemTraTatCaLaSo(sv.diemToan, 'Điểm toán', '#kiemTraDinhDang-diemToan') &
        validate.kiemTraTatCaLaSo(sv.diemLy, 'Điểm lý', '#kiemTraDinhDang-diemLy') &
        validate.kiemTraTatCaLaSo(sv.diemHoa, 'Điểm hóa', '#kiemTraDinhDang-diemHoa') &
        validate.kiemTraTatCaLaSo(sv.diemRenLuyen, 'Điểm rèn luyện', '#kiemTraDinhDang-diemRenLuyen');

    //kiểm tra độ dài
    valid &= validate.kiemTraDoDai(sv.maSinhVien, 'Mã sinh viên', '#kiemTraDoDai-maSinhVien', 4, 6);

    //kiểm tra giá trị
    valid &= validate.kiemTraGiaTri(sv.diemToan, 'Điểm toán', '#kiemTraGiaTri-diemToan', 0, 10) &
        validate.kiemTraGiaTri(sv.diemLy, 'Điểm lý', '#kiemTraGiaTri-diemLy', 0, 10) &
        validate.kiemTraGiaTri(sv.diemHoa, 'Điểm hóa', '#kiemTraGiaTri-diemHoa', 0, 10) &
        validate.kiemTraGiaTri(sv.diemRenLuyen, 'Điểm rèn luyện', '#kiemTraGiaTri-diemRenLuyen', 0, 10);

    if (!valid) {
        return;
    }

    // mỗi khi người dùng xác nhận thêm sinh viên vào mảng
    mangSinhVien.push(sv);
    console.log('mảng sinh viên', mangSinhVien);
    //gọi hàm tạo bảng
    renderTableSinhVien(mangSinhVien);
    //gọi hàm lưu mảng sinh viên vào local storage, phải gọi sau thằng push
    luuDuLieuLocalStorage();


    // mangSinhVien.push(sv)
    // hienThi(mangSinhVien)
    // tạo ra thẻ tr
    // var trSinhVien = document.createElement('tr');

    // var tdMaSinhVien = document.createElement('td');
    // tdMaSinhVien.innerHTML = sv.maSinhVien;
    // var tdTenSinhVien = document.createElement('td');
    // tdTenSinhVien.innerHTML = sv.tenSinhVien;
    // var tdEmail = document.createElement('td');
    // tdEmail.innerHTML = sv.email;
    // var tdSoDienThoai = document.createElement('td');
    // tdSoDienThoai.innerHTML = sv.soDienThoai;
    // var tdDiemTrungBinh = document.createElement('td');
    // tdDiemTrungBinh.innerHTML = sv.tinhDiemTrungBinh();
    // var tdXepLoai = document.createElement('td');
    // tdXepLoai.innerHTML = sv.xepLoai();

    // // td chức năng
    // var tdChucNang = document.createElement('td');
    // //tạo button xóa
    // var btnXoaSinhVien = document.createElement('button');
    // btnXoaSinhVien.innerHTML = 'Xóa';
    // btnXoaSinhVien.className='btn btn-danger';
    // btnXoaSinhVien.onclick = function() {
    //     // this trong onclick đại diện cho thẻ đó
    //     // 2 paren là lên thẻ td và tr
    //     this.parentElement.parentElement.remove();

    //     // var theTDCha = btnXoaSinhVien.parentElement;
    //     // var trCha = theTDCha.parentElement;
    //     // trCha.remove();
    // }

    // tdChucNang.appendChild(btnXoaSinhVien);

    // //Đem thẻ td bỏ vào tr
    // trSinhVien.appendChild(tdMaSinhVien);
    // trSinhVien.appendChild(tdTenSinhVien);
    // trSinhVien.appendChild(tdEmail);
    // trSinhVien.appendChild(tdSoDienThoai);
    // trSinhVien.appendChild(tdDiemTrungBinh);
    // trSinhVien.appendChild(tdXepLoai);
    // trSinhVien.appendChild(tdChucNang);

    // //Dom đến thẻ tbody => tr bỏ vào tbody
    // var tbody = document.querySelector('#tableSinhVien');
    // tbody.appendChild(trSinhVien);

}


var renderTableSinhVien = function (arrSinhVien) {
    var noiDungTable = '';
    for (var i = 0; i < arrSinhVien.length; i++) {
        // mỗi lần duyệt lấy ra 1 đối tượng sinh viên từ trong mangSinhVien
        var sv = new SinhVien();
        sv.maSinhVien = arrSinhVien[i].maSinhVien;
        sv.tenSinhVien = arrSinhVien[i].tenSinhVien;
        sv.email = arrSinhVien[i].email;
        sv.soDienThoai = arrSinhVien[i].soDienThoai;
        sv.diemHoa = arrSinhVien[i].diemHoa;
        sv.diemLy = arrSinhVien[i].diemLy;
        sv.diemToan = arrSinhVien[i].diemToan;
        sv.diemRenLuyen = arrSinhVien[i].diemRenLuyen;
        sv.loaiSinhVien = arrSinhVien[i].loaiSinhVien;
        noiDungTable += `
            <tr>
                <td>${sv.maSinhVien}</td>
                <td>${sv.tenSinhVien}</td>
                <td>${sv.email}</td>
                <td>${sv.soDienThoai}</td>
                <td>${sv.tinhDiemTrungBinh()}</td>
                <td>${sv.xepLoai()}</td>
                <td>
                    <button class="btn btn-danger" onclick="xoaSinhVien('${sv.maSinhVien}')">Xóa</button>
                    <button class="btn btn-primary" onclick="chinhSua('${sv.maSinhVien}')">Chỉnh sửa</button>
                </td>
            </tr>    
        `
    }

    //dom đến thẻ tbody gán innerHTML của tbody = noiDungTable
    document.querySelector('#tableSinhVien').innerHTML = noiDungTable;
    console.log(noiDungTable);
}

//định nghĩa hàm xử lý chức năng cho nút chỉnh sửa
var chinhSua = function (maSV) {
    // khi bấm nút chỉnh sửa tắt nút xác nhận và disabled maSinhVien
    document.querySelector('#maSinhVien').disabled = true;
    document.querySelector('#btnXacNhan').disabled = true;
    document.querySelector('#btnLuuThongTin').disabled = false;
    // alert(maSV);
    for (var i = 0; i < mangSinhVien.length; i++) {
        var sv = mangSinhVien[i];
        if (sv.maSinhVien === maSV) {
            //lấy nội dung sinh viên được click gán lên các input phía trên
            document.querySelector('#maSinhVien').value = sv.maSinhVien;
            document.querySelector('#tenSinhVien').value = sv.tenSinhVien;
            document.querySelector('#email').value = sv.email;
            document.querySelector('#soDienThoai').value = sv.soDienThoai;
            document.querySelector('#loaiSinhVien').value = sv.loaiSinhVien;
            document.querySelector('#diemToan').value = sv.diemToan;
            document.querySelector('#diemLy').value = sv.diemLy;
            document.querySelector('#diemHoa').value = sv.diemHoa;
            document.querySelector('#diemRenLuyen').value = sv.diemRenLuyen;
        }
    }
}

//định nghĩa sự kiện cho button#LuuThongTin => sau khi người dùng thay đổi
document.querySelector('#btnLuuThongTin').onclick = function () {
    // tạo đối tượng lấy thông tin người dùng sau khi thay đổi
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sv.soDienThoai = document.querySelector('#soDienThoai').value;
    sv.email = document.querySelector('#email').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    //tìm ra sinh viên trong mảng có mã trùng với mã người dùng sau khi thay đổi
    for(var i=0; i<mangSinhVien.length;i++) {
        var svUpdate = mangSinhVien[i];
        if(svUpdate.maSinhVien === sv.maSinhVien) {
            //cập nhật lại từng giá trị thuộc tính của sinh viên trong mảng
            svUpdate.tenSinhVien = sv.tenSinhVien;
            svUpdate.email = sv.email;
            svUpdate.soDienThoai = sv.soDienThoai;
            svUpdate.diemToan = sv.diemToan;
            svUpdate.diemLy = sv.diemLy;
            svUpdate.diemHoa = sv.diemHoa;
            svUpdate.diemRenLuyen = sv.diemRenLuyen;
            svUpdate.loaiSinhVien = sv.loaiSinhVien;
            renderTableSinhVien(mangSinhVien);
        }
    }
}

//định nghĩa hàm khi nút xóa sinh viên click
var xoaSinhVien = function (maSV) {
    // alert(maSV);
    for (var i = mangSinhVien.length - 1; i >= 0; i--) {
        // mỗi lần duyệt lấy ra 1 sinh viên trong mảng
        var sv = mangSinhVien[i];
        // kiểm tra sinh viên nào trong mảng có maSinhVien === maSV được click thì xóa
        if (sv.maSinhVien === maSV) {
            mangSinhVien.splice(i, 1); //xóa tại vị trí index tìm đc và xóa 1 phần tử
        }
    }
    //gọi hàm tạo lại bảng truyền vào mangSinhVien sau khi xóa
    renderTableSinhVien(mangSinhVien);
    //có thể lưu vào localstorage
    // layDuLieuLocalStorage();
}

var luuDuLieuLocalStorage = function () {
    // biến mangSinhVien thành chuỗi
    var sMangSinhVien = JSON.stringify(mangSinhVien);
    // Lưu dữ liệu vào localstorage bằng phương thức setItem(key,value);
    localStorage.setItem('mangSinhVien', sMangSinhVien);
}

var layDuLieuLocalStorage = function () {
    // kiểm tra xem localstorage có dữ liệu hay không
    if (localStorage.getItem('mangSinhVien')) {
        //dữ liệu đc lấy từ localstorage là dạng chuỗi
        var sMangSinhVien = localStorage.getItem('mangSinhVien');
        // biến chuỗi dữ liệu thành mảng và gán cho biến mangSinhVien
        mangSinhVien = JSON.parse(sMangSinhVien);
        // gọi hàm tạo bảng sinh viên từ mangSinhVien được lấy giá trị từ localstorage
        renderTableSinhVien(mangSinhVien);
    }
}

//gọi hàm load data từ storage khi browser load
layDuLieuLocalStorage();

