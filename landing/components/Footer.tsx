import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="p-4 sm:p-6 lg:p-8 mx-4 sm:mx-10 max-w-screen-xl">
        {/* CTA Section */}
        <div className="pb-8 sm:pb-10">
          <div className="mx-auto max-w-screen-xl">
            <div className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 rounded-2xl p-6 sm:p-8 lg:p-12 border border-gray-100 dark:border-gray-700 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between md:space-x-24">
                <div className="max-w-screen-md mb-6 sm:mb-8 md:mb-0 text-center md:text-left">
                  <h2 className="mb-4 text-2xl sm:text-3xl lg:text-[3rem] tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
                    Get AgentForge now!
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl">
                    Join 100,000+ users from Google, Roblox, ClickUp and more building secure, open source AI automations. Start automating your work in minutes.
                  </p>
                </div>
                <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 lg:space-x-6 justify-center md:justify-end shrink-0">
                  <a
                    href="/sales"
                    className="whitespace-nowrap text-center text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base sm:text-lg px-5 sm:px-6 py-2.5 sm:py-3 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 transition-colors duration-200"
                  >
                    Talk to Sales
                  </a>
                  <a
                    href="https://cloudagent.augment.cfd/sign-up"
                    className="whitespace-nowrap text-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base sm:text-lg px-5 sm:px-6 py-2.5 sm:py-3 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 transition-colors duration-200"
                  >
                    Start free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8 lg:mt-16">
          {/* Product Column */}
          <div>
            <h3 className="mb-4 sm:mb-6 text-sm sm:text-base font-semibold text-gray-900 uppercase dark:text-white">
              Product
            </h3>
            <ul className="text-gray-500 dark:text-gray-400 text-sm sm:text-base lg:text-lg">
              <li className="mb-3 sm:mb-4">
                <a href="/pricing" className="hover:underline transition-colors duration-200">
                  Pricing
                </a>
              </li>
              <li className="mb-3 sm:mb-4">
                <a href="/pieces" className="hover:underline transition-colors duration-200">
                  Pieces
                </a>
              </li>
            
              <li className="mb-3 sm:mb-4">
                <a href="/sales" className="hover:underline transition-colors duration-200">
                  Request a Feature
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h2 className="mb-4 sm:mb-6 text-sm sm:text-base font-semibold text-gray-900 uppercase dark:text-white">
              Resources
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 text-sm sm:text-base lg:text-lg">
              <li className="mb-3 sm:mb-4">
                <a href="https://agentforge.com/docs" className="hover:underline transition-colors duration-200">
                  Docs
                </a>
              </li>
              <li className="mb-3 sm:mb-4">
                <a href="https://www.augment.cfd/developers/forums" className="hover:underline transition-colors duration-200">
                  Tutorials
                </a>
              </li>
            </ul>
          </div>

          {/* Get Help Column */}
          <div>
            <h2 className="mb-4 sm:mb-6 text-sm sm:text-base font-semibold text-gray-900 uppercase dark:text-white">
              Get Help
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 text-sm sm:text-base lg:text-lg">
              <li className="mb-3 sm:mb-4">
                <a href="#" className="hover:underline transition-colors duration-200">
                  Cloud Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="my-4 sm:my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex flex-col justify-between items-center text-center lg:flex-row space-y-4 lg:space-y-0">
          <span className="block text-sm sm:text-base lg:text-lg text-gray-500 dark:text-gray-400">
            © 2025 AgentForge. All rights reserved
          </span>
          <div className="text-gray-500 flex flex-wrap justify-center gap-2 text-sm sm:text-base lg:text-lg">
            <a href="/terms" className="hover:underline transition-colors duration-200">
              Terms
            </a>
            <span>-</span>
            <a href="/privacy" className="hover:underline transition-colors duration-200">
              Privacy
            </a>
            <span>-</span>
            <a href="/google-api-disclosure" className="hover:underline transition-colors duration-200">
              Google API Disclosure
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
