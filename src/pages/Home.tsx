import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PiHeadCircuit } from "react-icons/pi";
import { VscMcp } from "react-icons/vsc";
import { FaArrowRight, FaPython, FaChartBar, FaChartLine, FaBrain, FaCloud } from 'react-icons/fa'
import { SiTensorflow, SiPandas, SiScikitlearn, SiLangchain, SiLanggraph, SiClaude } from 'react-icons/si'

const Home = () => {
  const skills = [
    { icon: <FaPython size={32} />, name: 'Python' },
    { icon: <SiPandas size={32} />, name: 'Pandas' },
    { icon: <FaBrain size={32} />, name: 'ML/AI' },
    { icon: <SiLangchain size={32} />, name: 'LangChain' },
    { icon: <SiLanggraph size={32} />, name: 'LangGraph' },
    // { icon: <SiClaude size={32} />, name: 'Claude' },
    { icon: <VscMcp size={32} />, name: 'MCP' },

    { icon: <SiTensorflow size={32} />, name: 'TensorFlow' },
    { icon: <SiScikitlearn size={32} />, name: 'Scikit-learn' },
    { icon: <FaChartLine size={32} />, name: 'Analytics' },
    { icon: <FaChartBar size={32} />, name: 'Data Viz' },
    { icon: <PiHeadCircuit size={32} />, name: 'Edge Computing' },
    { icon: <FaCloud size={32} />, name: 'Cloud Computing' },
    
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold p-2 mb-8 bg-gradient-to-r from-primary-400 to-primary-800 text-transparent bg-clip-text">
            Data Scientist & AI Engineer
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Transforming complex data into actionable insights with 15+ years of experience in
            Python, Machine Learning, and AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects" className="btn-primary inline-flex items-center justify-center gap-2">
              View Projects <FaArrowRight />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Core Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="text-primary-600 dark:text-primary-400">
                    {skill.icon}
                  </div>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center card"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Interested in collaborating on data science projects or need expertise in ML/AI?
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Contact Me <FaArrowRight />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
