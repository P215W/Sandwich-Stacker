import React from "react";
import styles from "./Sandwich.module.css";
import SandwichIngredient from "../SandwichIngredient/SandwichIngredient";

const sandwich = props => {

    const transformedIngredients = Object.keys(props.ingredients)
        .map(ing => {
            return [...Array(props.ingredients[ing])].map((_, index) => {
                return <SandwichIngredient key={ing + index} type={ing} />
            })
        });

    const ingSum = Object.values(props.ingredients) // get sum of ingredients s, check if sum > 0, if not render "plaese add ing"!
        .reduce((acc, curr) => acc + curr);
    
    return (
        <div className={styles.sandwich}>
            <SandwichIngredient type="oliveStick" />
            <SandwichIngredient type="breadTop" />
            { ingSum > 0 ? transformedIngredients : <div>Start adding ingredients</div> }
            <SandwichIngredient type="breadBottom" />
        </div>
    );
};

export default sandwich;