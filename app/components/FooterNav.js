"use client";

export default function FooterNav({ title, links }) {
  return (
    <div>
      <h4 className="font-bold text-sm mb-8 uppercase tracking-widest">{title}</h4>
      <ul className="space-y-4">
        {links.map(link => (
          <li key={link} className="text-sm text-gray-500 hover:text-white cursor-pointer transition-colors">{link}</li>
        ))}
      </ul>
    </div>
  );
}
