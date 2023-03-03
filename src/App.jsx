import React, { useState , useEffect }  from 'react'

import "./App.css"

const App = () => {
    const url = "https://api.adviceslip.com/advice"
    const [advice , setAdvice] = useState("Loading...");
    
    const fetchAdvice = async () => {
        try {
            setAdvice("Loading...")
           const response = await fetch(url);
           const responseData = await response.json();
           setAdvice(responseData.slip.advice)
        //    console.log(responseData.slip.advice);
        }catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
      fetchAdvice();
    
    }, [])
    

  return (
    <>
       <div className="container">
          <div className="card">
            <div className="content">
                <h3>{advice}</h3>
            </div>
                <button className='btn' onClick={fetchAdvice}>Next Advice</button>
          </div>
       </div>
    </>
  )
}

export default App