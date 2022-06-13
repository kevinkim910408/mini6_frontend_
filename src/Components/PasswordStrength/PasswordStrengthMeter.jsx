import React from 'react'
import zxcvbn from 'zxcvbn'

export default function PasswordStrengthMeter({password}) {
  const testResult = zxcvbn(password);
  const score = testResult.score * 100/4;

  const funcProgressColor = () =>{
    switch(testResult.score){
      case 0:
        return '#828282'
      case 1:
        return '#EA1111'
      case 2:
        return '#FFAD00'
      case 3:
        return '#9b1158'
      case 4:
        return '#00b500'
      default:
        return 'none'
    }
  }

  const CreatePassLabel = () =>{
    switch(testResult.score){
      case 0:
        return 'Too Week'
      case 1:
        return 'Week'
      case 2:
        return 'Fear'
      case 3:
        return 'Strong'
      case 4:
        return 'Very Strong'
      default:
        return ''
    }
  }

  const changePasswordColor = () => ({
    width:`${score}%`,
    background: funcProgressColor(),
    height: '10px'
  })


  return (
    <div className='progressStatus' style={{width:'30%', height:'50px', textAlign:'center'}}>
        <div className="progress" style={{width:'100%',height:'10px'}}>
          <div className="progress-bar" style={changePasswordColor()}></div>
        </div> 
        <p style={{color: funcProgressColor(), fontSize:'1.2rem', }}>{CreatePassLabel()}</p>
        
    </div>
  )
}
