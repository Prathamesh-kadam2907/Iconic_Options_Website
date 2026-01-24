// src/components/dashboard/StatCard.tsx
interface Props {
  title: string;
  value: string;
  subtitle: string;
}

export default function StatCard({ title, value, subtitle }: Props) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-2xl font-bold mt-1">{value}</h2>
      <p className="text-sm text-gray-400">{subtitle}</p>
    </div>
  );
}
