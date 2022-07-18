import React from 'react'
import AdminPerguntas from '../../Components/Admin/AdminPerguntas'
import AdminSidebar from '../../Components/Admin/AdminSidebar'

import '../../Style/Admin/Admin-Master.css'

const AddPerguntas = () => {
  return (
    <>
      <div class="container-fluid add-perguntas d-flex">
        <AdminSidebar />
        <main class="container">
          <div class="row">
            <AdminPerguntas />
          </div>
        </main>
      </div>
    </>
  )
}

export default AddPerguntas