import DashboardSidebar from "../components/DashboardSidebar"
import PhotoManagement from "../components/seller/PhotoManagement"

const SellerDashboard = () => {
    return (
        <div className="flex flex-col sm:flex-row">
            <DashboardSidebar/>
            <div>
            {/* we will change the pages through switch case */}
            <PhotoManagement/>

            </div>
        </div>
    )
}

export default SellerDashboard
