import React, { useState } from "react";
import { TextField, Button, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import DatePicker from "react-date-picker";
import "./App.css";
import { BundleTextField } from "./components/BundleTextField";
import { UploadButton } from "./components/UploadButton";
import { FileTypeDropDown } from "./components/FileTypeDropDown";
import { MessageTypeDropDown } from "./components/MessageTypeDropDown";
import { AttributeCheckList } from "./components/AttributeCheckList";
import { SubmitButton } from "./components/SubmitButton";

// function uploadFile(e) {
//   const [fileToBeSent,setFileToBeSent]= useState('');
//   e.preventDefault();
// let file = setFileToBeSent;
// const formData = new FormData();

// formData.append("file", file);

// axios
//   .post("/api/upload", formData)
//   .then(res => console.log(res))
//   .catch(err => console.warn(err));
// }

function handleClicked() {
  console.log("clicked");
}

function App() {
  const [dateValue, onDateValueChange] = useState(new Date());
  const [supportBundle, setSupportBundle] = useState("");
  const [extension, setExtension] = useState("");
  const options = ["File_1", "File_2", "File_3", "File_4", "File_5"];
  const [message, setMessage] = useState("");
  return (
    <div
      className="App"
      style={{
        marginTop: "20px",
        width:"600px",
        height:"500px",
        backgroundColor: "lightblue",
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "space-between",
        // alignItems: "center",
        
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        {/* <div> <BundleTextField /> </div> */}

        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            label="Support bundle"
            variant="standard"
            color="primary"
            required
            value={supportBundle}
            onChange={(e) => setSupportBundle(e.target.value)}
            error={!supportBundle}
            helperText={"Upload support bundle folder here"}
          />

          <select className="template-select" style={{ marginTop: "20px" }}>
            <option>Select file</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* <div> <UploadButton /> </div> */}
        <div>
          <Button variant="contained">Upload</Button>
        </div>
      </div>

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin:"50px"
        }}
      >
        {/* <div> <FileTypeDropDown /> </div> */}
    
          <TextField
            label="file extension"
            select
            value={extension}
            onChange={(e) => setExtension(e.target.value)}
            color="secondary"
            helperText="Please provide the file extension"
          >
            <MenuItem value="log">log</MenuItem>
            <MenuItem value="xml">xml</MenuItem>
            <MenuItem value="json">json</MenuItem>
          </TextField>
      

        {/* <div> <MessageTypeDropDown /> </div> */}
        
          <TextField
            label="log_level/Message type"
            select
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            color="secondary"
            helperText="Please provide message type"
          >
            <MenuItem value="error">Error</MenuItem>
            <MenuItem value="warn">Warning</MenuItem>
            <MenuItem value="info">Info</MenuItem>
          </TextField>
      
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop:"20px"
        }}
      >
        
          <TextField
            id="date1"
            label="From date"
            type="date"
            defaultValue="dd-mm-yyyy"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="date2"
            label="To date"
            type="date"
            defaultValue="dd-mm-yyyy"
            InputLabelProps={{
              shrink: true,
            }}
          />
       
      </div>
      {/* <div> <AttributeCheckList /> </div> */}
      {/* <div> <SubmitButton/> </div> */}
      <div>
        <Button
          onClick={
            //   async () => {
            // const formDataReq = {message,extension};
            // const response = await fetch("/Method_formData",{
            //         method: "POST",
            //         headers:{
            //             "Content-Type" : "application/json"

            //         },
            //         body: JSON.stringify(formDataReq)
            //     });

            //     if (response.ok){
            //         console.log("response worked!");
            //     }
            // }
            handleClicked
          }
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default App;
