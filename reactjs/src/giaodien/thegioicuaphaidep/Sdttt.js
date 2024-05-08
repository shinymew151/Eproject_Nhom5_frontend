import React, { useState, useEffect } from "react";
import '../../App.css'
import {AiFillCaretDown} from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs'
import {HiShoppingCart} from 'react-icons/hi'
import {BsFillAlarmFill} from 'react-icons/bs'
import {FaLock} from 'react-icons/fa'
import {AiOutlineComment} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import axios from "axios";
import { Link } from "react-router-dom";
export default function Sdttt() {

    const userData = localStorage.getItem('userData');
    const user = userData ? JSON.parse(userData).user : null;
    const userId = user ? user.id : null;
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

  return (
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
   
    <li> 
      <Link to="/Cart">Giỏ hàng <BsFillCartFill/></Link>
      <div className="cart-count">{slsptgh}</div>
     </li>
     
  </ul>
</div>

<div className="cointainerhrct" style={{display:'flex',margin:'0 auto',justifyContent:'center'}}>
    <div className="lefthrct" style={{width:'25%'}}>
        <h4>BÀI VIẾT MỚI</h4>
        <table style={{border: '1px solid gray'}}>
           
        <tr style={{height:70,border: '1px solid black'}}>
                <td><img style={{width:40,height:40,borderRadius:'50%'}} src="https://statics.pancake.vn/web-media/f4/26/6d/06/def0ccf4c96da793fe00085976c3dc5d3cbe366d7415d744d1266284.png" alt="" /></td>
                <th><Link to="/hrctddhmn">hiểu rõ cơ thể để đẹp hơn mỗi ngày</Link></th>
            </tr>
            <tr style={{height:70,border: '1px solid black'}}>
                <td><img style={{width:40,height:40,borderRadius:'50%'}} src="https://statics.pancake.vn/web-media/f4/26/6d/06/def0ccf4c96da793fe00085976c3dc5d3cbe366d7415d744d1266284.png" alt="" /></td>
                <th><Link to="/nbvanvddx">NỔI BẬT VÀ ẤN TƯỢNG VỚI ĐẦM DÁNG XÒE !!!</Link></th>
            </tr>
            <tr style={{height:70,border: '1px solid black'}}>
                <td><img style={{width:40,height:40,borderRadius:'50%'}} src="https://statics.pancake.vn/web-media/f4/26/6d/06/def0ccf4c96da793fe00085976c3dc5d3cbe366d7415d744d1266284.png" alt="" /></td>
                <th><Link to="/cdcvbc">10 cách diện chân váy bút chì thanh lịch</Link></th>
            </tr>
            <tr style={{height:70,border: '1px solid black'}}>
                <td><img style={{width:40,height:40,borderRadius:'50%'}} src="https://statics.pancake.vn/web-media/f4/26/6d/06/def0ccf4c96da793fe00085976c3dc5d3cbe366d7415d744d1266284.png" alt="" /></td>
                <th><Link to="/sdttt">SẮC ĐỎ TRONG THỜI TRANG</Link></th>
            </tr>
            <tr style={{height:70,border: '1px solid black'}}>
                <td><img style={{width:40,height:40,borderRadius:'50%'}} src="https://statics.pancake.vn/web-media/f4/26/6d/06/def0ccf4c96da793fe00085976c3dc5d3cbe366d7415d744d1266284.png" alt="" /></td>
                <th><Link to="/cctpsm">Các công thức phối sơ mi + chân váy cả tuần cho nàng công sở</Link></th>
            </tr>
            <tr style={{height:70,border: '1px solid black'}}>
                <td><img style={{width:40,height:40,borderRadius:'50%'}} src="https://statics.pancake.vn/web-media/f4/26/6d/06/def0ccf4c96da793fe00085976c3dc5d3cbe366d7415d744d1266284.png" alt="" /></td>
                <th><Link to="/dlmj">ĐI LÀM MẶC GÌ?</Link></th>
            </tr>
            <tr style={{height:70,border: '1px solid black'}}>
                <td><img style={{width:40,height:40,borderRadius:'50%'}} src="https://statics.pancake.vn/web-media/f4/26/6d/06/def0ccf4c96da793fe00085976c3dc5d3cbe366d7415d744d1266284.png" alt="" /></td>
                <th><Link to="/vdcscc">VÁY ĐẦM CÔNG SỞ CAO CẤP: CỰC SANG TRỌNG VÀ TINH TẾ</Link></th>
            </tr>

          </table>
    </div>

    <div className="righthrct" style={{width:'55%',border:'1px solid gray',borderRadius:20,marginLeft:25}}>
         <span style={{float:'left'}}>Tin tức&sự kiện</span><br></br>
         <h1 style={{fontWeight: 600,
    fontSize: '26px',float:'left'}}>HIỂU RÕ CƠ THỂ ĐỂ ĐẸP HƠN MỖI NGÀY</h1><br></br><br></br>
    <span style={{float:'left'}}>Đăng bởi 'Minh hoàn' vào lúc 18 Tháng 02 2023</span>

    <img style={{width:'100%',height:310}} src="https://statics.pancake.vn/web-media/f4/26/6d/06/def0ccf4c96da793fe00085976c3dc5d3cbe366d7415d744d1266284.png" alt="" />
    <span style={{float:'left'}}>Nàng chọn cho mình bộ váy đầm rất chỉn chu đến sở làm, nhưng dáng người lại “tố cáo” khuyết điểm của nàng. Thế mới nói, hiểu rõ được dáng người và cơ thể mình là bí quyết mặc đẹp đầu tiên và là yếu tố khá là quan trọng quyết định đến sự thành bại của một bộ trang phục. Và mỗi người một vóc dáng, nên việc mặc thế nào cho phù hợp với cơ thể, giúp che đi khuyết điểm, tôn lên ưu điểm là vấn đề chị em phụ nữ hết sức quan tâm.<br></br>
    Vậy làm sao để chọn trang phục phù hợp nhất cho bản thân? Đầu tiên, nàng phải biết rõ dáng người của mình và khéo léo sử dụng tốt những ưu điểm của bản thân và che đi khuyết điểm, khi đó thời trang sẽ hoàn toàn được nàng kiểm soát để tạo nên những bộ trang phục ăn ý nhất.Tham khảo ngay bài viết dưới đây của Citi Mode để hiểu rõ hơn về dáng người nàng, để trở thành quý cô thanh lịch nhất... và chọn cho mình những mẫu váy đầm đẹp phù hợp nhất nhé. <br></br>
    
    1. Dáng người đồng hồ cát  <img style={{width:'100%'}} src="https://statics.pancake.vn/web-media/a8/ad/81/67/24842c9e45aeb735a3a1084fc38353f9e0516d5d1dd9016004d78ce5.jpg" alt="" />
    <br />
    Đây đích thị là dáng người lý tưởng nhất mà bất kỳ cô nàng nào luôn ao ước. Mông to, vòng ngực nở nang cùng một vòng eo nhỏ giúp nàng dễ dàng khoe trọn vóc dáng nuột nà của mình. 

Nếu may mắn sở hữu thân hình này thì cô nàng công sở không còn phải lo nghĩ nhiều trong khoản chọn trang phục, nàng có thể lựa chọn bất cứ outfit nào. Nhưng đặc biệt những chiếc váy công sở ôm tôn dáng chắc chắn là “vũ khí” quyến rũ và thanh lịch nhất cho các chị em đấy. 
 <img style={{width:'100%'}} src="https://statics.pancake.vn/web-media/eb/bd/eb/9c/13925b6af62ab699830d29a80b2c55aaadbbc526c77d94806505541a.jpg" alt="" /><br></br>
 2. Dáng người quả lê  <img style={{width:'100%'}} src="https://statics.pancake.vn/web-media/bf/22/04/88/455502878a47ada1fbd6a64742518633ff9d41877839b3511205e655.jpg" alt="" /><br></br>Vai nhỏ, eo thon nhưng hông và phần dưới khá to bất cân xứng với phần trên cơ thể là các đặc điểm của các nàng có dáng người quả lê. “Kim chỉ nam” là chọn các trang phục tôn dáng phần ngực và làm thon gọn phần hông đùi.

Váy công sở dáng suông là cái tên sáng giá cho quý cô có dáng người quả lê đấy. Hoặc những chiếc đầm liền có điểm nhấn tập trung ở phần thân trên như: hoa đính, nơ, bèo… sẽ tạo cảm giác thân hình cân đối.  <br />


3. Dáng quả táo  <img style={{width:'100%'}} src="https://statics.pancake.vn/web-media/e2/f8/bf/7c/fca31bfd8f1eef1321acf56946e0090c8e2eb419fd92618cc0d875ba.jpg" alt="" /><br></br>Nếu cô nàng nào sở hữu vòng 1 thuộc dạng “khủng” và phần bụng cũng khá to, nàng có lẽ thuộc dáng người quả táo đấy. Thân hình quả táo gây ra sự mất cân xứng giữa phần trên và phần dưới với đôi chân thon và mảnh khảnh.

Cách tốt nhất để đánh lạc hướng người nhìn là chọn các dạng váy công sở trơn xòe và hạn chế các dạng đầm ôm sát cơ thể nàng nhé! <br />


4. Dáng tam giác ngược <img style={{width:'100%'}} src="https://statics.pancake.vn/web-media/09/6e/5c/ef/8a735615e3655c14c1100ddf8edc3aec6c513a4d6bd1a0dd05a7fedf.jpg" alt="" /><br></br>Nếu dáng người quả lê cần chọn trang phục nhấn vào phần trên cơ thể thì dáng tam giác ngược cần làm nổi bật phần dưới cơ thể. 

Vai to hơi thô, phần bắp tay cũng to nhưng hông lại quá nhỏ nếu nàng không biết cách chọn trang phục đúng cách thì khuyết điểm sẽ lộ ra rất xấu. Vì vậy, những chiếc đầm xòe, hay quần công sở dáng suông sẽ khéo léo che đi mọi khuyết điểm của bản thân.  <br />

5. Dáng người thước kẻ <img style={{width:'100%'}} src="https://statics.pancake.vn/web-media/b6/84/bb/ca/d3ad562b56e80601969027c60b9839e70302833beb04eda79034ac4a.jpg" alt="" /><br></br>Nói thẳng ra, đây là dáng người có “ba vòng như một” - không có đường cong cơ thể.

Nếu các nàng có vóc dáng thuộc dáng người như thế này, thì mình có thể nhờ cậy đến trang phục để tự tạo ra đường cong cho mình, bằng những kiểu váy công sở có kiểu dáng peplum và điểm nhấn thắt eo. Chúng sẽ giúp đánh lạc hướng người nhìn, giúp vóc dáng nàng thêm đầy đặn hơn nhiều đấy nhé!

Đừng mãi chỉ chạy theo xu hướng, hiểu rõ cơ thể mình mới là điều quan trọng nhất để mặc đẹp mỗi ngày. Hy vọng những chia sẻ của Citi Mode sẽ phần nàng tự tin hơn trong khoảng lựa chọn trang phục để luôn tỏa sáng nhất nàng nhé.
    
    </span>
    </div>
</div>



<div style={{marginTop: '20px',borderRadius:'15px',background:'#cc9c69'}}>
        <div class="container-fluid fh5co_footer_bg pb-3">
    <div class="container animate-box">
        <div class="row">
        
            <div class="col-12 col-md-4 col-lg-3">
                <div class="footer_main_title py-3"> Địa chỉ tòa soạn</div>
                <div class="footer_sub_about pb-3"> Trụ sở chính: Số 138A Giảng Võ - Quận Ba Đình - Thành phố Hà Nội
Địa chỉ liên hệ: Tòa nhà Tổng cục Dân số, ngõ 8 đường Tôn Thất Thuyết, quận Nam Từ Liêm, TP Hà Nội
Điện thoại: 024.3846.1042 - Fax: 024.3844.3144
Đường dây nóng: 0931.965.967
Email: giadinhnet@suckhoedoisong.vn
                </div>
                <div class="footer_mediya_icon">
                    <div class="text-center d-inline-block"><a class="fh5co_display_table_footer">
                        <div class="fh5co_verticle_middle"><i class="fa fa-linkedin"></i></div>
                    </a></div>
                    <div class="text-center d-inline-block"><a class="fh5co_display_table_footer">
                        <div class="fh5co_verticle_middle"><i class="fa fa-google-plus"></i></div>
                    </a></div>
                    <div class="text-center d-inline-block"><a class="fh5co_display_table_footer">
                        <div class="fh5co_verticle_middle"><i class="fa fa-twitter"></i></div>
                    </a></div>
                    <div class="text-center d-inline-block"><a class="fh5co_display_table_footer">
                        <div class="fh5co_verticle_middle"><i class="fa fa-facebook"></i></div>
                    </a></div>
                </div>
            </div>
            <div class="col-12 col-md-3 col-lg-2">
                <div class="footer_main_title py-3"> Category</div>
                <ul class="footer_menu">
                    <li><a href="{{url('/kinhdoanh')}}"><i class="fa fa-angle-right"></i> kinh doanh</a></li>
                    <li><a href="{{url('/khoahoc')}}"><i class="fa fa-angle-right"></i> khoa học</a></li>
                    <li><a href="{{url('/thoitrang')}}"><i class="fa fa-angle-right"></i> Thời trang</a></li>
                    <li><a href="{{url('/giaoduc')}}"><i class="fa fa-angle-right"></i> Giáo dục 4.0</a></li>
                    <li><a href="{{url('/giaothong')}}"><i class="fa fa-angle-right"></i> Giao thông</a></li>
                    <li><a href="{{url('/laodongvieclam')}}"><i class="fa fa-angle-right"></i> Lao động việc làm</a></li>
                    <li><a href="{{url('/thegioitunhien')}}"><i class="fa fa-angle-right"></i> Thế giới tự nhiên</a></li>
                    <li><a href="{{url('/cacmonthethaokhac')}}"><i class="fa fa-angle-right"></i> Các môn thể thao khác</a></li>
                </ul>
        
                
            </div>
            <div class="col-12 col-md-5 col-lg-3 position_footer_relative">
                <div class="footer_main_title py-3"> Liên Hệ Quảng Cáo: ADMICRO</div>
                <div class="footer_makes_sub_font">Hotline: 0794.46.33.33 - 0961.98.43.88
                    Email: giadinh@admicro.vn</div>
                Add: Tầng 20, tòa nhà Center Building, Hapulico Complex, số 1 Nguyễn Huy Tưởng, phường Thanh Xuân Trung, quận Thanh Xuân, Hà Nội 
                
            </div>
            <div class="col-12 col-md-5 col-lg-3 position_footer_relative">
                <div class="footer_main_title py-3"> CHUYÊN TRANG GIA ĐÌNH VÀ XÃ HỘI - BÁO ĐIỆN TỬ SỨC KHỎE VÀ ĐỜI SỐNG</div>
                <div class="footer_makes_sub_font">Cơ quan chủ quản: Bộ Y tế
Tổng biên tập: Trần Tuấn Linh</div>
            

Cơ quan chủ quản: Bộ Y tế
Tổng biên tập: Trần Tuấn Linh
Hoạt động theo Giấy phép số 60/GP-CBC ngày 23/7/2021 của Cục Báo chí - Bộ Thông tin và Truyền thông
® Mọi hình thức sao chép thông tin, hình ảnh phải có sự đồng ý bằng văn bản. Vui lòng dẫn “giadinh.suckhoedoisong.vn” khi phát hành lại thông tin từ website này.
                
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
</div>
    </div>

    </div>
  )
}
