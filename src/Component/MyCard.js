import React, { useEffect, useState } from 'react'
import css from './MyCard.module.css'
import vs from '../Images2/vs3.png'
// import {useNavigate} from 'react-router-dom'
import { Button } from '@mui/material'
import { getMatchDetails } from '../Api/Api'
import './Modal.css'
import MatchDetail from './MatchDetail'

// function MyCard({ team1 , team2 , t1img , t2img , dateTime}) {
function MyCard({match}) {
  // jitne baar api fetch hoga utne baar card create hoga 

  const [matchDetail, setMatchDetail] = useState({})
  const [open, setOpen] =useState(false)

  const handleClick = ( id )=>{
    setOpen(true);
    getMatchDetails(id)
    .then(data=>{
      // console.log(data)
      setMatchDetail(data)
      console.log(matchDetail)
    })
    .catch(err=> console.log(err))
}

const closeModal = ()=>{
  setOpen(false)
}


  return (
    <>

    
  
      <div className={css.container}>
        <div className={css.boxTop}>


          <div className={css.box}>
            <div>
              {/* <img src={t1img} alt='image is not avail in Api' height={120} width={200} /> */}
              <img src={match['t1img']} alt='image is not avail in Api' height={120} width={200} />
            </div>
            <div>
              <h3 className={css.name}>   {match["t1"]}   </h3>
            </div>
          </div>

          <div className={` ${css.boxVs}`}>
            <img src={vs} alt="" height={200} width={200}  className={css.img}/>
          </div>

          <div className={css.box}>
            <div>
              <img src={match['t2img']} alt='image not available in Api' height={120} width={200} />
            </div>
            <div>
              <h3 className={css.name}>{match['t2']}</h3>
            </div>
          </div>


        </div>
        <div className={css.btnBox}>
          <Button className={css.btn} variant='contained' color='primary' onClick={()=>handleClick(match.id)}>Show Detail</Button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {open && <MatchDetail close={closeModal}/> }


          <Button className={css.btn} variant='contained' color='primary'>Start Time: {new Date(match['dateTime']).toDateString()} </Button>
        </div>
      </div>

    </>
  )
}

export default MyCard
