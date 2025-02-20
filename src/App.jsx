
import { motion } from "framer-motion";

function App() {
  const images = [
    "https://i.ibb.co/zHTMX84n/olive-tree-20-02-2025-at-20-23-04.jpg",
    "https://i.ibb.co/Dg9qYxKQ/Unganisha-20-02-2025-at-20-21-57.jpg",
    "https://i.ibb.co/NdxpJNxc/bigger-Science-20-02-2025-at-20-21-27.jpg",
    "https://i.ibb.co/Fk789MFK/museum-20-02-2025-at-20-24-10.jpg"
  ];

  return (
    <section className="relative h-screen bg-black flex flex-col justify-center items-center overflow-hidden">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-white md:text-8xl text-5xl font-bold text-center z-10 leading-tight"
      >
        IMAGINING UNIQUE <br /> CONCEPTS AND <br /> DIGITAL EXPERIENCES
      </motion.h1>

      {/* Images */}
      <div className="absolute inset-0 flex flex-col justify-between w-full h-full px-10 py-16">
        {/* Top Row */}
        <div className="flex justify-center md:gap-32 gap-10 md:mb-16 mt-10 md:mt-0">
          {images.slice(0, 2).map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt="Hero"
              className="w-40 h-40 md:w-60 md:h-60 object-cover transition-all duration-200 rounded-lg"
              whileHover={{ x: 50 }} 
              transition={{ type: "spring", stiffness: 100 }}
            />
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex justify-center md:gap-32 gap-10 mb-16 md:mb-0">
          {images.slice(2, 4).map((src, index) => (
            <motion.img
              key={index + 2}
              src={src}
              alt="Hero"
              className="w-40 h-40 md:w-60 md:h-60 object-cover transition-all duration-200 rounded-lg"
              whileHover={{ x: 50 }} 
              transition={{ type: "spring", stiffness: 100 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
