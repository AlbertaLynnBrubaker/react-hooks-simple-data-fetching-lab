import React, {useState, useEffect} from "react";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [pupData, setPupData] = useState("")

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(r => r.json())
      .then(pupper => {
        setPupData(pupper.message);
        setIsLoaded(isLoaded => !isLoaded)
      }
      )
      .catch(e => console.error("Error:", e))
  }, [])


  return(
    <div>
      {isLoaded ? <img src={pupData} alt="A Random Dog"/> : <p>Loading...</p>}
    </div>
  )
}

export default App;