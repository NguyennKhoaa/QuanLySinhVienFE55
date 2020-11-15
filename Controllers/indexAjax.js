// --------------------GET: LẤY DỮ LIỆU TỪ SERVER BACKEND CUNG CẤP---------------------------
var svSerVice = new QuanLySinhVienService();

// var loadDuLieuSinhVien = function () {

//     var objectAjax = {
//         url: 'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien', //Đường dẫn đến backend lấy dữ liệu (backend quy định)
//         method: 'GET' //Phương thức do backend quy định
//     }

//     //Dùng thư viện axios gọi về backend cung cấp thông tin cho backend
//     var promise = axios(objectAjax);

    var promise = svSerVice.layThongTinSinhVien();

    //Trường hợp request thành công
    promise.then(function (result) {
        //Function sẽ tự động thực thi ngay khi có dữ liệu
        console.log(result.data)
        // sau khi lấy dữ liệu từ backend => tạo table in ra giao diện
        renderTableSinhVien(result.data);
    })

    //Trường hợp thất bại
    promise.catch(function (er) {
        //Hàm này sẽ được kích hoạt khi request thất bại trả về lỗi
        console.log(err.response.data);
    })


//Viết hàm renderTable để hiển thị dữ liệu ra giao diện
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

//Gọi hàm load ngay khi giao diện vừa load lên
// loadDuLieuSinhVien();

// -----------------------------POST: THÊM MỚI DỮ LIỆU VÀO SERVER THÔNG QUA BACKEND--------------------------------------

document.querySelector('#btnXacNhan').onclick = function () {

    //Lấy thông tin người dùng nhập từ giao diện
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.email = document.querySelector('#email').value;
    sv.soDienThoai = document.querySelector('#soDienThoai').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;

    console.log('sv', sv);
    //Bỏ qua bước kiểm tra dữ liệu đầu vào(validation);

    //Dùng thư viện axios đưa dữ liệu về server
    // var objectAjax = {
    //     url:'',
    //     method:''
    // }
    // var promise = axios({ //Đường dẫn backend cung cấp
    //     url: 'http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien',
    //     method: 'POST', //Phương thức backend cung cấp
    //     data: sv // dữ liệu backend yêu cầu(lưu ý: phải đúng định dạng backend cần có thể là object hoặc array => phải viết đúng tên thuộc tính phân biệt cả hoa và thường)
    // });
    var promise = svSerVice.themSinhVien(sv);

    //Xử lý request thành công
    promise.then(function (result) {
        console.log("Kết quả", result.data);
        //Gọi lại api load table sau khi thêm thành công
        loadDuLieuSinhVien();
    })
    //Xử lý request thất bại
    promise.catch(function (error) {
        console.log(error.response.data)
    })
}

//---------------------------------------DELETE: XÓA DỮ LIỆU SERVER DỰA VÀO API------------------------------

var xoaSinhVien = function (maSinhVien) {

    // alert(maSinhVien);
    //Gọi api request đến backend
    // var promise = axios({
    //     url: 'http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=' + maSinhVien,
    //     method: 'DELETE'
    // });

    var promise = svSerVice.xoaSinhVien(maSinhVien);

    //Xử lý khi xóa thông tin thành công
    promise.then(function (result) {
        console.log(result.data);
        //Gọi hàm api lấy thông tin sinh viên 1 lần nữa từ server sau khi xóa
        loadDuLieuSinhVien();
    });

    //Xử lý khi xóa thông tin thất bại
    promise.catch(function (error) {
        console.log(error);
    })
}

// -----------------------GET: LẤY THÔNG TIN CÓ THAM SỐ THÔNG QUA BACKEND-------------------------------------

var chinhSua = function (maSinhVien) {
    // var promise = axios({
    //     url: 'http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=' + maSinhVien,
    //     method: 'GET'
    // });

    var promise = svSerVice.chinhSuaSinhVien(maSinhVien);
    //Xử lý thành công thì gán dữ liệu từ server lên các thẻ input phía trên
    promise.then(function (result) {
        console.log(result.data);
        var sv = result.data;
        //Dom đến giao diện => gán cho input
        sv.maSinhVien = document.querySelector('#maSinhVien').value = sv.maSinhVien;
        sv.tenSinhVien = document.querySelector('#tenSinhVien').value = sv.tenSinhVien;
        sv.email = document.querySelector('#email').value = sv.email;
        sv.soDienThoai = document.querySelector('#soDienThoai').value = sv.loaiSinhVien;
        sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value = sv.soDienThoai;
        sv.diemToan = document.querySelector('#diemToan').value = sv.diemToan;
        sv.diemLy = document.querySelector('#diemLy').value = sv.diemLy;
        sv.diemHoa = document.querySelector('#diemHoa').value = sv.diemHoa;
        sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value = sv.diemRenLuyen;
    });

    //xử lý thất bại thì log ra lỗi
    promise.catch(function (error) {
        console.log(error);
    })
}

// -----------------------------------PUT: CẬP NHẬT THÔNG TIN SEVER THÔNG QUA API-----------------------------

document.querySelector('#btnLuuThongTin').onclick = function () {

    //lấy thông tin người dùng nhập từ giao diện
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.email = document.querySelector('#email').value;
    sv.soDienThoai = document.querySelector('#soDienThoai').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    //gọi api gửi đúng đường dẫn, phương thức, và định dạng object
    // var promise = axios({
    //     url: 'http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=' + maSinhVien,
    //     method: 'PUT',
    //     data: sv
    // });
    var promise = svSerVice.capNhatThongTinSinhVien(sv);
    //xử lý thành công
    promise.then(function (result){
        console.log(result.data);
        //thành công load lại table
        loadDuLieuSinhVien();
    })
    //xử lý thất bại
    promise.catch(function(error){
        console.log(error);
    })
}