import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

interface DocsContentProps {
  frontmatter: any;
  content: string;
  slug: string[];
}

// Custom Card components for MDX - matching exact HTML structure
const Card = ({ href, title, icon, color, children }: any) => {
  // Convert external activepieces.com links to internal links
  let finalHref = href || '#';
  if (href?.includes('activepieces.com/pieces')) {
    finalHref = '/pieces';
  } else if (href?.includes('activepieces.com/plans')) {
    finalHref = '/pricing';
  } else if (href?.includes('activepieces.com')) {
    finalHref = '/';
  }
  
  const isExternal = finalHref?.startsWith('http');
  
  return (
    <Link
      href={finalHref}
      className="card block font-normal group relative my-2 ring-2 ring-transparent rounded-2xl bg-white dark:bg-background-dark border border-gray-950/10 dark:border-white/10 overflow-hidden w-full focus:outline-primary dark:focus:outline-primary-light cursor-pointer hover:!border-primary dark:hover:!border-primary-light"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      <div className="px-6 py-5 relative" data-component-part="card-content-container">
        <div
          id="card-link-arrow-icon"
          className={`absolute text-gray-400 dark:text-gray-500 group-hover:text-primary dark:group-hover:text-primary-light top-5 right-5 ${isExternal ? '' : 'hidden'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-up-right w-4 h-4"
          >
            <path d="M7 7h10v10"></path>
            <path d="M7 17 17 7"></path>
          </svg>
        </div>
        
        <div className="h-6 w-6 fill-gray-800 dark:fill-gray-100 text-gray-800 dark:text-gray-100" data-component-part="card-icon">
          <svg
            className="h-6 w-6 bg-primary dark:bg-primary-light !m-0 shrink-0"
            style={{
              maskImage: `url("https://d3gk2c5xim1je2.cloudfront.net/v6.6.0/regular/${icon}.svg")`,
              maskRepeat: 'no-repeat',
              maskPosition: 'center center',
              backgroundColor: color || 'rgb(129, 67, 227)'
            }}
          />
        </div>
        
        <div>
          <h2 className="not-prose font-semibold text-lg text-gray-800 dark:text-white mt-4" data-component-part="card-title">
            {title}
          </h2>
          <div className="prose mt-1 font-normal text-base leading-6 text-gray-600 dark:text-gray-400" data-component-part="card-content">
            <span data-as="p">{children}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const CardGroup = ({ cols, children }: any) => (
  <div className={`card-group not-prose grid gap-x-4 ${cols === 2 ? 'sm:grid-cols-2' : cols === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-4'}`}>
    {children}
  </div>
);

// Tip component for callouts
const Tip = ({ children }: any) => (
  <div className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-3">
        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="text-blue-800 dark:text-blue-200 text-base">
        {children}
      </div>
    </div>
  </div>
);

// Snippet component for including other MDX files
const Snippet = ({ file }: { file: string }) => {
  // For now, we'll render a placeholder for snippets
  // In a full implementation, you'd load and render the actual snippet file
  if (file === 'enterprise-feature.mdx') {
    return (
      <div className="not-prose my-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-3">
            <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-amber-800 dark:text-amber-200 text-base">
            <strong>Enterprise Feature:</strong> This feature is available in the Enterprise edition.
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="not-prose my-6 p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
      <div className="text-gray-600 dark:text-gray-400 text-base">
        Snippet: {file}
      </div>
    </div>
  );
};

// Info component for informational callouts
const Info = ({ children }: any) => (
  <div className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-3">
        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="text-blue-800 dark:text-blue-200 text-base">
        {children}
      </div>
    </div>
  </div>
);

// Note component for note callouts
const Note = ({ children }: any) => (
  <div className="not-prose my-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-3">
        <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="text-green-800 dark:text-green-200 text-base">
        {children}
      </div>
    </div>
  </div>
);

// Warning component for warning callouts
const Warning = ({ children }: any) => (
  <div className="not-prose my-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-3">
        <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="text-red-800 dark:text-red-200 text-base">
        {children}
      </div>
    </div>
  </div>
);

// Step component for step-by-step instructions
const Step = ({ title, children }: any) => (
  <div className="not-prose my-6 p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
    {title && (
      <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">{title}</h4>
    )}
    <div className="text-gray-700 dark:text-gray-300 text-base">
      {children}
    </div>
  </div>
);

// Steps component for multiple step containers
const Steps = ({ children }: any) => (
  <div className="not-prose space-y-4 my-6">
    {children}
  </div>
);

// Check component for success/completed items
const Check = ({ children }: any) => (
  <div className="not-prose my-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-3">
        <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="text-green-800 dark:text-green-200 text-base">
        {children}
      </div>
    </div>
  </div>
);

// Accordion/AccordionGroup for collapsible content
const Accordion = ({ title, children }: any) => (
  <details className="not-prose my-4 border border-gray-200 dark:border-gray-700 rounded-lg">
    <summary className="cursor-pointer p-4 font-semibold text-base text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">
      {title}
    </summary>
    <div className="p-4 pt-0 text-gray-700 dark:text-gray-300 text-base">
      {children}
    </div>
  </details>
);

const AccordionGroup = ({ children }: any) => (
  <div className="not-prose space-y-2 my-6">
    {children}
  </div>
);

// Tabs/Tab for tabbed content
const Tabs = ({ children }: any) => (
  <div className="not-prose my-6">
    {children}
  </div>
);

const Tab = ({ title, children }: any) => (
  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
    {title && (
      <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">{title}</h4>
    )}
    <div className="text-gray-700 dark:text-gray-300 text-base">
      {children}
    </div>
  </div>
);

// Frame component for embedding content
const Frame = ({ src, title, width, height }: any) => (
  <div className="not-prose my-6">
    <iframe
      src={src}
      title={title}
      width={width || "100%"}
      height={height || "400"}
      className="w-full border border-gray-200 dark:border-gray-700 rounded-lg"
    />
  </div>
);

// CodeGroup/Code for code blocks with multiple languages
const CodeGroup = ({ children }: any) => (
  <div className="not-prose my-6">
    {children}
  </div>
);

const Code = ({ title, children }: any) => (
  <div className="bg-gray-900 text-gray-100 rounded-lg overflow-hidden">
    {title && (
      <div className="bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300">
        {title}
      </div>
    )}
    <pre className="p-4 overflow-x-auto text-base">
      <code>{children}</code>
    </pre>
  </div>
);

// Custom components for MDX
const components = {
  Card,
  CardGroup,
  Tip,
  Snippet,
  Info,
  Note,
  Warning,
  Step,
  Steps,
  Check,
  Accordion,
  AccordionGroup,
  Tabs,
  Tab,
  Frame,
  CodeGroup,
  Code,
        h1: (props: any) => {
          const id = props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || '';
          return <h1 id={id} className="text-5xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700" {...props} />;
        },
        h2: (props: any) => {
          const id = props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || '';
          return <h2 id={id} className="text-4xl font-semibold text-gray-900 dark:text-white mt-12 mb-4" {...props} />;
        },
        h3: (props: any) => {
          const id = props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || '';
          return <h3 id={id} className="text-3xl font-semibold text-gray-900 dark:text-white mt-8 mb-3" {...props} />;
        },
        h4: (props: any) => {
          const id = props.children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || '';
          return <h4 id={id} className="text-2xl font-semibold text-gray-900 dark:text-white mt-6 mb-2" {...props} />;
        },
  p: (props: any) => (
    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-8" {...props} />
  ),
  a: (props: any) => (
    <Link 
      href={props.href} 
      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline"
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 mb-4 space-y-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside text-lg text-gray-700 dark:text-gray-300 mb-4 space-y-2" {...props} />
  ),
  li: (props: any) => (
    <li className="leading-8" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-base font-mono" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 text-base" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 py-2 mb-4 bg-blue-50 dark:bg-blue-900/20 text-lg text-gray-700 dark:text-gray-300 italic" {...props} />
  ),
  table: (props: any) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th className="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-left text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" {...props} />
  ),
  td: (props: any) => (
    <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900 dark:text-gray-300" {...props} />
  ),
  img: (props: any) => {
    // Fix image paths to point to docs resources in public directory
    let src = props.src;
    if (src?.startsWith('/resources/')) {
      src = `/docs-resources${src.replace('/resources', '')}`;
    }
    return <img className="max-w-full h-auto rounded-lg shadow-lg mb-6" {...props} src={src} />;
  },
  video: (props: any) => {
    // Fix video paths to point to docs resources in public directory
    let src = props.src;
    if (src?.startsWith('/resources/')) {
      src = `/docs-resources${src.replace('/resources', '')}`;
    }
    
    // Convert HTML attributes to React props
    const videoProps = {
      className: props.className || "max-w-full h-auto rounded-lg shadow-lg mb-6",
      controls: props.controls !== undefined ? props.controls : true,
      autoPlay: props.autoplay || props.autoPlay,
      muted: props.muted,
      loop: props.loop,
      playsInline: props.playsinline || props.playsInline, // Convert playsinline to playsInline
      width: props.width,
      height: props.height,
      src: src
    };
    
    return <video {...videoProps} />;
  },
};

export default function DocsContent({ frontmatter, content, slug }: DocsContentProps) {
  // Get the category from the slug (first segment)
  const category = slug[0]?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || '';
  const title = frontmatter?.title || '';
  const description = frontmatter?.description || '';

  return (
    <>
      {/* Header */}
      <header id="header" className="relative pt-8">
        <div className="mt-0.5 space-y-2.5">
          <div className="eyebrow h-5 text-primary dark:text-primary-light text-base font-semibold">
            {category}
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center relative gap-2">
            <h1 
              id="page-title"
              className="inline-block text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight dark:text-gray-200"
            >
              {title}
            </h1>
          </div>
        </div>
        {description && (
          <div className="mt-2 text-xl prose prose-gray dark:prose-invert">
            <p>{description}</p>
          </div>
        )}
      </header>

      {/* Content Gaps */}
      <div className="flex flex-col gap-8"></div>

      {/* MDX Content */}
      <div 
        className="mdx-content docs-content relative mt-8 mb-14 prose prose-gray dark:prose-invert"
        data-page-title={title}
        data-page-href={`/${slug.join('/')}`}
        id="content"
      >
        <MDXRemote source={content} components={components} />
      </div>
    </>
  );
}
