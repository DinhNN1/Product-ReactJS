import React from "react";

function NavBar() {
    return (

        <div className='App col-2'>
           

            <div className="row" style={{ margin: 20 }}>
                
                    <div className="d-flex">
                        <img style={{ height: 30, width: 30, marginTop: 7 }} src="https://www.svgrepo.com/download/12219/menu.svg" alt="" />


                        <p style={{ color: "#757575", margin: 10 }}>Hệ Thống Quản Lý</p>
                    </div>
                    <div style={{ margin: "20px 0" }}>
                        <b>Danh Mục Quản Lý</b>
                    </div>
                    <div className="d-flex" style={{ margin: "10px 0px" }}>
                        <img style={{ height: 30, width: 30, alignItems: "center" }} src="https://cdn-icons-png.flaticon.com/512/138/138407.png" alt="" />
                        <p style={{ marginTop: 2 }}>Quản Lý Sản Phẩm</p>
                    </div>
                    <div className="d-flex" style={{ margin: "10px 0px" }}>
                        <img style={{ height: 30, width: 30, alignItems: "center" }} src="https://cdn-icons-png.flaticon.com/512/138/138407.png" alt="" />
                        <p style={{ marginTop: 2 }}>Quản Lý Đơn Hàng</p>
                    </div>
                    <div className="d-flex" style={{ margin: "10px 0px" }}>
                        <img style={{ height: 30, width: 30, alignItems: "center" }} src="https://cdn-icons-png.flaticon.com/512/138/138407.png" alt="" />
                        <p style={{ marginTop: 2 }}>Quản Lý Khách Hàng</p>
                    </div>
                    <div className="d-flex" style={{ margin: "10px 0px" }}>
                        <img style={{ height: 30, width: 30, alignItems: "center" }} src="https://cdn-icons-png.flaticon.com/512/138/138407.png" alt="" />
                        <p style={{ marginTop: 2 }}>Quản Lý Nhân Viên</p>
                    </div>
                    <div className="d-flex" style={{ margin: "10px 0px" }}>
                        <img style={{ height: 30, width: 30, alignItems: "center" }} src="https://cdn-icons-png.flaticon.com/512/138/138407.png" alt="" />
                        <p style={{ marginTop: 2 }}>Quản Lý Tài Khoản</p>
                    </div>
                    <div style={{ margin: "20px 0" }}>
                        <b>Đăng Nhập Hệ Thống</b>
                    </div>
                    <div className="d-flex" style={{ margin: "10px 0px" }}>
                        <img style={{ height: 30, width: 30, alignItems: "center" }} src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="" />
                        <p style={{ marginTop: 2 }}>Tài Khoản</p>
                    </div>
               



            </div>


        </div>

    )
}

export default NavBar;
