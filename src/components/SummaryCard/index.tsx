import { JSX } from "react";

interface SummaryCardProps {
  title: string;
  value: string;
  icon: JSX.Element;
  highlight?: boolean;
}

export function SummaryCard({ title, value, icon, highlight = false }: SummaryCardProps) {
  return (
    <div className={`p-4 rounded-lg shadow ${highlight ? 'bg-green-500 text-white' : 'bg-white'}`}>
      <header className="flex justify-between items-center">
        <span>{title}</span>
        {icon}
      </header>
      <strong className="block mt-4 text-2xl">{value}</strong>
    </div>
  );
}
