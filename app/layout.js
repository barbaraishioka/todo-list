import { Inter_Tight } from "next/font/google";
import "./styles/globals.scss";

const interTight = Inter_Tight({
  subsets: ["latin-ext"],
  weights: [400, 500],
});

export const metadata = {
  title: "Todo List",
  description: "Lista de tarefas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${interTight.className}`}>{children}</body>
    </html>
  );
}
