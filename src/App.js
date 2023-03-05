//import { useState, useEffect, useRef } from "react";

// const App = () => {

//     const usePreviousValue = value => {
//       const ref = useRef();
//       useEffect(() => {
//         ref.current = value;
//       },[value]);
//       return ref.current;
//     };

//     const  [incomingDataR100, setIncomingDataR100] = useState([]);
//     // const  [incomingDataR50, setIncomingDataR50] = useState([]);
//     const prevValue = usePreviousValue(incomingDataR100);
//     const endpoint = 'wss://ws.binaryws.com/websockets/v3?app_id=32978';
//     var ws = new WebSocket(endpoint);
    
    
//     useEffect(() => {
//       ws.onopen = (event) => {
//         console.log('Socket is open')
//         ws.send(JSON.stringify({ticks:'R_100'}));
       
//         // ws.send(JSON.stringify({ticks:'R_50'}));
//       };
//     }, [])

//     useEffect (() => {
//         setInterval(() => {
//           ws.onmessage = function (event) {
//             const json = JSON.parse(event.data);
//             console.log(`Socket is receiving ${json.tick.symbol}`)
//             if(json.tick.symbol === 'R_100') {
//               setIncomingDataR100(json.tick.quote);
//             }
//             // } else {
//             //   setIncomingDataR50(json.tick.quote);
//             // }          
//           };
//         }, 1000);
        
//     },[incomingDataR100]);
//     //  incomingDataR50]);

//     const chooseColor = (incomingDataR100, prevValue) => {
//       if(prevValue > incomingDataR100) {
//         return 'red';
//       } else if (incomingDataR100 === prevValue){
//         return 'black';
//       } else {
//         return 'green';
//       }
//     }
//     const chosenColor = chooseColor(incomingDataR100, prevValue);

//     // console.log(incomingDataR100, prevValue);
//   return (
//     <div className="App">
//         <h1>hello world</h1>
//         <h1>application id: 	32978</h1>
//         {/* {incomingDataR100.map((item) => (
//           <>
//             <li value={item.ask}>{item.ask}</li>
//           </>
//         ))}

//         {incomingDataR50.map((item) => (
//           <>
//             <li value={item.ask}>{item.ask}</li>
//           </>
//         ))} */}

//         <h1 className={chosenColor}>  
//           {incomingDataR100}
//         </h1>
//         <h1>
//           Previous Value: {prevValue}
//         </h1>
//     </div>
//   );
// }

// export default App;

