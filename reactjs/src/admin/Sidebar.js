import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div>
         <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" >
    <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
        <li class="nav-item mb-2 mt-3"><a class="nav-link text-secondary" href="#"><h5><Link to="/homeadmin"> Jacob Nejam </Link></h5></a></li>
       
        <li class="nav-item mb-2">
            <a class="nav-link text-secondary" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i class="far fa-file-word font-weight-bold"></i> <span className="ml-3">Danh mục sản phẩm ▾</span></a>
            <ul class="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
               <li class="nav-item mb-2 "><a class="nav-link text-secondary" href=""><i class="fas fa-book-reader"></i><Link to="/admin/Product"> Thêm sản phẩm mới </Link></a></li>
               <li class="nav-item "><a class="nav-link text-secondary" href=""> <i class="fas fa-book-medical"></i><Link to="/Detail_product"> Thêm chi tiết sản phẩm </Link></a></li>
            </ul>
        </li>
        <li class="nav-item mb-2 custom-margin"><a class="nav-link text-secondary" href="#"><i class="far fa-chart-bar font-weight-bold"></i> <span className="ml-3"><Link to="/Dondathang"> Danh sách đơn hàng </Link></span></a></li>

        <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-user font-weight-bold"></i><span className="ml-3"><Link to="/thongtinkhachhang"> Thông tin người dùng</Link></span></a></li>
        <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-atom font-weight-bold"></i> <span className="ml-3">Flex</span></a></li>
        <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far fa-folder font-weight-bold"></i> <span className="ml-3">Layouts</span></a></li>
      
    </ul>
</div></div>
  )
}
