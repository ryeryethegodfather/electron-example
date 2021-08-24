import { observer } from 'mobx-react-lite';
import React, { MouseEventHandler, ReactElement} from 'react';
import ReactDOM from 'react-dom';



interface Props {
    // props to show
    show: boolean;
    // function to close the modal
    close: MouseEventHandler<HTMLButtonElement>;
    childComponent: React.FC;
}
    
function Modal(Props: Props) : ReactElement {
    // ternary operator return code must come before this
    const element: ReactElement | null = Props.show === true ?
   
    ReactDOM.createPortal(
        <React.Fragment>
        <div className="modal-overlay"/>
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <div className="modal">
                <div className="modal-header">
                    <div></div>
                <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={Props.close}>
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                {Props.childComponent}
                </div>       
        </div>
        </React.Fragment>, document.body
    ) : null
    return (
        <>
            {element}
        </>
    )
}

export default observer(Modal);