import React from 'react'
import Sidebar from './componants/Sidebar/Sidebar'
import Main from './componants/Main/Main'
const App = () => {
  return (
    <>
      <Sidebar/>
      <Main/>
    </>
  )
}

export default App

// // import React, { useContext, useState } from 'react';
// // import { Context } from './context/Context.jsx';

// // const App = () => {
// //   const { onSent } = useContext(Context);
// //   const [prompt, setPrompt] = useState('');

// //   const handleSend = async () => {
// //     if (prompt.trim() !== '') {
// //       await onSent(prompt);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Gemini Chat</h1>
// //       <input
// //         type="text"
// //         value={prompt}
// //         onChange={(e) => setPrompt(e.target.value)}
// //         placeholder="Enter your prompt"
// //       />
// //       <button onClick={handleSend}>Send</button>
// //     </div>
// //   );
// // };

// // export default App;
// import React, { useContext, useState } from 'react';
// import { Context } from './context/Context.jsx';

// const App = () => {
//   const { onSent } = useContext(Context);
//   const [prompt, setPrompt] = useState('');

//   const handleSend = async () => {
//     if (prompt.trim() !== '') {
//       await onSent(prompt);
//     }
//   };

//   return (
//     <div>
//       <h1>Gemini Chat</h1>
//       <input
//         type="text"
//         value={prompt}
//         onChange={(e) => setPrompt(e.target.value)}
//         placeholder="Enter your prompt"
//       />
//       <button onClick={handleSend}>Send</button>
//     </div>
//   );
// };

// export default App;



