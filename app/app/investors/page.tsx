import { doctorConfig } from '@/lib/doctorConfig';

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-blue-900">{doctorConfig.name}</h1>
              <p className="text-gray-600">{doctorConfig.title}</p>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="/" className="text-gray-700 hover:text-blue-900">Home</a>
              <a href="/services" className="text-gray-700 hover:text-blue-900">Services</a>
              <a href="/about" className="text-gray-700 hover:text-blue-900">About</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-900">Contact</a>
              <a href="/investors" className="text-blue-900 font-semibold">Investors</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Investment Opportunity</h1>
          <p className="text-xl mb-8">Join us in revolutionizing healthcare delivery through virtual medical consultations</p>
          <div className="bg-white bg-opacity-20 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-2">Virtual Medical Clinic</h3>
            <p className="text-lg">Professional healthcare accessible to everyone, anywhere</p>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Market Opportunity</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-900">₹2.7T</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Indian Healthcare Market</h3>
              <p className="text-gray-600">Expected to reach ₹2.7 trillion by 2025</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-900">300%</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Telemedicine Growth</h3>
              <p className="text-gray-600">300% growth in virtual consultations post-2020</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-900">1.4B</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Market Reach</h3>
              <p className="text-gray-600">1.4 billion population seeking healthcare access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Business Model</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-900">Revenue Streams</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-medium">General Consultations</span>
                  <span className="text-green-600 font-bold">₹500 per session</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-medium">Follow-up Visits</span>
                  <span className="text-green-600 font-bold">₹300 per session</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                  <span className="font-medium">Health Checkups</span>
                  <span className="text-green-600 font-bold">₹800 per session</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                  <span className="font-medium">Subscription Plans</span>
                  <span className="text-blue-600 font-bold">Coming Soon</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-900">Competitive Advantages</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>25+ years of medical expertise with MD certification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Professor-level credentials building trust</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Affordable pricing compared to traditional clinics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Modern tech platform with mobile accessibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Multi-language support for diverse patient base</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Financial Projections</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Year 1</h4>
              <p className="text-3xl font-bold text-blue-900 mb-2">₹12L</p>
              <p className="text-sm text-gray-600">500 consultations/month</p>
              <p className="text-sm text-gray-600">Average ₹500 per consultation</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-green-900 mb-2">Year 2</h4>
              <p className="text-3xl font-bold text-green-900 mb-2">₹30L</p>
              <p className="text-sm text-gray-600">1,000 consultations/month</p>
              <p className="text-sm text-gray-600">Subscription plans launched</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-purple-900 mb-2">Year 3</h4>
              <p className="text-3xl font-bold text-purple-900 mb-2">₹60L</p>
              <p className="text-sm text-gray-600">2,000+ consultations/month</p>
              <p className="text-sm text-gray-600">Multi-doctor platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Ask */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Investment Opportunity</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Seeking Investment</h3>
              <p className="text-4xl font-bold mb-2">₹25 Lakhs</p>
              <p className="text-lg">for platform expansion and marketing</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Equity Offered</h3>
              <p className="text-4xl font-bold mb-2">15-20%</p>
              <p className="text-lg">stake in the growing venture</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Use of Funds</h3>
            <div className="text-left max-w-2xl mx-auto">
              <div className="flex justify-between py-2 border-b border-white border-opacity-30">
                <span>Platform Development & Features</span>
                <span>40%</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white border-opacity-30">
                <span>Marketing & Patient Acquisition</span>
                <span>35%</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white border-opacity-30">
                <span>Technology Infrastructure</span>
                <span>15%</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Working Capital</span>
                <span>10%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Investment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Ready to Invest?</h2>
          <p className="text-lg text-gray-600 mb-8">Join us in transforming healthcare delivery in India</p>
          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href={`tel:${doctorConfig.contact.phone}`}
              className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Call Now
            </a>
            <a 
              href={`mailto:${doctorConfig.contact.email}?subject=Investment Inquiry`}
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Email Us
            </a>
            <a 
              href={`https://wa.me/${doctorConfig.contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hi, I'm interested in investing in your virtual clinic`}
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">{doctorConfig.name}</p>
          <p className="text-gray-400 mb-4">{doctorConfig.title}</p>
          <p className="text-gray-500">© 2025 Virtual Medical Clinic - Investment Opportunity</p>
        </div>
      </footer>
    </div>
  );
}
