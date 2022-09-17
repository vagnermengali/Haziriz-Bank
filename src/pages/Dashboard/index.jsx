import { useState } from "react";
import { motion } from "framer-motion";
import { ContainerMain } from "./style";
import Header from "./Header";
import Form from "./Form";
import List from "./List";

function Dashboard() {
  const [listTransactions, setlistTransactions] = useState([]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <>
        <div>
          <Header />
          <ContainerMain>
            <div className="main">
              <Form
                listTransactions={listTransactions}
                setlistTransactions={setlistTransactions}
              />
              <List
                listTransactions={listTransactions}
                setlistTransactions={setlistTransactions}
              />
            </div>
          </ContainerMain>
        </div>
      </>
    </motion.div>
  );
}

export default Dashboard;
