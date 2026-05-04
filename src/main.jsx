import React from 'react'
import { createRoot } from 'react-dom/client'
import { Hammer, ShieldCheck, MapPin, Phone, Mail, Wrench, Home, Ruler, CheckCircle2 } from 'lucide-react'
import './style.css'

function App() {
  const services = [
    'Pergola assembly & outdoor structures',
    'Handyman repairs and maintenance',
    'Painting, touch-ups, trim and caulking',
    'Drywall patching and small carpentry',
    'Tenant turnover and property punch lists',
    'Balcony, patio and exterior repair projects'
  ]

  const workAreas = ['Massachusetts', 'New Hampshire', 'Rhode Island', 'Greater New England']

  return (
    <main className="page">
      <section className="hero">
        <div className="heroBg" />
        <div className="container heroGrid">
          <div className="heroText">
            <div className="badge">
              <ShieldCheck size={16} />
              Fully insured · New England
            </div>

            <img className="brandLogo" src="/brevdo-works-logo.jpg" alt="Brevdo Works logo" />

            <p className="heroLead">
              Reliable handyman and installation services for homes, condos, rental properties, patios and outdoor projects across New England.
            </p>

            <div className="heroActions">
              <a className="button primary" href="tel:6179717415">Call (617) 971-7415</a>
              <a className="button secondary" href="mailto:info@brevdoworks.com">Email Brevdo Works</a>
            </div>
          </div>

          <div className="heroCard">
            <div className="workPanel">
              <div className="panelHeader">
                <div className="iconBox">
                  <Hammer size={38} />
                </div>
                <div>
                  <p>Practical work</p>
                  <h2>Done clean. Done right.</h2>
                </div>
              </div>

              <div className="checkList">
                {[
                  'Outdoor structure assembly',
                  'Property repair punch lists',
                  'Small projects homeowners actually need finished'
                ].map((item) => (
                  <div className="checkItem" key={item}>
                    <CheckCircle2 size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container cardsSection">
        <InfoCard
          icon={<Wrench size={26} />}
          title="Handyman Services"
          text="Repairs, maintenance, small carpentry, caulking, paint touch-ups and practical problem-solving."
        />
        <InfoCard
          icon={<Home size={26} />}
          title="Pergolas & Outdoor"
          text="Assembly and installation support for pergolas, patio structures, balcony protection and exterior projects."
        />
        <InfoCard
          icon={<Ruler size={26} />}
          title="Property Turnovers"
          text="Punch lists, tenant-ready repairs and coordinated maintenance for rental properties and condos."
        />
      </section>

      <section className="servicesBand">
        <div className="container servicesGrid">
          <div>
            <p className="eyebrow">What we do</p>
            <h2>A practical contractor-style service without the big-company runaround.</h2>
            <p className="sectionText">
              Brevdo Works focuses on real-world home and property projects: the repairs, installations and finishing details that need a capable local professional.
            </p>
          </div>

          <div className="serviceList">
            {services.map((service) => (
              <div className="servicePill" key={service}>{service}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="container bottomGrid">
        <div className="areaCard">
          <p className="eyebrow">Service area</p>
          <h2>Serving New England</h2>
          <div className="areaList">
            {workAreas.map((area) => (
              <div className="areaItem" key={area}>
                <MapPin size={20} />
                {area}
              </div>
            ))}
          </div>
        </div>

        <div className="contactCard">
          <p className="eyebrow">Contact</p>
          <h2>Request a quote</h2>
          <p>
            Send photos, location and a short description of the project for a faster estimate.
          </p>

          <div className="contactLinks">
            <a href="tel:6179717415">
              <Phone size={20} />
              (617) 971-7415
            </a>
            <a href="mailto:info@brevdoworks.com">
              <Mail size={20} />
              info@brevdoworks.com
            </a>
          </div>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} Brevdo Works · Independent installer and handyman services · Fully insured
      </footer>
    </main>
  )
}

function InfoCard({ icon, title, text }) {
  return (
    <div className="infoCard">
      <div className="infoIcon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
