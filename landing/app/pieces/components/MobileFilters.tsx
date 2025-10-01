'use client';

import { useState } from 'react';

const categories = [
  { value: 'ARTIFICIAL_INTELLIGENCE', label: 'Artificial Intelligence' },
  { value: 'COMMUNICATION', label: 'Communication' },
  { value: 'COMMERCE', label: 'Commerce' },
  { value: 'CORE', label: 'Core' },
  { value: 'UNIVERSAL_AI', label: 'Universal AI' },
  { value: 'FLOW_CONTROL', label: 'Flow Control' },
  { value: 'BUSINESS_INTELLIGENCE', label: 'Business Intelligence' },
  { value: 'ACCOUNTING', label: 'Accounting' },
  { value: 'PRODUCTIVITY', label: 'Productivity' },
  { value: 'CONTENT_AND_FILES', label: 'Content And Files' },
  { value: 'DEVELOPER_TOOLS', label: 'Developer Tools' },
  { value: 'CUSTOMER_SUPPORT', label: 'Customer Support' },
  { value: 'FORMS_AND_SURVEYS', label: 'Forms And Surveys' },
  { value: 'HUMAN_RESOURCES', label: 'Human Resources' },
  { value: 'PAYMENT_PROCESSING', label: 'Payment Processing' },
  { value: 'MARKETING', label: 'Marketing' },
  { value: 'SALES_AND_CRM', label: 'Sales And CRM' },
];

export default function MobileFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCategoryChange = (value: string) => {
    setSelectedCategories(prev => 
      prev.includes(value) 
        ? prev.filter(cat => cat !== value)
        : [...prev, value]
    );
  };

  return (
    <form 
      method="get"
      className="w-full lg:w-1/4 mb-10 lg:mb-0 p-4 py-0 overflow-y-auto bg-white dark:bg-gray-800 block lg:hidden"
      tabIndex={-1}
      aria-labelledby="drawer-label"
    >
      <h5 
        className="inline-flex w-full py-4 bg-white justify-between items-center mb-4 mb-0 text-base font-semibold !text-gray-500 uppercase bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        Filter Pieces
        <svg 
          className={`w-3 h-3 shrink-0 inline lg:!hidden transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          aria-hidden="true" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 10 6"
        >
          <path 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </h5>
      
      <div className={`lg:!flex flex-col justify-between flex-1 ${isExpanded ? 'block' : 'hidden'}`}>
        <div className="space-y-6">
          <div className="space-y-2">
            <h6 className="text-base font-medium text-black dark:text-white">Categories</h6>
            {categories.map((category, index) => (
              <div key={category.value} className="flex items-center">
                <input
                  id={`category-mobile-${index}`}
                  type="checkbox"
                  value={category.value}
                  checked={selectedCategories.includes(category.value)}
                  onChange={() => handleCategoryChange(category.value)}
                  className="cursor-pointer w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor={`category-mobile-${index}`}
                  className="cursor-pointer w-full ml-2 text-md font-normal text-gray-900 dark:text-gray-300"
                >
                  {category.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
}
