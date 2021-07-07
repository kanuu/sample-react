import './App.css'
import MemoPage from './memo/MemoPage'

function App() {
  return (
    <div>
      <h1 className="bg-primary text-white display-4 ">React</h1>
      <div className="container">
        <h4 className="my-3">Memo.</h4>
        <MemoPage />
      </div>
    </div>
  )
}

export default App
