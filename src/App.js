import Header from './components/header'
import Sidebar from './components/sidebar'
import RecommendedVideos from './components/recommended-videos'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-page">
        <Sidebar />
        <RecommendedVideos />
      </div>
    </div>
  )
}

export default App
