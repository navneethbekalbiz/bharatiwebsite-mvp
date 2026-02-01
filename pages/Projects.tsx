import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { Reveal, PageTransition } from '../components/Animations';

const ProjectsPage = () => {
  const [filter, setFilter] = useState<'All' | 'Ongoing' | 'Completed' | 'Upcoming'>('All');
  const [searchParams] = useSearchParams();

  const filteredProjects = PROJECTS.filter(p => {
    // 1. Status Filter (Tab)
    if (filter !== 'All' && p.status !== filter) return false;

    // 2. Search Params Filters (from Home Page or URL)
    const typeParam = searchParams.get('type');
    const bedsParam = searchParams.get('beds');
    const locationParam = searchParams.get('location');

    // Filter by Type
    if (typeParam && typeParam !== 'Any' && p.type !== typeParam) return false;
    
    // Filter by Location
    if (locationParam && locationParam !== 'Any' && !p.location.includes(locationParam)) return false;

    // Filter by Beds
    if (bedsParam && bedsParam !== 'Any') {
        const reqBed = parseInt(bedsParam);
        const specsBeds = String(p.specs.beds); // e.g., "1 - 3", "2", "2 - 3"
        
        // Extract numbers from string
        const matches = specsBeds.match(/(\d+)/g);
        if (matches) {
            const min = parseInt(matches[0]);
            const max = matches.length > 1 ? parseInt(matches[1]) : min;
            // If requested bed count is outside the range offered by project
            if (reqBed < min || reqBed > max) return false;
        } else if (specsBeds !== 'Unknown') {
            // Fallback for unexpected formats, though our data is clean
            return false;
        }
    }

    return true;
  });

  return (
    <PageTransition>
      <div className="pt-48 pb-32 min-h-screen bg-midnight text-white">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 border-b border-white/10 pb-16">
             <Reveal>
               <h1 className="text-7xl md:text-9xl font-serif font-light text-white mb-8 tracking-tight">Residences</h1>
               <p className="text-gray-400 max-w-lg font-sans font-light text-lg leading-relaxed">An exclusive portfolio of homes designed for those who seek the extraordinary. Curated for the modern connoisseur.</p>
             </Reveal>
             
             <Reveal delay={0.2}>
               <div className="flex space-x-12 mt-12 md:mt-0">
                  {['All', 'Ongoing', 'Completed'].map((status) => (
                    <button
                      key={status}
                      onClick={() => setFilter(status as any)}
                      className={`text-[10px] font-sans font-bold uppercase tracking-[0.25em] pb-3 transition-all duration-300 ${
                        filter === status 
                          ? 'text-gold border-b border-gold' 
                          : 'text-gray-600 hover:text-white border-b border-transparent'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
               </div>
             </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-40">
            {filteredProjects.length > 0 ? (
                filteredProjects.map((project, i) => (
                <Reveal key={project.id} delay={i * 0.1}>
                    <Link to={`/projects/${project.id}`} className="group block cursor-hover">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        
                        {/* Image Side */}
                        <div className={`lg:col-span-8 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                            <div className="overflow-hidden relative h-[500px] md:h-[800px]">
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 duration-700"></div>
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-[1.8s] ease-[0.16,1,0.3,1] group-hover:scale-105"
                            />
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className={`lg:col-span-4 ${i % 2 === 1 ? 'lg:order-1 lg:text-right' : ''} space-y-8`}>
                            <span className="text-gold text-[9px] font-sans font-bold uppercase tracking-[0.4em]">{project.status}</span>
                            <h2 className="text-5xl md:text-6xl font-serif font-light text-white group-hover:text-gold transition-colors duration-500">{project.title}</h2>
                            <div className={`w-16 h-[1px] bg-white/20 ${i % 2 === 1 ? 'ml-auto' : ''}`}></div>
                            <p className="text-gray-400 font-sans font-light text-sm leading-loose line-clamp-3">
                            {project.description}
                            </p>
                            <div className={`flex flex-col ${i % 2 === 1 ? 'items-end' : 'items-start'} gap-2 pt-6`}>
                            <span className="text-[10px] uppercase tracking-[0.25em] text-gray-600 font-sans font-bold">Location</span>
                            <span className="text-white font-serif text-xl">{project.location}</span>
                            </div>
                            <div className="pt-8">
                            <span className="inline-block border border-white/20 text-white px-10 py-4 text-[10px] font-bold uppercase tracking-[0.25em] group-hover:bg-white group-hover:text-midnight transition-all duration-300">
                                Discover
                            </span>
                            </div>
                        </div>

                    </div>
                    </Link>
                </Reveal>
                ))
            ) : (
                <Reveal>
                    <div className="text-center py-20">
                        <h3 className="text-3xl font-serif text-white/50 mb-4">No residences found</h3>
                        <p className="text-gray-500 font-light">Try adjusting your filters to find what you're looking for.</p>
                        <button 
                            onClick={() => window.location.href = '#/projects'}
                            className="mt-8 text-gold text-xs font-bold uppercase tracking-widest border-b border-gold pb-1"
                        >
                            Clear Filters
                        </button>
                    </div>
                </Reveal>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;