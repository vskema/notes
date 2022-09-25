import { StyledHeader } from "./styles/Header.styled";
import ThemeSwitchComponent from "./ThemeSwitchComponent";
import PlusIcon from './icons/PlusIcon'

export default function Header({toggleTheme, isDarkTheme, setInput, input}) {

    return (        
            <StyledHeader>
                <div onClick={() => setInput(!input)}>                                                   
                <PlusIcon  />
                </div>                                                         
                <ThemeSwitchComponent toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />                
            </StyledHeader>       
    )
}