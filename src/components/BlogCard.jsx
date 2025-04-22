import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, User } from 'lucide-react';


const BlogCard = ({ blog, index }) => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
  >
    <Link to={`/blog/${blog.id}`}>
      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-[#F2762E] text-sm flex items-center">
            <Clock size={16} className="mr-1" />
            {blog.published_at}
          </span>
          <span className="text-gray-600 text-sm flex items-center">
            <User size={16} className="mr-1" />
            {blog.user.name}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-[#024959]">{blog.title}</h3>
        <p className="text-gray-600 mb-4">{blog.excerpt}</p>
        <div className="flex items-center text-[#F2762E]">
          Read More <ChevronRight size={16} className="ml-1" />
        </div>
      </div>
    </Link>
  </motion.div>
  )
}

export default BlogCard;
