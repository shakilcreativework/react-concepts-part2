
import './App.css'

function App() {
  function handleClick(){
    console.log("I am clicked");
  };

  function addition(num){
    const plus = num + 5;
    console.log(plus);
  };

  return (
    <>
      <h1>Hello, world</h1>
      {/* btn */}
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => addition(7)}>Click 2</button>
    </>
  )
}

export default App
