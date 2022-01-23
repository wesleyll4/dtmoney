import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./componentes/Dashboard";
import { Header } from "./componentes/Header";
import NewTransactionModal from "./componentes/NewTransactionModal";

import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  };
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
