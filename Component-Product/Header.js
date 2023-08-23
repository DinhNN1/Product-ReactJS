import React, {useState} from 'react';

function Header({toggleForm, handleSearch}) {
const [searchTerm, setSearchTerm] = useState('');

const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
};

const handleSearchClick = () => {
    handleSearch(searchTerm);
};

    return (
        <header>
            <div className='container'>
                <div className='row'>
                    <div className='col-8 logo'>
                        <img className='icon-logo' src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg" alt="" />
                        <p className="htql">Hệ Thống Quản Lý</p>
                    </div>
                    <div className='col-2'>
                        <button style={{ marginTop: 11, marginLeft: 98 }} type="button" className="btn btn-warning" onClick={toggleForm}>Thêm mới</button>
                    </div>
                    <div className="d-flex col-2 search-input" style={{marginTop: 10}}>
                        <input style={{height: 40}} type="text" placeholder="Tìm kiếm SP..." value={searchTerm} onChange={handleInputChange}/>
                        <button style={{height: 40}}  className="btn btn-light"  onClick={handleSearchClick}>
                            Search
                        </button>
                    </div>
                </div>
            </div>


        </header>
    );
}

export default Header;
