import React, { useState } from "react";

const luxuryFeatures = [
  { 
    id: 1, 
    icon: "⚡", 
    title: "Electric Performance", 
    subtitle: "ZERO EMISSION POWER",
    description: "Twin-motor all-wheel drive system delivering 1,020 horsepower with instant torque distribution. Silent yet exhilarating acceleration.",
    specs: "0-60 mph: 2.1s",
    premium: "Tri-Motor AWD"
  },
  { 
    id: 2, 
    icon: "🛣️", 
    title: "Autonomous Driving", 
    subtitle: "SELF-DRIVING TECHNOLOGY",
    description: "Level 4 autonomous capabilities with LiDAR sensors, neural processing, and machine learning for the ultimate hands-free luxury experience.",
    specs: "360° Sensors",
    premium: "Full Self-Driving"
  },
  { 
    id: 3, 
    icon: "💎", 
    title: "Diamond Interior", 
    subtitle: "HANDCRAFTED LUXURY",
    description: "Italian Nappa leather with diamond-quilted stitching, heated and ventilated massage seats with memory foam for unparalleled comfort.",
    specs: "22-Way Adjustable",
    premium: "Nappa Leather"
  },
  { 
    id: 4, 
    icon: "🎵", 
    title: "Bespoke Audio", 
    subtitle: "MERIDIAN SIGNATURE",
    description: "24-speaker Meridian surround sound system with 1,700W amplification and personalized acoustic tuning for concert hall experience.",
    specs: "1,700W Output",
    premium: "Meridian™ Audio"
  },
  { 
    id: 5, 
    icon: "🏛️", 
    title: "Air Suspension", 
    subtitle: "ADAPTIVE DYNAMICS",
    description: "Four-corner air suspension with adaptive dampers automatically adjusts ride height and stiffness for supreme comfort and handling.",
    specs: "5 Driving Modes",
    premium: "Adaptive Air"
  },
  { 
    id: 6, 
    icon: "📱", 
    title: "Digital Concierge", 
    subtitle: "AI ASSISTANT",
    description: "12.3\" curved OLED display with AI-powered personal assistant, seamless device integration, and over-the-air updates.",
    specs: "12.3\" OLED",
    premium: "AI Concierge"
  }
];

const Features = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
    
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-gray-900/30"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(30deg, #ffffff08 12%, transparent 12.5%, transparent 87%, #ffffff08 87.5%, #ffffff08), 
                             linear-gradient(150deg, #ffffff08 12%, transparent 12.5%, transparent 87%, #ffffff08 87.5%, #ffffff08), 
                             linear-gradient(30deg, #ffffff08 12%, transparent 12.5%, transparent 87%, #ffffff08 87.5%, #ffffff08), 
                             linear-gradient(150deg, #ffffff08 12%, transparent 12.5%, transparent 87%, #ffffff08 87.5%, #ffffff08)`,
            backgroundSize: '80px 140px',
            backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
          }}
        ></div>
      </div>

      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-amber-500/5 via-transparent to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-blue-500/5 via-transparent to-transparent rounded-full blur-3xl"></div>

      <section className="relative z-10 py-20 px-6 lg:px-8">
       
        <div className="text-center mb-24">
          <div className="mb-8">
            <div className="inline-block border-b border-amber-500/30 pb-2">
              <span className="text-amber-400 text-sm font-light tracking-[0.3em] uppercase">
                Signature Collection
              </span>
            </div>
          </div>
          
          <h2 className="text-7xl lg:text-8xl font-extralight text-white mb-8 tracking-tight leading-none">
            LUXURY
            <span className="block text-5xl lg:text-6xl font-thin text-gray-300 mt-4 tracking-wider">
              REDEFINED
            </span>
          </h2>
          
         
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Experience automotive excellence through meticulously crafted features that define the future of luxury mobility
          </p>
        </div>

       
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {luxuryFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative"
              onMouseEnter={() => setActiveCard(feature.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
             
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 via-white/5 to-amber-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur"></div>
              
            
              <div className="relative bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 backdrop-blur-xl border border-gray-800/50 rounded-2xl overflow-hidden transition-all duration-700 group-hover:border-amber-500/30 group-hover:shadow-2xl group-hover:shadow-amber-500/10">
                
               
                <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-amber-600 text-black text-xs font-bold px-4 py-2 rounded-bl-xl rounded-tr-2xl">
                  {feature.premium}
                </div>

               
                <div className="p-8">
                 
                  <div className="mb-8">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-amber-500/10 to-white/5 rounded-xl flex items-center justify-center border border-amber-500/20 group-hover:border-amber-500/40 transition-all duration-500">
                        <span className="text-4xl filter drop-shadow-lg">{feature.icon}</span>
                      </div>
                      
                     
                      <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-amber-500/30 rounded-tr-lg"></div>
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-amber-500/30 rounded-bl-lg"></div>
                    </div>
                  </div>

                 
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-amber-400 font-light tracking-widest uppercase mb-2">
                        {feature.subtitle}
                      </div>
                      <h3 className="text-2xl font-light text-white mb-4 tracking-wide">
                        {feature.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                      {feature.description}
                    </p>
                    
                  
                    <div className="pt-4 border-t border-gray-800/50">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500 uppercase tracking-wide">Performance</span>
                        <span className="text-amber-400 text-sm font-medium">{feature.specs}</span>
                      </div>
                    </div>
                  </div>

                
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <div className="w-8 h-8 border border-amber-500/50 rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-amber-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                
                
              </div>
            </div>
          ))}
        </div>

        
        
      </section>
    </div>
  );
};

export default Features;