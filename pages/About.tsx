import React from 'react';
import { PageTransition, Reveal, ParallaxImage } from '../components/Animations';
import { Shield, Star, Users, Target, Compass } from 'lucide-react';

export const AboutPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-midnight text-white">
        
        {/* Hero */}
        <div className="relative pt-48 pb-32 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <Reveal>
                    <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Who We Are</span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light mb-12 tracking-tight">
                        About <br/> <span className="text-gray-500 italic">Us.</span>
                    </h1>
                </Reveal>
            </div>
            {/* Background Texture/Image */}
            <div className="absolute top-0 right-0 w-2/3 h-full opacity-20 pointer-events-none">
                 <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover grayscale" alt="Architecture" />
            </div>
        </div>

        {/* Main Content */}
        <section className="py-24 bg-white text-midnight">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <Reveal>
                        <h2 className="text-3xl md:text-4xl font-serif mb-8 leading-tight">Redefining Living Standards</h2>
                        <div className="space-y-6 text-gray-600 font-light leading-loose text-lg text-justify">
                            <p>
                                Bharathi Builders, with years of experience and expertise in construction and trendy homes, brings you the opportunity of owning your precious home with elegance and distinguished construction. Life has its own way of celebrating magnanimity, and we ensure you are enthralled by magnificent views.
                            </p>
                            <p>
                                We sincerely aim for customer delight and satisfaction. Our dedication and perpetual endeavors will surely help us achieve new heights in our area of expertise.
                            </p>
                            <p>
                                A pioneer in the Real Estate Infrastructure sector, Bharathi Builders has been executing innovative projects with a view to redefine living standards and take our customers' aspirations to greater heights. At all levels, we provide you the optimum advantage of city limits complemented with splendid construction for a homely abode.
                            </p>
                        </div>
                    </Reveal>
                    
                    <div className="space-y-12">
                        <Reveal delay={0.2}>
                             <div className="relative h-[400px] w-full overflow-hidden mb-12">
                                <ParallaxImage src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000" alt="Construction Quality" className="w-full h-full" />
                             </div>
                        </Reveal>
                        
                        <Reveal delay={0.3}>
                             <div className="text-gray-600 font-light leading-loose text-lg text-justify space-y-6">
                                <p>
                                    20 years of rich construction experience has evolved us to be dedicated and passionate to develop properties in and around Mangalore that bring assured appreciating value. We are a professionally managed company that has placed client satisfaction above all else. We have a commitment to excellence that greets our customers at the doors of every project we execute, each day of the year.
                                </p>
                                <p>
                                    At present, Bharathi Builders is a growing firm backed up with the goodwill of customers and serving the need of better living homes at reasonable cost and timely delivery. We believe that in order to take, you must give, and we strive to give back to our customers by ensuring that we build safe, clean, and environment-friendly homes.
                                </p>
                                <p>
                                    Our main focus is on the residential section at present, and we look forward to building environment-friendly hospitals, IT parks, and educational institutions across India.
                                </p>
                             </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-32 bg-offWhite text-midnight">
             <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <Reveal>
                        <div className="bg-white p-12 border border-gray-200 h-full shadow-lg hover:shadow-xl transition-all duration-500 group">
                            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-white transition-colors">
                                <Compass size={32} className="text-gold group-hover:text-white" />
                            </div>
                            <h3 className="text-3xl font-serif mb-6">Our Vision</h3>
                            <p className="text-gray-600 font-light leading-relaxed">
                                The Company continues to move forward in become the leading Engineering and Construction firm across India, by consistently delivering projects that meet Customer standards.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="bg-white p-12 border border-gray-200 h-full shadow-lg hover:shadow-xl transition-all duration-500 group">
                            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-white transition-colors">
                                <Target size={32} className="text-gold group-hover:text-white" />
                            </div>
                            <h3 className="text-3xl font-serif mb-6">Our Mission</h3>
                            <p className="text-gray-600 font-light leading-relaxed">
                                To retain our position in Real Estate and meet the aspirations of our customers which would be achieved by responsive service, commitment and quality.
                            </p>
                        </div>
                    </Reveal>
                </div>
             </div>
        </section>

        {/* Values */}
        <section className="py-32 bg-midnight text-white">
             <div className="container mx-auto px-6 md:px-12">
                <Reveal>
                    <div className="text-center mb-16">
                        <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Core Values</span>
                        <h2 className="text-4xl md:text-5xl font-serif">The Pillars of Our Success</h2>
                    </div>
                </Reveal>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { icon: Shield, title: "Integrity", desc: "Building trust through transparency and honest practices." },
                        { icon: Star, title: "Excellence", desc: "Delivering quality that stands the test of time." },
                        { icon: Users, title: "Customer Focus", desc: "Placing client satisfaction above all else." }
                    ].map((item, idx) => (
                        <Reveal key={idx} delay={idx * 0.1}>
                            <div className="text-center p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-500 rounded-lg h-full">
                                <item.icon size={40} className="mx-auto text-gold mb-6" strokeWidth={1} />
                                <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                                <p className="text-gray-400 font-light">{item.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
             </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-white text-midnight text-center border-t border-gray-100">
            <div className="container mx-auto px-6 md:px-12">
                <Reveal>
                    <h2 className="text-4xl md:text-6xl font-serif mb-8">Ready to find your <br/> dream home?</h2>
                    <a href="#/projects" className="inline-block border border-midnight px-12 py-4 text-xs font-bold uppercase tracking-[0.25em] hover:bg-gold hover:text-white hover:border-gold transition-all duration-300">
                        View Our Projects
                    </a>
                </Reveal>
            </div>
        </section>

      </div>
    </PageTransition>
  );
};
