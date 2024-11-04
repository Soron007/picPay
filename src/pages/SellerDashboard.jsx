// import Analytics from "../components/Analytics"
import { useSelector } from "react-redux";
import Analytics from "../components/Analytics";
import DashboardSidebar from "../components/DashboardSidebar";
import Orders from "../components/Orders";
import PhotoManagement from "../components/seller/PhotoManagement";

const SellerDashboard = () => {

  const tab  = useSelector((state)=> state.nav.tab);
  
  return (
    <div className="flex flex-col sm:flex-row">
      <DashboardSidebar />
      <div>{
        (()=>{
          switch(tab){
            case "photos-management":
              return <PhotoManagement/>
            case "analytics":
              return <Analytics/>
            case "orders":
              return <Orders/>
            default:
              return <PhotoManagement/>;
          }
        })()}
        
      </div>
    </div>
  );
};

export default SellerDashboard;
