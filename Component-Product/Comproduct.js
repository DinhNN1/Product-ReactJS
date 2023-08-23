import React from 'react';
import './Product.css'
function Comproduct({products, handleDelete, handleEdit}) {


    return (
        <div className="col-10" style={{ marginTop: 20 }}>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Mã Sản Phẩm</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Mã Loại SP</th>
                        <th>Đơn Giá (VNĐ)</th>
                        <th>Ghi Chú</th>
                        
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => ( //map: hàm lặp 
                        <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.maSanPham}</td>
                            <td>{product.tenSanPham}</td>
                            <td>{product.maLoaiSp}</td>
                            <td>{product.donGia}</td>
                            <td>{product.ghiChu}</td>
                            
                            <td>
                                
                                <button type="button" className="btn btn-info" onClick={() => handleEdit(product)}>Sửa</button>
                                <button type="button" className="btn btn-danger" onClick={() => handleDelete(product.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Comproduct;

