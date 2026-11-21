import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { SendHorizonal } from 'lucide-react';

const ModernContact = () => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm(
      'service_jqparqr',
      'template_6s65hot',
      formRef.current,
      'w9pGzygFM3tFRICz3'
    )
      .then(() => {
        alert('✅ Message sent successfully!');
        formRef.current.reset();
        setSending(false);
      })
      .catch((error) => {
        console.error('❌ EmailJS Error:', error);
        alert('Something went wrong.');
        setSending(false);
      });
  };

  return (
    <section className="max-w-[600px] w-full h-auto bg-black border border-gray-700 rounded-lg shadow-lg p-6 sm:p-8 mx-auto">
       <form
  ref={formRef}
  onSubmit={sendEmail}
  className="space-y-2 max-w-xl"  // less space between fields
>
  {[
    { label: 'Subject', name: 'title', type: 'text', placeholder: 'Subject / Title', required: true },
    { label: 'Name', name: 'name', type: 'text', placeholder: 'Your Name', required: true },
    { label: 'Select date and time', name: 'time', type: 'datetime-local', placeholder: '', required: false },
    { label: 'Email', name: 'email', type: 'email', placeholder: 'Your Email Address', required: true },
  ].map((field) => (
    <div key={field.name} className="flex flex-col w-full max-w-xl">
      <label
        htmlFor={field.name}
        className="mb-1 text-sm font-medium text-white"  // reduced bottom margin
      >
        {field.label}
      </label>
      <input
        id={field.name}
        name={field.name}
        type={field.type}
        placeholder={field.placeholder}
        required={field.required}
        className="rounded-md bg-white border border-gray-600 text-black placeholder-gray-400 px-3 py-2 text-base focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition w-full"
        style={{ minHeight: '36px' }}  // smaller height for inputs
      />
    </div>
  ))}

  <div className="flex flex-col w-full max-w-xl">
    <label
      htmlFor="message"
      className="mb-1 text-sm font-medium text-green-300"
    >
      <p className='text-white'>Message</p>
    </label>
    <textarea
      id="message"
      name="message"
      rows="3"  // fewer rows for shorter height
      required
      placeholder="Your Message"
      className="resize-none rounded-md bg-white border border-gray-600 text-black placeholder-gray-400 px-3 py-2 text-base focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400 transition w-full"
      style={{ minHeight: '90px' }}  // shorter height
    />
  </div>

  <button
    type="submit"
    disabled={sending}
    className="w-full flex items-center justify-center gap-2 bg-green-400 text-black font-semibold py-2.5 rounded-md hover:bg-green-500 transition disabled:opacity-50"
  >
    {sending ? 'Sending...' : (
      <>
        Send Message <SendHorizonal className="w-5 h-5" />
      </>
    )}
  </button>
</form>

    </section>
  );
};

export default ModernContact;
