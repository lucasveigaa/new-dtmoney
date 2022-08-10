import { ThemeProvider } from "styled-components";
import { TransactionsProvider } from "./contexts/TransactionsContext";
import { Transactions } from "./pages/Transactions";
import { GLobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>

      <GLobalStyle />
    </ThemeProvider>
  );
}

export default App;
