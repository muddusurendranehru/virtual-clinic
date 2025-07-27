import Header from "./components/Header";
import { doctorConfig } from "../lib/doctorConfig";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Virtual Medical Clinic
            </h1>
            <p className="text-xl mb-8">
              Professional medical consultations with {doctorConfig.name}
            </p>
            <p className="text-lg mb-8">
              {doctorConfig.title} | {doctorConfig.specialty} | {doctorConfig.experience}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${doctorConfig.contact.phone}`}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Appointment
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctorConfig?.achievements?.map((achievement, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg text-center">
                <p className="text-gray-700 font-medium">{achievement}</p>
              </div>
            )) || (
              <div className="col-span-full text-center">
                <p>Loading achievements...</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctorConfig?.services?.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                  {service?.title || 'Service'}
                </h3>
                <p className="text-gray-600">{service?.description || 'Description available soon'}</p>
              </div>
            )) || (
              <div className="col-span-full text-center">
                <p>Loading services...</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Phone</h3>
              <p>{doctorConfig.contact.phone}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <p>{doctorConfig.contact.email}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Website</h3>
              <p>{doctorConfig.contact.website}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 {doctorConfig.name} - Virtual Medical Clinic</p>
          <p className="mt-2 text-gray-400">Professional Medical Care | {doctorConfig.specialty}</p>
        </div>
      </footer>
    </div>
  );
}
