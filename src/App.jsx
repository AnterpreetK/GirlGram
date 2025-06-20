import Layout from "./components/Layout"
import Grid from "./components/Grid"
import Hero from "./components/Hero"


function App() {
  return (
    // <></> These are our react fragments

    // We are gonna render the components
    // 1. Layout wraps our application  which has childer content inside it
    <Layout>
      <main>
        <Hero/>
        <Grid/>
      </main>
    </Layout>
  )
}

export default App
