import { motion } from 'motion/react';
import { GraduationCap, FileText, Globe, BookOpen, Award, Plane } from 'lucide-react';

const services = [
  {
    icon: GraduationCap,
    title: 'University & Course Selection',
    description: 'Expert guidance to choose the right university and program matching your profile and career goals.',
  },
  {
    icon: FileText,
    title: 'Admission Processing',
    description: 'Complete support with application forms, document preparation, and submission to universities.',
  },
  {
    icon: Globe,
    title: 'Visa Guidance (Policy-Based)',
    description: 'Up-to-date visa guidance compliant with current immigration policies for each country.',
  },
  {
    icon: BookOpen,
    title: 'SOP & Documentation',
    description: 'Professional assistance in crafting compelling SOPs and organizing all required documents.',
  },
  {
    icon: Award,
    title: 'Scholarship Assistance',
    description: 'Help identify and apply for scholarships, grants, and financial aid opportunities.',
  },
  {
    icon: Plane,
    title: 'Pre-Departure Briefing',
    description: 'Comprehensive orientation covering travel, accommodation, cultural adaptation, and more.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Our <span className="text-[#B00020]">Services</span>
          </h2>
          <p className="text-xl text-[#c7c7d9] max-w-3xl mx-auto">
            Comprehensive support throughout your study abroad journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-[#16213e] rounded-xl p-8 border border-[#B00020]/20 hover:border-[#B00020] transition-all duration-300 hover:shadow-xl hover:shadow-[#B00020]/20"
            >
              <div className="mb-6 p-4 bg-[#B00020]/10 rounded-lg inline-block group-hover:bg-[#B00020]/20 transition-colors duration-300">
                <service.icon className="text-[#B00020]" size={32} />
              </div>
              <h3 className="text-xl text-white mb-3">{service.title}</h3>
              <p className="text-[#c7c7d9]">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

