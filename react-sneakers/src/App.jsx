import React from "react";
// import { Fragment } from "react";

// import "./App.css";
// const updateState = { a: 2, b: 34, ...{ a: 3 }, ...{ b: 44 } };
// console.log("### updateState:", updateState);

import { StaffMenu } from "./components/staffMenu/staffMenu";

const cities = [
  { name: "Киев", id: "tttfcdxcfv" },
  { name: "Лондон", id: "fvbhhu6778h" },
];

const App = () => {
  return (
    <>
      <StaffMenu title="Преподаватели" buttonName="Добавить преподавателя" />

      <StaffMenu title="Города" buttonName="Добавить города" content={cities} />

      <StaffMenu title="Факультеты" buttonName="Добавить факультет" />
    </>
  );
};

export default App;
