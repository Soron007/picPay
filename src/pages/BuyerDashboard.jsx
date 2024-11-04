import { useSelector } from "react-redux";
import Analytics from "../components/Analytics";
import DashboardSidebar from "../components/DashboardSidebar";
import Orders from "../components/Orders";
import PhotoManagement from "../components/seller/PhotoManagement";
import PhotosPurchased from "../components/buyer/PhotosPurchased";

const BuyerDashboard = () => {
  const tab  = useSelector((state)=> state.nav.tab);
  
  return (
    <div className="flex flex-col sm:flex-row">
      <DashboardSidebar />
      <div>
        
        {
        (()=>{
          switch(tab){
            case "photos-purchased":
              return <PhotosPurchased/>
            case "analytics":
              return <Analytics/>
            case "orders":
              return <Orders/>
            default:
              return <PhotosPurchased/>;
          }
        })()}
        
      </div>
    </div>
  );
}

export default BuyerDashboard
