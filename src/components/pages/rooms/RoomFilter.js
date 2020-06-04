import React from 'react'
import { Consumer } from '../../Context'
const uniquevalue = (anyname,value)=>{
  return [...new Set(anyname.map(item=>item.fields[value]))]
}
export default function RoomFilter({rooms}) {
    let types=uniquevalue(rooms,"type");
   types=["all",...types];
  let  overall = types.map((item,index)=>{
   return <option value={item} key={index}>{item}</option>
   })
    return (
        <Consumer > 
         {(value)=>{
           const {type , handleChange}=value
             return(
                    <div>
                        <select name="type" value={type}  onChange={handleChange}>
                         {overall}
                        </select>
                    </div>
             )
         }}
        </Consumer>
    )
}
