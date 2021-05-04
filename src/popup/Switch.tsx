import React, {ChangeEvent, FC} from 'react';
import "./Switch.css"

type SwitchState = {
  name: string,
  OnChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Switch: FC<SwitchState> = ({name, OnChange}, SwitchState) => {
    return (
        <label className="switch">
          <input type="checkbox" id={name} onChange={OnChange}></input>
          <span className="slider round"></span>
        </label>
    )
  }
  

export default Switch;