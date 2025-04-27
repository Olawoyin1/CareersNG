import {   TrendingUp } from "lucide-react";
import AdminLayout from "./AdminLayout";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";

import { GoBriefcase } from "react-icons/go";

const AdminDashboard = () => {
  // In a real app, these would come from API calls
  const stats = [
    { 
      title: "Total Jobs", 
      value: "124", 
      change: "+12% from last month", 
      icon: <GoBriefcase className="h-6 w-6 text-careersng-purple" /> 
    },
    { 
      title: "Active Users", 
      value: "2,581", 
      change: "+18% from last month", 
      icon: <AiOutlineUser className="h-6 w-6 " /> 
    },
    { 
      title: "Blog Posts", 
      value: "42", 
      change: "+6 new this month", 
      icon: <IoDocumentTextOutline className="h-6 w-6" /> 
    },
    { 
      title: "Page Views", 
      value: "14,128", 
      change: "+24% from last month", 
      icon: <TrendingUp className="h-6 w-6 text-orange-500" /> 
    },
  ];

  return (
    <AdminLayout title="Dashboard">
      <div className="grid cf gap-6">
        {/* Summary Stats */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-xl">
              <div className="flex flex-row items-center justify-between pb-2">
                <div className="text-sm font-medium">{stat.title}</div>
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid  gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 border border-gray-300 col-span-2 rounded-xl">
                <div className="">
                    <div>
                    <h2 className="font-bold text-xl">Recent Activity</h2>
                    <p className="text-gray-500">Overview of the latest activities</p>
                    </div>
                    <div>
                    <div className="space-y-4 mt-4">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                        <div key={i} className="flex items-center gap-4 rounded-xl border border-gray-300 p-3">
                            <div className="rounded-full bg-primary/10 p-2">
                            <IoDocumentTextOutline className="h-4 w-4 text-primary" />
                            </div>
                            <div className="flex-1">
                            <p className="text-sm font-medium">New job posted: Senior React Developer</p>
                            <span className="text-xs text-muted-foreground">2 hours ago</span>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
          
          <div className="p-4 border border-gray-300 rounded-xl">
            <div>
              <h2 className="font-bold text-xl">Quick Actions</h2>
              <p className="text-gray-500">Common admin tasks</p>
            </div>
            <div className="space-y-2 mt-4">
              {["Add New Job", "Create Blog Post", "Approve Applications", "Review Comments"].map((action, i) => (
                <button
                  key={i}
                  className="flex w-full items-center rounded-md bg-[#ee774f] hover:bg-red-800 transition text-white px-4 py-3 text-xs hover:bg-primary/20"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
