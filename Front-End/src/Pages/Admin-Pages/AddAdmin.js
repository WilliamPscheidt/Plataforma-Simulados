import React from 'react'

import AdminSidebar from '../../Components/Admin/AdminSidebar'
import AdminAdd from '../../Components/Admin/AdminAdd'

import '../../Style/Admin/Admin-Master.css'

const AddAdmin = () => {
  return (
    <div class="admin-dashboard container-fluid d-flex">
        <AdminSidebar />
        <main class="container">
            <AdminAdd />
        </main>
    </div>
  )
}

export default AddAdmin