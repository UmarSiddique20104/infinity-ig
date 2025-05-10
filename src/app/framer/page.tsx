"use client";
import { StrictMode, useState } from "react";

import App from "./App";
import { Footer } from "./template/Footer";
import { Refresh } from "./template/Refresh";

export default function AppWithUI() {
  const [count, setCount] = useState(0);

  return (
    <StrictMode>
      <Refresh onClick={() => setCount(count + 1)} />
      <App key={count} />
      <Footer
        title="Value-specific transitions"
        url="https://www.framer.com/docs/transition/"
      />
    </StrictMode>
  );
}


