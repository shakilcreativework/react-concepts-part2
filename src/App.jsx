
import './App.css'

function App() {
  function handleClick(){
    console.log("I am clicked");
  };

  return (
    <>
      <h1>Hello, world</h1>
      {/* btn */}
      <button onClick={handleClick}>Click me</button>
    </>
  )
}

export default App
