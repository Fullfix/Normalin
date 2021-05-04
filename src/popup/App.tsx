import React, { FC, useEffect, useState } from 'react';
import Switch from "./Switch"

const App: FC = () => {
  const[On, setOn] = useState(false);
  const[Info, setInfo] = useState("");
  useEffect(()=>{
    if (On) setInfo("Всё Окей");
    else setInfo("Всё не окей");
  })
  function OnChange(e: React.FormEvent<HTMLInputElement>){
    if (e.currentTarget.id = "power")
      setOn(e.currentTarget.checked);
    if (On) setInfo("Всё Окей");
    else setInfo("Всё не окей");
  }
  
  return (
    <div>
      Normalin, Normalin.
      <p>Включить эту дичь?</p>
      <Switch name="power" OnChange={OnChange}></Switch>
      <p>{Info}</p>
    </div>
  )
}

export default App;
