const transactions = [
  {
    title: 'Desenvolvimento de site',
    amount: 'R$ 12.000,00',
    type: 'income',
    category: 'Venda',
    date: '13/04/2021'
  },
  {
    title: 'Hamburguer',
    amount: '- R$ 59,00',
    type: 'outcome',
    category: 'Alimentação',
    date: '10/04/2021'
  },
  {
    title: 'Aluguel',
    amount: '- R$ 1.200,00',
    type: 'outcome',
    category: 'Casa',
    date: '10/04/2021'
  },
  {
    title: 'Desenvolvimento de app',
    amount: 'R$ 5.000,00',
    type: 'income',
    category: 'Venda',
    date: '10/04/2021'
  },
  {
    title: 'Despesas de viagem',
    amount: '- R$ 2.000,00',
    type: 'outcome',
    category: 'Viagem',
    date: '10/04/2021'
  }
];

export function TransactionsTable() {
  return (
    <div className="mt-8 px-4">
      <table className="w-full border-separate border-spacing-y-2">
        <thead>
          <tr>
            <th className="text-left">Título</th>
            <th className="text-left">Preço</th>
            <th className="text-left">Categoria</th>
            <th className="text-left">Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index} className="bg-white rounded-lg shadow">
              <td className="p-4">{tx.title}</td>
              <td className={`p-4 ${tx.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>{tx.amount}</td>
              <td className="p-4">{tx.category}</td>
              <td className="p-4">{tx.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
