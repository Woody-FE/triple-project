import { GlobalStyles, Layout } from "./App.styles";

import { LandingPage } from "@pages/index";

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <LandingPage />
      </Layout>
    </>
  );
}

export default App;
