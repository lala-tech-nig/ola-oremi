"use client";

export default function ContactMethodCard({ icon, title, value, action }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-50 flex items-center gap-6 group hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300">
      <div className="w-14 h-14 bg-blue-50 text-blue-600 flex items-center justify-center rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{title}</p>
        <p className="text-[#002B5B] font-bold text-base">{value}</p>
        {action && (
          <button className="text-[10px] font-extrabold text-blue-600 mt-2 tracking-widest hover:underline">{action}</button>
        )}
      </div>
    </div>
  );
}
