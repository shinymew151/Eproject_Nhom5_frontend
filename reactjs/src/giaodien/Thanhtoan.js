import React, { useState, useEffect } from "react";
import '../App.css'
import {AiFillCaretDown} from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs'

import {FaTrashAlt} from 'react-icons/fa'
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Thanhtoan() {
  const [formData, setFormData] = useState(new FormData());
  const navigate = useNavigate();
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
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [tinhtp, setTinhtp] = useState('');
const [quanhuyen, setQuanhuyen] = useState('');
const [phuongxa, setPhuongxa] = useState('');
  


  
  const userData = localStorage.getItem('userData');
  const user = userData ? JSON.parse(userData).user : null;
  const userId = user ? user.id : null;

const handleLogout = ()=>{
 
  localStorage.removeItem('userData');
};
  const [hovaten,sethovaten] = useState("");
  const [diachi,setdiachi] = useState("");
  const tinhtrangdon= "Chờ duyệt";
  

  const [sdt,setsdt] = useState();
  const [size,setsize] = useState("");
  const [thongtinbosung,setthongtinbosung] = useState('');
  

  const [isCashOnDelivery, setIsCashOnDelivery] = useState(false);
  const [isBankTransfer, setIsBankTransfer] = useState(false);



  const [sanpham,setsanpham] = useState([]);
  
  const [tongcart,settongcart] = useState(0);
 const [pttt,setpttt]= useState("");

 useEffect(() => {
  localStorage.setItem('tongcart', JSON.stringify(tongcart));
}, [tongcart]);

// Update the value of tongcart
const updateTongcart = (newValue) => {
  settongcart(newValue);
};

 useEffect(() => {
  if (isCashOnDelivery) {
    setpttt('thanh toán tiền mặt');
  } else if (isBankTransfer) {
    setpttt('chuyển khoản ngân hàng');
  }
}, [isCashOnDelivery, isBankTransfer]);

const handleSubmit = async (e)=>{
  const sanphamString = sanpham.map(sp => `${sp.title}-(size:${sp.size})`).join('\n');

  
  e.preventDefault();

  try {
  const formData = new FormData();
  formData.append('hovaten',hovaten);
  formData.append('diachi',diachi);
  formData.append('tinh',tinhtp);
  formData.append('quanhuyen',quanhuyen);
  formData.append('phuongxa',phuongxa);
  formData.append('sdt',sdt);
  formData.append('thongtinbosung',thongtinbosung);
  formData.append('pttt',pttt);
  formData.append('sanpham',sanphamString);
  formData.append('dkdn_id',userId);
  formData.append('thanhtien',tongcart);
  formData.append('tinhtrangdon',tinhtrangdon);

 
  
  const response = await axios.post(`${process.env.REACT_APP_BASEURL}/api/dondathang`, formData, {
    headers: {
      'content-type': 'multipart/form-data'
    }
  
  });




  if (response.status === 200) {
    // Xóa sản phẩm khỏi giỏ hàng
    await axios.delete(`${process.env.REACT_APP_BASEURL}/api/giohang/${userId}/delete-all`);
 
    // Hiển thị thông báo đặt hàng thành công
    alert('Bạn đã đặt hàng thành công');
  
     window.location.reload(); 

    try {
      const response2 = await axios.post(`${process.env.REACT_APP_BASEURL}/api/send-mail/${userId}`);
      console.log(response2.data.message);
      // Display success message to the user
    } catch (error) {
      console.log(error.response.data.message);
      // Display error message to the user
    }

    // Cập nhật giao diện người dùng để xóa sản phẩm khỏi giỏ hàng
    // ...
  
  } else {
    alert('Có lỗi xảy ra khi đặt hàng');
  }
} catch (err) {
  console.log(err);
  alert("Bạn phải điền đầy đủ thông tin trước khi đặt hàng");
}


}



//sldfglksgksgsrh
const handlePayment = async(e) => {
  e.preventDefault();
  // Save formData to localStorage
  const sanphamString = sanpham.map(sp => `${sp.title}-(size:${sp.size})`).join('\n');
  const formDataValues = {
    hovaten,
    diachi,
    tinhtp,
    quanhuyen,
    phuongxa,
    sdt,
    thongtinbosung,
    pttt,
    sanpham: sanphamString,
    dkdn_id: userId,
    tinhtrangdon,
    thanhtien: tongcart,
  };

  


  // Save the form data in localStorage
  localStorage.setItem('formData', JSON.stringify(formDataValues));
  
 

};

//dfgkldfgkld


  const handleCashOnDeliveryChange = () => {
    setIsCashOnDelivery(true);
    setIsBankTransfer(false);
  };

  const handleBankTransferChange = () => {
    setIsCashOnDelivery(false);
    setIsBankTransfer(true);
  };


  useEffect(() => {
    fetch('https://vapi.vnappmob.com/api/province')
      .then(response => response.json())
      .then(data => {
          
        setCities(data.results);
      });
  }, []);
  
  useEffect(() => {
    if (selectedCity) {
      fetch(`https://vapi.vnappmob.com/api/province/district/${selectedCity}`)
        .then(response => response.json())
        .then(data => {
          setDistricts(data.results);
          setQuanhuyen('');
        });
    } else {
      setDistricts([]);
      setQuanhuyen('');
    }
  }, [selectedCity]);
  
  useEffect(() => {
    if (selectedDistrict) {
      fetch(`https://vapi.vnappmob.com/api/province/ward/${selectedDistrict}`)
        .then(response => response.json())
        .then(data => {
          setWards(data.results);
          setPhuongxa('');
        });
    } else {
      setWards([]);
      setPhuongxa('');
    }
  }, [selectedDistrict]);

  const handleCityChange = e => {
    setSelectedCity(e.target.value);
    setSelectedDistrict('');
  };

  const handleDistrictChange = e => {
    setSelectedDistrict(e.target.value);
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASEURL}/api/users/${userId}/homecart`)
      .then((response) => {
        setsanpham(response.data);
    
        const total = response.data.reduce((acc, product) => acc + product.tong, 0);
        settongcart(total+30000);
       
      })
      .catch((error) => {
        console.log(error); // Kiểm tra xem có lỗi xảy ra hay không
      });
  }, []);
// const [kiemtra,setkiemtra]= useState(false);
// const kiemtrabutton = () =>{
//   setkiemtra(true);
// }

  return (
    <div>
      <div id="">
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


</div>

<div className="thanhtoancontainer" style={{display:'flex',margin:'0 auto',justifyContent:'center'}}>
  <div className="thanhtoanleft" style={{width:600}}>
    <hr style={{height:2,background:'gray'}} />
    <span>THÔNG TIN THANH TOÁN</span>
    <form id="paymentForm">
 

  <div className="form-group">
    <label style={{float:'left'}} htmlFor="">Họ và tên</label>
    <input type="text" name="hovaten" className="form-control" id="title" placeholder="Nhập Tên Sản Phẩm" required
      value={hovaten} onChange={(e) => sethovaten(e.target.value)}/>
  </div>

  <div className="form-group">
    <label style={{float:'left'}} htmlFor="">Địa chỉ</label>
    <input type="text" name="diachi" className="form-control" id="gia" placeholder="Nhập Địa chỉ" required
      value={diachi} onChange={(e) => setdiachi(e.target.value)}/>
  </div>

  <div className="tinhtpdc" style={{ display: 'flex', float: 'left' }}>
  <div className="form-group" style={{ width: '33%' }}>
  <label htmlFor="category_id">Chọn tỉnh/Thành phố</label>
  <select
  required
  defaultValue={tinhtp} // Thay đổi value thành defaultValue
  onChange={(e) => {
    const selectedValue = e.target.value;
    const selectedCity = cities.find(city => city.province_id === selectedValue);
    const selectedValueString = selectedCity ? selectedCity.province_name : '';
    console.log(selectedValueString);
    setTinhtp(selectedValueString || '');
    setSelectedCity(selectedValue);
    setSelectedDistrict('');
    setQuanhuyen('');
    setPhuongxa('');
  }}
>
  <option value="" disabled hidden>
    Chọn danh mục...
  </option>
  {cities.map(city => (
    <option key={city.province_id} value={city.province_id}>
      {city.province_name}
    </option>
  ))}
</select>

</div>

<div className="form-group" style={{ width: '33%' }}>
  <label htmlFor="category_id">Chọn quận/huyện</label>
  <select
    required
    defaultValue={quanhuyen}
    onChange={(e) => {
      const selectedValue = e.target.value;
      const selectedDistrict = districts.find(districtfa => districtfa.district_id === selectedValue); // Find the selected district object
      const selectedValueString = selectedDistrict ? selectedDistrict.district_name : ''; // Access the district_name property
      console.log(selectedValueString);
      setQuanhuyen(selectedValueString);
      setSelectedDistrict(selectedValue);
      setPhuongxa('');
    }}
  >
    <option value="" disabled hidden>
      Chọn quận/huyện
    </option>
    {districts.map(district => (
      <option key={district.district_id} value={district.district_id}>
        {district.district_name}
      </option>
    ))}
  </select>
</div>

<div className="form-group" style={{ width: '33%' }}>
  <label htmlFor="category_id">Chọn phường/xã</label>
  <select
    required
    defaultValue={phuongxa}
    onChange={(e) => {
      const selectedValue = e.target.value;
      const selectedWard = wards.find(wardfa => wardfa.ward_id === selectedValue);
      const selectedValueString = selectedWard ? selectedWard.ward_name : '';
      console.log(selectedValueString);
      setPhuongxa(selectedValueString);
     }}
  >
    <option value="" disabled hidden>
      Chọn phường/xã
    </option>
    {wards.map(ward => (
      <option key={ward.ward_id} value={ward.ward_id}>
        {ward.ward_name}
      </option>
    ))}
  </select>
</div>





    </div>

    <div className="form-group">
    <label style={{float:'left'}} htmlFor="">Số điện thoại</label>
    <input type="text" name="sdt" className="form-control" id="gia" placeholder="Nhập Số điện thoại của bạn" required
      value={sdt} onChange={(e) => setsdt(e.target.value)}/>
  </div>
  
<div className="thongtinbosung">
  <span style={{float:'left',color:'blue'}}>THÔNG TIN BỔ SUNG</span><br></br>
  <span style={{float:'left'}}>Ghi chú đơn hàng (thời gian nhận hàng,nơi nhận)</span><br></br>
  <textarea  value={thongtinbosung} onChange={(e) => setthongtinbosung(e.target.value)} style={{float:'left'}} name="" id="" cols="78" rows="8"></textarea>
</div>
</form>


  </div>
  <div className="thanhtoanright" style={{ width: 500, marginLeft: 20, border: '2px solid black' }}>
  <div className="don-hang">
    <h4 style={{marginLeft:'-100px'}}>Đơn hàng của bạn</h4>
    <div className="abcxyzthanhtoan">
      <div className="abcdthanhtoan">
        <p className="sanpham-title">SẢN PHẨM</p>
        <p className="tong-title">TỔNG</p>
      </div>
      <hr />
      <div className="chitietabcdthanhtoan" style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
  {sanpham.map((sp) => (
    <div key={sp.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: 400 }} className="sanpham-info">
        {sp.title} - (size: {sp.size})
      </div>
      <div style={{ textAlign: 'right' }}>
        <span className="tong-info">{sp.gia}.000đ</span>
      </div>
    </div>
  ))}
</div>


<hr></hr>
      <div className="chitietabcdthanhtoan">
        <span className="sanpham-info">Phí vận chuyển</span>
        <span className="tong-info">30.000đ</span>
      </div><hr></hr>
      <div className="chitietabcdthanhtoan">
        <span className="sanpham-info">Thành tiền</span>
       
        <span className="tong-info">{tongcart} đ</span>
      </div><hr></hr>
      <div className="giamgia-container">
        <input type="text" className="giamgia-input" placeholder="Nhập mã giảm giá" />
        <button className="giamgia-button">Áp dụng</button>
      </div>
      <div className="payment-method">
        <p>Phương thức thanh toán</p>
        <div>
          <input type="checkbox"  id="cash-on-delivery" checked={isCashOnDelivery}
          onClick={handleCashOnDeliveryChange}/>
          <label htmlFor="cash-on-delivery">Trả tiền mặt khi nhận hàng</label>
        </div>
        <div>
          <input type="checkbox" id="bank-transfer"   checked={isBankTransfer}
          onClick={handleBankTransferChange}/>
          <label htmlFor="bank-transfer">Chuyển khoản ngân hàng</label>
        </div>
      </div>
    </div>
  </div>
  {isBankTransfer && (
  <div className="noidungck" style={{ marginTop: -45 }}>
    <label htmlFor="paymentMethod">Phương thức thanh toán:</label>
    <select name="paymentMethod" id="paymentMethod">
      <option value="vnpay">Thanh toán qua VNPAY</option>
    </select>
    <button onClick={handlePayment}><Link to="/checkout"> Thanh toán </Link></button>
  </div>
)}

<button style={{marginTop:15}} onClick={handleSubmit}>đặt hàng</button>

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


   
  )
}
