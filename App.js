import React, { useState } from 'react';
import './App.css';
import Comproduct from './Component-Product/Comproduct';
import Modal from './Component-Product/Modal';
import NavBar from './Component-Product/NavBar';
import Header from './Component-Product/Header';

function App() {
  const [successMessage, setSuccessMessage] = useState(''); // khai báo 1 biến trạng thái successMessage và 1 hàm set...để quản lý giá tri của biến trạng thái 

  // show form Modal
  const [showForm, setShowForm] = useState(false) // tạo 1 biến trạng thái showForm, với giá trị ban đầu là false(kiểm soát việc ẩn/ hiện form)
  const toggleForm = () => {  // hàm toggleForm  để thay đổi giá trị của showForm
    setShowForm(!showForm); // Sau khi đc gọi nó sẽ đảo ngược giá trị của showForm 
  };
// Thêm sp-------------------------------------------------------------------------------
  const [products, setProducts] = useState([]); // gọi biến trạng thái products
  const addProduct = (product) => {  // gọi hàm Addproduct để thêm sp mới là product vào danh sách
    setProducts([...products, product]); // thêm product vào cuối ds, ... sao chép ds cũ 

    setSuccessMessage('Thêm mới thành công'); // đặt thông báo vào biến successMessage
    setTimeout(() => {   // set time xóa thông báo sau 3s
      setSuccessMessage(''); // biến successMessage   về giá trị rỗng, tbao sẽ mất đi  
    }, 3000);
    toggleForm(); // gọi hàm toggleForm để ẩn form sau khi đã thêm thành công 
  };
// Xóa-------------------------------------------------------------------------------
  const handleDelete = (id) => { // gọi hàm để xóa sp với tham số là ID
    const updatedProducts = products.filter((product) => product.id !== id); // dùng filter để  lọc ra những sp có id khác với id muốn xóa  -> tạo ra 1 ds chứa các sp có id khác với id muốn xóa 
    setProducts(updatedProducts); // cập nhật lại ds k có sp có ib bị xóa 

    setSuccessMessage('Xóa thành công');
    setTimeout(() => {  
      setSuccessMessage('');
    }, 3000);
  };

// ------------------Sửa-------------------------------------------------------------------------------
  const [editProduct, setEditProduct] = useState(null); // tạo 1 biến trạng thái có giá trị ban đầu là null 
  const handleEdit = (product) => {  //gọi hàm handleEdit với tham số là product
    setEditProduct(product);  // Gọi hàm setEdit để cập nhật trạng thái cho product bằng thông tin sp muốn sửa
    setShowForm(true); // hiển thị form sửa lên giao diện 
  };
  const handleEditSubmit = (editedProduct) => {  // tạo hàm handleEditSubmit với tham số là editedProduct để cập nhật sp sau khi sửa 
    const updatedProducts = products.map((product) => product.id === editedProduct.id ? editedProduct : product); 
    //  map: áp dụng lên mảng products,   phương thức map sẽ tạo ra mảng mới bằng cách thực hiện 1 phép biến đổi trên từng phần tử của  mảng ban đầu   
    setProducts(updatedProducts); // cập nhật ds sau khi chỉnh sửa 

    setSuccessMessage('Sửa thành công');
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);

    setEditProduct(null); // Đặt editProduct về null sau khi cập nhật thành công
    setShowForm(false); // Đóng form sửa thông tin
  };

  // Search-------------------------------------------------------------------------------
  const [searchResults, setSearchResults] = useState([]); // tạo biến trạng thái searchResult và hàm cập nhật giá trị set...
  const handleSearch = (searchTerm) => {  // gọi hàm handleSearch để thực hiện tìm kiếm  với tham số là searchTerm
const filteredStudents = products.filter(student => student.tenSanPham.includes(searchTerm));  
// dùng filter trên mảng products  để lọc ra các phần tử thỏa mãn điều kiện, searchTerm đại diện cho từ khóa tìm kiếm nhập vào 
    setSearchResults(filteredStudents); // cập nhất giá trị của biến trạng thái searchResult bằng kq đã tìm kiếm 
  };

  return (
    <>
      <Header toggleForm={toggleForm} handleSearch={handleSearch} />
      <div className='d-flex'>
        <NavBar />
        <Comproduct
          products={searchResults.length > 0 ? searchResults : products}
          //nếu kq tìm kiếm có ít nhất 1sp thì searchResult sẽ đc truyền vào products props của component và ngược lại
          handleDelete={handleDelete} handleEdit={handleEdit} />
      </div>
      <div>

        {showForm && (
          <Modal
            editProduct={editProduct}
            onSubmit={editProduct ? handleEditSubmit : addProduct}
            // nếu editProduct có giá trị thì sẽ gọi hàm handle.. để chỉnh sửa, ngược lại sẽ gọi hàm addProduct để xly thêm mới sp
            onCloseModal={() => {
              setEditProduct(null);
              setShowForm(false);
            }} />)}
      </div>

      {successMessage &&
        <div className="success-message">{successMessage}
        </div>}

    </>
  );
}

export default App;

