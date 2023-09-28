import React, { useState } from 'react'


function capitalise(word) {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}



export default function Alert(props) {

   const Alert = {
        msg: 'this is alert',
        type: 'success'
}
    const [alert, setalert] = useState(Alert)
   
setTimeout(() => {
    setalert('');
}, 2000);


    return (
      <div style={{height:'20px'}}>
      <div className={`alert alert-${alert.type} alert-dismissible my-3 fade show`} role="alert">
          
            <strong>{ capitalise(alert.type?alert.type:'')}</strong>: {alert.msg}
        
            </div>
            </div>
    )
}
