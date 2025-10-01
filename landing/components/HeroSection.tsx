export default function HeroSection() {
  return (
    <section className="dark:bg-gray-900 -mt-[62px]">
      <div 
        className="blur-background mt-20 hidden lg:block"
        style={{
          background: 'linear-gradient(134deg, #95ffc4 15%, #77f7ff99 42.34234234234234%, #d632ffc2)',
          borderRadius: '100%',
          filter: 'blur(100px)',
          flex: 'none',
          height: '474px',
          overflow: 'hidden',
          position: 'absolute',
          right: '200px',
          top: '-50px',
          width: '554px',
          willChange: 'transform',
          zIndex: '-10'
        }}
      ></div>
      <div className="max-w-screen-xl px-4 pt-[108px] xl:pt-[132px] pb-[50px] mx-auto max-[500px]:pt-[120px]">
        <div className="lg:grid pb-12 gap-8 lg:gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-6 text-center sm:mb-6 lg:text-left lg:mb-0">
            <div className="max-w-screen-sm mx-auto">
              <h1 className="mt-10 magical-text mb-8 font-libre-baskerville font-light leading-[1.45!important] tracking-tight text-gray-900 text-5xl xl:text-[4.3rem] xl:leading-[4.9rem] dark:text-white">
                <span className="magic">
                  <span className="magic-star" style={{'--star-left': '75%', '--star-top': '79%'} as React.CSSProperties}>
                    <svg viewBox="0 0 512 512">
                      <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"></path>
                    </svg>
                  </span>
                  <span className="magic-star" style={{'--star-left': '18%', '--star-top': '20%'} as React.CSSProperties}>
                    <svg viewBox="0 0 512 512">
                      <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"></path>
                    </svg>
                  </span>
                  <span className="magic-star" style={{'--star-left': '94%', '--star-top': '84%'} as React.CSSProperties}>
                    <svg viewBox="0 0 512 512">
                      <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"></path>
                    </svg>
                  </span>
                  <span className="magic-text">AI Agents</span> — smart & easy 
                </span>
              </h1>
              
              <div className="flex flex-col space-y-2 mb-10 max-[1023px]:items-center">
                <div className="flex items-center text-gray-900 dark:text-white max-[1023px]:inline-flex">
                  <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg font-medium">No-code – you click, it works</span>
                </div>
                <div className="flex items-center text-gray-900 dark:text-white max-[1023px]:inline-flex">
                  <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg font-medium">Open source – customizable and secure</span>
                </div>
                <div className="flex items-center text-gray-900 dark:text-white max-[1023px]:inline-flex">
                  <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                  <span className="text-lg font-medium">Training – guided by us, built by your team</span>
                </div>
              </div>
              
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-left sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <a
                  href="https://cloudagent.augment.cfd/sign-up"
                  className="group relative inline-flex h-12 items-center justify-center rounded-lg px-5 py-3 text-lg font-medium text-white transition-all duration-300 hover:scale-105"
                >
                  <span className="absolute inset-0 rounded-lg bg-black"></span>
                  <span className="absolute -bottom-1 left-1/2 h-1/5 w-3/5 -translate-x-1/2 animate-rainbow rounded-full bg-gradient-to-r from-[#ff3ea5] via-[#1e9bf0] to-[#6420aa] blur-md"></span>
                  <span className="relative">Get started</span>
                </a>
                <a
                  href="/sales"
                  className="inline-flex h-12 items-center justify-center px-5 py-3 text-lg font-medium text-gray-700 text-center rounded-lg bg-white border-2 border-gray-900 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 sm:mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 transition-all duration-300 hover:scale-105"
                >
                  Talk to sales
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 mt-10 lg:mt-0 lg:pt-12">
            <video 
              src="/agentForge-a-demo.mp4" 
              autoPlay 
              muted 
              loop 
              playsInline 
              width="350" 
              height="350" 
              className="max-w-[1280px] w-full max-h-[500px] object-contain rounded-xl shadow-[0_0_80px_rgba(0,0,0,0.1)]"
            />
          </div>
        </div>
        
        <section className="py-[10px] dark:bg-gray-900 mx-auto rounded-t-[20px] overflow-hidden relative z-10 mt-10">
          <h2 className="mb-14 text-2xl tracking-tight font-bold text-gray-900 dark:text-white text-center">
            Trusted by companies from startups to Fortune 50
          </h2>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent opacity-100 z-10 pointer-events-none"></div>
            <div className="flex animate-scroll items-center space-x-10 w-max brightness-0">
              <div className="relative h-6">
                <img src="/logos/posthog.svg" alt="Posthog" className="m-auto h-6" />
              </div>
              <div className="relative h-6">
                <img src="/logos/sequoia.svg" alt="Sequoia" className="m-auto h-6" />
              </div>
              <div className="relative h-6">
                <img src="/logos/redbull.svg" alt="Redbull" className="m-auto h-6" />
              </div>
              <div className="relative h-6">
                <img src="/logos/rakuten.svg" alt="Rakuten" className="m-auto h-6" />
              </div>
              <div className="relative h-6">
                <img src="/logos/contentful.svg" alt="Contentful" className="m-auto h-6" />
              </div>
              <div className="relative h-6">
                <img src="/logos/roblox.svg" alt="Roblox" className="m-auto h-6" />
              </div>
              <div className="relative h-6">
                <img src="/logos/clickup.svg" alt="ClickUp" className="m-auto h-6" />
              </div>
              <div className="relative h-6">
                <img src="/logos/alan.svg" alt="Alan" className="m-auto h-6" />
              </div>
              <div className="relative h-6">
                <img src="/logos/docusign.svg" alt="DocuSign" className="m-auto h-6" />
              </div>
              <div className="relative h-6">
                <img src="/logos/pipedrive.svg" alt="Pipedrive" className="m-auto h-6" />
              </div>
              <div className="relative h-6">
                <img src="/logos/posthog.svg" alt="Posthog" className="m-auto h-6" />
              </div>
              <div className="relative h-6">
                <img src="/logos/sequoia.svg" alt="Sequoia" className="m-auto h-6" />
              </div>
              <div className="relative h-6">
                <img src="/logos/redbull.svg" alt="Redbull" className="m-auto h-6" />
              </div>
              <div className="relative h-6">
                <img src="/logos/rakuten.svg" alt="Rakuten" className="m-auto h-6" />
              </div>
              <div className="relative h-6">
                <img src="/logos/contentful.svg" alt="Contentful" className="m-auto h-6" />
              </div>
              <div className="relative h-6">
                <img src="/logos/roblox.svg" alt="Roblox" className="m-auto h-6" />
              </div>
              <div className="relative h-6">
                <img src="/logos/clickup.svg" alt="ClickUp" className="m-auto h-6" />
              </div>
              <div className="relative h-6">
                <img src="/logos/alan.svg" alt="Alan" className="m-auto h-6" />
              </div>
              <div className="relative h-6">
                <img src="/logos/docusign.svg" alt="DocuSign" className="m-auto h-6" />
              </div>
              <div className="relative h-6">
                <img src="/logos/pipedrive.svg" alt="Pipedrive" className="m-auto h-6" />
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent opacity-100 z-10 pointer-events-none"></div>
          </div>
        </section>
      </div>
    </section>
  );
}
