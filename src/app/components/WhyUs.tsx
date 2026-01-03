import { motion } from 'motion/react';
import { Shield, Users, CheckCircle, TrendingUp, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Overseas Education Expert',
    description: 'Years of experience in international education consulting with proven track record.',
  },
  {
    icon: Globe,
    title: 'Country-Specific Policy Knowledge',
    description: 'Stay updated with latest visa policies and immigration requirements for each destination.',
  },
  {
    icon: CheckCircle,
    title: 'Transparent & Ethical Process',
    description: 'No hidden charges, complete transparency in every step of the application process.',
  },
  {
    icon: TrendingUp,
    title: 'High Visa Success Rate',
    description: '95% visa approval rate through meticulous documentation and expert guidance.',
  },
  {
    icon: Users,
    title: 'Personalized Student Support',
    description: 'Dedicated counselors who understand your aspirations and guide you accordingly.',
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-[#0f3460]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Why <span className="text-[#B00020]">HU Consultants</span>
          </h2>
          <p className="text-xl text-[#c7c7d9] max-w-3xl mx-auto">
            Building trust through expertise, transparency, and results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1a1a2e] rounded-xl p-8 border border-[#B00020]/20 hover:border-[#B00020] transition-all duration-300"
            >
              <div className="mb-6 p-4 bg-[#B00020] rounded-lg inline-block">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl text-white mb-3">{feature.title}</h3>
              <p className="text-[#c7c7d9]">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#1a1a2e] rounded-2xl p-8 border border-[#B00020]/20"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl text-[#B00020] mb-2">500+</div>
              <div className="text-[#c7c7d9]">Students Guided</div>
            </div>
            <div>
              <div className="text-4xl text-[#B00020] mb-2">95%</div>
              <div className="text-[#c7c7d9]">Visa Success Rate</div>
            </div>
            <div>
              <div className="text-4xl text-[#B00020] mb-2">50+</div>
              <div className="text-[#c7c7d9]">Partner Universities</div>
            </div>
            <div>
              <div className="text-4xl text-[#B00020] mb-2">4.9/5</div>
              <div className="text-[#c7c7d9]">Student Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

