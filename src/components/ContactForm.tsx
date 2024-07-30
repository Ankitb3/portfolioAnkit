// // src/components/ContactForm.tsx
// import React, { useState, ChangeEvent, FormEvent } from 'react';

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

// const ContactForm: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     // Handle form submission, e.g., send data to an API
//     console.log('Form data submitted:', formData);
//   };

//   return (
//     <section className="lg:w-[50%]  w-full p-6 shadow-lg rounded-lg">
//       <form onSubmit={handleSubmit} className="space-y-4 text-white ">
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium ">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium ">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div>
//           <label htmlFor="message" className="block text-sm font-medium ">Message</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             rows={4}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//           Send
//         </button>
//       </form>
//     </section>
//   );
// };

// export default ContactForm;


// import { useForm } from '@formspree/react';
// import { message, Spin } from 'antd';
// import { useEffect } from 'react';

// function GetInTouch() {
//   const [state, handleSubmit] = useForm("mnnapyrd");
  
//   const handleDone =()=>{
   
//      if(state.succeeded){
//       message.success("Your message has been successfully sent. I will review it and get back to you as soon as possible.");
//     }
//   };
//   useEffect(()=>{
//     if(state){
//       handleDone();
//     }
//   },[state.succeeded])

//   return (
//        <section className="lg:w-[50%]  w-full p-6 shadow-lg rounded-lg">
// <Spin spinning={state.submitting}>
//     <form onSubmit={handleSubmit} className="space-y-4 text-white">
//     <div>
//           <label htmlFor="name" className="block text-sm font-medium ">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             required
//             className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium ">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             required
//             className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div>
//           <label htmlFor="message" className="block text-sm font-medium ">Message</label>
//           <textarea
//             id="message"
//             name="message"
//             required
//             rows={4}
//             className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//           Send
//         </button>
//     </form>
//     </Spin>
//     </section>
//   );
// }
// export default GetInTouch;


import { useForm } from '@formspree/react';
import { message } from 'antd';
import { useState, useEffect } from 'react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mnnapyrd");
  
  // Local state for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Update formData state when fields change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission success
  useEffect(() => {
    if (state.succeeded) {
      message.success("Your message has been successfully sent. I will review it and get back to you as soon as possible.");
      // Reset form fields
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
              className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
