import MobileNavigation from './MobileNavigation';

export default function NavigationHeader() {
  return (
    <div className="sticky top-0 z-50 w-full">
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
        <nav className="border-gray-200 px-4 sm:px-6 lg:px-8 h-[62px] dark:bg-gray-800">
          <div className="flex h-full items-center justify-between mx-auto max-w-7xl">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <a href="/" className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-lg font-bold text-gray-900 hidden sm:block">AgentForge</span>
              </a>
            </div>
            
            {/* Desktop Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex items-center space-x-8">
                {/* Product Dropdown */}
                <li className="relative group">
                  <div className="absolute left-0 top-0 w-full h-[calc(100%+10px)] opacity-0"></div>
                  <button className="flex items-center gap-1 py-2 text-black group-hover:text-[#8142e3] transition-colors duration-200">
                    <span className="font-normal text-base">Product</span>
                    <svg className="w-4 h-4 transition-transform duration-200 ease-in-out transform origin-center group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  
                  {/* Product Dropdown Content */}
                  <div className="absolute left-0 top-full z-50 w-[700px] rounded-2xl shadow-2xl bg-white p-6 grid grid-cols-[3fr_2fr] gap-6 transition-all duration-300 delay-200 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-0 border border-gray-100 pointer-events-none group-hover:pointer-events-auto">
                    {/* Left Column - Features */}
                    <div className="min-w-0 flex flex-col gap-0">
                      <a href="/pieces" className="flex items-center gap-4 h-20 rounded-xl hover:bg-gray-100 transition px-4 py-4 group/feature">
                        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-purple-200">
                          <svg className="w-6 h-6" fill="#A259FF" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-base text-gray-900">Integrations</span>
                            <span className="bg-purple-100 text-purple-700 text-xs font-semibold rounded-full px-2 py-0.5 h-6 flex items-center">431</span>
                          </div>
                          <div className="text-sm text-gray-500 group-hover/feature:text-gray-900 transition-colors duration-200">Build AI agents across your apps</div>
                        </div>
                      </a>
                      
                      <a href="/docs/install/overview" className="flex items-center gap-4 h-20 rounded-xl hover:bg-gray-100 transition px-4 py-4 group/feature">
                        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-pink-100 to-pink-200">
                          <svg className="w-6 h-6" fill="#EC4899" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"></path>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-base text-gray-900">Get Started</span>
                            <span className="bg-gray-50 text-gray-500 text-xs font-medium rounded-full px-2 py-0.5 h-6 flex items-center border border-gray-200">DOCS</span>
                          </div>
                          <div className="text-sm text-gray-500 group-hover/feature:text-gray-900 transition-colors duration-200">Start on our cloud or self-host with Docker</div>
                        </div>
                      </a>
                      
                      <a href="/docs/embedding/overview" className="flex items-center gap-4 h-20 rounded-xl hover:bg-gray-100 transition px-4 py-4 group/feature">
                        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-green-100 to-green-200">
                          <svg className="w-6 h-6" fill="#34C759" viewBox="0 0 24 24">
                            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-base text-gray-900">AgentForge Embed</span>
                            <span className="bg-gray-50 text-gray-500 text-xs font-medium rounded-full px-2 py-0.5 h-6 flex items-center border border-gray-200">DOCS</span>
                          </div>
                          <div className="text-sm text-gray-500 group-hover/feature:text-gray-900 transition-colors duration-200">Our impressive builder in your app</div>
                        </div>
                      </a>
                      
                      <a href="/docs/security/practices" className="flex items-center gap-4 h-20 rounded-xl hover:bg-gray-100 transition px-4 py-4 group/feature">
                        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-200">
                          <svg className="w-6 h-6" fill="#6366F1" viewBox="0 0 24 24">
                            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-base text-gray-900">Security</span>
                            <span className="bg-gray-50 text-gray-500 text-xs font-medium rounded-full px-2 py-0.5 h-6 flex items-center border border-gray-200">DOCS</span>
                          </div>
                          <div className="text-sm text-gray-500 group-hover/feature:text-gray-900 transition-colors duration-200">We're SOC 2 Type II compliant</div>
                        </div>
                      </a>
                    </div>
                    
                    {/* Right Column - MCP and Integrations */}
                    <div className="min-w-0 flex flex-col gap-0">
                      <a href="/mcp" className="block mb-4">
                        <div className="p-4 rounded-xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 border border-slate-500 w-fit hover:from-slate-900 hover:via-slate-800 hover:to-slate-900 hover:border-slate-700 transition-all duration-300 relative overflow-hidden">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,116,139,0.1),transparent_50%)] animate-pulse"></div>
                          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(100,116,139,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-gradient"></div>
                          <div className="absolute inset-0 opacity-20">
                            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                              <path d="M0,50 Q25,25 50,50 T100,50" stroke="slate" fill="none" strokeWidth="0.5" strokeDasharray="2,2"></path>
                              <path d="M0,30 Q25,55 50,30 T100,30" stroke="slate" fill="none" strokeWidth="0.5" strokeDasharray="2,2"></path>
                              <path d="M0,70 Q25,45 50,70 T100,70" stroke="slate" fill="none" strokeWidth="0.5" strokeDasharray="2,2"></path>
                            </svg>
                          </div>
                          <div className="relative">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-white text-lg tracking-tight">MCP for Agents</span>
                              <span className="bg-gradient-to-r from-slate-400/30 via-slate-300/30 to-slate-200/30 text-white text-xs font-semibold rounded-full px-2 py-0.5 h-6 flex items-center backdrop-blur-sm border border-slate-400/30">NEW</span>
                            </div>
                            <div className="text-xs text-white/80 mt-1 font-light">Give your AI superpowers and let it do the work for you</div>
                          </div>
                        </div>
                      </a>
                      
                      <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mt-4 mb-2">By Integration</div>
                      <div className="flex flex-col">
                        <a href="/pieces/gmail" className="flex items-center gap-2 h-10 rounded-xl hover:bg-gray-100 transition -ml-4 px-4">
                          <span className="w-6 h-6 flex items-center justify-center">
                            <img src="https://cdn.activepieces.com/pieces/gmail.png" className="w-5 h-5" alt="Gmail" />
                          </span>
                          <span className="text-sm text-gray-800">Gmail</span>
                        </a>
                        <a href="/pieces/openai" className="flex items-center gap-2 h-10 rounded-xl hover:bg-gray-100 transition -ml-4 px-4">
                          <span className="w-6 h-6 flex items-center justify-center">
                            <img src="https://cdn.activepieces.com/pieces/openai.png" className="w-5 h-5" alt="OpenAI" />
                          </span>
                          <span className="text-sm text-gray-800">OpenAI</span>
                        </a>
                        <a href="/pieces/slack" className="flex items-center gap-2 h-10 rounded-xl hover:bg-gray-100 transition -ml-4 px-4">
                          <span className="w-6 h-6 flex items-center justify-center">
                            <img src="https://cdn.activepieces.com/pieces/slack.png" className="w-5 h-5" alt="Slack" />
                          </span>
                          <span className="text-sm text-gray-800">Slack</span>
                        </a>
                        <a href="/pieces" className="flex items-center h-10 -ml-4 px-4 group/all-integrations">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-900 group-hover/all-integrations:text-blue-600 transition-colors duration-300">All integrations</span>
                            <svg className="w-4 h-4 text-gray-900 group-hover/all-integrations:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                
                {/* Resources Dropdown */}
                <li className="relative group">
                  <div className="absolute left-0 top-0 w-full h-[calc(100%+10px)] opacity-0"></div>
                  <button className="flex items-center gap-1 py-2 text-black group-hover:text-[#8142e3] transition-colors duration-200">
                    <span className="font-normal text-base">Resources</span>
                    <svg className="w-4 h-4 transition-transform duration-200 ease-in-out transform origin-center group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  
                  {/* Resources Dropdown Content */}
                  <div className="absolute left-0 top-full z-50 w-[600px] rounded-2xl shadow-2xl bg-white p-6 grid grid-cols-2 gap-6 transition-all duration-300 delay-200 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:delay-0 border border-gray-100 pointer-events-none group-hover:pointer-events-auto">
                    {/* Use AgentForge Column */}
                    <div className="flex flex-col gap-2">
                      <h3 className="text-sm font-semibold text-gray-500 mb-2">Use AgentForge</h3>
                      <a href="/docs/flows/building-flows" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 group/item">
                        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 group-hover/item:bg-blue-100 transition-colors">
                          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                          </svg>
                        </div>
                        <div>
                          <div className="text-base font-semibold text-gray-900">Concepts</div>
                          <div className="text-sm text-gray-500">Learn how AgentForge works</div>
                        </div>
                      </a>
                      <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 group/item">
                        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50 group-hover/item:bg-blue-100 transition-colors">
                          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                          </svg>
                        </div>
                        <div>
                          <div className="text-base font-semibold text-gray-900">AgentForge 101</div>
                          <div className="text-sm text-gray-500">Get up and running in minutes</div>
                        </div>
                        <svg className="w-4 h-4 text-gray-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                        </svg>
                      </a>
                    </div>
                    
                    {/* Technical Column */}
                    <div className="flex flex-col gap-2">
                      <h3 className="text-sm font-semibold text-gray-500 mb-2">Technical</h3>
                      <a href="/docs/install/overview" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 group/item">
                        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-purple-50 group-hover/item:bg-purple-100 transition-colors">
                          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                          </svg>
                        </div>
                        <div>
                          <div className="text-base font-semibold text-gray-900">Deployment</div>
                          <div className="text-sm text-gray-500">Set up on your servers</div>
                        </div>
                      </a>
                      <a href="/docs" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 group/item">
                        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-purple-50 group-hover/item:bg-purple-100 transition-colors">
                          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                          </svg>
                        </div>
                        <div>
                          <div className="text-base font-semibold text-gray-900">Docs</div>
                          <div className="text-sm text-gray-500">Everything you need to know</div>
                        </div>
                      </a>
                      <a href="/docs/pieces/overview" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 group/item">
                        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-purple-50 group-hover/item:bg-purple-100 transition-colors">
                          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                          </svg>
                        </div>
                        <div>
                          <div className="text-base font-semibold text-gray-900">Develop Pieces</div>
                          <div className="text-sm text-gray-500">Build your own integrations</div>
                        </div>
                      </a>
                      <a href="/docs/embedding/overview" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 group/item">
                        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-purple-50 group-hover/item:bg-purple-100 transition-colors">
                          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                        <div>
                          <div className="text-base font-semibold text-gray-900">Embed In Your App</div>
                          <div className="text-sm text-gray-500">Add to your product</div>
                        </div>
                      </a>
                      <a href="/docs/security/practices" className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 group/item">
                        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-purple-50 group-hover/item:bg-purple-100 transition-colors">
                          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                          </svg>
                        </div>
                        <div>
                          <div className="text-base font-semibold text-gray-900">Security</div>
                          <div className="text-sm text-gray-500">Keep your data safe</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </li>
                
                {/* Pricing Link */}
                <li>
                  <a href="/pricing" className="py-2 text-black hover:text-[#8142e3] transition-colors duration-200 font-normal text-base">Pricing</a>
                </li>
              </ul>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://cloudagent.augment.cfd"
                className="hidden sm:inline-flex text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-4 py-2 transition-colors duration-200"
              >
                Login
              </a>
              <div className="flex items-center space-x-2">
                <a
                  href="/sales"
                  className="hidden sm:inline-flex h-10 items-center justify-center px-4 py-2 text-base font-medium text-gray-700 text-center rounded-lg bg-white border-2 border-gray-900 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none transition-all duration-300 hover:scale-105"
                >
                  Talk to sales
                </a>
                <a
                  href="https://cloudagent.augment.cfd/sign-up"
                  className="group relative inline-flex h-10 items-center justify-center rounded-lg px-4 py-2 text-base font-medium text-white transition-all duration-300 hover:scale-105"
                >
                  <span className="absolute inset-0 rounded-lg bg-black"></span>
                  <span className="absolute -bottom-1 left-1/2 h-1/5 w-3/5 -translate-x-1/2 animate-rainbow rounded-full bg-gradient-to-r from-[#ff3ea5] via-[#1e9bf0] to-[#6420aa] blur-md"></span>
                  <span className="relative">Start free</span>
                </a>
              </div>
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
