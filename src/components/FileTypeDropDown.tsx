import { MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, {useState} from "react";
export const FileTypeDropDown = () => {
    const [extension,setExtension] = useState('')
    // const handleChange=(event : React.ChangeEvent<HTMLInputElement>)=>{
    //     setExtension(event?.target.value as string)
    // }
    return(
        <Box width='500px'>
        <TextField label = 'file extension' select
        value={extension}
        onChange={e=> setExtension(e.target.value)}
       
        color="secondary"
        helperText='Please provide the file extension'
        >
            <MenuItem value='log'>log</MenuItem>
            <MenuItem value='xml'>xml</MenuItem>
            <MenuItem value='json'>json</MenuItem>
        </TextField>
        </Box>
    )
}