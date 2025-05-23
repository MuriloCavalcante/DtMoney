import React, { useState } from 'react';
import Image from "next/image";


export function TransactionModal({ onClose }: { onClose: () => void }) {
  const [type, setType] = useState<'income' | 'outcome'>('income');

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-8 rounded-lg relative">
        {}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
        >
          ×
        </button>

        <h2 className="text-xl font-semibold mb-6 text-center">Cadastrar transação</h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nome"
            className="border border-gray-300 rounded px-4 py-2"
          />

          <input
            type="number"
            placeholder="Preço"
            className="border border-gray-300 rounded px-4 py-2"
          />

          {}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setType('income')}
              className={`flex-1 py-2 rounded border flex items-center justify-center gap-2 ${
                type === 'income' ? 'bg-green-100 border-green-500' : 'border-gray-300'
              }`}
            >
              <Image src="/income.png" alt="Entrada" width={20} height={20} />
              Entrada
            </button>

            <button
              type="button"
              onClick={() => setType('outcome')}
              className={`flex-1 py-2 rounded border flex items-center justify-center gap-2 ${
                type === 'outcome' ? 'bg-red-100 border-red-500' : 'border-gray-300'
              }`}
            >
              <Image src="/outcome.png" alt="Saída" width={20} height={20} />
              Saída
            </button>
          </div>


          <input
            type="text"
            placeholder="Categoria"
            className="border border-gray-300 rounded px-4 py-2"
          />

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white py-2 rounded font-semibold"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
