import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homeadmin from './admin/Homeadmin';
import Home from './giaodien/Home';
import Detail from './giaodien/Detail';

import Dangnhapadmin from './admin/Dangnhapadmin';

import Dk from './giaodien/Dangki';
import Dn from './giaodien/Dangnhap';

import Product from './admin/Product';
import Detail_product from './admin/Detail_product';
import Cart from './giaodien/Cart';
import Thanhtoan from './giaodien/Thanhtoan';
import Sominu from './giaodien/Sominu';
import Chanvay from './giaodien/Chanvay';
import Vaydamcongso from './giaodien/Vaydamcongso';
import Bosuutapmoi from './giaodien/Bosuutapmoi';
import Somichanvay from './giaodien/Somichanvay';
import Sandouudai from './giaodien/Sandouudai';
import Xahang from './giaodien/Xahang';
import Dondathang from './admin/Dondathang';
import Thongtinkh from './admin/Thongtinkh';

import Hrctddhmn from './giaodien/thegioicuaphaidep/Hrctmddhmn';
import Cctpsm from './giaodien/thegioicuaphaidep/Cctpsm';
import Cdcvbc from './giaodien/thegioicuaphaidep/Cdcvbc';
import Dlmj from './giaodien/thegioicuaphaidep/Dlmj';
import Nbvanvddx from './giaodien/thegioicuaphaidep/Nbvanvddx';
import Sdttt from './giaodien/thegioicuaphaidep/Sdttt';
import Vdcscc from './giaodien/thegioicuaphaidep/Vdcscc';
import Checkout from './giaodien/Checkout';
import Kiemtradon from './giaodien/Kiemtradon';








function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homeadmin" element={<Homeadmin />} />
          <Route path="/dondathang" element={<Dondathang />} />
          <Route path="/Detail_product" element={<Detail_product />} />
          <Route path="/admin/Product" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Thanhtoan" element={<Thanhtoan />} />
          <Route path="/kiemtradon" element={<Kiemtradon />} />
         

          <Route path="/category/sominu" element={<Sominu />} />
          <Route path="/category/chanvay" element={<Chanvay />} />
          <Route path="/category/vaydamcongso" element={<Vaydamcongso />} />
          <Route path="/category/bosuutapmoi" element={<Bosuutapmoi />} />
          <Route path="/category/somichanvay" element={<Somichanvay />} />
          <Route path="/category/sandouudai" element={<Sandouudai />} />
          <Route path="/category/xahang" element={<Xahang />} />
          <Route path="/checkout" element={<Checkout />} />
        
          <Route path="/cctpsm" element={<Cctpsm />} />
          <Route path="/cdcvbc" element={<Cdcvbc />} />
          <Route path="/dlmj" element={<Dlmj />} />
          <Route path="/nbvanvddx" element={<Nbvanvddx />} />
          <Route path="/sdttt" element={<Sdttt />} />
          <Route path="/vdcscc" element={<Vdcscc />} />
          <Route path="/hrctddhmn" element={<Hrctddhmn />} />
          <Route path="/thongtinkhachhang" element={<Thongtinkh />} />
        


          <Route path="/account/login" element={<Dn />} />
          <Route path="/account/register" element={<Dk />} />



     
          <Route path="/admin/dangnhap" element={<Dangnhapadmin />} />
          <Route path="/Detail/:title/:id" element={<Detail />} />
       
        </Routes>
      </Router>
     


    </div>
  );
}

export default App;