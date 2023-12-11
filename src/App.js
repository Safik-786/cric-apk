import { Suspense, lazy, useEffect, useState } from 'react';
import {GetMatches} from './Api/Api';
import './App.css';
// import {Button} from '@mui/material'
// import Navbar from './Component/Navbar';
// import MyCard from './Component/MyCard';
const MyCard = lazy(()=>import ('./Component/MyCard'))

function App() {
  const [matches, setMatches] = useState([])
  useEffect(() => {
    GetMatches()
      .then((result) => {
        // console.log(result.data)
        setMatches(result.data)
      })
      .catch((err) => console.log("Error : " + err))
  }, [])
  return (
    <div>
      {/* <Navbar /> */}
        {
          matches.map((match, key) => {
            //  matches me jitna bhi match hoga utne baar map function execute hoga so that utnibar <MyCard/> Compenent render Hoga
            // console.log(match)
            return (
              <div key={key}>
                {/* <MyCard team1={match.t1} team2={match.t2} t1img={match.t1img} t2img={match.t2img} dateTime={match.dateTimeGMT}  /> */}
                {
                  (match.matchType==='t20' ) ?
                  <Suspense fallback={<div> Loading...</div>} >
                    <MyCard match={match} />
                  </Suspense>
                   : " "
                }

              </div>
            )

          })
        }
    </div>
  )
}

export default App;
