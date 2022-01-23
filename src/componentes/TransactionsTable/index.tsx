import React, { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContexts";

import { Container } from "./styles";

const TransactionsTable: React.FC = () => {
  const { transactions } = useContext(TransactionsContext);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {React.Children.toArray(
            transactions.length > 0 &&
              transactions.map((transaction) => (
                <tr>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(transaction.amount)}
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {new Intl.DateTimeFormat("pt-BR").format(
                      new Date(transaction.createdAt)
                    )}
                  </td>
                </tr>
              ))
          )}
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionsTable;
