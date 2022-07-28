import { MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, {useState} from "react";
export const MessageTypeDropDown = () => {
    const [message,setMessage] = useState('')
    // const handleChange=(event : React.ChangeEvent<HTMLInputElement>)=>{
    //     setMessage(event?.target.value as string)
    // }
    return(
    <Box width='500px'>
        <TextField label = 'Log_level/Message type' select
        value={message}
        onChange={e=> setMessage(e.target.value)}
       
        color="secondary"
        helperText='Please provide message type'
        >
            <MenuItem value='error'>Error</MenuItem>
            <MenuItem value='warn'>Warning</MenuItem>
            <MenuItem value='info'>Info</MenuItem>
        </TextField>
        </Box>
    )
}
