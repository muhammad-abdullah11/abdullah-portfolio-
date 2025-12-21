// RecentWork.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaChartBar,
  FaCogs,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";

const images = [
  "https://images.unsplash.com/photo-1590608897129-79da98d1591c?w=1400&h=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&h=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&h=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1400&h=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&h=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&h=900&auto=format&fit=crop",
];

/* MERN-focused portfolio projects */
const portfolio = [
  {
    id: 1,
    title: "E-Commerce Analytics Dashboard",
    category: "Dashboard",
    description:
      "Full MERN dashboard showing conversions, user funnels, and real-time revenue.",
    tech: ["React", "Node.js", "MongoDB"],
    image: images[0],
    icon: <FaChartBar className="text-gray-600" />,
  },
  {
    id: 2,
    title: "Corporate Landing Page",
    category: "Web",
    description:
      "High-performance marketing landing built with React UI components.",
    tech: ["React", "JavaScript", "Vite"],
    image: images[1],
    icon: <FaLaptopCode className="text-gray-600" />,
  },
  {
    id: 3,
    title: "SaaS Admin Portal",
    category: "Dashboard",
    description:
      "Admin panel built with MERN, role-based access, and analytics widgets.",
    tech: ["React", "Express", "MongoDB"],
    image: images[2],
    icon: <FaCogs className="text-gray-600" />,
  },
  {
    id: 4,
    title: "Marketing Campaign Manager",
    category: "Web",
    description:
      "Tool for scheduling campaigns, tracking metrics, and uploading creative assets.",
    tech: ["React", "Express API", "Node.js"],
    image: images[3],
    icon: <FaLaptopCode className="text-gray-600" />,
  },
  {
    id: 5,
    title: "Client CRM Platform",
    category: "API",
    description:
      "CRM backend with MongoDB, REST APIs, and secure authentication.",
    tech: ["Node.js", "Express", "MongoDB"],
    image: images[4],
    icon: <FaDatabase className="text-gray-600" />,
  },
  {
    id: 6,
    title: "Cloud File Storage Service",
    category: "API",
    description:
      "Node.js microservice for uploads, metadata indexing, and cloud integration.",
    tech: ["Node.js", "Express", "Cloudinary"],
    image: images[5],
    icon: <FaCloud className="text-gray-600" />,
  },
];

/* Filter categories */
const categories = ["All", "Web", "Dashboard", "API"];

/* Motion presets */
const cardInitial = { opacity: 0, scale: 0.96 };
const cardAnimate = (i) => ({
  opacity: 1,
  scale: 1,
  transition: { duration: 0.45, delay: i * 0.06 },
});

export default function RecentWork() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? portfolio
      : portfolio.filter((p) => p.category === active);

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-900"
        >
          Recent Work
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-gray-600 max-w-3xl mx-auto mt-4"
        >
          Selected projects built using the MERN stack—MongoDB, Express,
          React, and Node.js.
        </motion.p>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto mb-10 flex justify-center gap-4">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActive(cat)}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className={`px-4 py-2 rounded-full font-medium border transition ${
              active === cat
                ? "bg-gray-800 text-white border-gray-800"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={cardInitial}
              animate={cardAnimate(idx)}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 cursor-default"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden bg-gray-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 rounded-md">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-sm text-gray-500 font-medium">
                    {item.category}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full border border-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
