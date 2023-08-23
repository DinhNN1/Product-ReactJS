import React, { useRef, useEffect } from 'react';

function Modal({onCloseModal, onSubmit, editProduct}) {

    // khai báo useRef hooks để tạo ra các tham chiếu đến các ptu DOM 
    const idRef = useRef(null); 
    const maSanPhamRef = useRef(null);
    const tenSanPhamRef = useRef(null);
    const maLoaiSpRef = useRef(null);
    const donGiaRef = useRef(null);
    const ghiChuRef = useRef(null);

    //Sửa 
    // dùng useEffect hooks để điều chỉnh giá trị của các tham chiếu đến ptu DOm trong biểu mẫu khi editProduct thay đổi, 
    //nếu editProduct tồn tại, tham chiếu đến phần tử DOM sẽ đc cập nhật với gtri từ editProduct
    
     useEffect(() => {
    if (editProduct) { 
        // cập nhật các giá trị của các trường...trong biểu mẫu 
      idRef.current.value = editProduct.id;
      maSanPhamRef.current.value = editProduct.maSanPham;
      tenSanPhamRef.current.value = editProduct.tenSanPham;
      maLoaiSpRef.current.value  = editProduct.maLoaiSp;
      donGiaRef.current.value = editProduct.donGia;
      ghiChuRef.current.value = editProduct.ghiChu;
    }
  }, [editProduct]); // dependencie(phụ thuộc) mà useEfect sẽ theo dõi để quyết định khi nào chạy mã bên trong 
  
  //xử lý biển mẫu khi gửi đi. 
    const handleSubmit = (e) => {
        e.preventDefault();  //ngăn web tải lại trang khi biểu mẫu đc gửi đi 
        const formData = {  //tạo 1 đối tượng formData
        // các trường trong biểu mẫu tham chiếu đến ptu DOM thông qua useRef, trích xuất gtri của chúng qua .curent.value
            id: idRef.current.value, 
            maSanPham: maSanPhamRef.current.value,
            tenSanPham: tenSanPhamRef.current.value,
            maLoaiSp: maLoaiSpRef.current.value,
            donGia: donGiaRef.current.value,
            ghiChu: ghiChuRef.current.value,

        };
        onSubmit(formData); // Gọi hàm onSubmit được truyền từ component cha để xử lý dữ liệu biểu mẫu
        //--------------
        idRef.current.value = '';
        maSanPhamRef.current.value = '';
        tenSanPhamRef.current.value = '';
        maLoaiSpRef.current.value = '';
        donGiaRef.current.value = '';
        ghiChuRef.current.value = '';
    };
    return (
        <>
            <div className="modal" style={{ display: 'block' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">ĐĂNG KÝ THÔNG TIN KHÁCH HÀNG</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onCloseModal} ></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="idSP">ID</label>
                            <input type="number" id="idSP" name="idSP" ref={idRef} />
                            <label htmlFor="maSP">Mã SP:</label>
                            <input type="text" id="maSP" name="maSP" ref={maSanPhamRef} />
                            <label htmlFor="tenSP">Tên SP:</label>
                            <input type="text" id="tenSP" name="tenSP" ref={tenSanPhamRef} />
                            <label htmlFor="maLoai"  >Mã Loại SP:</label>
                            <select id="maLoai" name="maLoai" placeholder='Loại' ref={maLoaiSpRef}>
                                <option value="Loại 1">Loại 1</option>
                                <option value="Loại 2">Loại 2</option>
                                <option value="Loại 3">Loại 3</option>
                            </select> <label htmlFor="donGia">Đơn giá(VNĐ):</label>
                            <input type="number" id="donGia" name="donGia" ref={donGiaRef} />
                            <label htmlFor="ghiChu"  >Ghi chú:</label>
                            <textarea id="ghiChu" name="ghiChu" ref={ghiChuRef} />
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary" > Submit </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </>
    );
}

export default Modal;

