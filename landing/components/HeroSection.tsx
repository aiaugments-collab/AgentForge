export default function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{backgroundImage: 'linear-gradient(135deg, #fffafd 0%, #fffef5 100%)'}}>
      {/* Gradient Background Blur */}
      <div 
        className="blur-background hidden lg:block"
        style={{
          background: 'linear-gradient(134deg, #95ffc4 15%, #77f7ff99 42.34234234234234%, #d632ffc2)',
          borderRadius: '100%',
          filter: 'blur(100px)',
          flex: 'none',
          height: '600px',
          overflow: 'hidden',
          position: 'absolute',
          right: '100px',
          top: '-100px',
          width: '700px',
          zIndex: '-10'
        }}
      ></div>
      
      <div className="max-w-none px-7 md:px-9 py-7 md:py-9">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Side: Hero Content */}
          <div className="lg:col-span-5 text-center sm:mb-8 lg:text-left lg:mb-0">
            <div className="max-w-2xl">
            <h1 className="mt-3 magical-text mb-6 font-libre-baskerville font-light leading-[1.3!important] tracking-tight text-gray-900 text-5xl xl:text-[5rem] xl:leading-[5.5rem] dark:text-white">
              <span className="magic">
                <span className="magic-star" style={{'--star-left': '51%', '--star-top': '10%'} as React.CSSProperties}>
                  <svg viewBox="0 0 512 512">
                    <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"></path>
                  </svg>
                </span>
                <span className="magic-star" style={{'--star-left': '6%', '--star-top': '56%'} as React.CSSProperties}>
                  <svg viewBox="0 0 512 512">
                    <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"></path>
                  </svg>
                </span>
                <span className="magic-star" style={{'--star-left': '70%', '--star-top': '71%'} as React.CSSProperties}>
                  <svg viewBox="0 0 512 512">
                    <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"></path>
                  </svg>
                </span>
                <span className="magic-text">AI Agents</span> —
              </span>
              <br />
              <span className="text-gray-900">smart & easy</span>
            </h1>
            
                   <div className="flex flex-col space-y-3 mb-8 max-[1023px]:items-center">
              <div className="flex items-center text-gray-900 dark:text-white max-[1023px]:inline-flex">
                <svg className="w-6 h-6 mr-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xl font-medium">No-code – you click, it works</span>
              </div>
              <div className="flex items-center text-gray-900 dark:text-white max-[1023px]:inline-flex">
                <svg className="w-6 h-6 mr-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-2xl font-medium">Open source – customizable and secure</span>
              </div>
              <div className="flex items-center text-gray-900 dark:text-white max-[1023px]:inline-flex">
                <svg className="w-6 h-6 mr-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <span className="text-2xl font-medium">Training – guided by us, built by your team</span>
              </div>
            </div>
            
            <div className="flex flex-col space-y-5 sm:flex-row sm:justify-left sm:space-y-0 sm:space-x-5 justify-center lg:justify-start">
              <a
                href="https://cloud.activepieces.com/sign-up"
                className="group relative inline-flex h-14 items-center justify-center rounded-lg px-7 py-4 text-lg font-medium text-white transition-all duration-300 hover:scale-105"
              >
                <span className="absolute inset-0 rounded-lg bg-black"></span>
                <span className="absolute -bottom-1 left-1/2 h-1/5 w-3/5 -translate-x-1/2 animate-rainbow rounded-full bg-gradient-to-r from-[#ff3ea5] via-[#1e9bf0] to-[#6420aa] blur-md"></span>
                <span className="relative">Get started</span>
              </a>
              <a
                href="/sales"
                className="inline-flex h-14 items-center justify-center px-7 py-4 text-lg font-medium text-gray-700 text-center rounded-lg bg-white border-2 border-gray-900 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 sm:mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 transition-all duration-300 hover:scale-105"
              >
                Talk to sales
              </a>
            </div>
            </div>
          </div>

                 {/* Right Side: Video Player */}
                 <div className="lg:col-span-7 flex justify-center lg:justify-end items-center">
                   <div className="relative w-full max-w-2xl lg:ml-8">
                     <video 
                       className="w-full h-auto rounded-2xl shadow-2xl"
                       autoPlay 
                       muted 
                       loop 
                       playsInline
                     >
                       <source src="/agentForge-a-demo.mp4" type="video/mp4" />
                       Your browser does not support the video tag.
                     </video>
                   </div>
                 </div>
        </div>
      </div>
    </section>
  );
}
