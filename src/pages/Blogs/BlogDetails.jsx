import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { blogData } from "../../constants";
import Navbar from "../../components/Navbar";
import Logo from "/assets/black-logo.svg";
import Footer from "../../components/Footer";
import { imageConfigs } from "../../constants/imageConfig";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));

  const getImageComponent = (index) => {
    
    if (imageConfigs[index]) {
      const { src, alt, caption, layout = "normal" } = imageConfigs[index];

      if (layout === "side") {
        return (
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="float-right ml-6 mb-6 w-1/2 relative group"
          >
            <img
              src={src}
              alt={alt}
              className="rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-600 mt-2 italic text-center">
              {caption}
            </p>
          </motion.div>
        );
      }

      if (layout === "wide") {
        return (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="my-12 relative group"
          >
            <img
              src={src}
              alt={alt}
              className="w-full rounded-xl shadow-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-xl">
              <p className="text-white text-center">
                {caption}
              </p>
            </div>
          </motion.div>
        );
      }

      return (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="my-8 relative"
        >
          <img
            src={src}
            alt={alt}
            className="w-full rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-600 mt-2 italic text-center">
            {caption}
          </p>
        </motion.div>
      );
    }
    return null;
  };

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
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="container mx-auto px-4 py-12 max-w-4xl"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative rounded-xl overflow-hidden mb-8 group"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-[#F2762E] text-white px-4 py-1 rounded-full text-sm">
                  {blog.category}
                </span>
                <span className="text-white/90 text-sm">{blog.date}</span>
              </div>
              <h1 className="text-4xl font-bold text-white">
                {blog.title}
              </h1>
            </div>
          </motion.div>

          {blog.content.map((section, index) => {
            const imageComponent = getImageComponent(index);
            
            return (
              <React.Fragment key={index}>
                {(() => {
                  switch (section.type) {
                    case "heading":
                      return (
                        <motion.h1
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-4xl font-bold text-[#024959] mb-6"
                        >
                          {section.text}
                        </motion.h1>
                      );
                    case "subheading":
                      return (
                        <motion.h2
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-2xl font-bold text-[#024959] mt-8 mb-4"
                        >
                          {section.text}
                        </motion.h2>
                      );
                    case "highlight":
                      return (
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-[#F2762E]/10 border-l-4 border-[#F2762E] p-4 my-6"
                        >
                          {section.text}
                        </motion.div>
                      );
                    default:
                      return (
                        <motion.p
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-gray-700 mb-6 leading-relaxed"
                        >
                          {section.text}
                        </motion.p>
                      );
                  }
                })()}
                {imageComponent}
              </React.Fragment>
            );
          })}
        </motion.article>
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default BlogDetails;