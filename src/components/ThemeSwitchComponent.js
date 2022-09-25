import React, { useState } from "react";
import "./styles/switch.css";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";
import { StyledSwitch } from "./styles/StyledSwitch.styled";

const ThemeSwitchComponent = ({toggleTheme, isDarkTheme}) => {
const [isToggled, setIsToggled] = useState(isDarkTheme)

const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme(); 
};

return (
    <StyledSwitch>
        <SunIcon />
            <label className="toggle-switch">
                <input type='checkbox' checked={isToggled} onChange={onToggle} />
                <span className="switch" />
            </label>
        <MoonIcon />
    </StyledSwitch>
);
}

export default ThemeSwitchComponent;