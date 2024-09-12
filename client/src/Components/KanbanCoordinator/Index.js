import KanbanBoard from './KanbanBoard'
import React from "react";
const  KanbanBorad = () => {
    const style = {
        'padding': '30px',
        'paddingTop': '5px',
    };

    return (
        <>
         <div style={ style }>
       
				<KanbanBoard />
      </div>
        </>
       
      );
}
 
export default KanbanBorad ;
