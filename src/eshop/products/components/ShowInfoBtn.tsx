
import React from 'react';
import { Link } from 'react-router-dom'

interface ShowInfoBtnProps {
    id: number; 
  }
export const ShowInfoBtn:React.FC<ShowInfoBtnProps> = ({ id }) => {
  return (
    <Link to={`/product/${id}`} className="btn btn-info text-white">Show info</Link>
  );
};
