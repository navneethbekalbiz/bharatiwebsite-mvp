import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MapPin, Shield, Star, Leaf, Clock, ChevronDown, Quote, Globe, Smartphone, Newspaper, Key, Palette, Briefcase } from 'lucide-react';
import { Reveal, PageTransition, ParallaxImage, TextReveal, StaggerContainer, FadeInItem } from '../components/Animations';
import { PROJECTS, BLOGS } from '../constants';
import { Carousel, Card } from '../components/ui/apple-cards-carousel';

// --- Hero Section ---
const Hero = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    type: 'Residential',
    beds: 'Any',
    price: 'Any',
    community: 'Any'
  });

  // Extract unique communities from projects
  const communities = Array.from(new Set(PROJECTS.map(p => p.location.split(',')[0].trim())));

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (filters.type !== 'Any') params.append('type', filters.type);
    if (filters.beds !== 'Any') params.append('beds', filters.beds);
    if (filters.community !== 'Any') params.append('location', filters.community);
    
    navigate(`/projects?${params.toString()}`);
  };

  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center bg-midnight overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10 pointer-events-none" />
        <video 
            autoPlay 
            loop 
            muted 
            playsInline
            poster="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2500"
            className="w-full h-full object-cover scale-105"
        >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-sunset-over-the-city-skyline-1188-large.mp4" type="video/mp4" />
            <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2500" 
                alt="Luxury Architecture" 
                className="w-full h-full object-cover"
            />
        </video>
      </div>

      {/* Main Content Container - Centered Text */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 mt-[-60px]">
         <Reveal>
            <h1 className="font-bodoni font-medium text-white text-[12vw] lg:text-[10rem] leading-[0.8] tracking-tight uppercase drop-shadow-2xl opacity-95">
               Luxury Living
            </h1>
         </Reveal>
         
         <Reveal delay={0.2}>
            <h2 className="font-montserrat font-semibold text-white/90 text-sm md:text-xl lg:text-2xl tracking-[0.4em] uppercase mt-6 drop-shadow-md">
               Made Affordable
            </h2>
         </Reveal>
      </div>
      
      {/* Floating Search Bar (Emaar Style) */}
      <div className="absolute bottom-10 z-30 w-full px-4 md:px-12 flex flex-col items-center">
         <Reveal delay={0.4} width="fit-content">
             <div className="hidden lg:flex bg-white rounded-full p-2 pl-8 pr-2 max-w-6xl w-full shadow-2xl items-center justify-between h-24 mx-auto">
                 {/* Inputs Group */}
                 <div className="flex-1 grid grid-cols-4 divide-x divide-gray-100 h-full items-center mr-6">
                      {/* Property Type */}
                      <div className="px-6 h-full flex flex-col justify-center cursor-pointer group relative">
                           <label className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1 group-hover:text-gold transition-colors font-montserrat block">Property Type</label>
                           <div className="flex items-center justify-between">
                               <span className="font-serif text-midnight text-lg truncate pr-2">{filters.type}</span>
                               <ChevronDown className="w-4 h-4 text-gray-300 group-hover:text-gold transition-colors" />
                           </div>
                           <select 
                                value={filters.type}
                                onChange={(e) => setFilters({...filters, type: e.target.value})}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                           >
                                <option value="Residential">Residential</option>
                                <option value="Commercial">Commercial</option>
                           </select>
                      </div>
                      
                      {/* Bedroom */}
                      <div className="px-6 h-full flex flex-col justify-center cursor-pointer group relative">
                           <label className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1 group-hover:text-gold transition-colors font-montserrat block">Bedroom</label>
                           <div className="flex items-center justify-between">
                               <span className="font-serif text-midnight text-lg truncate pr-2">
                                  {filters.beds === 'Any' ? 'Any Bed' : `${filters.beds} BHK`}
                               </span>
                               <ChevronDown className="w-4 h-4 text-gray-300 group-hover:text-gold transition-colors" />
                           </div>
                           <select 
                                value={filters.beds}
                                onChange={(e) => setFilters({...filters, beds: e.target.value})}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                           >
                                <option value="Any">Any Bed</option>
                                <option value="1">1 BHK</option>
                                <option value="2">2 BHK</option>
                                <option value="3">3 BHK</option>
                           </select>
                      </div>

                      {/* Price Range */}
                      <div className="px-6 h-full flex flex-col justify-center cursor-pointer group relative">
                           <label className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1 group-hover:text-gold transition-colors font-montserrat block">Price Range</label>
                           <div className="flex items-center justify-between">
                               <span className="font-serif text-midnight text-lg truncate pr-2">{filters.price}</span>
                               <ChevronDown className="w-4 h-4 text-gray-300 group-hover:text-gold transition-colors" />
                           </div>
                           <select 
                                value={filters.price}
                                onChange={(e) => setFilters({...filters, price: e.target.value})}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                           >
                                <option value="Any">Any Price</option>
                                <option value="< 50L">&lt; ₹50 Lakhs</option>
                                <option value="50L - 1Cr">₹50L - ₹1Cr</option>
                                <option value="> 1Cr">&gt; ₹1 Crore</option>
                           </select>
                      </div>

                      {/* Community */}
                      <div className="px-6 h-full flex flex-col justify-center cursor-pointer group relative">
                           <label className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1 group-hover:text-gold transition-colors font-montserrat block">Community</label>
                           <div className="flex items-center justify-between">
                               <span className="font-serif text-midnight text-lg truncate pr-2">{filters.community}</span>
                               <ChevronDown className="w-4 h-4 text-gray-300 group-hover:text-gold transition-colors" />
                           </div>
                           <select 
                                value={filters.community}
                                onChange={(e) => setFilters({...filters, community: e.target.value})}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                           >
                                <option value="Any">Any Community</option>
                                {communities.map(c => (
                                    <option key={c} value={c}>{c}</option>
                                ))}
                           </select>
                      </div>
                 </div>
                 
                 {/* Search Button */}
                 <button 
                    onClick={handleSearch}
                    className="bg-midnight text-white h-20 px-12 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-white transition-colors shadow-lg whitespace-nowrap"
                 >
                    Search Properties
                 </button>
             </div>
             
             {/* Mobile View Button */}
             <div className="lg:hidden w-full flex justify-center">
                <Link to="/projects" className="bg-white text-midnight px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl flex items-center gap-2">
                    Search Properties <ArrowRight size={14} />
                </Link>
             </div>
         </Reveal>
         
         {/* Down Arrow Indicator */}
         <div className="mt-8 animate-bounce hidden lg:block">
            <ChevronDown className="text-white w-8 h-8 opacity-80" strokeWidth={1} />
         </div>
      </div>
    </div>
  );
};

// --- Philosophy Section (Replaces Virtual Tour) ---
const PhilosophySection = () => {
   return (
      <section className="py-32 bg-offWhite relative overflow-hidden">
         {/* Decorative background element */}
         <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-100/50 skew-x-12 translate-x-20 pointer-events-none"></div>

         <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                    <Reveal>
                        <div className="flex items-center gap-4 mb-8">
                             <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-[10px] font-bold text-midnight">01</div>
                             <span className="text-midnight text-[10px] font-bold uppercase tracking-[0.2em]">Who We Are</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-midnight mb-8 leading-[1.1] tracking-tight uppercase">
                            Est is to provide exceptional real estate services that exceed our clients' expectations.
                        </h2>
                        <p className="text-gray-500 font-sans font-normal leading-relaxed mb-10 text-sm md:text-base max-w-lg">
                            We strive to make the process of buying, selling, or renting a home seamless and enjoyable by offering expert guidance, unparalleled support, and tailored solutions.
                        </p>
                        <button className="rounded-full border border-gray-300 px-8 py-3 text-xs font-bold uppercase tracking-widest text-midnight hover:bg-midnight hover:text-white transition-colors flex items-center gap-2">
                             Explore More <ArrowRight size={14} />
                        </button>
                        
                        <div className="flex gap-20 mt-16">
                            <div>
                                <span className="block text-5xl font-serif font-medium text-midnight mb-2">112+</span>
                                <span className="text-xs text-gray-500 font-normal leading-relaxed max-w-[150px] block">We strive to make the process of buying, selling.</span>
                            </div>
                            <div>
                                <span className="block text-5xl font-serif font-medium text-midnight mb-2">88%</span>
                                <span className="text-xs text-gray-500 font-normal leading-relaxed max-w-[150px] block">We strive to make the process of buying, selling.</span>
                            </div>
                        </div>
                    </Reveal>
                </div>
                
                <div className="relative hidden md:block">
                    <Reveal delay={0.2}>
                         {/* Minimalist image grid or singular bold image */}
                         <div className="relative h-[600px] w-full bg-gray-200 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Minimalist Architecture" />
                         </div>
                    </Reveal>
                </div>
            </div>
         </div>
      </section>
   );
};

// --- Featured Communities (Replaced with Apple Carousel) ---
const FeaturedCommunities = () => {
    // Map existing project data to Carousel Card format
    const cards = PROJECTS.map((project, index) => (
        <Card 
            key={project.id} 
            card={{
                src: project.image,
                title: project.title,
                category: project.type,
                content: (
                    <div className="flex flex-col gap-6">
                        <p className="text-gray-300 font-sans font-light leading-loose text-base md:text-lg">
                            {project.description}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                             <div>
                                <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-1">Location</span>
                                <span className="text-white font-serif text-lg">{project.location}</span>
                             </div>
                             <div>
                                <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-1">Starting Price</span>
                                <span className="text-white font-serif text-lg">{project.priceRange}</span>
                             </div>
                        </div>

                        <div className="mt-8">
                             <Link 
                                to={`/projects/${project.id}`}
                                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-gold border border-gold px-8 py-3 hover:bg-gold hover:text-midnight transition-colors"
                             >
                                Explore Residence <ArrowRight size={14} />
                             </Link>
                        </div>
                        
                        <div className="mt-4 opacity-50 text-[9px] uppercase tracking-widest text-gray-500">
                             Scroll for more images
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                             {project.gallery && project.gallery.slice(1,3).map((img, i) => (
                                 <img key={i} src={img} className="w-full h-32 object-cover rounded-lg opacity-70 hover:opacity-100 transition-opacity" alt="Gallery" />
                             ))}
                        </div>
                    </div>
                )
            }} 
            index={index} 
        />
    ));

    return (
        <section className="py-32 bg-midnight border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 mb-8">
                <Reveal>
                    <div className="flex items-center gap-4 mb-6">
                         <div className="w-8 h-8 rounded-full bg-gold text-midnight flex items-center justify-center text-[10px] font-bold">02</div>
                         <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em]">Featured Listings</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 uppercase tracking-tight font-bold">Curated Properties</h2>
                </Reveal>
            </div>
            
            {/* Carousel Component */}
            <div className="w-full h-full">
                <Carousel items={cards} />
            </div>
        </section>
    );
};

// --- Blogs Section ---
const BlogsSection = () => {
   return (
      <section className="py-24 bg-gray-50 border-t border-gray-100">
         <div className="container mx-auto px-6 md:px-12">
            <div className="flex justify-between items-center mb-12">
               <div>
                  <span className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">Journal</span>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-midnight uppercase tracking-tight">Latest News</h2>
               </div>
               <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-midnight border-b border-midnight pb-1 hover:text-gold hover:border-gold transition-colors hidden sm:block">
                  View All
               </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {BLOGS.map((blog, idx) => (
                  <Reveal key={blog.id} delay={idx * 0.1}>
                     <div className="group cursor-pointer flex flex-col lg:flex-row gap-6 items-start lg:items-center">
                        <div className="w-full lg:w-1/2 overflow-hidden aspect-[3/2] shadow-sm">
                           <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="w-full lg:w-1/2">
                           <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-2 block">{blog.date}</span>
                           <h3 className="text-xl font-serif font-bold text-midnight mb-4 group-hover:text-gold transition-colors leading-tight uppercase">{blog.title}</h3>
                           <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-midnight underline decoration-gray-300 underline-offset-4 group-hover:text-gold group-hover:decoration-gold transition-all">Read Article</span>
                        </div>
                     </div>
                  </Reveal>
               ))}
            </div>
         </div>
      </section>
   );
};

// --- Concierge / Services Section (Replaces App Section) ---
const ConciergeSection = () => {
   return (
      <section className="bg-midnight py-32 border-t border-white/5 relative overflow-hidden">
         {/* Subtle background texture */}
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

         <div className="container mx-auto px-6 md:px-12 relative z-10">
            <Reveal>
               <div className="text-center mb-24 max-w-2xl mx-auto">
                  <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Bharathi Privé</span>
                  <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight">Beyond the Build</h2>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">
                     An exclusive ecosystem of services designed for our most discerning residents. From asset management to curated lifestyle experiences, we ensure your investment lives as well as you do.
                  </p>
               </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                   { title: "Asset Management", desc: "Comprehensive property care ensuring your investment appreciates gracefully over generations.", icon: Shield },
                   { title: "Bespoke Interiors", desc: "Collaboration with world-renowned designers to customize your sanctuary to your exact taste.", icon: Palette },
                   { title: "Private Resale", desc: "Exclusive access to off-market opportunities within the Bharathi ecosystem for high-yield returns.", icon: Key }
               ].map((item, idx) => (
                   <Reveal key={idx} delay={idx * 0.1}>
                       <div className="group bg-white/5 p-12 border border-white/5 hover:border-gold/30 hover:bg-white/[0.07] transition-all duration-500 h-full flex flex-col items-center text-center">
                           <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-500">
                               <item.icon size={24} className="text-gold" />
                           </div>
                           <h3 className="text-2xl font-serif font-bold text-white mb-4 uppercase">{item.title}</h3>
                           <div className="w-8 h-[1px] bg-white/20 mb-6 group-hover:w-16 group-hover:bg-gold transition-all duration-500"></div>
                           <p className="text-gray-400 text-xs font-light leading-loose">{item.desc}</p>
                       </div>
                   </Reveal>
               ))}
            </div>
         </div>
      </section>
   );
};

export const HomePage = () => {
  return (
    <PageTransition>
      <Hero />
      <PhilosophySection />
      <FeaturedCommunities />
      <BlogsSection />
      <ConciergeSection />
    </PageTransition>
  );
};