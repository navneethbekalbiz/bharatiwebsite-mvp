import React, { useState } from 'react';
import { PageTransition, Reveal } from '../components/Animations';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const ContactPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-midnight text-white pt-32">
        
        {/* Header */}
        <div className="container mx-auto px-6 md:px-12 pt-16 pb-24">
            <Reveal>
                <h1 className="text-5xl md:text-7xl font-serif font-light mb-6">Contact Us</h1>
                <p className="text-gray-400 text-lg font-light max-w-xl">
                    BHARATHI BUILDERS & DEVELOPERS
                </p>
            </Reveal>
        </div>

        <div className="bg-white text-midnight py-24">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <Reveal>
                            <h2 className="text-3xl font-serif mb-8">Get in Touch</h2>
                            
                            <div className="space-y-10">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 rounded-full bg-offWhite flex items-center justify-center shrink-0">
                                        <MapPin size={20} className="text-gold" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3">Address</h4>
                                        <p className="font-serif text-lg leading-relaxed text-midnight">
                                            2nd Floor, 201, Paradise Streak,<br/>
                                            Near Lourdes Central School<br/>
                                            Bejai Main Road, Mangaluru - 575004
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 rounded-full bg-offWhite flex items-center justify-center shrink-0">
                                        <Phone size={20} className="text-gold" />
                                    </div>
                                    <div className="w-full">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                            <div>
                                                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3">Phone</h4>
                                                <p className="font-serif text-lg text-midnight">0824 2213220</p>
                                                <p className="font-serif text-lg text-midnight">0824 4281220</p>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3">Mobile</h4>
                                                <p className="font-serif text-lg text-midnight">96069 53909</p>
                                                <p className="font-serif text-lg text-midnight">96069 53907</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 rounded-full bg-offWhite flex items-center justify-center shrink-0">
                                        <Mail size={20} className="text-gold" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-3">Email</h4>
                                        <p className="font-serif text-lg text-midnight">sales@bharathibuilders.co</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Form */}
                    <Reveal delay={0.2}>
                        <div className="bg-offWhite p-10 md:p-14 border border-gray-100">
                            <h2 className="text-3xl font-serif mb-8">Send a Message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">First Name</label>
                                        <input type="text" className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-gold transition-colors font-serif" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Last Name</label>
                                        <input type="text" className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-gold transition-colors font-serif" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                                    <input type="email" className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-gold transition-colors font-serif" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                                    <input type="tel" className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-gold transition-colors font-serif" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                                    <textarea rows={4} className="w-full bg-white border border-gray-200 p-4 outline-none focus:border-gold transition-colors font-serif"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-midnight text-white py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-midnight transition-colors duration-300">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </Reveal>

                </div>
            </div>
        </div>

        {/* Google Map */}
        <div className="h-[500px] w-full relative group">
             <iframe 
                 title="Bharathi Builders Location"
                 src="https://maps.google.com/maps?q=Paradise+Streak,+Bejai+Main+Road,+Mangaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"
                 className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                 frameBorder="0"
                 scrolling="no"
                 aria-hidden="false"
                 tabIndex={0}
             />
             <div className="absolute inset-0 pointer-events-none group-hover:opacity-0 transition-opacity duration-500 bg-midnight/10"></div>
        </div>

      </div>
    </PageTransition>
  );
};
