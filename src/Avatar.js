import React from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';
const Avatar = (props) =>{
    const arraylistarray = [
        {
            id:1,
            name:"Deepshikha",
            work:"web developer"
        }
    ]
    return <div>
    <h1>Welcome to Avatar world</h1>
    
   < Avatarlist id="1" name={arraylistarray[0].name} work={arraylistarray[0].work}/>
   < Avatarlist id="1" name="Deepshi" work="blogger"/>
   < Avatarlist id="1" name="Deepsh" work="web designer"/>
   < Avatarlist id="1" name="Deeps" work="Youtuber"/>
        <button>Subscribe</button>
        </div>
    
}
export default Avatar;