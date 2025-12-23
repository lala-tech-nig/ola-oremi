"use client";

export default function ContactForm() {
  return (
    <form className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input className="border rounded-md p-3" placeholder="Full Name" />
        <input className="border rounded-md p-3" placeholder="Email Address" />
      </div>
      <select className="border rounded-md p-3 w-full">
        <option>Pile Foundation Drilling</option>
        <option>Civil Construction</option>
        <option>Engineering Consultancy</option>
      </select>
      <textarea className="border rounded-md p-3 w-full" rows="4" placeholder="Tell us about your project..." />
      <button className="bg-blue-600 text-white w-full py-4 rounded-md font-bold hover:bg-blue-700 transition">Send Message</button>
    </form>
  );
}
