'use client';

import React from 'react';

interface App {
  name: string;
  category: string;
  logo: string;
  href: string;
}

const apps: App[] = [
  // Row 1 - Left to Right
  { name: 'NetSuite', category: 'Sales And Crm', logo: 'https://cdn.activepieces.com/pieces/netsuite.png', href: '/pieces/netsuite' },
  { name: 'Microsoft To Do', category: 'Productivity', logo: 'https://cdn.activepieces.com/pieces/microsoft-todo.png', href: '/pieces/microsoft-todo' },
  { name: 'Hedy', category: 'Productivity', logo: 'https://cdn.activepieces.com/pieces/hedy.png', href: '/pieces/hedy' },
  { name: 'TimelinesAI', category: 'Marketing', logo: 'https://cdn.activepieces.com/pieces/timelines-ai.png', href: '/pieces/timelines-ai' },
  { name: 'Productboard', category: 'Productivity', logo: 'https://cdn.activepieces.com/pieces/productboard.png', href: '/pieces/productboard' },
  { name: 'Datadog', category: 'Developer Tools', logo: 'https://cdn.activepieces.com/pieces/datadog.png', href: '/pieces/datadog' },
  { name: 'Image AI', category: 'Artificial Intelligence', logo: 'https://cdn.activepieces.com/pieces/image-ai.svg', href: '/pieces/image-ai' },
  { name: 'Zuora', category: 'Sales And Crm', logo: 'https://cdn.activepieces.com/pieces/zuora.png', href: '/pieces/zuora' },
  { name: 'Zoo', category: 'Artificial Intelligence', logo: 'https://cdn.activepieces.com/pieces/zoo.jpg', href: '/pieces/zoo' },
  { name: 'Zoho Desk', category: 'Customer Support', logo: 'https://cdn.activepieces.com/pieces/zoho-desk.png', href: '/pieces/zoho-desk' },
];

const apps2: App[] = [
  // Row 2 - Right to Left
  { name: 'Zendesk', category: 'Customer Support', logo: 'https://cdn.activepieces.com/pieces/zendesk.png', href: '/pieces/zendesk' },
  { name: 'Xero', category: 'Accounting', logo: 'https://cdn.activepieces.com/pieces/xero.png', href: '/pieces/xero' },
  { name: 'WooCommerce', category: 'Commerce', logo: 'https://cdn.activepieces.com/pieces/woocommerce.png', href: '/pieces/woocommerce' },
  { name: 'Wonderchat', category: 'Artificial Intelligence', logo: 'https://cdn.activepieces.com/pieces/wonderchat.png', href: '/pieces/wonderchat' },
  { name: 'Webflow', category: 'Marketing', logo: 'https://cdn.activepieces.com/pieces/webflow.png', href: '/pieces/webflow' },
  { name: 'Zoom', category: 'Communication', logo: 'https://cdn.activepieces.com/pieces/zoom.png', href: '/pieces/zoom' },
  { name: 'Zoho Mail', category: 'Communication', logo: 'https://cdn.activepieces.com/pieces/zoho-mail.png', href: '/pieces/zoho-mail' },
  { name: 'Zoho Invoice', category: 'Accounting', logo: 'https://cdn.activepieces.com/pieces/zoho-invoice.png', href: '/pieces/zoho-invoice' },
  { name: 'Zoho CRM', category: 'Sales And Crm', logo: 'https://cdn.activepieces.com/pieces/zoho-crm.png', href: '/pieces/zoho-crm' },
  { name: 'Zoho Books', category: 'Accounting', logo: 'https://cdn.activepieces.com/pieces/zoho-books.png', href: '/pieces/zoho-books' },
];

const apps3: App[] = [
  // Row 3 - Left to Right
  { name: 'Zagomail', category: 'Marketing', logo: 'https://cdn.activepieces.com/pieces/zagomail.png', href: '/pieces/zagomail' },
  { name: 'YouTube', category: 'Content And Files', logo: 'https://cdn.activepieces.com/pieces/youtube.png', href: '/pieces/youtube' },
  { name: 'XML', category: 'Core', logo: 'https://cdn.activepieces.com/pieces/xml.png', href: '/pieces/xml' },
  { name: 'WordPress', category: 'Marketing', logo: 'https://cdn.activepieces.com/pieces/wordpress.png', href: '/pieces/wordpress' },
  { name: 'WebScraping AI', category: 'Developer Tools', logo: 'https://cdn.activepieces.com/pieces/webscraping-ai.png', href: '/pieces/webscraping-ai' },
  { name: 'Webling', category: 'Productivity', logo: 'https://cdn.activepieces.com/pieces/webling.png', href: '/pieces/webling' },
  { name: 'Webhook', category: 'Core', logo: 'https://cdn.activepieces.com/pieces/webhook.svg', href: '/pieces/webhook' },
  { name: 'Upgrade.chat', category: 'Sales And Crm', logo: 'https://cdn.activepieces.com/pieces/upgradechat.png', href: '/pieces/upgradechat' },
  { name: 'Toggl Track', category: 'Productivity', logo: 'https://cdn.activepieces.com/pieces/toggl-track.png', href: '/pieces/toggl-track' },
  { name: 'Text Helper', category: 'Core', logo: 'https://cdn.activepieces.com/pieces/text-helper.svg', href: '/pieces/text-helper' },
];

const AppCard = ({ app }: { app: App }) => (
  <a
    href={'#'}
    className="w-[280px] h-[67px] grow-0 shrink-0 shadow-[0_0_1px_#181d263d,_0_2px_4px_#181d2614,_0_2px_16px_#181d260f] rounded-xl p-4 flex flex-row items-center hover:shadow-[0_0_1px_#181d263d,_0_4px_6px_#181d2614,_0_4px_18px_#181d260f] hover:-translate-y-1 transition-all duration-400"
  >
    <img
      className="me-3 h-[37px] w-fit"
      loading="lazy"
      width="50"
      height="50"
      src={app.logo}
      alt={app.name}
    />
    <span>
      <span className="block text-lg font-bold text-gray-600">{app.name}</span>
      <span className="block text-sm text-gray-600">{app.category}</span>
    </span>
  </a>
);

const MarqueeRow = ({ apps, reverse = false }: { apps: App[]; reverse?: boolean }) => (
  <div className={`marquee ${reverse ? 'marquee--reverse' : ''} flex overflow-hidden select-none pt-2 pb-1`}>
    <div className="marquee__group shrink-0 flex items-center justify-center min-w-full group-hover:[animation-play-state:paused]">
      {apps.map((app, index) => (
        <AppCard key={`${app.name}-${index}`} app={app} />
      ))}
    </div>
    <div className="marquee__group shrink-0 flex items-center justify-center min-w-full group-hover:[animation-play-state:paused]">
      {apps.map((app, index) => (
        <AppCard key={`${app.name}-duplicate-${index}`} app={app} />
      ))}
    </div>
  </div>
);

export default function AppsSection() {
  return (
    <section className="bg-white dark:bg-gray-900 my-32">
      <div className="mx-10 max-w-screen-2xl sm:py-6 lg:px-6">
        <div className="gap-8 items-center xl:gap-16 flex flex-col md:flex-row">
          <div className="basis-1/4 text-center px-4 md:text-left">
            <h2 className="mb-4 text-[2.75rem] tracking-tight font-bold text-gray-900 dark:text-white">
              Automate the apps that matter to you
            </h2>
            <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
              Our pieces library grows every day through our team and community contributions
            </p>
            <a
              href="/pieces"
              className="inline-flex items-center mt-6 justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Browse our 52 pieces
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          
          <div className="group w-full md:basis-3/4 flex flex-col space-y-8 overflow-hidden [mask-image:linear-gradient(90deg,#0000,#fff_5%,#fff_95%,#0000)]">
            <MarqueeRow apps={apps} />
            <MarqueeRow apps={apps2} reverse />
            <MarqueeRow apps={apps3} />
          </div>
        </div>
      </div>
    </section>
  );
}
