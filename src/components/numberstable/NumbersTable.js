import React from 'react';

function NumbersTable(props){

    const table = [...Array(props.limit)];

    return (
        <div className="table">

            {table.map((elem, idx) => {

                if(idx % 2 === 0){
                    
                 return   <div className="numbers" style={{backgroundColor:"white"}}>{idx + 1}</div>
                
                }else{

                 return   <div className="numbers" style={{backgroundColor:"red", }}>{idx + 1}</div>

                }

            })}

        </div>
    )
}

export default NumbersTable;