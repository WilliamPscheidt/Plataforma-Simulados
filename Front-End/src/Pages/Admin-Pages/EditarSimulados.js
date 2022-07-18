import React from 'react'

import AdminSidebar from '../../Components/Admin/AdminSidebar'
import AdminEditar from '../../Components/Admin/AdminEditar'

import '../../Style/Admin/Admin-Master.css'

const EditarSimulados = () => {
  return (
    <div class="admin-dashboard container-fluid d-flex">
        <AdminSidebar />
        <main class="container-fluid">
            <AdminEditar />
        </main>
    </div>
  )
}

export default EditarSimulados