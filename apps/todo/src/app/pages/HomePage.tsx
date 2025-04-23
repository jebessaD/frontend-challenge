import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { TodoList } from '../components/TodoList';
import { TodoForm } from '../components/TodoForm';
import { ChevronRight, Filter } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

type FilterType = 'all' | 'completed' | 'incomplete';

export function HomePage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-white rounded-2xl overflow-hidden ">
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-2">
              <motion.h1
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold text-purple-800"
              >
                Todo App
              </motion.h1>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleFilter}
                className="flex items-center gap-1 text-purple-600 hover:text-purple-800 transition-colors"
                aria-label="Filter todos"
              >
                <Filter size={20} />
                <motion.div
                  animate={{ rotate: isFilterOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight size={20} />
                </motion.div>
              </motion.button>
            </div>

            <motion.p
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-purple-500 mb-6"
            >
              Get things done, one task at a time
            </motion.p>

            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6 overflow-hidden"
                >
                  <div className="flex gap-3 p-3 bg-purple-50 rounded-lg">
                    {(['all', 'completed', 'incomplete'] as FilterType[]).map(
                      (filter) => (
                        <motion.button
                          key={filter}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setActiveFilter(filter)}
                          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                            activeFilter === filter
                              ? 'bg-purple-600 text-white'
                              : 'bg-white text-purple-600 hover:bg-purple-100'
                          }`}
                        >
                          {filter.charAt(0).toUpperCase() + filter.slice(1)}
                        </motion.button>
                      )
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <TodoForm />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <TodoList filter={activeFilter} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
