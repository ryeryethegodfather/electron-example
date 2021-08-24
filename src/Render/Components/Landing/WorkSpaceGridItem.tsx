import React, {useContext} from 'react';
import history from '../../Helpers/history';
//import { RootStoreContext } from  '../../Stores/RootStore';
import { observer} from 'mobx-react-lite';

interface Props {
    file: string;
    //delete: Function;
   // save: Function;
   // update: Function;
    index: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleRename: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleDelete: any;
}

  function WorkSpaceGridItem(Props: Props) {

   
    //const {settingsStore} = useContext(RootStoreContext);
    const handleClick = (selectedDb: string) : void => {
  console.log(selectedDb);
      //  settingsStore.selectDb(selectedDb);
        //history.push("/main/employees");
    }

    return (    
    <div className="card" key={Props.index} style={{/*backgroundColor: "#f5f8fc",*/ backgroundColor: "rgb(0, 116, 217)", borderRadius: "2px", maxWidth: "100%", marginBottom: "1rem"}}>
        <p style={{wordWrap: "break-word", textAlign: "center", color: "white"}} >{Props.file.split(".")[0]}</p>
        <button onClick={() => {handleClick(Props.file)}} className={["wsButton"].join(" ")} style={{display: "block", width:"90%", margin: "5px auto"}}>Manage</button>
        <button  onClick={() => {Props.handleRename(Props.index)}}   className={["wsButton"].join(" ")} style={{display: "block", width:"90%", margin: "5px auto"}}>Rename</button>
        <button   onClick={() => {Props.handleDelete(Props.index)}} className={["wsButton"].join(" ")} style={{display: "block", width:"90%", margin: "0 auto 5px" }}>Delete</button>
    </div>
    )
}

export default observer(WorkSpaceGridItem);