import { Star, Award, Phone, Mail, Globe } from 'lucide-react';
import { doctorConfig } from '../lib/doctorConfig';
import Header from './components/Header';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {doctorConfig.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            {doctorConfig.hero.subtitle}
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            {doctorConfig.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${doctorConfig.contact.phone}`}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Consultation
            </a>
            <a 
              href={`https://wa.me/${doctorConfig.contact.whatsapp.replace('+', '').replace('-', '')}`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              WhatsApp Chat
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Dr. Surendra Nehru?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {doctorConfig.keyFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Medical Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {doctorConfig.services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Achievements & Recognition</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctorConfig.achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex items-center">
                <Award className="text-yellow-500 mr-4" size={32} />
                <span className="font-semibold">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a href={`tel:${doctorConfig.contact.phone}`} className="hover:underline">
                {doctorConfig.contact.phone}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href={`mailto:${doctorConfig.contact.email}`} className="hover:underline">
                {doctorConfig.contact.email}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Website</h3>
              <a href={doctorConfig.contact.website} className="hover:underline">
                Visit Clinic Website
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 {doctorConfig.name}. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href={doctorConfig.socialMedia.youtube} className="hover:text-blue-400">YouTube</a>
            <a href={doctorConfig.socialMedia.linkedin} className="hover:text-blue-400">LinkedIn</a>
            <a href={doctorConfig.socialMedia.twitter} className="hover:text-blue-400">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
