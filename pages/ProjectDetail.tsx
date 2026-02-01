import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, Check, ChevronDown, CheckCircle2, Building, Shield, Zap, Car, Trees, Home, Ruler, IndianRupee, Star, ThumbsUp, ThumbsDown, User } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Reveal, ParallaxImage, PageTransition } from '../components/Animations';
import { Modal, BrochureUnlockForm, SiteVisitForm } from '../components/UI';
import { Gallery } from '../components/Gallery';

// Helper component for Accordion
const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-lg md:text-xl font-serif text-midnight group-hover:text-gold transition-colors">{question}</span>
        <ChevronDown 
          className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-gold' : ''}`} 
          size={20} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-gray-500 font-sans font-light leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);

  if (!project) return <Navigate to="/projects" />;

  return (
    <PageTransition>
      <div className="bg-white text-midnight">
        
        {/* --- 1. Cinematic Hero Section --- */}
        <div className="h-[90vh] md:h-screen relative overflow-hidden">
           <ParallaxImage src={project.image} alt={project.title} className="h-full w-full" />
           <div className="absolute inset-0 bg-black/30"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
           
           <div className="absolute inset-0 flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 container mx-auto">
              <Reveal>
                 <div className="flex flex-wrap gap-4 mb-8">
                     <span className="bg-gold text-midnight px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em]">{project.status}</span>
                     <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em]">{project.type}</span>
                 </div>
                 <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-serif font-light text-white mb-6 leading-[0.9] tracking-tight max-w-5xl">
                    {project.title}
                 </h1>
                 <div className="flex items-center gap-3 text-white/80 font-sans text-sm md:text-base font-light tracking-wide mb-12">
                    <MapPin size={18} className="text-gold" /> {project.location}
                 </div>
                 
                 <div className="flex flex-col md:flex-row gap-6">
                    <button 
                       onClick={() => setIsVisitModalOpen(true)}
                       className="bg-white text-midnight px-10 py-5 text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-gold transition-colors duration-500 min-w-[200px]"
                    >
                       Book Viewing
                    </button>
                    <button 
                       onClick={() => setIsBrochureModalOpen(true)}
                       className="border border-white text-white px-10 py-5 text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-white hover:text-midnight transition-colors duration-500 min-w-[200px]"
                    >
                       Download Brochure
                    </button>
                 </div>
              </Reveal>
           </div>
        </div>

        {/* --- 2. Project Overview & Highlights --- */}
        <div className="py-32 bg-offWhite">
           <div className="container mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                 <Reveal>
                    <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">About the Project</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-midnight mb-8 leading-tight">Designed for <br/> <span className="italic text-gray-400">Generations.</span></h2>
                    <p className="text-lg text-gray-600 font-serif leading-relaxed mb-8">
                       {project.description}
                    </p>
                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 gap-8 mt-12">
                        <div>
                            <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Total Area</span>
                            <span className="text-2xl font-serif text-midnight block">0.69 - 1.5 Acres</span>
                        </div>
                        <div>
                            <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Open Space</span>
                            <span className="text-2xl font-serif text-midnight block">~45%</span>
                        </div>
                    </div>
                 </Reveal>

                 <Reveal delay={0.2}>
                    <div className="bg-white p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 relative h-full">
                       <h3 className="text-xl font-serif mb-8 text-midnight border-b border-gray-100 pb-4">Project Highlights</h3>
                       <ul className="space-y-6">
                          {project.overviewPoints?.map((point, i) => (
                             <li key={i} className="flex items-start gap-4 text-sm text-gray-600 font-light leading-relaxed">
                                <span className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                                   <Check size={10} className="text-gold" />
                                </span>
                                {point}
                             </li>
                          ))}
                          <li className="flex items-start gap-4 text-sm text-gray-600 font-light leading-relaxed">
                                <span className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                                   <Check size={10} className="text-gold" />
                                </span>
                                Ready to Move In
                           </li>
                       </ul>
                    </div>
                 </Reveal>
              </div>
           </div>
        </div>

        {/* --- 3. Configuration & Pricing --- */}
        {project.configurations && (
           <div className="py-32 bg-white">
              <div className="container mx-auto px-6 md:px-12">
                 <Reveal>
                    <div className="text-center mb-16">
                       <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Residences</span>
                       <h2 className="text-4xl md:text-5xl font-serif text-midnight mb-4">Configurations & Pricing</h2>
                       <p className="text-gray-400 font-light max-w-2xl mx-auto">Choose from a range of exquisitely designed spaces tailored to your lifestyle.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {project.configurations.map((config, idx) => (
                          <div key={idx} className="group border border-gray-100 p-8 hover:border-gold/50 transition-colors duration-500 hover:shadow-2xl">
                             <div className="mb-6 flex justify-between items-start">
                                <div className="p-3 bg-offWhite rounded-full group-hover:bg-midnight group-hover:text-white transition-colors duration-500">
                                   <Home size={24} strokeWidth={1.5} />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-50 px-2 py-1">Ready</span>
                             </div>
                             <h3 className="text-2xl font-serif text-midnight mb-2">{config.type}</h3>
                             <div className="space-y-4 my-8">
                                <div className="flex justify-between border-b border-gray-100 pb-2">
                                   <span className="text-xs text-gray-500 uppercase tracking-wider flex items-center gap-2"><Ruler size={12}/> Size</span>
                                   <span className="font-serif text-lg">{config.size}</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-100 pb-2">
                                   <span className="text-xs text-gray-500 uppercase tracking-wider flex items-center gap-2"><IndianRupee size={12}/> Price</span>
                                   <span className="font-serif text-lg text-gold">{config.price}</span>
                                </div>
                             </div>
                             <button 
                                onClick={() => setIsVisitModalOpen(true)}
                                className="w-full bg-midnight text-white py-4 text-[10px] font-bold uppercase tracking-[0.2em] group-hover:bg-gold transition-colors duration-300"
                             >
                                Enquire Now
                             </button>
                          </div>
                       ))}
                    </div>
                 </Reveal>
              </div>
           </div>
        )}

        {/* --- 4. Gallery --- */}
        <div className="py-12 bg-midnight">
           <Gallery images={project.gallery && project.gallery.length > 0 ? project.gallery : [project.image]} />
        </div>

        {/* --- 5. Specifications & Amenities --- */}
        <div className="py-32 bg-offWhite">
           <div className="container mx-auto px-6 md:px-12">
              <Reveal>
                 <div className="mb-20">
                     <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">The Finer Details</span>
                     <h2 className="text-4xl md:text-5xl font-serif text-midnight">Amenities & Specifications</h2>
                 </div>
              </Reveal>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                 {/* Amenities Grid */}
                 <div className="lg:col-span-5">
                    <Reveal delay={0.1}>
                       <h3 className="text-xl font-serif text-midnight mb-8">World-Class Amenities</h3>
                       <div className="grid grid-cols-2 gap-4">
                          {project.amenitiesList?.map((amenity, i) => (
                             <div key={i} className="flex items-center gap-4 p-4 bg-white border border-gray-100 shadow-sm">
                                <CheckCircle2 size={16} className="text-gold shrink-0" />
                                <span className="text-sm font-light text-gray-700">{amenity}</span>
                             </div>
                          ))}
                       </div>
                    </Reveal>
                 </div>

                 {/* Specifications List */}
                 <div className="lg:col-span-7">
                    <Reveal delay={0.2}>
                       <h3 className="text-xl font-serif text-midnight mb-8">Technical Specifications</h3>
                       <div className="space-y-12">
                          {project.specifications?.map((group, idx) => (
                             <div key={idx}>
                                <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-gold mb-6 border-b border-gray-200 pb-2 inline-block">
                                   {group.category}
                                </h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                                   {group.items.map((item, i) => (
                                      <li key={i} className="text-sm font-light text-gray-600 leading-relaxed list-disc list-inside marker:text-gray-300">
                                         {item}
                                      </li>
                                   ))}
                                </ul>
                             </div>
                          ))}
                       </div>
                    </Reveal>
                 </div>
              </div>
           </div>
        </div>

        {/* --- 6. Reviews & Insights (NEW) --- */}
        {project.reviews && (
            <div className="py-32 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 md:px-12">
                   <Reveal>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            {/* Summary Card */}
                            <div className="lg:col-span-4">
                                <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Society Reviews</span>
                                <h2 className="text-4xl font-serif text-midnight mb-8">Resident Insights</h2>
                                
                                <div className="bg-offWhite p-8 border border-gray-100 text-center">
                                    <div className="text-6xl font-serif text-midnight mb-2">{project.reviews.average}</div>
                                    <div className="flex justify-center gap-1 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} className={i < Math.floor(project.reviews!.average) ? "text-gold fill-gold" : "text-gray-300"} />
                                        ))}
                                    </div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Based on {project.reviews.count} Reviews</p>
                                </div>
                            </div>
                            
                            {/* Detailed Breakdown */}
                            <div className="lg:col-span-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                                    <div>
                                        <h4 className="flex items-center gap-2 font-serif text-xl mb-6 text-midnight">
                                            <ThumbsUp size={18} className="text-green-600" /> What Residents Like
                                        </h4>
                                        <ul className="space-y-3">
                                            {project.reviews.likes?.map((like, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-gray-600 font-light">
                                                    <Check size={14} className="text-green-600 mt-1 shrink-0" /> {like}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="flex items-center gap-2 font-serif text-xl mb-6 text-midnight">
                                            <ThumbsDown size={18} className="text-red-400" /> What Needs Attention
                                        </h4>
                                        <ul className="space-y-3">
                                            {project.reviews.dislikes?.map((dislike, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-gray-600 font-light">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span> {dislike}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                
                                {/* User Reviews */}
                                {project.reviews.userReviews && project.reviews.userReviews.length > 0 && (
                                    <div className="border-t border-gray-100 pt-12">
                                        <h4 className="font-serif text-xl mb-8 text-midnight">Recent Testimonials</h4>
                                        <div className="space-y-8">
                                            {project.reviews.userReviews.map((review, i) => (
                                                <div key={i} className="bg-white p-6 border border-gray-100 shadow-sm">
                                                    <div className="flex justify-between items-start mb-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                                                                <User size={20} />
                                                            </div>
                                                            <div>
                                                                <div className="font-bold text-sm text-midnight">{review.name}</div>
                                                                <div className="text-[10px] text-gray-400 uppercase tracking-wider">{review.role}</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded text-green-700 text-xs font-bold">
                                                            {review.rating} <Star size={10} fill="currentColor" />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-3">
                                                        {review.positive && (
                                                            <p className="text-sm text-gray-600 font-light italic">"<span className="text-green-600 font-medium not-italic">Positives:</span> {review.positive}"</p>
                                                        )}
                                                        {review.negative && (
                                                            <p className="text-sm text-gray-600 font-light italic">"<span className="text-red-400 font-medium not-italic">Negatives:</span> {review.negative}"</p>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                   </Reveal>
                </div>
            </div>
        )}

        {/* --- 7. Location & Neighborhood --- */}
        <div className="py-32 bg-offWhite relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-white -skew-x-12 translate-x-32 z-0 pointer-events-none"></div>
            <div className="container mx-auto px-6 md:px-12 relative z-10">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                  <Reveal>
                     <div>
                        <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">The Neighborhood</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-midnight mb-8">{project.location}</h2>
                        <p className="text-gray-600 font-light leading-relaxed mb-8">
                           {project.areaOverview}
                        </p>
                        
                        {project.areaHighlights && (
                           <div className="bg-midnight p-8 text-white mb-12">
                              <h4 className="font-serif text-xl mb-6 text-gold">Why {project.location.split(',')[0]}?</h4>
                              <ul className="space-y-4">
                                 {project.areaHighlights.map((hl, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm font-light text-gray-300">
                                       <span className="text-gold mt-1">✦</span> {hl}
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        )}
                     </div>
                  </Reveal>

                  <Reveal delay={0.2}>
                     <div className="bg-white border border-gray-200 p-8 lg:p-12 shadow-2xl relative">
                        <h3 className="text-2xl font-serif text-midnight mb-8">Proximity</h3>
                        <div className="space-y-6 relative">
                           {/* Line connector */}
                           <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-gray-200"></div>
                           
                           {project.locationPoints?.map((loc, i) => (
                              <div key={i} className="flex justify-between items-center relative pl-8 group">
                                 <div className="absolute left-0 w-4 h-4 rounded-full border-2 border-white bg-gray-300 group-hover:bg-gold transition-colors z-10 shadow-sm"></div>
                                 <span className="text-sm font-medium text-gray-800">{loc.name}</span>
                                 <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded">{loc.distance}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </Reveal>
               </div>
            </div>
        </div>

        {/* --- 8. FAQ Section --- */}
        {project.faqs && (
           <div className="py-32 bg-white border-t border-gray-200">
              <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                 <Reveal>
                    <div className="text-center mb-16">
                       <h2 className="text-3xl md:text-4xl font-serif text-midnight">Frequently Asked Questions</h2>
                    </div>
                    <div className="bg-offWhite p-8 md:p-12 border border-gray-100 shadow-sm">
                       {project.faqs.map((faq, idx) => (
                          <AccordionItem key={idx} question={faq.question} answer={faq.answer} />
                       ))}
                    </div>
                 </Reveal>
              </div>
           </div>
        )}

        {/* Modals */}
        <Modal isOpen={isBrochureModalOpen} onClose={() => setIsBrochureModalOpen(false)} title="Access Floor Plans">
          <BrochureUnlockForm onUnlock={() => {}} />
        </Modal>

        <Modal isOpen={isVisitModalOpen} onClose={() => setIsVisitModalOpen(false)} title="Private Viewing">
          <SiteVisitForm onClose={() => setIsVisitModalOpen(false)} />
        </Modal>

      </div>
    </PageTransition>
  );
};

export default ProjectDetail;