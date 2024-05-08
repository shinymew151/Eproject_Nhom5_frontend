import React, { useState } from 'react'


import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

import { useEffect } from 'react';
import axios from 'axios';

export default function Homeadmin() {


  return (
    <div>
      <Navbar/>
                <div class="container-fluid" id="main">
                 <div class="row row-offcanvas row-offcanvas-left">
                   <Sidebar/>
                  <Dashboard/>
                
             </div>
            </div>  

    </div>
  )
}
