import React from 'react';


const Header  = (props) => {
  
        return (
            <>
            {/* <header style={{background: `${this.state.active ? 'red':'blue'}`}}> */}
            <header className={props.active ? 'active': 'not-active'}>
                <div className="logo">
                List Of Programming Language</div>
                <input type="text" placeholder="name here in uppercase" 
                onChange={props.keyword}/>
                <button onClick={props.changeColor}>Change It</button>
            </header> 
            </>
          )

}

export default Header