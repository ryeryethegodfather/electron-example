import React, { ReactElement } from 'react';
import history from '../../Helpers/history'
import useWindowDimensions from '../../Helpers/DimensionsHook';
import '../../Css/styles.css';
import { observer} from 'mobx-react-lite';

interface Props {
    left: React.FC
    right: React.FC
}
//<p style={{wordBreak: "break-all"}}></p>
function MainContentSplit(Props: Props) : ReactElement {

    
    const { width } = useWindowDimensions();
    return (
        <>
        <p style={{textAlign: "center", margin: "0rem", color: "#0074d9", fontWeight: "bold", fontSize: "1.2rem"}}>Add/Remove</p>
            <div className="mainContentCard" style={{minHeight: "400px", position:"relative"}}>
                <div style={{gridArea: "main"}}>
                <Props.left />
                </div>            
                <div className={width > 600 ? "verticalBarLeft" : "verticalBarTop" } style={{gridArea: "side", height: "100%"}} >
               <Props.right />
                </div>             
            </div>
            <button onClick={() => {history.push("/main/employee")}}>To Main</button>
        </>
    )
}

export default observer(MainContentSplit);