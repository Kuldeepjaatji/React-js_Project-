import React from 'react';
import { NavLink,useRouteError } from 'react-router-dom';

export const Errorpage = () => {
    const error = useRouteError();
  return (
    <>
    <h1> Ooops! An error occurred.</h1>
    {error && <p>{error.date}</p>}
    <NavLink to="/"> <button>Back</button></NavLink>
    </>
  );
}
