import "./app.css"
import Nav from "./components/Nav/Nav"
import SortingVisualizer from "./components/SortingVisualizer/SortingVisualizer"

function App(){
    return (
        <div className="app-container">
            <Nav/>
            <SortingVisualizer/>
        </div>
    )
}

export default App
