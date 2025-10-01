'use client';

import { useState } from 'react';

export default function SalesForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    context: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert('Please fill in all required fields.');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate realistic form submission with API call
    try {
      // Fake API call delay
      await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));
      
      // Simulate successful submission
      console.log('Form submitted:', formData);
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Optional: Reset form after success
      // setFormData({ firstName: '', lastName: '', email: '', phone: '', context: '' });
    } catch (error) {
      setIsLoading(false);
      alert('Something went wrong. Please try again.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center">
        <img className="w-[20rem] mx-auto" src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif" alt="Thank you" />
        <div className="text-3xl text-center mt-10 mb-4">
          Thank you, {formData.firstName}!
        </div>
        <div className="text-xl text-gray-600 mb-6">
          Your message has been sent successfully. Someone from our team will reach out to you within 24 hours.
        </div>
        <div className="text-sm text-gray-500">
          We've sent a confirmation email to <strong>{formData.email}</strong>
        </div>
        <button 
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ firstName: '', lastName: '', email: '', phone: '', context: '' });
          }}
          className="mt-6 text-primary-600 hover:text-primary-800 underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form 
      id="sales-form" 
      className="grid grid-cols-2 gap-4 mx-auto max-w-screen-md"
      onSubmit={handleSubmit}
    >
      {/* First Name */}
      <div>
        <label 
          htmlFor="sales-field-first-name" 
          className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
        >
          First Name *
        </label>
        <input 
          type="text" 
          name="firstName" 
          id="sales-field-first-name" 
          className="block p-3 w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
          required 
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </div>

      {/* Last Name */}
      <div>
        <label 
          htmlFor="sales-field-last-name" 
          className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
        >
          Last Name *
        </label>
        <input 
          type="text" 
          name="lastName" 
          id="sales-field-last-name" 
          className="block p-3 w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
          required 
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </div>

      {/* Work Email */}
      <div>
        <label 
          htmlFor="sales-field-email" 
          className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
        >
          Work Email *
        </label>
        <input 
          type="email" 
          name="email" 
          id="sales-field-email" 
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
          pattern="^[a-zA-Z0-9._%+\-]+@(?!gmail\.com$|yahoo\.com$|hotmail\.com$|outlook\.com$|aol\.com$|icloud\.com$|mail\.com$|zoho\.com$|yandex\.com$|protonmail\.com$|gmx\.com$|tutanota\.com$|163\.com$|qq\.com$|126\.com$|sina\.com$|sohu\.com$|mail\.ru$|live\.com$|me\.com$|inbox\.com$|fastmail\.com$|hushmail\.com$|lavabit\.com$|rocketmail\.com$|lycos\.com$).+$" 
          required 
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>

      {/* Phone */}
      <div>
        <label 
          htmlFor="sales-field-phone" 
          className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
        >
          Phone
        </label>
        <input 
          type="tel" 
          name="phone" 
          id="sales-field-phone" 
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </div>

      {/* Additional Context */}
      <div className="col-span-2">
        <label 
          htmlFor="sales-field-context" 
          className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400"
        >
          Additional context
        </label>
        <textarea 
          name="context" 
          id="sales-field-context" 
          rows={2} 
          className="block p-2.5 w-full text-xl text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          value={formData.context}
          onChange={handleInputChange}
        />
      </div>

      {/* Submit Button */}
      <div className="col-span-2 md:flex justify-start gap-4 items-center">
        <button 
          type="submit" 
          className="py-3 px-5 text-xl font-medium text-center text-white rounded-lg bg-primary-700 max-md:w-full hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
        
        {isLoading && (
          <div className="flex items-center text-gray-500">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending your message...
          </div>
        )}
      </div>
    </form>
  );
}
