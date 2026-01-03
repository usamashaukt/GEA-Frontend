import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Map() {
  return (
    <section className="py-20 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Visit Our <span className="text-[#B00020]">Office</span>
          </h2>
          <p className="text-xl text-[#c7c7d9] max-w-3xl mx-auto">
            Come meet our expert counselors for a face-to-face consultation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden border-2 border-[#B00020]/20 h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.7489189079834!2d72.92278587617557!3d33.998982420539896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfb3893e5b037b%3A0x1afc8cf35b859c45!2sHU%20CONSULTANTS!5e0!3m2!1sen!2s!4v1751889891479!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HU Consultants Office Location"
            />
          </motion.div>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div className="bg-[#16213e] rounded-2xl p-8 border border-[#B00020]/20">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-[#B00020] rounded-lg">
                  <MapPin className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-white mb-3">Office Address</h3>
                  <p className="text-[#c7c7d9] text-lg leading-relaxed">
                    Shop# 1 ... Al Amin Market<br />
                    Dhendian Road, near sabzi mandi<br />
                    Pakistan
                  </p>
                  <a
                    href="https://www.google.com/maps/place/HU+CONSULTANTS/@33.9989824,72.9227859,17z/data=!3m1!4b1!4m6!3m5!1s0x38dfb3893e5b037b:0x1afc8cf35b859c45!8m2!3d33.9989824!4d72.9253608!16s%2Fg%2F11c5qj5q5j?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-2 bg-[#B00020] text-white rounded-lg hover:bg-[#8e0019] transition-colors duration-300"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-[#16213e] rounded-2xl p-8 border border-[#B00020]/20">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#B00020]/10 rounded-lg">
                    <Phone className="text-[#B00020]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">Phone</h4>
                    <a href="tel:+923122496574" className="text-[#c7c7d9] hover:text-[#B00020] transition-colors">
                      +92 312 2496574
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#B00020]/10 rounded-lg">
                    <Mail className="text-[#B00020]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">Email</h4>
                    <a href="mailto:huconsultantspvtltd@gmail.com" className="text-[#c7c7d9] hover:text-[#B00020] transition-colors break-all">
                      huconsultantspvtltd@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#B00020]/10 rounded-lg">
                    <Clock className="text-[#B00020]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white mb-2">Office Hours</h4>
                    <p className="text-[#c7c7d9]">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-[#c7c7d9]">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-[#c7c7d9]">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment CTA */}
            <div className="bg-gradient-to-br from-[#B00020] to-[#8e0019] rounded-2xl p-8 text-center">
              <h3 className="text-2xl text-white mb-3">Book an Appointment</h3>
              <p className="text-white/90 mb-6">
                Schedule a free consultation with our expert counselors
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-white text-[#B00020] rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Schedule Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

