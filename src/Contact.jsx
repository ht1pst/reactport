import React from "react";


function Contact() {
  return (

    <div  id="contact" className=" ">
     
      <main className=" mx-auto mt-56 p-6  border border- rounded-xl shadow-xl md:w-xl">
        <h2 className="text-2xl text-[#2cb67d] font-bold mb-6">Let’s Connect</h2>
        <form
          action="https://formspree.io/f/mblgwwbq"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-4 rounded-md text-white text-base bg-white border-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-4 rounded-md text-white text-base bg-white"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="p-4 rounded-md text-white text-base bg-white"
          ></textarea>
          <button
            type="submit"
            className="bg-[#7f5af0] hover:bg-[#2cb67d] text-white font-bold py-3 rounded-md transition-colors"
          >
            Send Message
          </button>
        </form>
      </main>
       <footer className="text-center mt-12 bg-white/5 backdrop-blur-md border-t border-white/10 py-6 px-4 rounded-t-2xl">
        <p className="text-sm text-gray-400">Designed & Built by Obadua Oluwafunmito</p>
        <p className="text-sm text-gray-400">© 2025 All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;