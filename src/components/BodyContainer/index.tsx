import React from 'react';
import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';

export function BodyContainer() {
  return (
    <main className="max-w-6xl mx-auto mt-[-5rem]">
      <Summary />
      <TransactionsTable />
    </main>
  );
}
