import React from "react";
//Img
import MealsImg from "../../assets/meals.jpg";
//Styles
import classes from "./Header.module.css";
//Components
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImg} alt="A table full of food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
