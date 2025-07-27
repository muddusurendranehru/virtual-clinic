export default function InvestorPage() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dr. Muddu Surendra Nehru - Investment Opportunity</title>
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8f9fa;
          }

          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
            padding: 60px 20px;
          }

          .header h1 {
            font-size: 3rem;
            margin-bottom: 20px;
            font-weight: 700;
          }

          .header p {
            font-size: 1.2rem;
            max-width: 800px;
            margin: 0 auto;
            opacity: 0.9;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }

          .section {
            padding: 60px 0;
          }

          .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 50px;
            color: #2c3e50;
          }

          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-bottom: 40px;
          }

          .card {
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
          }

          .card:hover {
            transform: translateY(-5px);
          }

          .card h3 {
            color: #667eea;
            font-size: 1.5rem;
            margin-bottom: 15px;
          }

          .highlight {
            background: linear-gradient(135deg, #ff6b6b, #feca57);
            color: white;
            padding: 40px;
            border-radius: 15px;
            text-align: center;
            margin: 40px 0;
          }

          .highlight h3 {
            font-size: 2rem;
            margin-bottom: 15px;
          }

          .cta-section {
            background: #2c3e50;
            color: white;
            text-align: center;
            padding: 60px 20px;
          }

          .cta-button {
            display: inline-block;
            background: #667eea;
            color: white;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 25px;
            font-weight: bold;
            margin: 10px;
            transition: background 0.3s ease;
          }

          .cta-button:hover {
            background: #5a67d8;
          }

          .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 40px 0;
          }

          .stat {
            text-align: center;
            padding: 20px;
            background: rgba(255,255,255,0.1);
            border-radius: 10px;
          }

          .stat h4 {
            font-size: 2rem;
            margin-bottom: 10px;
            color: #ffd700;
          }

          .roadmap {
            background: white;
            padding: 40px;
            border-radius: 15px;
            margin: 40px 0;
          }

          .roadmap-item {
            display: flex;
            align-items: center;
            margin: 20px 0;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 10px;
          }

          .roadmap-number {
            background: #667eea;
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 20px;
            font-weight: bold;
          }
        `}</style>
      </head>
      <body>
        <div className="header">
          <h1>Dr. Muddu Surendra Nehru</h1>
          <p>
            Revolutionary Healthcare Investment Opportunity - Scaling Virtual
            Medical Excellence
          </p>
        </div>

        <div className="container">
          <section className="section">
            <h2 className="section-title">Investment Highlights</h2>
            <div className="grid">
              <div className="card">
                <h3>🏆 Award-Winning Leadership</h3>
                <p>
                  2024 T-HUB Excellence Award Winner with 25+ years of proven
                  medical expertise and innovation in healthcare delivery.
                </p>
              </div>
              <div className="card">
                <h3>🔬 Research Pioneer</h3>
                <p>
                  First Indian doctor to pioneer HOMA-Insulin Resistance
                  research, establishing credibility in medical innovation.
                </p>
              </div>
              <div className="card">
                <h3>📱 Digital Authority</h3>
                <p>
                  1500+ doctor followers on YouTube, demonstrating strong
                  professional network and educational influence.
                </p>
              </div>
              <div className="card">
                <h3>🤖 AI-Powered Platform</h3>
                <p>
                  Complete virtual clinic infrastructure with real-time
                  payments, automation, and scalable technology.
                </p>
              </div>
              <div className="card">
                <h3>🌐 Global Network</h3>
                <p>
                  Active collaboration with 12 medical colleges and 10+ ICMR
                  projects, ensuring research and academic backing.
                </p>
              </div>
              <div className="card">
                <h3>💼 Proven Business Model</h3>
                <p>
                  Multiple successful medical establishments with demonstrated
                  ₹500+ Cr scaling potential.
                </p>
              </div>
            </div>
          </section>

          <div className="highlight">
            <h3>Market Opportunity: ₹500+ Crore Scaling Potential</h3>
            <p>
              Tapping into India's rapidly growing telemedicine market,
              projected to reach $5.5 billion by 2025
            </p>
          </div>

          <section className="section">
            <h2 className="section-title">Growth Strategy & Roadmap</h2>
            <div className="roadmap">
              <div className="roadmap-item">
                <div className="roadmap-number">1</div>
                <div>
                  <h4>Platform Optimization (Months 1-6)</h4>
                  <p>
                    Enhance AI capabilities, improve user experience, integrate
                    advanced medical technologies
                  </p>
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-number">2</div>
                <div>
                  <h4>Market Expansion (Months 6-12)</h4>
                  <p>
                    Scale to tier-2 cities, establish partnerships with
                    healthcare networks, onboard specialist doctors
                  </p>
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-number">3</div>
                <div>
                  <h4>Research Integration (Months 12-18)</h4>
                  <p>
                    Leverage HOMA-IR research for personalized medicine, develop
                    proprietary diagnostic tools
                  </p>
                </div>
              </div>
              <div className="roadmap-item">
                <div className="roadmap-number">4</div>
                <div>
                  <h4>International Expansion (Months 18-24)</h4>
                  <p>
                    Enter global markets, establish medical tourism
                    partnerships, scale technology platform
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Key Metrics & Projections</h2>
            <div className="stats">
              <div className="stat">
                <h4>₹50L</h4>
                <p>Current Annual Revenue</p>
              </div>
              <div className="stat">
                <h4>300%</h4>
                <p>Projected YoY Growth</p>
              </div>
              <div className="stat">
                <h4>₹500Cr</h4>
                <p>5-Year Market Potential</p>
              </div>
              <div className="stat">
                <h4>1500+</h4>
                <p>Medical Professional Network</p>
              </div>
            </div>
          </section>
        </div>

        <div className="cta-section">
          <h2>Ready to Transform Healthcare Together?</h2>
          <p>
            Join us in revolutionizing medical care delivery across India and
            beyond
          </p>
          <div style={{ marginTop: "30px" }}>
            <a href="tel:+91-9876543210" className="cta-button">
              📞 Schedule Call
            </a>
            <a href="mailto:dr.surendra@clinic.com" className="cta-button">
              📧 Send Proposal
            </a>
            <a href="https://wa.me/919876543210" className="cta-button">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
