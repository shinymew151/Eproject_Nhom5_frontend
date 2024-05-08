import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import {FaTrashAlt} from 'react-icons/fa'
export default function Detail_product() {
  const [danhmucsp,setdanhmucsp]=useState([]);
  const [tinhtrangsp, settinhtrangsp] = useState("");
  const [chatlieusp, setchatlieusp] = useState("");
  const [themanhsp, setthemanhsp] = useState("");
  const [product_id, setproduct_id] = useState("");
  const [error, setError] = useState('');
  const [detailproduct, setdetailproduct] = useState([]);

  const handledelete =async (id)=>{
    await axios.delete(`${process.env.REACT_APP_BASEURL}/api/detail_product/${id}`)
    .then((response)=>{
      window.location.reload(); 
      alert('xóa sản phẩm thành công');
    })
  }

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BASEURL}/api/detaildanhmuc`)
    .then((response)=>{
      setdanhmucsp(response.data)
    })
  }, []);

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BASEURL}/api/detailthongtin`)
    .then((response)=>{
      setdetailproduct(response.data)
    })
  }, []);
  
  async function save(event) {
    event.preventDefault();
    try {
      const formData = new FormData();
     
      formData.append('product_id', product_id);
      formData.append('tinhtrang', tinhtrangsp);
      formData.append('chatlieu', chatlieusp); 
      formData.append('themanhsp', themanhsp); 
      const response = await axios.post(`${process.env.REACT_APP_BASEURL}/api/add_detail`, formData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      });
      alert("Product added successfully");
      setproduct_id("");
      setthemanhsp("");
      setchatlieusp("");
      settinhtrangsp("");
      setError('');
      window.location.reload(); 
    
    } catch (err) {
      setError('Product details already exist, please edit or delete below');
    }
  }
  
  

  return (
    <div> 
   <Navbar />
    <div class="container-fluid" id="main">
    <div class="row row-offcanvas row-offcanvas-left">
        <Sidebar />
        <div className='custom-margin-top-detail'>
      
  
  
  <h2>thêm chi tiết sản phẩm</h2>
  <form onSubmit={save}>
  {/* Hiển thị thông báo lỗi nếu có */}
  {error && <div>{error}</div>}
  <div class="form-group">
    <label class="my-1 mr-2" for="inlineFormCustomSelectPref">product_id</label>
    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="product_id" required value={product_id} onChange={(e) => setproduct_id(e.target.value)}>
      <option value="" disabled hidden>Choose...</option>
      {danhmucsp.map((dm) => (
        <option key={dm.id} value={dm.id}>{dm.id}.{dm.title} ({dm.category.namecategory})</option>
      ))}
    </select>
  </div>

  <div class="form-group">
    <label htmlFor="title">Tình trạng</label>
    <input type="text" name="tinhtrang" class="form-control" id="title" placeholder="Nhập tình trạng sản phẩm" required value={tinhtrangsp} onChange={(e) => settinhtrangsp(e.target.value)} />
  </div>

  <div class="form-group">
    <label htmlFor="title">Chất liệu</label>
    <input type="text" name="chatlieu" class="form-control" id="title" placeholder="Nhập chất liệu Sản Phẩm" required value={chatlieusp} onChange={(e) => setchatlieusp(e.target.value)} />
  </div>

  <div class="form-group">
    <label htmlFor="title">Thế mạnh sản phẩm</label>
    <input type="text" name="themanhsp" class="form-control" id="title" placeholder="Thế mạnh Sản Phẩm" required value={themanhsp} onChange={(e) => setthemanhsp(e.target.value)} />
  </div>

  <button type="submit" class="btn btn-primary">Thêm</button>
</form>

<h2>Danh sách sản phẩm</h2>

<table class="table">
  <thead>
    <tr>
      <th scope="col">Tình trạng</th>
      <th scope="col">Chất liệu sản phẩm</th>
      <th scope="col">Thế mạnh sản phẩm</th>
      <th scope="col">Product ID</th>
      <th scope="col">Xóa</th>
    </tr>
  </thead>
  <tbody>
    {detailproduct.map((pro) => {
      return (
        <tr>
          <td>{pro.tinhtrang}</td>
          <td>{pro.chatlieu}</td>
          <td>{pro.themanhsp}</td>
          <td>{pro.product_id}</td>
          <td>
            <button onClick={() => handledelete(pro.id)} class="btn btn-danger">
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      );
    })}
  </tbody>
</table>

  </div>
  </div>
  
        </div>
  </div>
  )
}
