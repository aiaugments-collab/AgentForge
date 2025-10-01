export default function PricingCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-10 h-full items-stretch justify-between mx-auto max-w-7xl px-2">
      {/* Free Plan */}
      <div className="flex flex-col bg-white dark:bg-gray-800 rounded-2xl border shadow-sm p-6 items-start relative transition-all min-h-[320px] md:min-h-[500px] w-full border-gray-300 dark:border-gray-600">
        <div className="w-full h-full rounded-2xl flex flex-col bg-white dark:bg-gray-800">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-1 mt-2 text-center">
            <span className="flex items-center justify-center">
              Free 
              <svg className="w-5 h-5 ml-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"></path>
              </svg>
            </span>
          </h3>
          <div className="text-base text-gray-500 dark:text-gray-400 mb-4 text-center">
            Get started with automation for individuals or hobbyists
          </div>
          <div className="flex items-end mb-2 h-16 justify-center text-center">
            <span className="text-5xl font-medium text-gray-900 dark:text-white">$0</span>
            <span className="ml-1 text-base text-gray-500 dark:text-gray-400 font-normal">/mo</span>
          </div>
          <div className="flex justify-center w-full mt-2 mb-6">
            <a 
              href="https://cloudagent.augment.cfd/sign-up" 
              className="text-center text-white font-semibold rounded-lg text-base px-8 py-3.5 bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-900 transition"
            >
              Get started
            </a>
          </div>
          <ul className="w-full flex-1 mt-2 mb-6 flex flex-col gap-0">
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <svg className="w-5 h-5 text-gray-900 dark:text-white mr-2 flex-shrink-0 align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-900 dark:text-white text-base">AI steps</span>
            </li>
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <svg className="w-5 h-5 text-gray-900 dark:text-white mr-2 flex-shrink-0 align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-900 dark:text-white text-base">1,000 tasks/mo included</span>
            </li>
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <svg className="w-5 h-5 text-gray-900 dark:text-white mr-2 flex-shrink-0 align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-900 dark:text-white text-base">2 active flows</span>
            </li>
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <svg className="w-5 h-5 text-gray-900 dark:text-white mr-2 flex-shrink-0 align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-900 dark:text-white text-base">200 AI credits</span>
            </li>
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <svg className="w-5 h-5 text-gray-900 dark:text-white mr-2 flex-shrink-0 align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-900 dark:text-white text-base">Single user and project</span>
            </li>
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <svg className="w-5 h-5 text-gray-900 dark:text-white mr-2 flex-shrink-0 align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-900 dark:text-white text-base">Community support</span>
            </li>
          </ul>
          <div className="w-full flex-1"></div>
        </div>
      </div>

      {/* Plus Plan - Recommended */}
      <div className="flex flex-col bg-white dark:bg-gray-800 shadow-sm p-6 items-start relative transition-all min-h-[320px] md:min-h-[500px] w-full [background:linear-gradient(45deg,#fefefe,theme(colors.gray.50)_50%,#fefefe)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.gray.300)_60%,_theme(colors.cyan.500)_75%,_theme(colors.blue.600)_85%,_theme(colors.gray.300))_border-box] dark:[background:linear-gradient(45deg,theme(colors.gray.800),theme(colors.gray.700)_50%,theme(colors.gray.800))_padding-box,conic-gradient(from_var(--border-angle),theme(colors.gray.600)_60%,_theme(colors.cyan.500)_75%,_theme(colors.blue.600)_85%,_theme(colors.gray.600))_border-box] rounded-2xl border border-transparent animate-border">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-rose-100 via-orange-100 to-amber-100 text-gray-800 text-xs font-bold px-4 py-1 rounded-full">
          Recommended
        </div>
        <div className="w-full h-full rounded-2xl flex flex-col">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-1 mt-2 text-center">
            <span className="flex items-center justify-center">
              Plus 
              <svg className="w-5 h-5 ml-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"></path>
              </svg>
            </span>
          </h3>
          <div className="text-base text-gray-500 dark:text-gray-400 mb-4 text-center">
            Perfect for small teams and growing businesses
          </div>
          <div className="flex items-end mb-2 h-16 justify-center text-center">
            <span className="text-5xl font-medium text-gray-900 dark:text-white">$25</span>
            <span className="ml-1 text-base text-gray-500 dark:text-gray-400 font-normal">/mo</span>
          </div>
          <div className="flex justify-center w-full mt-2 mb-6">
            <a 
              href="https://cloudagent.augment.cfd/sign-up" 
              className="text-center text-white font-semibold rounded-lg text-base px-8 py-3.5 bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-900 transition"
            >
              Try free
            </a>
          </div>
          <ul className="w-full flex-1 mt-2 mb-6 flex flex-col gap-0">
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <span className="w-5 h-5 mr-2 flex-shrink-0 flex items-center justify-center text-lg">✨</span>
              <span className="shining-text text-base">AI agents and steps</span>
            </li>
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <span className="w-5 h-5 mr-2 flex-shrink-0 flex items-center justify-center text-lg">✨</span>
              <span className="shining-text text-base">Unlimited tasks</span>
              <span className="ml-2 cursor-default align-middle inline-flex items-center justify-center rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-blue-500 font-semibold text-[12px] w-5 h-5 transition-shadow shadow-sm hover:shadow-md">
                ?
              </span>
            </li>
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <svg className="w-5 h-5 text-gray-900 dark:text-white mr-2 flex-shrink-0 align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-900 dark:text-white text-base">10 active flows</span>
            </li>
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <svg className="w-5 h-5 text-gray-900 dark:text-white mr-2 flex-shrink-0 align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-900 dark:text-white text-base">500 AI credits & buy more</span>
            </li>
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <svg className="w-5 h-5 text-gray-900 dark:text-white mr-2 flex-shrink-0 align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-900 dark:text-white text-base font-semibold">Everything in Free</span>
            </li>
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <svg className="w-5 h-5 text-gray-900 dark:text-white mr-2 flex-shrink-0 align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-900 dark:text-white text-base">Unlimited MCP servers</span>
            </li>
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <svg className="w-5 h-5 text-gray-900 dark:text-white mr-2 flex-shrink-0 align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-900 dark:text-white text-base">Unlimited tables</span>
            </li>
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <svg className="w-5 h-5 text-gray-900 dark:text-white mr-2 flex-shrink-0 align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-900 dark:text-white text-base">Email support</span>
            </li>
          </ul>
          <div className="w-full flex-1"></div>
        </div>
      </div>

      {/* Business Plan */}
      <div className="flex flex-col bg-white dark:bg-gray-800 rounded-2xl border shadow-sm p-6 items-start relative transition-all min-h-[320px] md:min-h-[500px] w-full border-gray-300 dark:border-gray-600">
        <div className="w-full h-full rounded-2xl flex flex-col bg-white dark:bg-gray-800">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-1 mt-2 text-center">
            <span className="flex items-center justify-center">
              Business 
              <svg className="w-5 h-5 ml-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"></path>
              </svg>
            </span>
          </h3>
          <div className="text-base text-gray-500 dark:text-gray-400 mb-4 text-center">
            Advanced features and collaboration for power users
          </div>
          <div className="flex items-end mb-2 h-16 justify-center text-center">
            <span className="text-5xl font-medium text-gray-900 dark:text-white">$150</span>
            <span className="ml-1 text-base text-gray-500 dark:text-gray-400 font-normal">/mo</span>
          </div>
          <div className="flex justify-center w-full mt-2 mb-6">
            <a 
              href="https://cloudagent.augment.cfd/sign-up" 
              className="text-center text-white font-semibold rounded-lg text-base px-8 py-3.5 bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-900 transition"
            >
              Try free
            </a>
          </div>
          <ul className="w-full flex-1 mt-2 mb-6 flex flex-col gap-0">
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <span className="w-5 h-5 mr-2 flex-shrink-0 flex items-center justify-center text-lg">✨</span>
              <span className="text-gray-900 dark:text-white text-base">AI agents and steps</span>
            </li>
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <span className="w-5 h-5 mr-2 flex-shrink-0 flex items-center justify-center text-lg">✨</span>
              <span className="text-gray-900 dark:text-white text-base">Unlimited tasks</span>
              <span className="ml-2 cursor-default align-middle inline-flex items-center justify-center rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-blue-500 font-semibold text-[12px] w-5 h-5 transition-shadow shadow-sm hover:shadow-md">
                ?
              </span>
            </li>
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <svg className="w-5 h-5 text-gray-900 dark:text-white mr-2 flex-shrink-0 align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-900 dark:text-white text-base">50 active flows</span>
            </li>
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <svg className="w-5 h-5 text-gray-900 dark:text-white mr-2 flex-shrink-0 align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-900 dark:text-white text-base">1,000 AI credits & buy more</span>
            </li>
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <svg className="w-5 h-5 text-gray-900 dark:text-white mr-2 flex-shrink-0 align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-900 dark:text-white text-base font-semibold">Everything in Plus</span>
            </li>
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <svg className="w-5 h-5 text-gray-900 dark:text-white mr-2 flex-shrink-0 align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-900 dark:text-white text-base">5 users & add more</span>
            </li>
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <svg className="w-5 h-5 text-gray-900 dark:text-white mr-2 flex-shrink-0 align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-900 dark:text-white text-base">10 projects</span>
            </li>
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <svg className="w-5 h-5 text-gray-900 dark:text-white mr-2 flex-shrink-0 align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-900 dark:text-white text-base">API</span>
            </li>
          </ul>
          <div className="w-full flex-1"></div>
        </div>
      </div>

      {/* Enterprise Plan */}
      <div className="flex flex-col bg-white dark:bg-gray-800 rounded-2xl border shadow-sm p-6 items-start relative transition-all min-h-[320px] md:min-h-[500px] w-full border-gray-300 dark:border-gray-600">
        <div className="w-full h-full rounded-2xl flex flex-col bg-white dark:bg-gray-800">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-1 mt-2 text-center">
            <span className="flex items-center justify-center">Enterprise</span>
          </h3>
          <div className="text-base text-gray-500 dark:text-gray-400 mb-4 text-center">
            Unlock limitless growth with advanced features and support
          </div>
          <div className="flex items-end mb-2 h-16 justify-center text-center">
            <span className="text-5xl text-gray-900 dark:text-white flex items-center justify-center w-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500 dark:text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z"></path>
              </svg>
            </span>
          </div>
          <div className="flex justify-center w-full mt-2 mb-6">
            <a 
              href="/sales" 
              className="text-center text-white font-semibold rounded-lg text-base px-8 py-3.5 bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-900 transition"
            >
              Contact sales
            </a>
          </div>
          <ul className="w-full flex-1 mt-2 mb-6 flex flex-col gap-0">
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <svg className="w-5 h-5 text-gray-900 dark:text-white mr-2 flex-shrink-0 align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-900 dark:text-white text-base">Cloud or self hosted</span>
            </li>
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <svg className="w-5 h-5 text-gray-900 dark:text-white mr-2 flex-shrink-0 align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-900 dark:text-white text-base">Tailored seats and limits</span>
            </li>
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <svg className="w-5 h-5 text-gray-900 dark:text-white mr-2 flex-shrink-0 align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-900 dark:text-white text-base">Single Sign On (SSO)</span>
            </li>
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <svg className="w-5 h-5 text-gray-900 dark:text-white mr-2 flex-shrink-0 align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-900 dark:text-white text-base">Audit logs</span>
            </li>
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <svg className="w-5 h-5 text-gray-900 dark:text-white mr-2 flex-shrink-0 align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-900 dark:text-white text-base">Environments</span>
            </li>
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <svg className="w-5 h-5 text-gray-900 dark:text-white mr-2 flex-shrink-0 align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-900 dark:text-white text-base">Custom roles & permissions</span>
            </li>
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <svg className="w-5 h-5 text-gray-900 dark:text-white mr-2 flex-shrink-0 align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-900 dark:text-white text-base">Private pieces</span>
            </li>
            <li className="flex items-center w-full border-t border-gray-300 dark:border-gray-600 py-2">
              <svg className="w-5 h-5 text-gray-900 dark:text-white mr-2 flex-shrink-0 align-middle" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-900 dark:text-white text-base">Dedicated support</span>
            </li>
          </ul>
          <div className="w-full flex-1"></div>
        </div>
      </div>
    </div>
  );
}
