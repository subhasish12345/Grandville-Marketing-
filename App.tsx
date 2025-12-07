
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene, QuantumComputerScene } from './components/QuantumScene';
import { SurfaceCodeDiagram, TransformerDecoderDiagram, PerformanceMetricDiagram } from './components/Diagrams';
import { ArrowDown, Menu, X, BookOpen, ArrowLeft, Send, CheckCircle, Instagram, Twitter, Linkedin } from 'lucide-react';

const AuthorCard = ({ name, role, delay }: { name: string, role: string, delay: string }) => {
  return (
    <div className="flex flex-col group animate-fade-in-up items-center p-8 bg-white rounded-xl border-[1.5px] border-stone-300 shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-xs hover:border-nobel-gold" style={{ animationDelay: delay }}>
      <h3 className="font-serif text-2xl text-stone-900 text-center mb-3">{name}</h3>
      <div className="w-12 h-0.5 bg-nobel-gold mb-4 opacity-60"></div>
      <p className="text-xs text-stone-500 font-bold uppercase tracking-widest text-center leading-relaxed">{role}</p>
    </div>
  );
};

// --- New Eligibility Page Component ---
const EligibilityPage = ({ onBack }: { onBack: () => void }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => setSubmitted(true), 800);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 container mx-auto flex flex-col items-center justify-center text-center animate-fade-in">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={40} />
        </div>
        <h2 className="font-serif text-4xl text-stone-900 mb-4">Application Received</h2>
        <p className="text-lg text-stone-600 max-w-lg mb-8">
          Thank you for checking your eligibility. The GrandVile admissions team will review your details and contact you within 48 hours.
        </p>
        <button
          onClick={onBack}
          className="px-8 py-3 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors shadow-lg font-medium"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 container mx-auto animate-fade-in">
      <button
        onClick={onBack}
        className="group flex items-center gap-2 text-sm font-bold tracking-widest text-stone-500 hover:text-stone-900 uppercase mb-8 transition-colors"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Network
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Context */}
        <div className="lg:col-span-5">
          <div className="sticky top-32">
            <div className="inline-block mb-4 px-3 py-1 border border-nobel-gold text-nobel-gold text-xs tracking-[0.2em] uppercase font-bold rounded-full bg-white">
              GrandVile Admissions
            </div>
            <h1 className="font-serif text-5xl text-stone-900 mb-6 leading-tight">
              Check Your <span className="italic text-stone-600 block">Eligibility</span>
            </h1>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Join the premier resource hub for educators. Please complete the form to verify your affiliation with Apollo Colleges or Lakeland Schools.
            </p>

            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
              <h3 className="font-serif text-xl mb-4 text-stone-900">Required Criteria</h3>
              <ul className="space-y-3 text-stone-600 text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-stone-100 flex items-center justify-center text-nobel-gold mt-0.5">1</div>
                  <span>Current active employment or enrollment status.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-stone-100 flex items-center justify-center text-nobel-gold mt-0.5">2</div>
                  <span>Valid institutional email address.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-stone-100 flex items-center justify-center text-nobel-gold mt-0.5">3</div>
                  <span>Completion of prerequisite Module 00 (Orientation).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-stone-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500">First Name</label>
                <input required type="text" className="w-full bg-[#F9F8F4] border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:border-nobel-gold focus:ring-1 focus:ring-nobel-gold transition-all" placeholder="Jane" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500">Last Name</label>
                <input required type="text" className="w-full bg-[#F9F8F4] border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:border-nobel-gold focus:ring-1 focus:ring-nobel-gold transition-all" placeholder="Doe" />
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500">Institutional Email</label>
              <input required type="email" className="w-full bg-[#F9F8F4] border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:border-nobel-gold focus:ring-1 focus:ring-nobel-gold transition-all" placeholder="jane.doe@apollo.edu.in" />
            </div>

            <div className="space-y-2 mb-6">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500">Current Affiliation</label>
              <select className="w-full bg-[#F9F8F4] border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:border-nobel-gold focus:ring-1 focus:ring-nobel-gold transition-all appearance-none cursor-pointer">
                <option>Apollo Nursing Chennai</option>
                <option>AIMSR Hyderabad</option>
                <option>Apollo School Delhi</option>
                <option>Lakeland District School</option>
                <option>Other Partner Institute</option>
              </select>
            </div>

            <div className="space-y-2 mb-8">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500">Statement of Purpose</label>
              <textarea rows={4} className="w-full bg-[#F9F8F4] border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:border-nobel-gold focus:ring-1 focus:ring-nobel-gold transition-all" placeholder="Briefly describe your teaching objectives..."></textarea>
            </div>

            <button type="submit" className="w-full bg-stone-900 text-white font-medium tracking-wide py-4 rounded-lg hover:bg-stone-800 transition-colors shadow-lg flex items-center justify-center gap-2">
              <span>VERIFY ELIGIBILITY</span>
              <Send size={16} />
            </button>
            <p className="text-center text-xs text-stone-400 mt-4">
              By clicking verify, you agree to the GrandVile Academic Standards policy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [view, setView] = useState<'home' | 'eligibility'>('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);

    // If we are not on home, switch to home first
    if (view !== 'home') {
      setView('home');
      // Small timeout to allow render before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  const handleHomeClick = () => {
    setView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 selection:bg-nobel-gold selection:text-white">

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F8F4]/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={handleHomeClick}>
            <img src="/icon.png" alt="GrandVile Logo" className="w-10 h-10 object-contain" />
            <span className={`font-serif font-bold text-lg tracking-wide transition-opacity ${scrolled || view === 'eligibility' ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
              GRANDVILE <span className="font-normal text-stone-500">MARKETING</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
            <a href="#introduction" onClick={scrollToSection('introduction')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">About</a>
            <a href="#curriculum" onClick={scrollToSection('curriculum')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Curriculum</a>
            <a href="#ecosystem" onClick={scrollToSection('ecosystem')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Ecosystem</a>
            <a href="#institutes" onClick={scrollToSection('institutes')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Institutes</a>
            <button
              onClick={() => setView('eligibility')}
              className="px-5 py-2 bg-stone-900 text-white rounded-full hover:bg-stone-800 transition-colors shadow-sm cursor-pointer"
            >
              Check Eligibility
            </button>
          </div>

          <button className="md:hidden text-stone-900 p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9F8F4] flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in">
          <a href="#introduction" onClick={scrollToSection('introduction')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">About</a>
          <a href="#curriculum" onClick={scrollToSection('curriculum')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Curriculum</a>
          <a href="#ecosystem" onClick={scrollToSection('ecosystem')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Ecosystem</a>
          <a href="#institutes" onClick={scrollToSection('institutes')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Institutes</a>
          <button
            onClick={() => { setView('eligibility'); setMenuOpen(false); }}
            className="px-6 py-3 bg-stone-900 text-white rounded-full shadow-lg cursor-pointer"
          >
            Check Eligibility
          </button>
        </div>
      )}

      {/* View Switching */}
      {view === 'eligibility' ? (
        <EligibilityPage onBack={() => setView('home')} />
      ) : (
        <main>
          {/* Hero Section */}
          <header className="relative h-screen flex items-center justify-center overflow-hidden">
            <HeroScene />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,248,244,0.92)_0%,rgba(249,248,244,0.6)_50%,rgba(249,248,244,0.3)_100%)]" />

            <div className="relative z-10 container mx-auto px-6 text-center">
              <div className="inline-block mb-4 px-3 py-1 border border-nobel-gold text-nobel-gold text-xs tracking-[0.2em] uppercase font-bold rounded-full backdrop-blur-sm bg-white/30">
                GrandVile • Marketing
              </div>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl font-medium leading-tight md:leading-[0.9] mb-8 text-stone-900 drop-shadow-sm">
                Elevate The <br /><span className="italic font-normal text-stone-600 text-3xl md:text-5xl block mt-4">GrandVile Standard</span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-700 font-light leading-relaxed mb-12">
                The premier resource hub for educators across Apollo's Colleges and Lakeland Schools.
              </p>

              <div className="flex justify-center">
                <a href="#introduction" onClick={scrollToSection('introduction')} className="group flex flex-col items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors cursor-pointer">
                  <span>EXPLORE NETWORK</span>
                  <span className="p-2 border border-stone-300 rounded-full group-hover:border-stone-900 transition-colors bg-white/50">
                    <ArrowDown size={16} />
                  </span>
                </a>
              </div>
            </div>
          </header>

          {/* Introduction */}
          <section id="introduction" className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-4">
                <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">Introduction</div>
                <h2 className="font-serif text-4xl mb-6 leading-tight text-stone-900">Why the GrandVile Advantage?</h2>
                <div className="w-16 h-1 bg-nobel-gold mb-6"></div>
              </div>
              <div className="md:col-span-8 text-lg text-stone-600 leading-relaxed space-y-6">
                <p>
                  <span className="text-5xl float-left mr-3 mt-[-8px] font-serif text-nobel-gold">U</span>nified Curriculum. We ensure seamless integration between Lakeland Schools and Apollo Colleges, creating a standardized pathway for student success.
                </p>
                <p>
                  <strong>Faculty Growth.</strong> Our elite mentorship programs allow educators to fast-track their career progression. Through <strong className="text-stone-900 font-medium">Excellence Standards</strong>, we verify all teaching methodologies with industry leaders, ensuring that every classroom benefits from world-class pedagogical strategies.
                </p>
              </div>
            </div>
          </section>

          {/* Curriculum */}
          <section id="curriculum" className="py-24 bg-white border-t border-stone-100">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-200">
                    <BookOpen size={14} /> TEACHING MODULES
                  </div>
                  <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">Pedagogical Foundations</h2>
                  <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                    <strong>Module 01:</strong> Core teaching strategies for the Apollo ecosystem. Establish a baseline of excellence in every classroom interaction.
                  </p>
                  <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                    <strong>Module 04:</strong> Curriculum Integration. Merging Lakeland standards with Apollo advanced placement to ensure students are college-ready from day one.
                  </p>
                  <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                    <strong>Module 08:</strong> Classroom Technology. Utilizing smart-campus tools effectively to enhance engagement.
                  </p>
                </div>
                <div>
                  <SurfaceCodeDiagram />
                </div>
              </div>
            </div>
          </section>

          {/* Certification */}
          <section className="py-24 bg-stone-900 text-stone-100 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="w-96 h-96 rounded-full bg-stone-600 blur-[100px] absolute top-[-100px] left-[-100px]"></div>
              <div className="w-96 h-96 rounded-full bg-nobel-gold blur-[100px] absolute bottom-[-100px] right-[-100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <TransformerDecoderDiagram />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-800 text-nobel-gold text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-700">
                    OFFICIAL FACULTY CERTIFICATION
                  </div>
                  <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">Professional Recognition</h2>
                  <p className="text-lg text-stone-400 mb-6 leading-relaxed">
                    Earn a prestigious qualification recognized by GrandVile Marketing, Apollo Colleges, and the Lakeland District.
                  </p>
                  <p className="text-lg text-stone-400 leading-relaxed">
                    <strong>Module 12:</strong> Faculty Assessment. A performance review and certification capstone that validates your expertise and readiness to lead the next generation of students.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-24 bg-[#F9F8F4]">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <h2 className="font-serif text-4xl md:text-5xl mb-6 text-stone-900">GrandVile Campus</h2>
                <p className="text-lg text-stone-600 leading-relaxed">
                  Our network is expanding rapidly, providing unparalleled resources and opportunities for faculty development across the region.
                </p>
              </div>
              <div className="max-w-3xl mx-auto">
                <PerformanceMetricDiagram />
              </div>
            </div>
          </section>

          {/* Ecosystem */}
          <section id="ecosystem" className="py-24 bg-white border-t border-stone-200">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-5 relative">
                <div className="aspect-square bg-[#F5F4F0] rounded-xl overflow-hidden relative border border-stone-200 shadow-inner">
                  <QuantumComputerScene />
                  <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-stone-400 font-serif italic">The Apollo Infrastructure Visualization</div>
                </div>
              </div>
              <div className="md:col-span-7 flex flex-col justify-center">
                <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">THE APOLLO ECOSYSTEM</div>
                <h2 className="font-serif text-4xl mb-6 text-stone-900">A Premier Network</h2>
                <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                  We connect medical, nursing, and research institutes driving healthcare excellence across India. Our unified platform allows for cross-disciplinary learning and resource sharing.
                </p>
                <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                  By integrating curriculum standards across all 45+ partner schools, we ensure that every student is prepared for the rigorous demands of higher education at Apollo Colleges.
                </p>

                <div className="p-6 bg-[#F9F8F4] border border-stone-200 rounded-lg border-l-4 border-l-nobel-gold">
                  <p className="font-serif italic text-xl text-stone-800 mb-4">
                    "The GrandVile Standard has transformed how we approach education, creating a seamless bridge between secondary schooling and advanced medical training."
                  </p>
                  <span className="text-sm font-bold text-stone-500 tracking-wider uppercase">— Director, Apollo Institute Network</span>
                </div>
              </div>
            </div>
          </section>

          {/* Institutes */}
          <section id="institutes" className="py-24 bg-[#F5F4F0] border-t border-stone-300">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">NETWORK MEMBERS</div>
                <h2 className="font-serif text-3xl md:text-5xl mb-4 text-stone-900">All Institutes</h2>
                <p className="text-stone-500 max-w-2xl mx-auto">Driving excellence in Medical Sciences, Nursing, and Research.</p>
              </div>

              <div className="flex flex-col md:flex-row gap-8 justify-center items-center flex-wrap">
                <AuthorCard
                  name="AIMSR Hyderabad"
                  role="MBBS & Postgraduate Medical"
                  delay="0s"
                />
                <AuthorCard
                  name="Apollo Nursing Chennai"
                  role="B.Sc, M.Sc & Post Basic Nursing"
                  delay="0.1s"
                />
                <AuthorCard
                  name="Apollo Physiotherapy"
                  role="Rehabilitation & Physical Therapy"
                  delay="0.2s"
                />
                <AuthorCard
                  name="Apollo Pharmacy Durg"
                  role="Pharmaceutical Sciences (CSVTU)"
                  delay="0.3s"
                />
                <AuthorCard
                  name="AIMSR Chittoor"
                  role="Advanced Medical Research"
                  delay="0.4s"
                />
                <AuthorCard
                  name="Apollo Nursing Kolkata"
                  role="Gleneagles Nursing Education"
                  delay="0.5s"
                />
                <AuthorCard
                  name="Apollo School Delhi"
                  role="GNM & Clinical Training"
                  delay="0.6s"
                />
                <AuthorCard
                  name="Apollo Nursing Madurai"
                  role="Community Health Nursing"
                  delay="0.7s"
                />
                <AuthorCard
                  name="Apollo Pharma Chittoor"
                  role="The Apollo University Research"
                  delay="0.8s"
                />
              </div>
              <div className="text-center mt-12">
                <p className="text-stone-500 italic">And many more partner schools joining the GrandVile network.</p>
              </div>
            </div>
          </section>
        </main>
      )}

      <footer className="bg-stone-900 text-stone-400 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-white font-serif font-bold text-2xl mb-2">GrandVile Marketing</div>
            <p className="text-sm">The Apollo Institute Network & Lakeland Schools Resource Hub.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" aria-label="Instagram" className="text-stone-400 hover:text-white hover:scale-110 transition-all duration-300">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="text-stone-400 hover:text-white hover:scale-110 transition-all duration-300">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-stone-400 hover:text-white hover:scale-110 transition-all duration-300">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <div className="text-center mt-12 text-xs text-stone-600">
          © 2025 GrandVile Marketing & Apollo Institute Network. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
