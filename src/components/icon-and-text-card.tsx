import React from "react";

export default function IconAndTextCard({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="bg-light-blue p-8 rounded-lg flex items-center gap-4">
      <div className="w-8 h-8 shrink-0">{icon}</div>
      <h3 className="text-xl font-medium">{text}</h3>
    </div>
  );
}
