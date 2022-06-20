import React, { useState, useMemo } from "react";
import { Header, Footer, Main } from "@components";
import { v4 as uuid } from "uuid";
import "@styles";

export const TodosContext = React.createContext();

export const TodosContainer = () => {
 
  return (

      <div className="app">
        <Header />
        <Main />  
        <Footer />
      </div>
)};








