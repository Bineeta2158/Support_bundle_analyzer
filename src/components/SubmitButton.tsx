import { Button } from "@mui/material";
import React from 'react';
const title="abc";
const rating = "pqr";
export const SubmitButton = () =>{
    return (
        <div>
            <Button 
           
            onClick = {async () => {
            const formDataReq = {title, rating};
            const response = await fetch("/Method_formData",{
                    method: "POST",
                    headers:{
                        "Content-Type" : "application/json"

                    },
                    body: JSON.stringify(formDataReq)
                });

                if (!response.ok){
                    console.log("response worked!");
                }
            }}>
            Submit
            </Button>
        </div>
    )
}