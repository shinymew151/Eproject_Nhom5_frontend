import React, { useState, useEffect } from "react";
import '../App.css'
import {AiFillCaretDown} from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs'
import {RiUserSearchFill} from 'react-icons/ri'
import { Link } from "react-router-dom";

import axios from 'axios';

export default function Kiemtradon() {

    const [slsptgh,setslsptgh] = useState(0);
    useEffect(() => {
     axios.get(`${process.env.REACT_APP_BASEURL}/api/users/${userId}/slsptgh`)
       .then((response) => {
         setslsptgh(response.data); 
   
       })
       .catch((error) => {
         console.log(error); // Kiểm tra xem có lỗi xảy ra hay không
       });
   }, []);
     const userData = localStorage.getItem('userData');
     const user = userData ? JSON.parse(userData).user : null;
     const userId = user ? user.id : null;
 
 const handleLogout = ()=>{
  
   localStorage.removeItem('userData');
 };
  return (
    <div>  <div>
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
      <li> 
        <Link to="/Cart">Giỏ hàng <BsFillCartFill/></Link>
        <div className="cart-count">{slsptgh}</div>
       </li>
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

          <div className="containerkiemtradon" style={{display:'flex'}}>
             <div className="leftkiemtradon" style={{width:'30%',background:'red',height:250,marginTop:-55,marginLeft:60,fontSize:200}}>
                 <RiUserSearchFill/>
             </div>
             <div className="rightkiemtradon" style={{ width: '60%', background: 'yellow', marginLeft: 15 }}>
  <div style={{ float: 'left' }}>
    <h3>TRA CỨU THEO MÃ ĐƠN HÀNG</h3>
    <p>Để theo dõi đơn hàng của bạn, xin vui lòng nhập số điện thoại đơn hàng của bạn vào ô dưới đây và nhấn nút "Theo dõi".</p>
    <div style={{ float: 'left' }}>
  <label htmlFor="phoneNumber" style={{ fontWeight: 550 }}>Số điện thoại</label>
  <input style={{marginLeft:15}} type="text" id="phoneNumber" />
  <button style={{background:'blue' ,color:'white'}}>THEO DÕI</button>
</div><br></br><br></br>

<div className="donhangcuaban">
  <h4>ĐƠN HÀNG CỦA BẠN</h4>
  <p>tình trang đơn hàng</p>

  <table class="table">
  <thead>
    <tr>
      <th scope="col">Đơn hàng</th>
      <th scope="col">Ngày tháng</th>
      <th scope="col">Trạng thái</th>
      <th scope="col">Tổng</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>


  </div>
</div>

<div class="footer">
    <div class="footer-container">
        <div class="footer-column">
            <h2 class="footer-subheading">Managed Website</h2>
            <a href="#" class="footer-link">Manage Reputation</a>
            <a href="#" class="footer-link">Power Tools</a>
            <a href="#" class="footer-link">Marketing Service</a>
        </div>
        <div class="footer-column">
            <h2 class="footer-subheading">Jobs</h2>
            <a href="#" class="footer-link">Brand Assets</a>
            <a href="#" class="footer-link">Investor Relations</a>
            <a href="#" class="footer-link">Terms of Service</a>
        </div>
        <div class="footer-column">
            <h2 class="footer-subheading">Contact Us</h2>
            <a href="#" class="footer-link">Uttar Pradesh</a>
            <a href="#" class="footer-link">Ahemdabad</a>
            <a href="#" class="footer-link">Indore</a>
            <a href="#" class="footer-link">Mumbai</a>
        </div>
        <div class="footer-column">
            <h2 class="footer-subheading">Social Media</h2>
            <a href="#" class="footer-link">
                <i class="fab fa-facebook-f"></i>
                <span>Facebook</span>
            </a>
            <a href="#" class="footer-link">
                <i class="fab fa-instagram"></i>
                <span>Instagram</span>
            </a>
            <a href="#" class="footer-link">
                <i class="fab fa-twitter"></i>
                <span>Twitter</span>
            </a>
            <a href="#" class="footer-link">
                <i class="fab fa-youtube"></i>
                <span>Youtube</span>
            </a>
        </div>
    </div>
</div>
          

            
        </div>
        <div class="row justify-content-center pt-2 pb-4">
            <div class="col-12 col-md-8 col-lg-7 ">
                <div class="input-group">
                    <span class="input-group-addon fh5co_footer_text_box" id="basic-addon1"><i class="fa fa-envelope"></i></span>
                 
                 
                </div>
            </div>
        </div>
    </div>
  )
}
