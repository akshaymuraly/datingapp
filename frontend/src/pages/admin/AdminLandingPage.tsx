import { useState } from "react"
import AdminNav from "../../components/layout/admin/AdminNav"
import UserReports from "../../components/layout/admin/UserReports"
import ComplaintReports from "../../components/layout/admin/ComplaintReports"
const AdminLandingPage = () => {
  const [currentTab,setCurrentTab] = useState("userreports")
  return (
    <div className="w-screen h-screen bg-[#cfcece] flex flex-row p-4 gap-2">
        <AdminNav setCurrentTab={setCurrentTab}/>
        <section className="w-full h-full">
          {currentTab==="userreports"?
          <UserReports props={{heading:["Name","Gender","Location","Profile","Action"],content:["ff"],url:["dd"]}}/>
          :<ComplaintReports props={{heading:["Complaint Type","status","Message","Affected","Against","Action"],content:["ff"],url:["dd"]}}/>}
        </section>
    </div>
  )
}

export default AdminLandingPage