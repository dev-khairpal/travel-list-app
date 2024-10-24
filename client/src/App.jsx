import Logo from "./components/Logo";
import Form from "./components/Form"
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {

  return (
    <div className="min-h-screen text-center flex flex-col">
      <Logo />
      <Form />
      <div className="flex-1">
      <PackingList />
      </div>
      <Stats />
    </div>
  )
}

export default App
