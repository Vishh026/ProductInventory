
import Navbar from "./components/Navbar"
import MainRoutes from "./Routes/MainRoutes"

const App = () => {
  return (
    <div className="bg-[#2B2B2B] text-[#F3F1E0] w-full min-h-screen">
      <Navbar />
      <MainRoutes/>
    </div>
  )
}

export default App