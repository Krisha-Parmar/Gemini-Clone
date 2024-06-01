// 1
import React, { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(function(){
        setResultData(prev=>prev+nextWord)
    },75*index)
  };

  const newChat = () =>{
    setLoading (false)
    setShowResult(false)
  }

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;
    if (prompt !== undefined) {
        response = await run(prompt);
        setRecentPrompt(prompt)
    }else{
        setPrevPrompts(prev=>[...prev,input])
        setRecentPrompt(input)
        response = await run(input) 
    }

    let responseArray = response.split("**");
    let newResponse ="";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("</br>")
    let newResponseArray = newResponse2.split(" ");
    for(let i=0;i<newResponseArray.length;i++){
        const nextWord = newResponseArray[i];
        delayPara(i,nextWord+" ")
    }
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
export default ContextProvider;
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
