import React from "react";
import AdminHeader from "../components/AdminHeader";
import Footer from "../../components/Footer";
import AdminSidebar from "../components/AdminSidebar";

function AdminDashboard() {
  return (
    <>
      <AdminHeader />
      <section className="grid-cols-5 gap-2 md:grid">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className="col-span-4">AdminDashboard</div>
      </section>
      <Footer />
    </>
  );
}

export default AdminDashboard;
