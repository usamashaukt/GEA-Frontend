import { motion } from 'motion/react';
import { Users, GraduationCap, FileText, Globe, Plane } from 'lucide-react';

const steps = [
  {
    icon: Users,
    title: 'Profile Evaluation',
    description: 'Comprehensive assessment of academic background, goals, and eligibility for various programs.',
  },
  {
    icon: GraduationCap,
    title: 'Country & University Selection',
    description: 'Expert guidance on selecting the best-fit country, university, and course based on your profile.',
  },
  {
    icon: FileText,
    title: 'Documentation & SOP',
    description: 'Assistance with preparing all documents, crafting compelling SOPs, and completing applications.',
  },
  {
    icon: Globe,
    title: 'Visa Filing',
    description: 'Complete visa application support with policy-compliant documentation and interview preparation.',
  },
  {
    icon: Plane,
    title: 'Pre-Departure Support',
    description: 'Final briefing on travel, accommodation, banking, and cultural adaptation for a smooth transition.',
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 bg-[#16213e] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Our <span className="text-[#B00020]">Process</span>
          </h2>
          <p className="text-xl text-[#c7c7d9] max-w-3xl mx-auto">
            A clear, step-by-step journey to your dream university
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#B00020]/30 -translate-x-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 lg:mb-20 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                <div className="bg-[#1a1a2e] rounded-xl p-8 border border-[#B00020]/20 hover:border-[#B00020] transition-all duration-300 hover:shadow-xl hover:shadow-[#B00020]/20">
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-[#B00020] rounded-lg">
                      <step.icon className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl text-[#B00020]">0{index + 1}</span>
                        <h3 className="text-2xl text-white">{step.title}</h3>
                      </div>
                      <p className="text-[#c7c7d9]">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#B00020] rounded-full border-4 border-[#16213e]" />

              {/* Spacer */}
              <div className="hidden lg:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

