import React from 'react'


function Video(props){
console.log(props)

    return (
        <div>
            <video src={props.video} width="320" height="240" controls/>
        </div>
    )
}




export default Video;