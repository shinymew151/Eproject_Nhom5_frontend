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
export default function Nbvanvddx() {

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
    fontSize: '26px',float:'left'}}>NỔI BẬT VÀ ẤN TƯỢNG VỚI ĐẦM DÁNG XÒE !!!</h1><br></br><br></br>
    <span style={{float:'left'}}>Đăng bởi 'Minh hoàn' vào lúc 18 Tháng 02 2023</span>

    <img style={{width:'100%',height:310}} src="https://statics.pancake.vn/web-media/5e/ab/18/df/6416d367b0945924e5f8bcd24547c2e73f41e87a225bf90955fed4da.png" alt="" />
    <span style={{float:'left'}}>Nếu những thiết kế đầm suông mang đến sự thoải mái, trẻ trung hay những kiểu dáng bodycon ấn tượng cho vẻ ngoài cuốn hút thì những thiết kế đầm xòe lại không làm cho các Quý cô thất vọng với sự nhẹ nhàng và vô cùng nữ tính. <br></br>
    
    1. Dáng người đồng hồ cát  <img style={{width:'100%'}} src="https://statics.pancake.vn/web-media/63/a7/39/a1/0e5edf4c02e4995c6e610c3e20adc43ad7c2d1ec77573384a266ca43.jpg" alt="" />
    <br />
    Đặc biệt, trong những đất trời đang chuẩn bị sang thu với tiết trời nhẹ nhàng hơn thì những thiết kế đầm xòe càng được ưu ái để bổ sung thêm vào tủ đồ cho nàng.

Nếu may mắn sở hữu thân hình này thì cô nàng công sở không còn phải lo nghĩ nhiều trong khoản chọn trang phục, nàng có thể lựa chọn bất cứ outfit nào. Nhưng đặc biệt những chiếc váy công sở ôm tôn dáng chắc chắn là “vũ khí” quyến rũ và thanh lịch nhất cho các chị em đấy. 
 <img style={{width:'100%'}} src="https://statics.pancake.vn/web-media/09/6e/5c/ef/8a735615e3655c14c1100ddf8edc3aec6c513a4d6bd1a0dd05a7fedf.jpg" alt="" /><br></br>
 Để trở nên thật ấn tượng với các thiết kế đầm này trong những ngày giao mùa nhẹ nhàng thì có thể tham khảo ngay những bí quyết dưới đây của Citi Mode.
 1.Lưu ý khi lựa chọn màu sắc và họa tiết

Có thể nói đây là hai yếu tố quan trọng tạo nên ấn tượng cho set đồ của các cô nàng. Với thiết kế đầm xòe nàng khá dễ dàng để lựa chọn màu sắc hay họa tiết phù hợp. Vì thế, hãy dựa vào vóc dáng, sở thích cũng như mục đích hoàn cảnh mà bạn diện trang phục đó để lựa chọn cho thật “match” nhé! <img style={{width:'100%'}} src="https://statics.pancake.vn/web-media/86/ea/76/de/546a503671341a17feba543d624a2ed32d9b827c38a990ee8c815c14.jpg" alt="" /><br></br>Chẳng hạn nếu bạn lựa chọn item công sở thì các màu nhẹ nhàng, trang nhã như màu pastel, màu trắng,… và không cần sử dụng họa tiết cũng đủ để nàng có thể trở thành Quý cô công sở..  <br />


Tuy nhiên, nếu bạn lựa chọn trang phục cho những buổi đi chơi hoặc cà phê cùng bạn thì nên lựa chọn các thiết kế với họa tiết nổi bật, cách điệu mang đến sự lạc quan, thoải mái nhất.

2.“Kiểu dáng” của những thiết kế đầm xòe

Những thiết kế đầm xòe được biết đến với đặc điểm phần chân váy may xòe theo hướng xếp ly, may tròn hoặc may xéo,… rất đa dạng.   <img style={{width:'100%'}} src="https://statics.pancake.vn/web-media/60/70/18/cd/6c617fd28f40e600a6c7e655c0bb672451848cb1580a66bfa6ff6439.jpg" alt="" /><br></br>Bên cạnh đó, kiểu dáng mà chúng tôi muốn nhắc đến đó chính là những chi tiết add-in hay cut-out thời thượng cho những thiết kế đầm xòe một cách ấn tượng và phù hợp với hoàn cảnh.

Nếu bạn lựa chọn trang phục cho môi trường văn phòng thì hoàn toàn có thể sử dụng những chiếc đầm với phần bèo nhún nữ tính, các kiểu nơ thanh lịch,… Còn nếu bạn thích sự cá tính, phá cách nhưng vẫn yêu thích những mẫu đầm xòe thì chắc chắn có thể lựa chọn cho mình những thiết kế đầm với điểm nhấn ở phần cổ tim cuốn hút hay những đường xẻ.

3.Sử dụng chất liệu mềm mại, nhẹ nhàng

Không chỉ những thiết kế đầm xòe mà tất cả các trang phục đều cần sử dụng những chất liệu phù hợp, mang đến cảm giác thoải mái nhất. <br />


Không chỉ vậy, khi lựa chọn chất liệu  vải chất lượng còn giúp cho trang phục luôn giữ được form dáng, đặc biệt là những kiểu đầm xòe khác nhau. Từ đó, tôn lên cho người mặc sự thanh lịch, sang trọng cho người mặc cũng như thể hiện sự tôn trọng đối với những xung quanh.

Khi lựa chọn chất liệu vải an toàn, tự nhiên còn là lý do để các Quý cô có thể đảm bảo không gây hại, kích ứng cho làn da.

4. Lựa chọn phụ kiện

Để thăng hạng hơn cho set đồ của mình thì các Quý cô cần khéo léo lựa chọn các phụ kiện phù hợp nhất.  <img style={{width:'100%'}} src="https://statics.pancake.vn/web-media/e2/f8/bf/7c/fca31bfd8f1eef1321acf56946e0090c8e2eb419fd92618cc0d875ba.jpg" alt="" /><br></br>Đầu tiên, có thể một phụ kiện không thể thiếu để bạn có thể tôn lên được vóc dáng của mình cũng như các thiết kế váy đầm, là những đôi giày cao gót. Dương như là “cặp bài trùng” để cho những váy đầm luôn nổi bật, đôi giày cao gót sẽ khiến bạn cao hơn, thon thả và nữ tính hơn rất nhiều. Để lựa chọn được đôi giày phù hợp, bạn có thể lựa chọn theo công thức quen thuộc thuộc như “ton sur ton” hoặc tương phản.

Bên cạnh đó, các phụ kiện như bông tai, vòng cổ, dây chuyền,… cũng cũng cần được kết hợp khéo léo và thu hút nhất. Tuy nhiên, không nên sử dụng quá nhiều phụ kiện trong một outfit vì chúng sẽ tạo sự rườm rà rối mắt cho trang phục của bạn. <br />

 <img style={{width:'100%'}} src="https://statics.pancake.vn/web-media/35/38/61/5a/1552538b903db0fb8cc5e504ed6a4a3a6a20192d96609c29be4ab7d9.jpg" alt="" /><br></br>Ngoài ra, bạn cũng có thể tham khảo những thiết kế đầm xoè của Citi Mode để có thể mang đến cho Quý cô những trang phục sành điệu, thời thượng nhất. Sử dụng đa dạng các gam màu khác nhau, chất liệu cao cấp an toàn có nguồn gốc 100% từ tự nhiên,… những chiếc váy xòe của chúng tôi sẽ không khiến Quý cô phải thất vọng.

Citi Mode luôn mong muốn có thể đồng hành cùng các Quý cô trong những bộ trang phục để họ có thể thực sự tỏa sáng, tự nhiên nhất!
    
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
