import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X, Phone, MessageCircle, MoveUpRight, Check } from 'lucide-react';
import './styles.css';

const images = {
  hero: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90',
  bedroom: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85',
  living: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
  kitchen: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
  detail: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
  office: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85',
  dining: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1200&q=85'
};
const phone1 = '9555471892';
const phone2 = '9004743946';
const wa = (number, message='Hello InteriorDecorate, I would like to discuss an interior design project.') => `https://wa.me/91${number}?text=${encodeURIComponent(message)}`;

function App() {
  const [popup, setPopup] = useState(false);
  const [menu, setMenu] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({name:'', phone:'', location:'', project:'Home interior', budget:'', message:''});
  useEffect(() => {
    const already = sessionStorage.getItem('id-popup-dismissed');
    if (!already) { const t = setTimeout(() => setPopup(true), 1400); return () => clearTimeout(t); }
  }, []);
  const closePopup = () => { setPopup(false); sessionStorage.setItem('id-popup-dismissed','yes'); };
  const update = e => setForm({...form, [e.target.name]: e.target.value});
  const submit = e => {
    e.preventDefault();
    const message = `InteriorDecorate enquiry%0AName: ${form.name}%0APhone: ${form.phone}%0ALocation: ${form.location}%0AProject: ${form.project}%0ABudget: ${form.budget || 'Not specified'}%0ADetails: ${form.message || 'Not specified'}`;
    window.open(`https://wa.me/91${phone1}?text=${message}`, '_blank', 'noopener,noreferrer');
    setSent(true);
  };
  const openForm = () => { setPopup(true); setMenu(false); };
  return <>
    <header className="nav">
      <a className="brand" href="#home" aria-label="InteriorDecorate home"><span className="brand-mark">ID</span><span>INTERIOR<span className="brand-light">DECORATE</span><small>SPACES WITH SOUL</small></span></a>
      <nav className={menu ? 'nav-links open' : 'nav-links'}>
        <a onClick={()=>setMenu(false)} href="#projects">Projects</a><a onClick={()=>setMenu(false)} href="#studio">Studio</a><a onClick={()=>setMenu(false)} href="#services">Services</a><a onClick={()=>setMenu(false)} href="#contact">Contact</a>
        <button className="nav-cta mobile-cta" onClick={openForm}>Book a consultation <ArrowUpRight size={15}/></button>
      </nav>
      <button className="nav-cta desktop-cta" onClick={openForm}>Start a project <ArrowUpRight size={15}/></button>
      <button className="menu-btn" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">{menu ? <X/> : <Menu/>}</button>
    </header>

    <main>
      <section className="hero" id="home" style={{backgroundImage:`linear-gradient(90deg,rgba(15,16,14,.65),rgba(15,16,14,.10) 78%),url(${images.hero})`}}>
        <div className="hero-top"><span>MUMBAI · NAVI MUMBAI</span><span>RESIDENTIAL & COMMERCIAL INTERIORS</span></div>
        <div className="hero-copy"><p className="eyebrow"><span/> DESIGNED AROUND YOU</p><h1>Spaces that<br/><em>feel like you.</em></h1><p className="hero-description">Considered interiors. Honest materials. Beautifully lived-in spaces, designed for the way you live.</p><div className="hero-actions"><button className="button button-light" onClick={openForm}>Let’s design your space <ArrowUpRight size={17}/></button><a className="text-link" href="#projects">Explore our work <ArrowDown size={15}/></a></div></div>
        <div className="hero-bottom"><span>01 — 06 / SELECTED SPACES</span><span>THOUGHTFUL BY DESIGN</span></div>
      </section>

      <section className="intro section-pad" id="studio"><div className="section-kicker">01 / THE STUDIO</div><div className="intro-content"><h2>Good design is not just seen.<br/><em>It is felt.</em></h2><div className="intro-text"><p>At InteriorDecorate, we bring architecture, comfort and everyday rituals together to create spaces that feel personal, balanced and enduring.</p><a className="under-link" href="#services">Discover our approach <ArrowRight size={16}/></a></div></div></section>

      <section className="featured" id="projects"><div className="feature-image" style={{backgroundImage:`url(${images.bedroom})`}}><span className="image-tag">01 / PRIVATE RESIDENCE</span><div className="feature-title"><span>THE ART OF REST</span><h2>A quieter kind<br/>of luxury.</h2></div><a className="round-link" href="#contact" aria-label="Enquire about bedroom design" onClick={e=>{e.preventDefault();openForm()}}><ArrowUpRight/></a></div><div className="feature-caption"><span>BEDROOM · MUMBAI</span><span>WARM MATERIALS / SOFT LIGHT / QUIET LINES</span></div></section>

      <section className="projects section-pad"><div className="projects-heading"><div><div className="section-kicker">02 / SELECTED SPACES</div><h2>Made to live in.<br/><em>Made to last.</em></h2></div><p>Every detail has a purpose. Every room tells a story. Explore spaces shaped by light, texture and the people who call them home.</p></div><div className="project-grid">
        <article className="project-card project-large"><div className="project-photo" style={{backgroundImage:`url(${images.living})`}}><span className="photo-number">01</span><button onClick={openForm} className="photo-arrow" aria-label="Enquire about living room"><ArrowUpRight/></button></div><div className="project-meta"><div><h3>The Grand Living</h3><span>Living spaces · Residential</span></div><span className="project-city">MUMBAI</span></div></article>
        <article className="project-card project-offset"><div className="project-photo" style={{backgroundImage:`url(${images.kitchen})`}}><span className="photo-number">02</span><button onClick={openForm} className="photo-arrow" aria-label="Enquire about kitchen"><ArrowUpRight/></button></div><div className="project-meta"><div><h3>Everyday Rituals</h3><span>Kitchen · Storage</span></div><span className="project-city">NAVI MUMBAI</span></div></article>
        <article className="project-card"><div className="project-photo" style={{backgroundImage:`url(${images.dining})`}}><span className="photo-number">03</span><button onClick={openForm} className="photo-arrow" aria-label="Enquire about dining room"><ArrowUpRight/></button></div><div className="project-meta"><div><h3>The Gathering Place</h3><span>Dining · Styling</span></div><span className="project-city">MUMBAI</span></div></article>
        <article className="project-card project-offset"><div className="project-photo" style={{backgroundImage:`url(${images.office})`}}><span className="photo-number">04</span><button onClick={openForm} className="photo-arrow" aria-label="Enquire about office"><ArrowUpRight/></button></div><div className="project-meta"><div><h3>Work, Reimagined</h3><span>Office · Commercial</span></div><span className="project-city">MUMBAI</span></div></article>
      </div><div className="center-cta"><button className="button button-dark" onClick={openForm}>Create something personal <ArrowUpRight size={16}/></button></div></section>

      <section className="services section-pad" id="services"><div className="section-kicker">03 / WHAT WE DO</div><div className="services-layout"><h2>From first sketch<br/>to <em>final detail.</em></h2><div className="service-list"><div className="service-row"><span>01</span><div><h3>Residential interiors</h3><p>Thoughtful homes, bedrooms, living rooms and complete apartment interiors.</p></div><ArrowUpRight/></div><div className="service-row"><span>02</span><div><h3>Modular kitchens & wardrobes</h3><p>Smart storage and considered finishes that make everyday living easier.</p></div><ArrowUpRight/></div><div className="service-row"><span>03</span><div><h3>Office & commercial spaces</h3><p>Welcoming, functional spaces for teams, clients and customers.</p></div><ArrowUpRight/></div><div className="service-row"><span>04</span><div><h3>Renovation & turnkey execution</h3><p>Coordinated planning, materials and finishing from start to handover.</p></div><ArrowUpRight/></div></div></div></section>

      <section className="statement" style={{backgroundImage:`linear-gradient(rgba(21,22,19,.62),rgba(21,22,19,.62)),url(${images.detail})`}}><div className="statement-inner"><span className="eyebrow">YOUR SPACE, YOUR STORY</span><h2>Let’s make room<br/>for <em>better living.</em></h2><button className="button button-light" onClick={openForm}>Tell us about your project <ArrowUpRight size={16}/></button></div></section>

      <section className="contact section-pad" id="contact"><div><div className="section-kicker">04 / GET IN TOUCH</div><h2>Have a space<br/>in mind?</h2><p className="contact-lead">Tell us what you’re imagining. We’ll help you take the first step.</p><button className="button button-dark" onClick={openForm}>Start an enquiry <ArrowUpRight size={16}/></button></div><div className="contact-details"><div><span>CALL US</span><a href={`tel:+91${phone1}`}>+91 {phone1}</a><a href={`tel:+91${phone2}`}>+91 {phone2}</a></div><div><span>VISIT US</span><p>45, Mohammed Ali Road,<br/>Mandvi, Mumbai, Maharashtra 400003</p></div><div><span>OUR SERVICE AREAS</span><p>Mumbai · Navi Mumbai · Thane</p></div><a className="map-link" href="https://maps.google.com/?q=45+Mohammed+Ali+Road+Mandvi+Mumbai+Maharashtra+400003" target="_blank" rel="noreferrer">Find us on the map <ArrowUpRight size={15}/></a></div></section>
    </main>
    <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">ID</span><span>INTERIOR<span className="brand-light">DECORATE</span><small>SPACES WITH SOUL</small></span></a><span>© {new Date().getFullYear()} InteriorDecorate. Designed with intention.</span><a href="#home">BACK TO TOP ↑</a></footer>
    <a className="whatsapp-float" href={wa(phone1)} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={22}/><span>Let’s talk</span></a>

    {popup && <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div className="modal"><button className="modal-close" onClick={closePopup} aria-label="Close enquiry form"><X/></button><div className="modal-visual" style={{backgroundImage:`linear-gradient(0deg,rgba(18,19,16,.45),rgba(18,19,16,.05)),url(${images.living})`}}><span>INTERIORDECORATE / DESIGN CONSULTATION</span><h2>Let’s create<br/><em>your kind of home.</em></h2></div><div className="modal-content"><div className="modal-heading"><span className="section-kicker">A GOOD SPACE STARTS HERE</span><p>Share a few details and start a conversation with our team.</p></div>{sent ? <div className="success"><Check size={24}/><h3>Your enquiry is ready</h3><p>WhatsApp should open with your details. Send the message there to complete your enquiry.</p><button className="button button-dark" onClick={closePopup}>Explore website <ArrowRight size={16}/></button></div> : <form onSubmit={submit} className="enquiry-form"><label>Your name<input name="name" value={form.name} onChange={update} placeholder="Full name" required/></label><div className="form-two"><label>Phone number<input name="phone" value={form.phone} onChange={update} placeholder="10-digit mobile" inputMode="tel" pattern="[0-9+() -]{10,16}" required/></label><label>Project location<input name="location" value={form.location} onChange={update} placeholder="Mumbai / Navi Mumbai" required/></label></div><div className="form-two"><label>What do you need?<select name="project" value={form.project} onChange={update}><option>Home interior</option><option>Bedroom design</option><option>Living room</option><option>Modular kitchen</option><option>Office interior</option><option>Full home / turnkey</option><option>Renovation</option></select></label><label>Approx. budget<select name="budget" value={form.budget} onChange={update}><option value="">Select budget</option><option>Below ₹3 lakh</option><option>₹3–5 lakh</option><option>₹5–10 lakh</option><option>₹10–20 lakh</option><option>₹20 lakh+</option><option>Need guidance</option></select></label></div><label>Tell us a little more <textarea name="message" value={form.message} onChange={update} placeholder="Property size, style, timeline…" rows="2"/></label><button className="button button-dark form-submit" type="submit">Send enquiry on WhatsApp <ArrowUpRight size={16}/></button><p className="privacy-note">Your details are used to respond to your enquiry.</p></form>}<button className="skip-link" onClick={closePopup}>No thanks, explore the website <ArrowRight size={14}/></button></div></div></div>}
  </>;
}

createRoot(document.getElementById('root')).render(<App/>);
