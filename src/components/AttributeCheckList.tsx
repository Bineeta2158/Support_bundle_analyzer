import {TextField} from "@mui/material"
import React, {useState} from "react";
import Calendar from 'react-calendar';
export const AttributeCheckList = () =>{
    const [attributes,setAttributes] = useState<string[]>([])
    const [dateVar,setDateVar] = useState('')

    const [date, setDate] = useState(new Date()); 

    return (
        <div>
            {/* <TextField 
            label='Date'
            variant='outlined' 
            color="primary" 
            onChange={e=> date.toDateString()}
            helperText={'Enter date'}
            /> */}
           
         <TextField
  InputProps={{inputProps: { min: "2020-05-01", max: "2020-05-04"} }}
/>
            <div className="calendar-container" style={{width:"250px",marginTop:'30px'}}>
                <Calendar onChange={setDate} value={date} />
            </div>
            <div>
                Selected date: {date.toDateString()}
            </div>

        </div>       

    )
}