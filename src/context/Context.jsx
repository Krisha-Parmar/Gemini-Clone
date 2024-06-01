// 1
import React,{ createContext } from "react";
import run from "../config/gemini"

export const Context = createContext();

const ContextProvider = (props)=>{

    const onSent = async (prompt)=>{
        await run(prompt)
    }
    onSent("What is react js")

    const contextValue = {

    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider
// import React, { createContext, useState } from "react";
// import run from "../config/gemini";

// export const Context = createContext();

// const ContextProvider = (props) => {
//   const [state, setState] = useState({});

//   const onSent = async (prompt) => {
//     try {
//       const response = await run(prompt);

//       console.log("Full Response:", response);

//       // Check if response and response.candidates are defined
//       if (response && response.candidates && response.candidates.length > 0) {
//         if (response.candidates.length > 1) {
//           console.warn(`This response had ${response.candidates.length} candidates. Using the first one.`);
//         }
//         const primaryResponse = response.candidates[0];
//         console.log("Primary Response:", primaryResponse.text);
//         // Do something with the primary response, e.g., update state
//       } else {
//         console.warn("No candidates found in the response.");
//         if (!response) {
//           console.warn("The response is undefined.");
//         } else if (!response.candidates) {
//           console.warn("The response.candidates is undefined.");
//         } else {
//           console.warn("The response.candidates array is empty.");
//         }
//       }
//     } catch (error) {
//       console.error("Error during chat:", error);
//     }
//   };

//   const contextValue = {
//     onSent,
//     state,
//   };

//   return (
//     <Context.Provider value={contextValue}>
//       {props.children}
//     </Context.Provider>
//   );
// };

// export default ContextProvider;


