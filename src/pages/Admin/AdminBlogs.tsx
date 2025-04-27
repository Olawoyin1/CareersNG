import { useState } from "react";
// import AdminLayout from "@/components/admin/AdminLayout";
import { Edit, Trash2, Plus, Search, Eye } from "lucide-react";
// import { useToast } from "@/components/ui/use-toast";
import AdminLayout from "./AdminLayout";

// Mock blog data
const blogsData = [
    {
      id: 1,
      title: "Top 10 Remote Jobs for Nigerian Professionals in 2025",
      excerpt: "Discover the most sought-after remote positions for Nigerian talents in the global marketplace.",
      author: "Chioma Eze",
      date: "April 10, 2025",
      readTime: "8 min read",
      category: "Remote Work",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
    },
    {
      id: 2,
      title: "How to Create a Winning Freelance Profile on CareersNG",
      excerpt: "Learn the essential tips and tricks to make your freelance profile stand out to potential clients.",
      author: "Oluwaseun Adeyemi",
      date: "April 5, 2025",
      readTime: "6 min read",
      category: "Freelancing",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692"
    },
    {
      id: 3,
      title: "Nigerian Tech Industry: Emerging Opportunities in 2025",
      excerpt: "An overview of the growing tech scene in Nigeria and the opportunities it presents for professionals.",
      author: "Tunde Johnson",
      date: "March 28, 2025",
      readTime: "10 min read",
      category: "Industry Trends",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692"
    },
    {
      id: 4,
      title: "Navigating Contract Negotiations as a Nigerian Freelancer",
      excerpt: "Essential legal tips for freelancers to ensure fair contracts and timely payments from clients.",
      author: "Amina Ibrahim",
      date: "March 20, 2025",
      readTime: "7 min read",
      category: "Legal Advice",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0"
    },
    {
      id: 5,
      title: "From Full-time to Freelance: A Transition Guide",
      excerpt: "A step-by-step guide to help Nigerian professionals transition from traditional employment to freelancing.",
      author: "David Okonkwo",
      date: "March 15, 2025",
      readTime: "9 min read",
      category: "Career Advice",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
    }
  ];

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState(blogsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<any>(null);
//   const { toast } = useToast();

  const blogsPerPage = 5;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleEdit = (blog: any) => {
    setEditingBlog(blog);
    setDialogOpen(true);
  };

  const handleDelete = (blogId: number) => {
    setBlogs(blogs.filter(blog => blog.id !== blogId));
    // toast({
    //   title: "Blog post deleted",
    //   description: "The blog post has been successfully deleted.",
    // });
  };

  const formatDate = () => {
    const date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  const handleSave = () => {
    if (editingBlog) {
      if (editingBlog.id) {
        setBlogs(blogs.map(blog => blog.id === editingBlog.id ? editingBlog : blog));
        // toast({
        //   title: "Blog post updated",
        //   description: "The blog post has been successfully updated.",
        // });
      } else {
        const newBlogId = Math.max(...blogs.map(blog => blog.id)) + 1;
        const newBlog = {
          ...editingBlog,
          id: newBlogId,
          date: formatDate(),
          readTime: `${Math.floor(Math.random() * 10) + 5} min read`,
        };
        setBlogs([...blogs, newBlog]);
        // toast({
        //   title: "Blog post created",
        //   description: "The new blog post has been successfully created.",
        // });
      }
      setDialogOpen(false);
      setEditingBlog(null);
    }
  };

  const handleAddNew = () => {
    setEditingBlog({
      title: "",
      excerpt: "",
      author: "",
      category: "",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
    });
    setDialogOpen(true);
  };

  const truncate = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <AdminLayout title="Manage Blogs">
      {/* Search and Add New */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full rounded-md border pl-10 py-2 text-sm focus:border-careersng-purple focus:ring-1 focus:ring-careersng-purple"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button
          onClick={handleAddNew}
          className="flex items-center gap-2 bg-[#ee774f] rounded-md bg-careersng-purple px-4 py-2 text-sm text-white hover:bg-careersng-purple-dark"
        >
          <Plus className="h-4 w-4" /> Create New Post
        </button>
      </div>

      {/* Blog Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-xs uppercase text-gray-600">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="hidden md:table-cell px-4 py-3">Author</th>
              <th className="hidden md:table-cell px-4 py-3">Category</th>
              <th className="hidden lg:table-cell px-4 py-3">Date</th>
              <th className="hidden lg:table-cell px-4 py-3">Read Time</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentBlogs.map((blog) => (
              <tr key={blog.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3 font-medium">{truncate(blog.title, 30)}</td>
                <td className="hidden md:table-cell px-4 py-3">{blog.author}</td>
                <td className="hidden md:table-cell px-4 py-3">
                  <span className="inline-block rounded-full bg-purple-100 px-3 py-0.5 text-xs text-blue-800">
                    {blog.category}
                  </span>
                </td>
                <td className="hidden lg:table-cell px-4 py-3">{blog.date}</td>
                <td className="hidden lg:table-cell px-4 py-3">{blog.readTime}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button className="text-blue-500 hover:underline">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button onClick={() => handleEdit(blog)} className="text-gray-700 hover:underline">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button onClick={() => handleDelete(blog.id)} className="text-red-500 hover:underline">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`rounded px-3 py-1 text-sm ${
              currentPage === index + 1
                ? "bg-careersng-purple text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Modal Dialog */}
      {dialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-lg rounded-lg bg-white p-6">
            <div className="mb-4 text-lg font-semibold">
              {editingBlog?.id ? "Edit Blog Post" : "Create New Blog Post"}
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Title</label>
                <input
                  type="text"
                  className="w-full rounded border px-3 py-2 text-sm"
                  value={editingBlog?.title || ""}
                  onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm mb-1">Author</label>
                  <input
                    type="text"
                    className="w-full rounded border px-3 py-2 text-sm"
                    value={editingBlog?.author || ""}
                    onChange={(e) => setEditingBlog({ ...editingBlog, author: e.target.value })}
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm mb-1">Category</label>
                  <select
                    className="w-full rounded border px-3 py-2 text-sm"
                    value={editingBlog?.category || ""}
                    onChange={(e) => setEditingBlog({ ...editingBlog, category: e.target.value })}
                  >
                    <option value="">Select category</option>
                    <option value="Remote Work">Remote Work</option>
                    <option value="Freelancing">Freelancing</option>
                    <option value="Industry Trends">Industry Trends</option>
                    <option value="Legal Advice">Legal Advice</option>
                    <option value="Career Advice">Career Advice</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">Excerpt</label>
                <textarea
                  rows={3}
                  className="w-full rounded border px-3 py-2 text-sm"
                  value={editingBlog?.excerpt || ""}
                  onChange={(e) => setEditingBlog({ ...editingBlog, excerpt: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Featured Image URL</label>
                <input
                  type="text"
                  className="w-full rounded border px-3 py-2 text-sm"
                  value={editingBlog?.image || ""}
                  onChange={(e) => setEditingBlog({ ...editingBlog, image: e.target.value })}
                />
              </div>

              <div className="flex justify-end gap-2 mt-6">
                <button
                  onClick={() => setDialogOpen(false)}
                  className="rounded px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="rounded px-4 py-2 text-sm bg-careersng-purple text-white hover:bg-careersng-purple-dark"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminBlogs;
