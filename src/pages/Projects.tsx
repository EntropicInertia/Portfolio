import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { SiArxiv } from "react-icons/si";
import ReactECharts from 'echarts-for-react'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
  paper?: string
  metrics?: {
    label: string
    value: string
  }[]
}

const Projects = () => {
  // Detect dark mode
  const isDarkMode = document.documentElement.classList.contains('dark') || window.matchMedia('(prefers-color-scheme: dark)').matches
  const textColor = isDarkMode ? '#d1d5db' : '#4b5563' // gray-300 : gray-600
  
  // Get primary-600 color from Tailwind
  const getPrimaryColor = () => {
    const tempElement = document.createElement('div')
    tempElement.className = 'bg-primary-600'
    document.body.appendChild(tempElement)
    const color = getComputedStyle(tempElement).backgroundColor
    document.body.removeChild(tempElement)
    // Convert rgb to hex
    const rgb = color.match(/\d+/g)
    if (rgb) {
      return '#' + rgb.map(x => parseInt(x).toString(16).padStart(2, '0')).join('')
    }
    return '#7a00cc' // fallback to primary-600
  }
  const primaryColor = getPrimaryColor()
  
  // Sample projects - Replace with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: 'AI Powered Multi-Agent Contract Engine',
      description:
        'Built an AI powered contract generation platform that automated the drafting and validation of Statements of Work for a high volume professional services organization. Using an agent-based architecture, the system generated legally compliant contracts from approved language libraries, validated them through automated compliance checks, and analyzed uploaded documents for quality and risk. The platform reduced contract creation time from hours or days to minutes while improving consistency and legal reliability.',
      technologies: ['Azure', 'Python', 'FastAPI', 'Docker', 'Databricks', 'LangGraph', 'LangChain', 'OpenAI', 'Claude', 'MCP', 'MLOps', 'CI/CD'],
      github: 'https://github.com/EntropicInertia',
      paper: 'https://arxiv.org/abs/2508.07569',
      metrics: [
        { label: 'Draft Time Reduction', value: '96.875%' },
        { label: 'Legal & Compliance Accuracy', value: '99.998%' },
        { label: 'Users', value: '50+' },
      ],
    },
    {
      id: 2,
      title: 'AI Powered Contact Center Classification & Efficiency Optimization',
      description:
        'Developed and deployed an AI assisted classification system for a high volume, omnichannel customer support operation handling phone calls, web forms, and social media interactions for large franchise brands. Using speech transcription with OpenAI Whisper and a custom trained RoBERTa NLP model, the system automatically categorized inbound contacts across a multi-level taxonomy before agents handled them. The solution included a human-in-the-loop retraining pipeline and significantly improved routing accuracy, reduced handling time, and lowered repeat customer contacts.',
      technologies: ['Azure', 'Python', 'PyTorch', 'Transformers', 'BERT / RoBERTa', 'RoBERTa', 'Whisper', 'Containerization', 'CI/CD', 'MLOps', 'Flask', 'Human-in-the-Loop'],
      github: 'https://github.com/EntropicInertia',
      metrics: [
        { label: 'Categorization Accuracy', value: '97.2134%' },
        { label: 'Average Resolution Time Reduction', value: '65.6250%' },
        { label: 'Repeat Contact Rate Reduction', value: '53.8462%' },
      ],
    },
    {
      id: 3,
      title: 'Data Visualization Dashboard',
      description:
        'Built a cloud-based analytics platform to analyze international mobile roaming behavior using large-scale telecom datasets. The system integrated streaming tower events and usage data from multiple databases, processed and aggregated them with Apache Spark, and indexed the results in OpenSearch for real-time exploration. Interactive dashboards built with Apache ECharts enabled analysts to explore travel patterns, roaming usage, and plan adoption across trillions of data points, unlocking insights that improved marketing strategy and product optimization.',
      technologies: ['AWS', 'Palantir', 'PySpark', 'Python', 'TypeScript', 'ECharts', 'Flask', 'PostgreSQL', 'MSSQL', 'MongoDB', 'OpenSearch'],
      demo: 'https://example.com',
      metrics: [
        { label: 'Analyst Users', value: '100+' },
        { label: 'Data Points', value: '17t+' },
      ],
    },
    {
      id: 4,
      title: 'Customer Retention Predictive Analytics',
      description:
        'Built machine learning models to predict customer churn and estimate lifetime value for financial services organizations. Using ensemble modeling, feature engineering, and hyperparameter tuning, the churn model achieved 92% accuracy while identifying key indicators of customer attrition. Customers were segmented into risk tiers and combined with lifetime value estimates to help prioritize retention efforts and optimize customer engagement strategies.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'XGBoost'],
      github: 'https://github.com/EntropicInertia',
      metrics: [
        { label: 'Accuracy', value: '92%' },
        { label: 'F1 Score', value: '0.89' },
      ],
    },
    
  ]

  // ECharts configuration for project metrics visualization
  const getMetricsOption = (metrics: { label: string; value: string }[]) => {
    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      xAxis: {
        type: 'category',
        data: metrics.map((m) => m.label),
        axisLabel: {
          color: textColor,
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: textColor,
        },
      },
      series: [
        {
          data: metrics.map((m) => parseFloat(m.value) || 0),
          type: 'bar',
          itemStyle: {
            color: primaryColor,
          },
        },
      ],
    }
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            A collection of data science and machine learning projects showcasing real-world
            applications and solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group"
            >
              {/* Project Header */}
              <div className="mb-4">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Metrics Visualization */}
              {project.metrics && (
                <div className="mb-4">
                  <ReactECharts
                    option={getMetricsOption(project.metrics)}
                    style={{ height: '300px' }}
                  />
                </div>
              )}

              {/* Links */}
              <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <FaGithub size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <FaExternalLinkAlt size={16} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                )}
                {project.paper && (
                  <a
                    href={project.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <SiArxiv size={16} />
                    <span className="text-sm font-medium">Research Paper</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Want to see more projects or collaborate?
          </p>
          <a
            href="https://github.com/EntropicInertia"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            View GitHub Profile <FaGithub />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
