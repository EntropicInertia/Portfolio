import { motion } from 'framer-motion'
import ReactECharts from 'echarts-for-react'

const About = () => {
  // Detect dark mode
  const isDarkMode = document.documentElement.classList.contains('dark') || window.matchMedia('(prefers-color-scheme: dark)').matches
  const textColor = isDarkMode ? '#d1d5db' : '#4b5563' // gray-300 : gray-600
  const outlineColor = isDarkMode ? '#fff' : '#7b00ff' // gray-600 : gray-300

  // Skills data for visualization
  const skillsData = {
    categories: ['Python', 'ML/AI', 'Data Viz', 'Stats', 'Cloud', 'Big Data', 'Leadership'],
    values: [90, 95, 92, 87, 83, 65, 89],
  }

  // ECharts configuration for skills radar chart
  const radarOption = {
    title: {
      text: 'Technical Skills',
      left: 'center',
      textStyle: {
        fontSize: 24,
        fontWeight: 600,
        color: textColor,
      },
    },
    tooltip: {
      trigger: 'item',
    },
    radar: {
      indicator: skillsData.categories.map((cat) => ({ name: cat, max: 100 })),
      shape: 'polygon',
      radius: '60%',
      axisName: {
        color: textColor,
      },
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: skillsData.values,
            name: 'Proficiency',
            areaStyle: {
              color: 'rgba(74, 0, 153, 0.3)',
            },
            lineStyle: {
              color: 'rgba(74, 0, 153, 1)',
              width: 4,
            },
            itemStyle: {
              color: 'rgba(123, 0, 255, 1)',
              borderColor: outlineColor,
              borderWidth: 1,
            },
          },
        ],
      },
    ],
  }

  const experience = [
    {
      year: '2008-2009',
      title: 'Data & Systems Analyst',
      description: 'Started career building and maintaining a custom calculation engine for managing pension funds and actuarial valuation for Fortune 500 clients.',
    },
    {
      year: '2009-2014',
      title: 'Lead Data & Systems Analyst',
      description: 'Led teams maintaining a custom calculation engine for managing pension funds and actuarial valuation for Fortune 500 clients. Lead automation of testing and operational workflows.',
    },
    {
      year: '2014-2016',
      title: 'Mathematics & Computer Science Instructor',
      description: 'Designed and delivered mathematics and computer science curriculum for adult and at-risk learners, emphasizing clear communication of complex technical concepts',
    },
    {
      year: '2018-2021',
      title: 'Data Scientist',
      description: 'Served as a trusted analytics advisor to enterprise clients, developed machine learning models for predictive analytics and forecasting, and designed / implemented advanced statistical and causal modeling frameworks.',
    },
    {
      year: '2022-2023',
      title: 'Senior Data Scientist',
      description: 'Architected end-to-end ML pipelines and led multiple data science client teams in the design and implementation of enterprise AI solutions, while mentoring junior data scientists and influencing technical strategy and architecture decisions.',
    },
    {
      year: '2024-2026',
      title: 'ML & AI Technical Architect',
      description: 'Consulted with telecom, banking, pharmaceutical, and other enterprise clients on AI strategy, architecture, and implementation, while leading the design and development of advanced AI solutions and mentoring senior data scientists and engineers.',
    },
  ]

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
            I'm a <span className="underline">Data Scientist</span> and <span className="underline">Data Science Leader</span> with 10+ years of experience translating complex data into measurable revenue
            impacts across healthcare, telecom, logistics, retail, and other enterprise clients.
          </p>
          <br></br>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
            Proven track record of leading end-to-end enterprise AI initiatives, from problem framing and model design to production
            deployment, while influencing architecture decisions, aligning with stakeholders,mentoring senior engineers and data 
            scientists, and translating complex mathematical concepts into measurable meaningful business impacts.
          </p>
        </motion.div>

        {/* Skills Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="card">
            <ReactECharts option={radarOption} style={{ height: '400px' }} />
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Career Journey</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card flex flex-col md:flex-row gap-6"
              >
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="text-primary-600 dark:text-primary-400 font-bold text-lg">
                    {exp.year}
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Core Competencies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Data Science Leadership',
                items: [
                  'Team Building & Hiring', 'Mentorship & Career Development', 'Roadmap & Prioritization', 'Stakeholder Management', 
                  'Executive Communication', 'Delivery Ownership', 'Technical Strategy', 'Cross-Functional Collaboration'
                ],
              },
              {
                title: 'Machine Learning & AI',
                items: [
                  'Supervised/Unsupervised Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Deep Learning', 'Causal Inference', 
                  'Evolutionary Algorithms', 'Transformers', 'Generative AI', 'Causal Inference', 'Statistical Modeling', 
                  'Optimization'
                ],
              },
              {
                title: 'Generative AI & LLMs',
                items: [
                  'LangChain', 'LangGraph', 'DeepAgents', 'BMAD', 'MCP', 'RAG', 'Prompt Engineering', 'Vector Databases', 
                  'Cognitive Search', 'Document Understanding', 'OpenAI', 'Claude', 'Gemini', 'Mistral'
                ],
              },
              {
                title: 'Data & ML Systems',
                items: [
                  'ETL Pipelines', 'Data Warehousing', 'Data Lakehouse', 'Data Lineage', 'DevOps', 'MLOps', 'LLMOps', 
                  'Model Lifecycle Management', 'PySpark', 'PostgreSQL', 'SQL', 'Hadoop'
                ],
              },
              {
                title: 'Clouds & Platforms',
                items: [
                  'Azure', 'AWS', 'GCP', 'Palantir', 'Databricks', 'Kubernetes', 'Snowflake', 'Docker', 'CI/CD', 'GitHub Actions'
                ],
              },
              {
                title: 'Python Ecosystem',
                items: ['Pandas, NumPy', 'TensorFlow, PyTorch', 'Scikit-learn', 'Matplotlib, Seaborn'],
              },
              {
                title: 'Tools & Practices',
                items: ['Git / GitHub', 'Docker', 'CI / CD', 'Agile / Scrum / Kanban'],
              },
            ].map((competency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-xl font-semibold mb-4">{competency.title}</h3>
                <ul className="space-y-2">
                  {competency.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
