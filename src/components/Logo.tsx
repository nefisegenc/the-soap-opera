import React from 'react';

const Logo = () => {
    return (
        <div className="flex flex-col items-center justify-center p-3 select-none relative group cursor-pointer">
            {/* Outer Circle */}
            <div className="absolute inset-0 border-[1.5px] border-primary rounded-full transform scale-100 group-hover:scale-105 transition-transform duration-500"></div>

            {/* Inner Circle */}
            <div className="absolute inset-0.5 border-[2px] border-primary rounded-full"></div>

            <div className="relative z-10 flex flex-col items-center text-center py-4 px-2">
                {/* Top */}
                <div className="text-[0.5rem] font-bold tracking-[0.15em] mb-0.5 font-body text-primary uppercase">
                    100 % Natural
                </div>

                <div className="w-6 border-t border-primary my-0.5"></div>

                {/* The */}
                <div className="font-heading text-[0.6rem] font-bold tracking-widest text-primary leading-none">
                    — THE —
                </div>

                {/* SOAP OPERA */}
                <div className="font-heading text-2xl font-black text-primary leading-[0.8] tracking-tight">
                    SOAP
                </div>
                <div className="font-heading text-xl font-black text-primary leading-[0.8] tracking-tight mb-1">
                    OPERA
                </div>

                {/* Tagline */}
                <div className="font-script text-[0.65rem] text-primary transform -rotate-2 leading-tight max-w-[90px]">
                    The only drama you need is in the bubbles..
                </div>
            </div>
        </div>
    );
};

export default Logo;
