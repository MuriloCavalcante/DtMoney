import { SummaryCard } from '../SummaryCard';
import { ArrowUpCircle, ArrowDownCircle, DollarSign } from 'lucide-react';

export function Summary() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-[-4rem] px-4">
      <SummaryCard
        title="Entradas"
        value="R$ 17.000,00"
        icon={<ArrowUpCircle className="text-green-500" />}
      />
      <SummaryCard
        title="Saídas"
        value="R$ 3.259,00"
        icon={<ArrowDownCircle className="text-red-500" />}
      />
      <SummaryCard
        title="Total"
        value="R$ 13.741,00"
        icon={<DollarSign className="text-white" />}
        highlight
      />
    </div>
  );
}
