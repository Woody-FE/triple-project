import { GlobalStyles, Layout } from "@styles/global";
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
