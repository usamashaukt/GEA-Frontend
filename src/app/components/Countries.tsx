import { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, TrendingUp, Building, CheckCircle } from 'lucide-react';

interface CountryData {
  name: string;
  image: string;
  visaType: string;
  financialReq: string;
  workRights: string;
  postStudy: string;
}

const countries: CountryData[] = [
  {
    name: 'United Kingdom',
    image: 'https://images.unsplash.com/photo-1662520246005-a28829bfc037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml0ZWQlMjBraW5nZG9tJTIwbG9uZG9uJTIwYnJpZGdlfGVufDF8fHx8MTc2NzQ0MzM5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    visaType: 'Student Visa (Tier 4) - Points-based immigration system',
    financialReq: '£1,334/month for London, £1,023/month outside London + tuition fees',
    workRights: '20 hours/week during term, full-time during holidays',
    postStudy: 'Graduate Route: 2 years (3 years for PhD holders) to work or seek employment',
  },
  {
    name: 'United States',
    image: 'https://images.unsplash.com/photo-1719469199940-e2d77100aab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2ElMjBhbWVyaWNhbiUyMGZsYWclMjBjYW1wdXN8ZW58MXx8fHwxNjc3NDQzMzk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    visaType: 'F-1 Student Visa - Must maintain full-time enrollment',
    financialReq: 'Proof of funds for 1st year tuition + living expenses (varies by location)',
    workRights: 'On-campus: 20 hrs/week. CPT/OPT available for practical training',
    postStudy: 'OPT: 12 months (36 months for STEM). H-1B visa pathway available',
  },
  {
    name: 'Canada',
    image: 'https://images.unsplash.com/photo-1729683412778-07eb71ae9aef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5hZGElMjB0b3JvbnRvJTIwc2t5bGluZXxlbnwxfHx8fDE3NjczNzY0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    visaType: 'Study Permit - Valid for duration of program + 90 days',
    financialReq: 'CAD $20,635/year (outside Quebec) + tuition + travel costs',
    workRights: '20 hours/week during term, full-time during breaks',
    postStudy: 'PGWP: Up to 3 years. Pathway to permanent residency through Express Entry',
  },
  {
    name: 'Europe (Schengen)',
    image: 'https://images.unsplash.com/photo-1659092797144-9b3e21584344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGUlMjBnZXJtYW55JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2NzQ0MzM5OHww&ixlib=rb-4.1.0&q=80&w=1080',
    visaType: 'National Student Visa - Country specific (Germany, France, Netherlands, etc.)',
    financialReq: '€853-€1,000/month (Germany), €615/month (France) - varies by country',
    workRights: '120 full days or 240 half days per year (Germany). Varies by country',
    postStudy: '18-month job seeker visa (Germany). EU Blue Card pathway for skilled workers',
  },
];

export function Countries() {
  const [selectedCountry, setSelectedCountry] = useState(0);

  return (
    <section id="countries" className="py-20 bg-[#16213e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Countries We <span className="text-[#B00020]">Serve</span>
          </h2>
          <p className="text-xl text-[#c7c7d9] max-w-3xl mx-auto">
            Policy-compliant guidance for your dream destination
          </p>
        </motion.div>

        {/* Country Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {countries.map((country, index) => (
            <button
              key={country.name}
              onClick={() => setSelectedCountry(index)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                selectedCountry === index
                  ? 'bg-[#B00020] text-white shadow-lg shadow-[#B00020]/50'
                  : 'bg-[#1a1a2e] text-[#c7c7d9] hover:bg-[#23234b]'
              }`}
            >
              {country.name}
            </button>
          ))}
        </div>

        {/* Country Content */}
        <motion.div
          key={selectedCountry}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden h-[400px] group">
            <img
              src={countries[selectedCountry].image}
              alt={countries[selectedCountry].name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-3xl text-white">{countries[selectedCountry].name}</h3>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div className="bg-[#1a1a2e] rounded-xl p-6 border border-[#B00020]/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#B00020]/10 rounded-lg">
                  <Globe className="text-[#B00020]" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-white mb-2">Visa Type</h4>
                  <p className="text-[#c7c7d9]">{countries[selectedCountry].visaType}</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a2e] rounded-xl p-6 border border-[#B00020]/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#B00020]/10 rounded-lg">
                  <Building className="text-[#B00020]" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-white mb-2">Financial Requirements</h4>
                  <p className="text-[#c7c7d9]">{countries[selectedCountry].financialReq}</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a2e] rounded-xl p-6 border border-[#B00020]/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#B00020]/10 rounded-lg">
                  <CheckCircle className="text-[#B00020]" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-white mb-2">Work Rights During Study</h4>
                  <p className="text-[#c7c7d9]">{countries[selectedCountry].workRights}</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a2e] rounded-xl p-6 border border-[#B00020]/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#B00020]/10 rounded-lg">
                  <TrendingUp className="text-[#B00020]" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-white mb-2">Post-Study Opportunities</h4>
                  <p className="text-[#c7c7d9]">{countries[selectedCountry].postStudy}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

