import {useEffect,useState} from 'react';
import axios from 'axios';
import ChartComponent from './ChartComponent';

export default function Dashboard() {
    const [record, setRecord] = useState([]);
    const [data,setdata] = useState([]);

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(res => setRecord(res));
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BASEURL}/api/homedashboard`)
    .then((response)=>{
        setdata(response.data)
    })
  },[]);
         
  return (
    <div class="col main pt-5 mt-3">
         
    <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <li class="breadcrumb-item active" aria-current="page">Data</li>
    </ol>
    </nav>
    <p class="lead d-none d-sm-block">Add Employee Details and Records</p>

    <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
            <span class="sr-only">Close</span>
        </button>
        <strong>Data and Records</strong> Learn more about employee
    </div>
    <div class="row mb-3">
        <div class="col-xl-3 col-sm-6 py-2">
            <div class="card bg-success text-white h-100">
                <div class="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                    <div class="rotate">
                        <i class="fa fa-user fa-4x"></i>
                    </div>
                    <h6 class="text-uppercase">Users</h6>
                    <h1 class="display-4">{data.songuoidung}</h1>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 py-2">
            <div class="card text-white bg-danger h-100">
                <div class="card-body bg-danger">
                    <div class="rotate">
                        <i class="fa fa-list fa-4x"></i>
                    </div>
                    <h6 class="text-uppercase">Sản phẩm bán</h6>
                    <h1 class="display-4">{data.sosanpham}</h1>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 py-2">
            <div class="card text-white bg-info h-100">
                <div class="card-body bg-info">
                    <div class="rotate">
                      <i class="fab fa-twitter fa-4x"></i>
                    </div>
                    <h6 class="text-uppercase">Số đơn hàng</h6>
                    <h1 class="display-4">{data.tongdonhang}</h1>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6 py-2">
            <div class="card text-white bg-warning h-100">
                <div class="card-body">
                    <div class="rotate">
                        <i class="fa fa-share fa-4x"></i>
                    </div>
                    <h6 class="text-uppercase">Doanh thu</h6>
                    <h1 class="display-4">{data.doanhthu} vnđ</h1>
                </div>
            </div>
        </div>
    </div>

    <hr/>
    {/* <div class="row placeholders mb-3">
        <div class="col-6 col-sm-3 placeholder text-center">
            <img src="//placehold.it/200/dddddd/fff?text=1" class="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
            <h4>Responsive</h4>
            <span class="text-muted">Device agnostic</span>
        </div>
        <div class="col-6 col-sm-3 placeholder text-center">
            <img src="//placehold.it/200/e4e4e4/fff?text=2" class="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
            <h4>Frontend</h4>
            <span class="text-muted">UI / UX oriented</span>
        </div>
        <div class="col-6 col-sm-3 placeholder text-center">
            <img src="//placehold.it/200/d6d6d6/fff?text=3" class="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
            <h4>HTML5</h4>
            <span class="text-muted">Standards-based</span>
        </div>
        <div class="col-6 col-sm-3 placeholder text-center">
            <img src="//placehold.it/200/e0e0e0/fff?text=4" class="center-block img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
            <h4>Framework</h4>
            <span class="text-muted">CSS and JavaScript</span>
        </div>
    </div> */}
   
    <div class="row ">
        <div class="col-lg-7 col-md-6 col-sm-12">
          <h5 class="mt-3 mb-3 text-secondary">
           Check More Records of Employees
          </h5>
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead class="thead-light">
                        <tr>
                            <th>No</th>
                            <th>Label</th>
                            <th>Header</th>
                            <th>Column</th>
                            <th>Record Data</th>
                        </tr>
                    </thead>
                    <tbody>
                     {record.slice(0, 5).map((output)=>
                        <tr>
                            <td>{output.id}</td>
                            <td>{output.name}</td>
                            <td>{output.email}</td>
                            <td>{output.username}</td>
                            <td>{output.website}</td>
                            <td></td>
                        </tr>
                       )}
                    </tbody>
                </table>
            </div>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
            <h4 className='title mt-3 mb-3 text-center text-secondary'>Data in Chart</h4>
          <ChartComponent />
            </div>
    </div>
   
  
  

</div>
  )
}
