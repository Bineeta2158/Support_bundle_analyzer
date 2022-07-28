import { TextField } from "@mui/material";
import React,{ useState } from "react";
export const BundleTextField = () => {
    const [supportBundle,setSupportBundle] = useState('')
    const options = ['File_1', 'File_2', 'File_3', 'File_4', 'File_5'];
    return (   
        
    <div style={{display:'flex',flexDirection:'column'}}>
        <TextField 
            label='Support bundle'
            variant='standard' 
            color="primary" 
            required value={supportBundle}
            onChange={e=> setSupportBundle(e.target.value)}
            error={!supportBundle}
            helperText={'Upload support bundle folder here'}
            />
        
            <select className='template-select' style={{marginTop:"20px"}}>
            <option>Select file</option>
            {options.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
    </div>
    )
}