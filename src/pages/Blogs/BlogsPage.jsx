import React, { useState, useEffect } from "react";
import BlogCard from "../../components/BlogCard";
import { motion, AnimatePresence } from "framer-motion";
import { blogData } from "../../constants";
import Navbar from "../../components/Navbar";
import Logo from "/assets/black-logo.svg";
import Footer from "../../components/Footer";
import { Search, Filter, X } from "lucide-react";
import { useTranslation } from 'react-i18next';
import axiosInstance from "../../../api/axiosInstance";

// const categories = ["All", "Real Estate", "Investment", "Market Analysis", "Property Guide"];

const BlogsPage = () => {
  const { t } = useTranslation('common');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [sortBy, setSortBy] = useState("latest");
  const [isSearchFocused, setIsSearchFocused] = useState(false);


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axiosInstance.get('/api/categories'); 
        
        if (Array.isArray(res.data.categories)) {
          const dynamicCategories = res.data.categories.map(cat => ({ name: cat.name, id: cat.id }));

          setCategories([{ name: "All", id: "all" }, ...dynamicCategories]); 
          
        } else {
          console.error("API response categories is not an array:", res.data.categories);
        }
      } catch (err) {
        console.error("Failed to load categories:", err);
      }
    };

    fetchCategories();
  }, []);


  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axiosInstance.get("/api/blogs"); 
        console.log("blogs", response.data.blogs);
        setBlogs(response.data.blogs); 
        setFilteredBlogs(response.data.blogs); 
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);



  useEffect(() => {
    let filtered = [...blogs];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        blog =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase())
        // ||
        //   blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(blog => blog.category.name === selectedCategory);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      if (sortBy === "latest") {
        return new Date(b.date) - new Date(a.date);
      } else if (sortBy === "oldest") {
        return new Date(a.date) - new Date(b.date);
      }
      return 0;
    });

    setFilteredBlogs(filtered);
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <main>
      <Navbar
        textcolor={"black"}
        font={"bold"}
        justify={"center"}
        scrollbg={"[#024959]"}
        logo={Logo}
      />

      <section className="pt-20 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-[#024959] mb-4">
              {t('blogs.heading')}
            </h1>
            <p className="text-gray-600">
              {t('blogs.subHeading')}
            </p>
          </motion.div>

          {/* Search and Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              {/* Search Bar */}
              <div className="relative mb-6">
                <div className={`relative transition-all duration-300 ${isSearchFocused ? "ring-2 ring-[#024959]" : ""
                  }`}>
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 focus:outline-none"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              </div>

              {/* Filters Row */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Filter size={18} />
                  <span>Filters:</span>
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id} 
                      onClick={() => setSelectedCategory(category.name)} 
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category.name
                          ? "bg-[#024959] text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                    >
                      {category.name} 
                    </button>
                  ))}
                </div>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="ml-auto px-4 py-2 rounded-lg bg-gray-100 text-gray-600 focus:outline-none cursor-pointer"
                >
                  <option value="latest">Latest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Results Section */}
          <AnimatePresence mode="wait">
            {filteredBlogs.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredBlogs.map((blog, index) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: index * 0.1 }
                    }}
                  >
                    <BlogCard blog={blog} index={index} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
                  <h3 className="text-xl font-semibold text-[#024959] mb-2">
                    No matches found
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search or filters to find what you're looking for
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All");
                    }}
                    className="text-[#F2762E] hover:underline font-medium"
                  >
                    Reset all filters
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
};

export default BlogsPage;