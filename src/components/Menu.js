import React from 'react'




function Menu(props){
console.log(props)
    

    return (
        <div>
            <form >
                <input type='radio' name='Video' onClick= {()=>props.chooseVideo('fast')} />FAST 
                <input type='radio' name='Video' onClick= {()=>props.chooseVideo('slow')} />SLOW 
                <input type='radio' name='Video' onClick= {()=>props.chooseVideo('cute')} />CUTE 
                <input type='radio' name='Video' onClick= {()=>props.chooseVideo('eek')} />EEK 
            </form>
        </div>
     )
    
}




export default Menu;