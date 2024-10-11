// import Analytics from "../components/Analytics"
import DashboardSidebar from "../components/DashboardSidebar";
import Orders from "../components/Orders";
import PhotoManagement from "../components/seller/PhotoManagement";

const SellerDashboard = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <DashboardSidebar />
      <div>
        {/* we will change the pages through switch case */}
        {/* <PhotoManagement/>
         */}
        <Orders />
      </div>
    </div>
  );
};

export default SellerDashboard;
