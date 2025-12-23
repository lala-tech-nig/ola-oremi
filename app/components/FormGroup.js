"use client";

export default function FormGroup({ label, placeholder, type = "text" }) {
  return (
    <div>
      <label className="block text-xs font-bold text-[#002B5B] uppercase tracking-widest mb-3">{label}</label>
      <input type={type} placeholder={placeholder} className="w-full bg-[#F8FAFC] border border-gray-100 rounded-xl px-5 py-4 text-sm outline-none focus:border-blue-500 transition" />
    </div>
  );
}
