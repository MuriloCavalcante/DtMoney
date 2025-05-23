'use client';

import { useState } from 'react';
import { BodyContainer } from "@/components/BodyContainer";
import { Header } from "@/components/Header";
import { TransactionModal } from "@/components/TransactionModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <BodyContainer />

      {isModalOpen && (
        <TransactionModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
