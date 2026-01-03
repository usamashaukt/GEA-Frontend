import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  lastQualification: string;
  queries: string;
}

const SERVER_ENDPOINT =
  import.meta.env.MODE === "production"
    ? "https://geabackend.netlify.app/.netlify/functions/save-to-sheets"
    : "/api/save-to-sheets";

export function Contact() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    lastQualification: '',
    queries: '',
  });
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate required fields before submission
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name.');
      setFormState('error');
      return;
    }

    if (!formData.email.trim()) {
      setErrorMessage('Please enter your email address.');
      setFormState('error');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      setFormState('error');
      return;
    }

    if (!formData.lastQualification.trim()) {
      setErrorMessage('Please enter your last qualification.');
      setFormState('error');
      return;
    }

    setFormState('loading');
    setErrorMessage('');

    try {
      const response = await fetch(SERVER_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Try to parse error response, but don't fail if JSON is invalid
        let errorMessage = "Sorry, we are having technical difficulties. We'll be back soon.";
        try {
          const errorData = await response.json();
          if (errorData.error && !errorData.error.includes('JSON')) {
            errorMessage = errorData.error;
          }
        } catch {
          // If JSON parsing fails, use default message
        }
        throw new Error(errorMessage);
      }

      setFormState('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          lastQualification: '',
          queries: '',
        });
        setFormState('idle');
      }, 3000);
    } catch (err) {
      if (err instanceof Error) {
        console.error("Error:", err.message);
        // Check if it's a network or JSON error
        if (err.message.includes('JSON') || err.message.includes('fetch') || err.message.includes('network')) {
          setErrorMessage("Sorry, we are having technical difficulties. We'll be back soon.");
        } else {
          setErrorMessage(err.message);
        }
      } else {
        console.error("Unexpected error:", err);
        setErrorMessage("Sorry, we are having technical difficulties. We'll be back soon.");
      }
      setFormState('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error message when user starts typing
    if (formState === 'error') {
      setFormState('idle');
      setErrorMessage('');
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Get in <span className="text-[#B00020]">Touch</span>
          </h2>
          <p className="text-xl text-[#c7c7d9] max-w-3xl mx-auto">
            Ready to start your study abroad journey? Contact us today for a free consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl text-white mb-6">Contact Information</h3>
              <p className="text-[#c7c7d9] mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#B00020] rounded-lg">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white mb-1">Phone</h4>
                  <a href="tel:+923122496574" className="text-[#c7c7d9] hover:text-[#B00020] transition-colors">
                    +92 312 2496574
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#B00020] rounded-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white mb-1">Email</h4>
                  <a href="mailto:huconsultantspvtltd@gmail.com" className="text-[#c7c7d9] hover:text-[#B00020] transition-colors break-all">
                    huconsultantspvtltd@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#B00020] rounded-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white mb-1">Office</h4>
                  <p className="text-[#c7c7d9]">Shop# 1 ... Al Amin Market</p>
                  <p className="text-[#c7c7d9]">Dhendian Road, near sabzi mandi</p>
                  <p className="text-[#c7c7d9]">Pakistan</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-white mb-4">Office Hours</h4>
              <p className="text-[#c7c7d9]">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-[#c7c7d9]">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-[#c7c7d9]">Sunday: Closed</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-[#16213e] rounded-2xl p-8 border border-[#B00020]/20">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1a1a2e] border border-[#B00020]/20 rounded-lg text-white placeholder-[#c7c7d9]/50 focus:outline-none focus:border-[#B00020] transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1a1a2e] border border-[#B00020]/20 rounded-lg text-white placeholder-[#c7c7d9]/50 focus:outline-none focus:border-[#B00020] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white mb-2">
                    Your Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1a1a2e] border border-[#B00020]/20 rounded-lg text-white placeholder-[#c7c7d9]/50 focus:outline-none focus:border-[#B00020] transition-colors"
                    placeholder="+92 312 0000000"
                  />
                </div>

                <div>
                  <label htmlFor="lastQualification" className="block text-white mb-2">
                    Last Qualification *
                  </label>
                  <input
                    type="text"
                    id="lastQualification"
                    name="lastQualification"
                    value={formData.lastQualification}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1a1a2e] border border-[#B00020]/20 rounded-lg text-white placeholder-[#c7c7d9]/50 focus:outline-none focus:border-[#B00020] transition-colors"
                    placeholder="Bachelor's Degree"
                  />
                </div>

                <div>
                  <label htmlFor="queries" className="block text-white mb-2">
                    Any Queries
                  </label>
                  <textarea
                    id="queries"
                    name="queries"
                    value={formData.queries}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-[#1a1a2e] border border-[#B00020]/20 rounded-lg text-white placeholder-[#c7c7d9]/50 focus:outline-none focus:border-[#B00020] transition-colors resize-none"
                    placeholder="Tell us about your educational goals..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formState === 'loading' || formState === 'success'}
                  className="w-full px-6 py-4 bg-[#B00020] text-white rounded-lg hover:bg-[#8e0019] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {formState === 'loading' && (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </>
                  )}
                  {formState === 'success' && (
                    <>
                      <CheckCircle size={20} />
                      Message Sent!
                    </>
                  )}
                  {formState === 'idle' && (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                  {formState === 'error' && (
                    <>
                      <AlertCircle size={20} />
                      Try Again
                    </>
                  )}
                </button>

                {/* Success Message */}
                {formState === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle className="text-green-500" size={20} />
                    <p className="text-green-500">
                      Thank you for contacting us! We'll respond as soon as possible.
                    </p>
                  </motion.div>
                )}

                {/* Error Message */}
                {formState === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3"
                  >
                    <AlertCircle className="text-red-500" size={20} />
                    <p className="text-red-500">
                      {errorMessage || 'Something went wrong. Please try again.'}
                    </p>
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

