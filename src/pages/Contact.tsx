import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope size={32} />,
      label: 'Email',
      value: 'Justin dot Groseclose at Gmail dot com',
      link: 'mailto:Justin.Groseclose@gmail.com',
    },
    {
      icon: <FaGithub size={32} />,
      label: 'GitHub',
      value: '@EntropicInertia',
      link: 'https://github.com/EntropicInertia',
    },
    {
      icon: <FaLinkedin size={32} />,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/Justin-Groseclose/',
    },
    // {
    //   icon: <FaTwitter size={32} />,
    //   label: 'Twitter / X',
    //   value: '@yourusername',
    //   link: 'https://twitter.com',
    // },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm always open to discussing new projects, interesting problems, 
            creative ideas, or opportunities to be part of your visions. 
            Let's connect!
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : undefined}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="text-primary-600 dark:text-primary-400">
                  {method.icon}
                </div>
                <div className="flex-grow">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    {method.label}
                  </div>
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    {method.value}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Availability Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="card bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border border-primary-200 dark:border-primary-800">
            <h3 className="text-xl font-semibold mb-4">Current Availability</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm currently available for freelance projects, consulting opportunities, and
              collaborations in the data science, AI, and technology space. Feel free to 
              reach out if you have an interesting project or just want to connect!
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Open to new projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Available for consulting</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Areas of Interest */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Areas of Interest</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              
              {
                title: 'AI Consulting',
                description: 'Strategic guidance on AI/ML governance, implementation, and usecase management',
              },
              {
                title: 'Machine Learning',
                description: 'Building predictive models and ML pipelines',
              },
              {
                title: 'Data Engineering',
                description: 'Designing scalable and maintainable data infrastructure',
              },
              {
                title: 'Civic Technology',
                description: 'Developing technology solutions for public good and community engagement',
              },
              {
                title: 'Home Automation',
                description: 'Implementing smart home automation solutions and IoT integration and management',
              },
              {
                title: 'Self Hosting Labs',
                description: 'Exploring and experimenting with modern technologies in a personal lab environment',
              },
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
