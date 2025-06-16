import Input from "./Component/Input"
import ButtonContainer from "./component/ButtonContainer"
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

function App() {
  
    const buttons = ["C","(",")","*","7","8","9","/","4","5","6","-","1","2","3","+","B",".","0","=",];
    let isActive = true;
    let isdark = false;
  const [value1,setValue] = useState("");

  function buttonhendle(kuldeep){
    if(kuldeep==="="){                  //  || event.key==="Enter" => kese lgaye
      setValue(eval(value1));
    }else if(kuldeep==="B"){
      setValue(value1.slice(0,-1))
    }else if(kuldeep==="C"){
      setValue("");
    }else{
      setValue(kuldeep+value1)
    }
  } 

  return (
    <>
      <div className="container">
        <Input displaycopy={value1} ></Input>
        <ButtonContainer btn={buttons} isActive1={isActive} isDark1={isdark} buttonhendler={buttonhendle}></ButtonContainer>
      </div>
    </>
  )
}

export default App