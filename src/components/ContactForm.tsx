


import { useForm } from '@formspree/react';
import { message } from 'antd';
import { useState, useEffect } from 'react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mnnapyrd");
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (state.succeeded) {
      message.success("Your message has been successfully sent. I will review it and get back to you as soon as possible.");
      setFormData({ name: '', email: '', message: '' });
    }
  }, [state.succeeded]);

  return (
    <section className="lg:w-[50%] w-full p-6 shadow-lg rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4 text-white">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
            
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 caret-blue-500 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 caret-blue-500 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1 block w-full px-3 caret-blue-500 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {state.submitting ? "Sending..." : "Send"}
          </button>
        </form>
    </section>
  );
}

export default ContactForm;
