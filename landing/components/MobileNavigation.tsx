'use client';

import { useState } from 'react';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
        aria-label="Toggle mobile menu"
      >
        <svg
          className={`w-6 h-6 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={closeMenu}
          />
          
          {/* Side Drawer */}
          <div className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out border-r border-gray-200 dark:border-gray-700">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-lg font-bold text-gray-900 dark:text-white">AgentForge</span>
              </div>
              <button
                onClick={closeMenu}
                className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Content - Full Height Scrollable */}
            <div className="h-[calc(100vh-73px)] overflow-y-auto p-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                {/* Action Buttons at Top */}
                <div className="mb-4 space-y-2">
                  <a
                    href="https://cloudagent.augment.cfd/sign-up"
                    onClick={closeMenu}
                    className="block w-full text-center py-3 px-4 text-white bg-black dark:bg-gray-800 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors font-medium text-sm"
                  >
                    Start free
                  </a>
                  <div className="flex gap-2">
                    <a
                      href="https://cloudagent.augment.cfd"
                      onClick={closeMenu}
                      className="flex-1 text-center py-2.5 px-3 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-medium text-sm"
                    >
                      Login
                    </a>
                    <a
                      href="/sales"
                      onClick={closeMenu}
                      className="flex-1 text-center py-2.5 px-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium text-sm"
                    >
                      Talk to sales
                    </a>
                  </div>
                </div>

                <nav className="space-y-3">
                  {/* Product Section */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Product</h3>
                    <div className="space-y-1">
                      <a
                        href="/pieces"
                        onClick={closeMenu}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-100 to-purple-200">
                          <svg className="w-4 h-4" fill="#A259FF" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-900 text-sm">Integrations</span>
                            <span className="bg-purple-100 text-purple-700 text-xs font-semibold rounded-full px-1.5 py-0.5 h-5 flex items-center">431</span>
                          </div>
                          <div className="text-xs text-gray-500">Build AI agents across your apps</div>
                        </div>
                      </a>

                      <a
                        href="/docs/install/overview"
                        onClick={closeMenu}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-pink-100 to-pink-200">
                          <svg className="w-4 h-4" fill="#EC4899" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"></path>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-900 text-sm">Get Started</span>
                            <span className="bg-gray-50 text-gray-500 text-xs font-medium rounded-full px-1.5 py-0.5 h-5 flex items-center border border-gray-200">DOCS</span>
                          </div>
                          <div className="text-xs text-gray-500">Start on our cloud or self-host with Docker</div>
                        </div>
                      </a>

                      <a
                        href="/docs/embedding/overview"
                        onClick={closeMenu}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-green-100 to-green-200">
                          <svg className="w-4 h-4" fill="#34C759" viewBox="0 0 24 24">
                            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-900 text-sm">AgentForge Embed</span>
                            <span className="bg-gray-50 text-gray-500 text-xs font-medium rounded-full px-1.5 py-0.5 h-5 flex items-center border border-gray-200">DOCS</span>
                          </div>
                          <div className="text-xs text-gray-500">Our impressive builder in your app</div>
                        </div>
                      </a>

                      <a
                        href="/docs/security/practices"
                        onClick={closeMenu}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-indigo-100 to-indigo-200">
                          <svg className="w-4 h-4" fill="#6366F1" viewBox="0 0 24 24">
                            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-900 text-sm">Security</span>
                            <span className="bg-gray-50 text-gray-500 text-xs font-medium rounded-full px-1.5 py-0.5 h-5 flex items-center border border-gray-200">DOCS</span>
                          </div>
                          <div className="text-xs text-gray-500">We're SOC 2 Type II compliant</div>
                        </div>
                      </a>

                      <a
                        href="/mcp"
                        onClick={closeMenu}
                        className="block"
                      >
                        <div className="p-3 rounded-lg bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 border border-slate-500 hover:from-slate-900 hover:via-slate-800 hover:to-slate-900 hover:border-slate-700 transition-all duration-300 relative overflow-hidden">
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
                              <span className="font-bold text-white text-sm tracking-tight">MCP for Agents</span>
                              <span className="bg-gradient-to-r from-slate-400/30 via-slate-300/30 to-slate-200/30 text-white text-xs font-semibold rounded-full px-1.5 py-0.5 h-5 flex items-center backdrop-blur-sm border border-slate-400/30">NEW</span>
                            </div>
                            <div className="text-xs text-white/80 mt-0.5 font-light">Give your AI superpowers and let it do the work for you</div>
                          </div>
                        </div>
                      </a>

                      {/* By Integration Section */}
                      <div className="mt-3">
                        <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">By Integration</div>
                        <div className="space-y-1">
                          <a href="/pieces/gmail" onClick={closeMenu} className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-50 transition">
                            <span className="w-5 h-5 flex items-center justify-center">
                              <img src="https://cdn.activepieces.com/pieces/gmail.png" className="w-4 h-4" alt="Gmail" />
                            </span>
                            <span className="text-xs text-gray-800">Gmail</span>
                          </a>
                          <a href="/pieces/openai" onClick={closeMenu} className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-50 transition">
                            <span className="w-5 h-5 flex items-center justify-center">
                              <img src="https://cdn.activepieces.com/pieces/openai.png" className="w-4 h-4" alt="OpenAI" />
                            </span>
                            <span className="text-xs text-gray-800">OpenAI</span>
                          </a>
                          <a href="/pieces/slack" onClick={closeMenu} className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-50 transition">
                            <span className="w-5 h-5 flex items-center justify-center">
                              <img src="https://cdn.activepieces.com/pieces/slack.png" className="w-4 h-4" alt="Slack" />
                            </span>
                            <span className="text-xs text-gray-800">Slack</span>
                          </a>
                          <a href="/pieces" onClick={closeMenu} className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-50 transition group/all-integrations">
                            <span className="text-xs text-gray-900 group-hover/all-integrations:text-blue-600 transition-colors duration-300">All integrations</span>
                            <svg className="w-3 h-3 text-gray-900 group-hover/all-integrations:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Resources Section */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Resources</h3>
                    
                    {/* Use AgentForge */}
                    <div className="mb-3">
                      <h4 className="text-xs font-semibold text-gray-500 mb-1">Use AgentForge</h4>
                      <div className="space-y-1">
                        <a
                          href="/docs/flows/building-flows"
                          onClick={closeMenu}
                          className="flex items-start gap-2 p-1.5 rounded-lg hover:bg-gray-50 group/item"
                        >
                          <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-blue-50 group-hover/item:bg-blue-100 transition-colors">
                            <svg className="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">Concepts</div>
                            <div className="text-xs text-gray-500">Learn how AgentForge works</div>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* Technical */}
                    <div className="mb-3">
                      <h4 className="text-xs font-semibold text-gray-500 mb-1">Technical</h4>
                      <div className="space-y-1">
                        <a
                          href="/docs/install/overview"
                          onClick={closeMenu}
                          className="flex items-start gap-2 p-1.5 rounded-lg hover:bg-gray-50 group/item"
                        >
                          <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-purple-50 group-hover/item:bg-purple-100 transition-colors">
                            <svg className="w-3 h-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">Deployment</div>
                            <div className="text-xs text-gray-500">Set up on your servers</div>
                          </div>
                        </a>
                        <a
                          href="/docs"
                          onClick={closeMenu}
                          className="flex items-start gap-2 p-1.5 rounded-lg hover:bg-gray-50 group/item"
                        >
                          <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-purple-50 group-hover/item:bg-purple-100 transition-colors">
                            <svg className="w-3 h-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">Docs</div>
                            <div className="text-xs text-gray-500">Everything you need to know</div>
                          </div>
                        </a>
                        <a
                          href="/docs/pieces/overview"
                          onClick={closeMenu}
                          className="flex items-start gap-2 p-1.5 rounded-lg hover:bg-gray-50 group/item"
                        >
                          <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-purple-50 group-hover/item:bg-purple-100 transition-colors">
                            <svg className="w-3 h-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">Develop Pieces</div>
                            <div className="text-xs text-gray-500">Build your own integrations</div>
                          </div>
                        </a>
                        <a
                          href="/docs/embedding/overview"
                          onClick={closeMenu}
                          className="flex items-start gap-2 p-1.5 rounded-lg hover:bg-gray-50 group/item"
                        >
                          <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-purple-50 group-hover/item:bg-purple-100 transition-colors">
                            <svg className="w-3 h-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">Embed In Your App</div>
                            <div className="text-xs text-gray-500">Add to your product</div>
                          </div>
                        </a>
                        <a
                          href="/docs/security/practices"
                          onClick={closeMenu}
                          className="flex items-start gap-2 p-1.5 rounded-lg hover:bg-gray-50 group/item"
                        >
                          <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-purple-50 group-hover/item:bg-purple-100 transition-colors">
                            <svg className="w-3 h-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">Security</div>
                            <div className="text-xs text-gray-500">Keep your data safe</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div>
                    <a
                      href="/pricing"
                      onClick={closeMenu}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-indigo-50">
                        <svg className="w-3 h-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">Pricing</div>
                        <div className="text-xs text-gray-500">View our plans</div>
                      </div>
                    </a>
                  </div>
                </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}