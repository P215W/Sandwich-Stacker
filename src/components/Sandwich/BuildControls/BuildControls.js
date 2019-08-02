import React from "react";
import styles from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const buildControls = props => {
  // till here: download css files for BuildControlS + BuildControl and paste it in
  const controls = [
    { label: "Fried Egg", type: "friedEgg" },
    { label: "Tomato", type: "tomato" },
    { label: "Pickle", type: "pickle" },
    { label: "Lettuce", type: "lettuce" },
    { label: "Cucumber", type: "cucumber" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Turkey", type: "turkey" }
  ];

  return (
    <div className={styles.buildControls}>
        <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(c => (
            <BuildControl
            key={c.label}
            label={c.label}
            moreHandler={() => props.addIngredient(c.type)}
            lessHandler={() => props.removeIngredient(c.type)}
            isDisabled={props.isDisabled[c.type]}
            />
        ))}
        <button 
            className={styles.orderButton} 
            disabled={!props.purchasable}
            onClick={props.purchasing}
        >Order now
        </button>
    </div>
  );
};

export default buildControls;
