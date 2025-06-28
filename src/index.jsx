import { createRoot } from "react-dom/client";

import Header from "../components/Header";
import Main from "../components/Main";
const root = createRoot(document.getElementById("app"));
const Page = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};
root.render(<Page />);
