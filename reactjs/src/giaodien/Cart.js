import React, { useState, useEffect } from "react";
import '../App.css'
import {AiFillCaretDown} from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs'

import {FaTrashAlt} from 'react-icons/fa'
import { Link } from "react-router-dom";
import axios from "axios";



export default function Cart() {
  const [slsptgh,setslsptgh] = useState(0);
  const [cart,setcart] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASEURL}/api/users/${userId}/slsptgh`)
      .then((response) => {
        setslsptgh(response.data); 
  
      })
      .catch((error) => {
        console.log(error); // Kiểm tra xem có lỗi xảy ra hay không
      });
  }, []);
  const [tongcart,settongcart] = useState(0);
  const userData = localStorage.getItem('userData');
  const user = userData ? JSON.parse(userData).user : null;const userId = user ? user.id : null;

  const handleLogout = ()=>{
   
    localStorage.removeItem('userData');
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASEURL}/api/users/${userId}/homecart`)
      .then((response) => {
        setcart(response.data); 
        const total = response.data.reduce((acc, product) => acc + product.tong, 0);
      settongcart(total);

      console.log(tongcart);
      })
      .catch((error) => {
        console.log(error); // Kiểm tra xem có lỗi xảy ra hay không
      });
  }, []);
  
  const handleDelete = (id) => {
    console.log(id); // log the id to the console
    
    axios.delete(`${process.env.REACT_APP_BASEURL}/api/deletecart/${id}`)
      .then((response) => {
        window.location.reload(); 
         alert('đã xóa sản phẩm khỏi giỏ hàng');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
       <div>
       <div>
  <ul id="header">
    <li><Link to="/">Giới thiệu</Link></li>
    <li id="down1">
      <Link to="/">Sản phẩm <AiFillCaretDown /></Link>
      <ul id="dc1">
        <li><Link to="/category/sominu">Sơ mi nữ</Link></li>
        <li><Link to="/category/chanvay">Chân váy</Link></li>
        <li><Link to="/category/vaydamcongso">Váy đầm công sở</Link></li>
      </ul>
    </li>
    <li><Link to="/">Góc cửa hàng</Link></li>
    <li id="down2">
      <Link to="/">Hot Deal <AiFillCaretDown /></Link>
      <ul id="dc2">
        <li><Link to="/category/bosuutapmoi">Bộ sưu tập mới</Link></li>
        <li><Link to="/category/somichanvay">Sơ mi chân váy</Link></li>
        <li><Link to="/category/sandouudai">Săn đồ ưu đãi</Link></li>
        <li><Link to="/category/xahang">Xả hàng</Link></li>
      </ul>
    </li>
    <li><Link to="/">Tuyển dụng</Link></li>
    <li><Link to="/">Feedback</Link></li>
    <li><Link to="/">Liên hệ</Link></li>
    <li><Link to="/Cart">Giỏ hàng <BsFillCartFill/></Link></li>
  </ul>
</div>

<div id="login-register">
          <ul>
            {user ? (
              <>
                <li>Xin chào: {user.name}</li>
                <li>
                  <button onClick={handleLogout} style={{with: 150,height:42,fontSize:12,float:'left'}}> <Link to="/account/login"> Đăng xuất </Link></button>
                </li>
              </>
            ) : (
              <>
                <li><Link to="/account/login">Đăng nhập/</Link></li>
                <li><Link to="/account/register">Đăng ký</Link></li>
              </>
            )}
          </ul>
        </div>


</div>

<div className="container">
    <div className="leftcc" style={{width:'55%',float:'left'}}>
<table className="table">
  <thead>
    <tr>
      <th></th>
      <th scope="col">SẢN PHẨM</th>
      <th>THÔNG TIN SẢN PHẨM</th>
      <th scope="col">GIÁ</th>
      <th scope="col">SỐ LƯỢNG</th>
      <th scope="col">TỔNG</th>
    </tr>
  </thead>
  <tbody>
    {
  cart.map(giohang=>{
    return(
    <tr>
      <th> <button onClick={() => handleDelete(giohang.id)}>
    <FaTrashAlt />
  </button></th>
      <th >
  <img 
    style={{ width: 50, height: 50 }} 
    src={`${process.env.REACT_APP_BASEURL}/upload/${giohang.product?.hinhanh}`}
    alt="vay dep vcl ra" 
  />
  </th>
  <th><span style={{ marginTop: 10 }}>{giohang.title}</span><br></br>
  <span style={{ marginTop: 10 }}>size: {giohang.size}</span></th>
  

      <td>{giohang.gia}.000</td>
      <td>{giohang.soluong}</td>
      <td>{giohang.tong} đ</td>
    </tr>
    );
})
}
  </tbody>
</table>
</div>

<div className="rightcc" style={{width:'42%',float:'right'}}>
<p>CỘNG GIỎ HÀNG</p><hr></hr>
<table class="table">
  
  <tbody>
    {/* <tr>
      <td  style={{float:'left'}}>Tạm tính</td>
      <td style={{float:'right'}}>299.000 đ</td>
      
    </tr> */}
    <tr>
      <td style={{float:'left'}}>Giảm giá đơn hàng</td>
      <td style={{float:'right'}}>-0 đ</td>
    </tr>
    <tr>
      <td style={{float:'left'}}>Tổng</td>
      <td style={{float:'right'}}>{tongcart} đ</td>
    </tr>
  
  </tbody>
</table>
<Link to="/Thanhtoan">
<button style={{width:'100%',background: '#fd7e14',   lineHeight: 2,
    textAlign: 'center',boxSizing: 'border-box', fontFamily: 'Roboto, sans-serif',color:'white',fontWeight:550}}>  TIẾN HÀNH THANH TOÁN </button> </Link>
</div>
      </div>
    
    </div>
    
  )
}
