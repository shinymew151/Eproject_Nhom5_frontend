import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { AiFillCaretDown } from 'react-icons/ai';

export default function Dondathang() {
  const [dh, setDh] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASEURL}/api/dondathang`);
      setDh(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BASEURL}/api/admindeletedondathang/${id}`);
      fetchData();
      alert('Xóa sản phẩm thành công');
    } catch (error) {
      console.log(error);
    }
  };

  const handleTinhTrangDonChange = async (id, selectedOption) => {
    try {
      await axios.put(`${process.env.REACT_APP_BASEURL}/api/update-tinhtrangdon/${id}`, {
        tinhtrangdon: selectedOption,
      });
      // Optionally, perform any additional actions or updates after successful database update
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectChange = async (e, id) => {
    const selectedOption = e.target.value;
    await handleTinhTrangDonChange(id, selectedOption);
    fetchData();
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid" id="main">
        <div className="row row-offcanvas row-offcanvas-left">
          <Sidebar />
          <div className="custom-margin-top">
            <h2>Danh sách đơn hàng đã đặt</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Họ tên</th>
                  <th scope="col">Địa chỉ</th>
                  <th scope="col">Tỉnh</th>
                  <th scope="col">Quận huyện</th>
                  <th scope="col">Phường xã</th>
                  <th scope="col">Số điện thoại kh</th>
                  <th scope="col">Thông tin bổ sung</th>
                  <th scope="col">Thời gian đặt hàng</th>
                  <th scope="col">Phương thức thanh toán</th>
                  <th scope="col">Tình trạng đơn hàng</th>
                  <th scope="col">Xóa</th>
                </tr>
              </thead>
              <tbody>
                {dh.map((donhang) => (
                  <tr key={donhang.id}>
                    <td>{donhang.id}</td>
                    <td>{donhang.hovaten}</td>
                    <td>{donhang.diachi}</td>
                    <td>{donhang.tinh}</td>
                    <td>{donhang.quanhuyen}</td>
                    <td>{donhang.phuongxa}</td>
                    <td>{donhang.sdt}</td>
                    <td>{donhang.thongtinbosung}</td>
                    <td>{donhang.created_at}</td>
                    <td>{donhang.pttt}</td>
                    <td>
                      <select value={donhang.tinhtrangdon} onChange={(e) => handleSelectChange(e, donhang.id)}>
                        <option value="cho-duyet">Chờ duyệt</option>
                        <option value="dang-giao-hang">Đang giao hàng</option>
                        <option value="da-giao">Đã giao</option>
                      </select>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(donhang.id)}>
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

