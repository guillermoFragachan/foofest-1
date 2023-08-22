import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';





export const TicketView = (props) => {


  return (
    <div className="flex"
    onClick={()=>{
      props.setTickets(5)
    }}
    >
     this is the ticket view 
    </div>
  );
};



