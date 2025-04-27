import { useState } from "react";
// import AdminLayout from "@/components/admin/AdminLayout";
import { Edit, Trash2, Plus, Search } from "lucide-react";
import AdminLayout from "./AdminLayout";
// import { useToast } from "@/components/ui/use-toast";

const jobsData = [
  { id: 1, title: "Frontend Developer", company: "TechSolutions Ltd", location: "Lagos", category: "Web Development", type: "Full Time", level: "Mid Level", posted: "2025-04-15", status: "Active" },
  { id: 2, title: "UI/UX Designer", company: "CreativeMinds", location: "Remote", category: "Design", type: "Contract", level: "Senior", posted: "2025-04-12", status: "Active" },
  { id: 3, title: "Backend Engineer", company: "DataSystems Inc", location: "Abuja", category: "Software Development", type: "Full Time", level: "Senior", posted: "2025-04-10", status: "Active" },
  { id: 4, title: "Product Manager", company: "InnovateTech", location: "Lagos", category: "Management", type: "Full Time", level: "Senior", posted: "2025-04-08", status: "Active" },
  { id: 5, title: "Data Analyst", company: "InsightfulData", location: "Remote", category: "Data Science", type: "Part Time", level: "Entry Level", posted: "2025-04-05", status: "Active" },
];

const AdminJobs = () => {
  const [jobs, setJobs] = useState(jobsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<any>(null);
//   const { toast } = useToast();

  const jobsPerPage = 5;
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleEdit = (job: any) => {
    setEditingJob(job);
    setDialogOpen(true);
  };

  const handleDelete = (jobId: number) => {
    setJobs(jobs.filter(job => job.id !== jobId));
    // toast({
    //   title: "Job deleted",
    //   description: "The job has been successfully deleted.",
    // });
  };

  const handleSave = () => {
    if (editingJob) {
      setJobs(jobs.map(job => job.id === editingJob.id ? editingJob : job));
    //   toast({
    //     title: "Job updated",
    //     description: "The job has been successfully updated.",
    //   });
    } else {
      const newJobId = Math.max(...jobs.map(job => job.id)) + 1;
      setJobs([...jobs, { ...editingJob, id: newJobId, posted: new Date().toISOString().split('T')[0], status: "Active" }]);
    //   toast({
    //     title: "Job added",
    //     description: "The new job has been successfully created.",
    //   });
    }
    setDialogOpen(false);
    setEditingJob(null);
  };

  const handleAddNew = () => {
    setEditingJob({
      title: "",
      company: "",
      location: "",
      category: "",
      type: "",
      level: "",
    });
    setDialogOpen(true);
  };

  return (
    <AdminLayout title="Manage Jobs">
      {/* Search and Add */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-md border border-gray-400 px-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-careersng-purple"
          />
        </div>
        <button
          onClick={handleAddNew}
          className="flex items-center bg-[#ee774f] rounded-md bg-careersng-purple px-4 py-2 text-sm font-semibold text-white hover:bg-careersng-purple-dark"
        >
          <Plus className="mr-2  h-4 w-4" /> Add New Job
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-md border border-gray-400 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr className="text-left">
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Company</th>
              <th className="hidden px-4 py-3 md:table-cell">Location</th>
              <th className="hidden px-4 py-3 md:table-cell">Category</th>
              <th className="hidden px-4 py-3 md:table-cell">Type</th>
              <th className="hidden px-4 py-3 lg:table-cell">Posted</th>
              <th className="hidden px-4 py-3 lg:table-cell">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentJobs.map((job) => (
              <tr key={job.id} className="border-t border-gray-400">
                <td className="px-4 py-3 font-medium">{job.title}</td>
                <td className="px-4 py-3">{job.company}</td>
                <td className="hidden px-4 py-3 md:table-cell">{job.location}</td>
                <td className="hidden px-4 py-3 md:table-cell">{job.category}</td>
                <td className="hidden px-4 py-3 md:table-cell">{job.type}</td>
                <td className="hidden px-4 py-3 lg:table-cell">{job.posted}</td>
                <td className="hidden px-4 py-3 lg:table-cell">
                  <span className="inline-flex rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    {job.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex space-x-2">
                    <button onClick={() => handleEdit(job)} className="rounded-md p-2 hover:bg-gray-100">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button onClick={() => handleDelete(job.id)} className="rounded-md p-2 hover:bg-gray-100">
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`rounded-md border border-gray-400 px-3 py-1 text-sm ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`rounded-md border border-gray-400 px-3 py-1 text-sm ${currentPage === index + 1 ? "bg-careersng-purple " : "hover:bg-gray-100"}`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`rounded-md border border-gray-400 px-3 py-1 text-sm ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Modal Dialog (You can add a custom modal here instead of shadcn Dialog) */}
      {dialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="w-full max-w-xl rounded-lg bg-white p-6">
            <h2 className="mb-4 text-xl font-bold">
              {editingJob?.id ? "Edit Job" : "Add New Job"}
            </h2>
            <div className="space-y-4">
              {/* Fields */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium">Job Title</label>
                  <input
                    type="text"
                    value={editingJob?.title || ""}
                    onChange={(e) => setEditingJob({ ...editingJob, title: e.target.value })}
                    className="w-full rounded-md border px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Company</label>
                  <input
                    type="text"
                    value={editingJob?.company || ""}
                    onChange={(e) => setEditingJob({ ...editingJob, company: e.target.value })}
                    className="w-full rounded-md border px-3 py-2 text-sm"
                  />
                </div>
              </div>
              {/* More fields for location, category, etc */}
              {/* ... */}
            </div>

            {/* Footer */}
            <div className="mt-6 flex justify-end space-x-2">
              <button onClick={() => setDialogOpen(false)} className="rounded-md border px-4 py-2 text-sm hover:bg-gray-100">
                Cancel
              </button>
              <button onClick={handleSave} className="rounded-md bg-careersng-purple px-4 py-2 text-sm font-semibold text-white hover:bg-careersng-purple-dark">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminJobs;
