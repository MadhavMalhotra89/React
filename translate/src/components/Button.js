import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

/*class Button extends React.Component{

    static contextType = LanguageContext;

    render() {
        const text = this.context === 'english'? 'Submit': 'Voorleggen';
        return(
            <button className="ui primary button">{text}</button>
        );
    }
}

export default Button;*/

class Button extends React.Component{

    render() {
        return(
            <ColorContext.Consumer>
                {(color) => 
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            { value => value === 'english' ? "Submit": "Voorleggen" }
                        </LanguageContext.Consumer>
                    </button>
                }
            </ColorContext.Consumer>
        );
    }
}

export default Button;