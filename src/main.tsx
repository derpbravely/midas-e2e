import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import App from "./App";
import Form from "./Form";
import { Layout } from "@midas-ds/components";
import { FormIcon, House } from "lucide-react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout
      items={[
        {
          items: [
            {
              title: "Kitchen sink",
              href: "/",
              icon: House,
            },
            {
              title: "Form",
              href: "/form",
              icon: FormIcon,
            },
          ],
        },
      ]}
      title="My test app"
      user={{
        name: "Johnny",
        title: "UX lead",
      }}
      app={{ name: "My test app" }}
      variant="external"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  </StrictMode>,
);
