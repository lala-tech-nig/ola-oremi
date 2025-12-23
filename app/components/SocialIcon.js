"use client";

export default function SocialIcon({ icon }) {
  return (
    <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-xl hover:bg-blue-600 hover:border-blue-600 cursor-pointer transition-all">
      {icon}
    </div>
  );
}
