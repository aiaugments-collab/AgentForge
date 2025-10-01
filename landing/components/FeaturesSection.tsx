'use client';

import React, { useState } from 'react';

interface Feature {
  id: string;
  name: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  videoSrc: string;
  backgroundColor: string;
  category: string;
}

const features: Feature[] = [
  {
    id: 'builder',
    name: 'Builder',
    category: 'No-code automation',
    icon: (
      <svg fill="currentColor" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path d="M80-480v-80h120v80H80Zm136 222-56-58 84-84 58 56-86 86Zm28-382-84-84 56-58 86 86-58 56Zm476 480L530-350l-50 150-120-400 400 120-148 52 188 188-80 80ZM400-720v-120h80v120h-80Zm236 80-58-56 86-86 56 56-84 86Z"/>
      </svg>
    ),
    title: 'Make automations with the simplest builder you will ever see',
    description: 'Drag and drop interface for creating powerful automations',
    videoSrc: 'https://www.activepieces.com/videos/builder.mp4',
    backgroundColor: 'bg-pink-50'
  },
  {
    id: 'conditions',
    name: 'Conditions',
    category: 'No-code automation',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4" viewBox="0 -960 960 960">
        <path d="M220-80q-58 0-99-41t-41-99q0-58 41-99t99-41q18 0 35 4.5t32 12.5l153-153v-110q-44-13-72-49.5T340-740q0-58 41-99t99-41q58 0 99 41t41 99q0 48-28 84.5T520-606v110l154 153q15-8 31.5-12.5T740-360q58 0 99 41t41 99q0 58-41 99t-99 41q-58 0-99-41t-41-99q0-18 4.5-35t12.5-32L480-424 343-287q8 15 12.5 32t4.5 35q0 58-41 99t-99 41Zm520-80q25 0 42.5-17.5T800-220q0-25-17.5-42.5T740-280q-25 0-42.5 17.5T680-220q0 25 17.5 42.5T740-160ZM480-680q25 0 42.5-17.5T540-740q0-25-17.5-42.5T480-800q-25 0-42.5 17.5T420-740q0 25 17.5 42.5T480-680ZM220-160q25 0 42.5-17.5T280-220q0-25-17.5-42.5T220-280q-25 0-42.5 17.5T160-220q0 25 17.5 42.5T220-160Z"/>
      </svg>
    ),
    title: 'Add the if-this-then-that logic to make powerful automations',
    description: 'Create conditional logic for smart automation flows',
    videoSrc: 'https://www.activepieces.com/videos/conditions.mp4',
    backgroundColor: 'bg-cyan-50'
  },
  {
    id: 'loops',
    name: 'Loops',
    category: 'No-code automation',
    icon: (
      <svg fill="currentColor" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path d="m360-120-57-56 64-64h-7q-117 0-198.5-81.5T80-520q0-117 81.5-198.5T360-800h240q117 0 198.5 81.5T880-520q0 117-81.5 198.5T600-240v-80q83 0 141.5-58.5T800-520q0-83-58.5-141.5T600-720H360q-83 0-141.5 58.5T160-520q0 83 58.5 142.5T360-312h16l-72-72 56-56 160 160-160 160Z"/>
      </svg>
    ),
    title: 'Repeat your actions for each item in a list of items',
    description: 'Process multiple items with loop functionality',
    videoSrc: 'https://www.activepieces.com/videos/loops.mp4',
    backgroundColor: 'bg-emerald-50'
  },
  {
    id: 'languages',
    name: 'Languages',
    category: 'No-code automation',
    icon: (
      <svg fill="currentColor" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path d="m476-80 182-480h84L924-80h-84l-43-122H603L560-80h-84ZM160-200l-56-56 202-202q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H40v-80h280v-80h80v80h280v80H564q-21 72-63 148t-83 116l96 98-30 82-122-125-202 201Zm468-72h144l-72-204-72 204Z"/>
      </svg>
    ),
    title: 'Switch the builder to one of the many languages it can speak',
    description: 'Multi-language support for global teams',
    videoSrc: 'https://www.activepieces.com/videos/languages.mp4',
    backgroundColor: 'bg-emerald-50'
  },
  {
    id: 'code-with-ai',
    name: 'Code with AI',
    category: 'No-code automation',
    icon: (
      <svg fill="currentColor" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
        <path d="M160-120v-200q0-33 23.5-56.5T240-400h480q33 0 56.5 23.5T800-320v200H160Zm200-320q-83 0-141.5-58.5T160-640q0-83 58.5-141.5T360-840h240q83 0 141.5 58.5T800-640q0 83-58.5 141.5T600-440H360ZM240-200h480v-120H240v120Zm120-320h240q50 0 85-35t35-85q0-50-35-85t-85-35H360q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-80q17 0 28.5-11.5T400-640q0-17-11.5-28.5T360-680q-17 0-28.5 11.5T320-640q0 17 11.5 28.5T360-600Zm240 0q17 0 28.5-11.5T640-640q0-17-11.5-28.5T600-680q-17 0-28.5 11.5T560-640q0 17 11.5 28.5T600-600ZM480-200Zm0-440Z"/>
      </svg>
    ),
    title: 'Let the AI write code for you to unlock all the automation potential',
    description: 'AI-powered code generation for complex automations',
    videoSrc: 'https://www.activepieces.com/videos/code-with-ai.mp4',
    backgroundColor: 'bg-lime-50'
  },
  {
    id: 'webhooks',
    name: 'Webhooks',
    category: 'Sky is the limit',
    icon: (
      <svg fill="currentColor" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path d="M280-120q-83 0-141.5-58.5T80-320q0-73 45.5-127.5T240-516v83q-35 12-57.5 43T160-320q0 50 35 85t85 35q50 0 85-35t35-85v-40h235q8-9 19.5-14.5T680-380q25 0 42.5 17.5T740-320q0 25-17.5 42.5T680-260q-14 0-25.5-5.5T635-280H476q-14 69-68.5 114.5T280-120Zm400 0q-56 0-101.5-27.5T507-220h107q14 10 31 15t35 5q50 0 85-35t35-85q0-50-35-85t-85-35q-20 0-37 5.5T611-418L489-621q-21-4-35-20t-14-39q0-25 17.5-42.5T500-740q25 0 42.5 17.5T560-680v8.5q0 3.5-2 8.5l87 146q8-2 17-2.5t18-.5q83 0 141.5 58.5T880-320q0 83-58.5 141.5T680-120ZM280-260q-25 0-42.5-17.5T220-320q0-22 14-38t34-21l94-156q-29-27-45.5-64.5T300-680q0-83 58.5-141.5T500-880q83 0 141.5 58.5T700-680h-80q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 43 26 75.5t66 41.5L337-338q2 5 2.5 9t.5 9q0 25-17.5 42.5T280-260Z"/>
      </svg>
    ),
    title: 'Receive data from any service with our Webhook trigger',
    description: 'Connect to external services with webhooks',
    videoSrc: 'https://www.activepieces.com/videos/webhooks.mp4',
    backgroundColor: 'bg-violet-50'
  },
  {
    id: 'http',
    name: 'HTTP',
    category: 'Sky is the limit',
    icon: (
      <svg fill="currentColor" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"/>
      </svg>
    ),
    title: 'Send requests to any service with our generic HTTP piece',
    description: 'Make HTTP requests to any API or service',
    videoSrc: 'https://www.activepieces.com/videos/http.mp4',
    backgroundColor: 'bg-lime-50'
  },
  {
    id: 'code',
    name: 'Code',
    category: 'Sky is the limit',
    icon: (
      <svg fill="currentColor" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path d="M560-160v-80h120q17 0 28.5-11.5T720-280v-80q0-38 22-69t58-44v-14q-36-13-58-44t-22-69v-80q0-17-11.5-28.5T680-720H560v-80h120q50 0 85 35t35 85v80q0 17 11.5 28.5T840-560h40v160h-40q-17 0-28.5 11.5T800-360v80q0 50-35 85t-85 35H560Zm-280 0q-50 0-85-35t-35-85v-80q0-17-11.5-28.5T120-400H80v-160h40q17 0 28.5-11.5T160-600v-80q0-50 35-85t85-35h120v80H280q-17 0-28.5 11.5T240-680v80q0 38-22 69t-58 44v14q36 13 58 44t22 69v80q0 17 11.5 28.5T280-240h120v80H280Z"/>
      </svg>
    ),
    title: 'Write Javascript and bring in your favorite npm packages',
    description: 'Custom JavaScript code with npm package support',
    videoSrc: 'https://www.activepieces.com/videos/code.mp4',
    backgroundColor: 'bg-lime-50'
  },
  {
    id: 'auto-retry',
    name: 'Auto retry',
    category: 'Solid and reliable',
    icon: (
      <svg fill="currentColor" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path d="M440-122q-121-15-200.5-105.5T160-440q0-66 26-126.5T260-672l57 57q-38 34-57.5 79T240-440q0 88 56 155.5T440-202v80Zm80 0v-80q87-16 143.5-83T720-440q0-100-70-170t-170-70h-3l44 44-56 56-140-140 140-140 56 56-44 44h3q134 0 227 93t93 227q0 121-79.5 211.5T520-122Z"/>
      </svg>
    ),
    title: 'Set a step to auto retry when it fails for higher reliability',
    description: 'Automatic retry mechanism for failed steps',
    videoSrc: 'https://www.activepieces.com/videos/auto-retry.mp4',
    backgroundColor: 'bg-violet-50'
  },
  {
    id: 'versioning',
    name: 'Versioning',
    category: 'Solid and reliable',
    icon: (
      <svg fill="currentColor" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z"/>
      </svg>
    ),
    title: 'Restore an older version of your flow if you break it by mistake',
    description: 'Version control for your automation flows',
    videoSrc: 'https://www.activepieces.com/videos/versioning.mp4',
    backgroundColor: 'bg-emerald-50'
  },
  {
    id: 'whitelabelling',
    name: 'Whitelabelling',
    category: 'Management tools',
    icon: (
      <svg fill="currentColor" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path d="M440-80q-33 0-56.5-23.5T360-160v-160H240q-33 0-56.5-23.5T160-400v-280q0-66 47-113t113-47h480v440q0 33-23.5 56.5T720-320H600v160q0 33-23.5 56.5T520-80h-80ZM240-560h480v-200h-40v160h-80v-160h-40v80h-80v-80H320q-33 0-56.5 23.5T240-680v120Zm0 160h480v-80H240v80Zm0 0v-80 80Z"/>
      </svg>
    ),
    title: 'Brand the builder with your own color and logo',
    description: 'Customize the interface with your branding',
    videoSrc: 'https://www.activepieces.com/videos/whitelabelling.mp4',
    backgroundColor: 'bg-violet-50'
  },
  {
    id: 'hide-pieces',
    name: 'Hide pieces',
    category: 'Management tools',
    icon: (
      <svg fill="currentColor" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z"/>
      </svg>
    ),
    title: 'Control which pieces will show in the builder for your clients and users',
    description: 'Customize available components for users',
    videoSrc: 'https://www.activepieces.com/videos/hide-pieces.mp4',
    backgroundColor: 'bg-cyan-50'
  },
  {
    id: 'custom-templates',
    name: 'Custom templates',
    category: 'Management tools',
    icon: (
      <svg fill="currentColor" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z"/>
      </svg>
    ),
    title: 'Add relevant automation templates to your clients use cases',
    description: 'Create custom templates for specific use cases',
    videoSrc: 'https://www.activepieces.com/videos/custom-templates.mp4',
    backgroundColor: 'bg-lime-50'
  }
];

const categories = [
  'No-code automation',
  'Sky is the limit', 
  'Solid and reliable',
  'Management tools'
];

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState('conditions');

  const activeFeatureData = features.find(f => f.id === activeFeature) || features[1];

  const getFeaturesByCategory = (category: string) => {
    return features.filter(f => f.category === category);
  };

  return (
    <section className="bg-white dark:bg-gray-900 my-8 sm:my-16">
      <div className="mx-4 sm:mx-10 max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-2xl sm:text-3xl md:text-[2.75rem] text-center md:text-left tracking-tight font-bold text-gray-900 dark:text-white">
            <span>Augment enterprise-ready Agents</span>
          </h2>
        </div>
        
        <div className="gap-6 sm:gap-8 items-center xl:gap-16 flex flex-col md:flex-row" id="features-tab">
          {/* Feature Categories and Tabs */}
          <div className="mt-4 md:mt-0 basis-2/5 px-2 md:px-0 self-stretch flex-nowrap gap-3 md:space-y-10 md:gap-0 md:flex-wrap md:whitespace-normal overflow-x-auto md:overflow-auto flex md:flex-col">
            {categories.map((category) => (
              <div key={category} className="inline-block md:block">
                <h3 className="text-xl font-bold mb-3.5 hidden md:block">{category}</h3>
                <div className="flex flex-row flex-nowrap md:flex-wrap gap-2 md:gap-4" role="tablist">
                  {getFeaturesByCategory(category).map((feature) => (
                    <button
                      key={feature.id}
                      type="button"
                      role="tab"
                      aria-selected={activeFeature === feature.id}
                      onClick={() => setActiveFeature(feature.id)}
                      className={`group relative outline-none focus:ring-0 flex whitespace-nowrap items-center py-2 md:py-2.5 px-3 md:px-5 text-sm md:text-lg font-medium focus:outline-none rounded-lg border transition-all duration-300 ${
                        activeFeature === feature.id
                          ? '!bg-primary-50 text-primary border-primary-300'
                          : 'text-gray-900 bg-white border-gray-300 hover:border-gray-300 hover:text-primary focus:z-10 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                      }`}
                    >
                      <span className="inline-block mr-1 md:mr-2 w-3 h-3 md:w-4 md:h-4">
                        {feature.icon}
                      </span>
                      {feature.name}
                      <span 
                        className={`absolute w-0 h-[2px] bg-primary left-0 bottom-0 opacity-0 transition-all duration-300 ${
                          activeFeature === feature.id ? 'w-full opacity-100' : ''
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Feature Content */}
          <div className={`basis-3/5 py-6 sm:py-8 md:py-14 px-4 sm:px-6 md:px-8 lg:px-12 md:rounded-l-[3rem] ${activeFeatureData.backgroundColor}`}>
            <h2 className="pr-4 sm:pr-14 text-xl sm:text-2xl md:text-[2.75rem] tracking-tight font-medium text-gray-900 dark:text-white mb-4 sm:mb-6">
              {activeFeatureData.title}
            </h2>
            <video
              key={activeFeature} // Force re-render when feature changes
              autoPlay
              loop
              playsInline
              muted
              className="max-w-[1280px] w-full shadow-2xl bg-white rounded-xl"
            >
              <source src={activeFeatureData.videoSrc} type="video/mp4" />
              <track kind="captions" srcLang="en" label="English" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
