export default function PricingBottom() {
  return (
    <div className="max-w-7xl mx-auto mt-28 px-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-stretch">
        {/* Left Column - Heading */}
        <div className="flex items-center justify-center text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-libre-baskerville font-light text-gray-900 dark:text-white leading-[1.45!important]">
            Our cloud is fair, our core is open source
          </h2>
        </div>

        {/* Middle Column - Community Edition */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-[0_8px_40px_0_rgba(60,60,100,0.13)] p-10 flex flex-col items-start justify-start min-h-[320px] border border-gray-100 dark:border-gray-700">
          <span className="text-2xl font-bold text-gray-900 dark:text-white mb-2 mt-1">
            Community Edition
          </span>
          <hr className="w-12 border-t-2 border-gray-200 dark:border-gray-700 mb-4" />
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full">
              MIT Licensed
            </span>
            <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs font-semibold px-3 py-1 rounded-full">
              270+ Contributors
            </span>
          </div>
          <div className="text-lg text-gray-800 dark:text-gray-200 mb-8 font-normal leading-relaxed">
            <ul className="mt-2 space-y-2">
              <li className="flex items-center gap-2 text-base text-gray-700 dark:text-gray-200">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                Core features only
              </li>
              <li className="flex items-center gap-2 text-base text-gray-700 dark:text-gray-200">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                Self hosted
              </li>
              <li className="flex items-center gap-2 text-base text-gray-700 dark:text-gray-200">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                Needs technical skills
              </li>
            </ul>
          </div>
          <div className="flex flex-col-reverse sm:flex-row items-center gap-2 sm:gap-4 mt-auto w-full">
            <a 
              href="https://github.com/activepieces/activepieces" 
              target="_blank" 
              rel="noopener" 
              className="flex items-center justify-center w-full sm:w-auto text-lg sm:text-base px-6 py-3 font-bold sm:font-semibold text-white bg-gray-900 dark:bg-gray-700 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition shadow-sm mb-2 sm:mb-0"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.566 4.936.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path>
              </svg>
              View on GitHub
            </a>
            <span className="flex items-center text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2 sm:mb-0 sm:ml-2">
              <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z"></path>
              </svg>
              18,291
            </span>
          </div>
        </div>

        {/* Right Column - Video */}
        <button className="p-0 flex flex-col items-start justify-start relative min-h-[300px] w-full focus:outline-none group mt-2">
          <div className="w-full">
            <div className="relative w-full aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden">
              <img 
                src="https://img.youtube.com/vi/xn-lu9CUhRE/hqdefault.jpg" 
                alt="Watch announcement video" 
                className="w-full h-full object-cover rounded-2xl group-hover:brightness-90 transition" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-16 h-16 text-white bg-black bg-opacity-60 rounded-full p-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full px-1 pt-3 flex flex-col items-start">
            <span className="text-base font-semibold text-gray-900 dark:text-white">
              Watch our recent Agents 2.0 and Unlimited Tasks announcement
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
