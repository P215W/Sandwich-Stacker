
import React from "react";
import PropTypes from "prop-types";
import styles from "./SandwichIngredient.module.css";

const sandwichIngredient = props => {
    let ingredient = null;
    switch (props.type) {
        case ("oliveStick"):
            ingredient = (
                <div className={styles.oliveStick}>
                    <div className={styles.wood}></div>
                    <div className={styles.olive}>
                        <div className={styles.innerRed}></div>
                    </div>
                </div>
            );
            break;
        case ("breadTop"):
            ingredient = <div className={[styles.bread, styles.top].join(" ")}></div>;
            break;
        case ("friedEgg"):
            ingredient = (
                    <div className={styles.friedEgg}>
                        <div className={styles.eggYolk}></div>
                        <div className={styles.eggWhite}></div>
                    </div>
                );
                break;
        case ("tomato"):
            ingredient = (
                    <div className={styles.tomato}>
                        <div className={styles.tomatoSlice}></div>
                        <div className={styles.tomatoSlice}></div>
                    </div>
            ); 
            break;
        case ("pickle"):
            ingredient = (
                    <div className={styles.pickle}>
                        <div className={styles.pickleSlice}></div>
                        <div className={styles.pickleSlice}></div>
                        <div className={styles.pickleSlice}></div>
                        <div className={styles.pickleSlice}></div>
                    </div>
            );
            break;
        case ("lettuce"):
            ingredient = <div className={styles.lettuce}></div>;
            break;
        case ("cucumber"):
            ingredient = (
                    <div className={styles.cucumber}>
                        <div className={styles.cucumberSlice}></div>
                        <div className={styles.cucumberSlice}></div>
                    </div>
            );
            break;
        case ("bacon"):
            ingredient = <div className={styles.bacon}></div>;
            break;
        case ("cheese"):
            ingredient = <div className={styles.cheese}></div>;
            break;    
        case ("turkey"):
            ingredient = <div className={styles.turkey}></div>;
            break;                
        case ("breadBottom"):
            ingredient = <div className={[styles.bread, styles.bottom].join(" ")}></div>;
            break;
        default:
            ingredient = null;
    }

    return ingredient;

    // down here is the jsx code for seeing a complete sandwich:
    // return (
    
    //     <div className={styles.sandwichIngredient}>

    //         <div className={styles.stick}></div>
    //         <div className={styles.olive}>
    //             <div className={styles.redOlive}></div>
    //         </div>

    //         <div className={`${styles.Bread} ${styles.Top}`}></div>

    //         <div className={styles.friedEgg}>
    //             <div className={styles.eggYolk}></div>
    //             <div className={styles.eggWhite}></div>
    //         </div>

    //         <div className={styles.tomato}>
    //             <div className={styles.tomatoSlice}></div>
    //             <div className={styles.tomatoSlice}></div>
    //         </div>

    //         <div className={styles.pickle}>
    //             <div className={styles.pickleSlice}></div>
    //             <div className={styles.pickleSlice}></div>
    //             <div className={styles.pickleSlice}></div>
    //             <div className={styles.pickleSlice}></div>
    //         </div>

    //         <div className={styles.lettuce}></div>

    //         <div className={styles.cucumber}>
    //             <div className={styles.cucumberSlice}></div>
    //             <div className={styles.cucumberSlice}></div>
    //         </div>

    //         <div className={styles.Bacon}></div>

    //         <div className={styles.Cheese}></div>

    //         <div className={styles.turkey}></div>

    //         <div className={`${styles.Bread} ${styles.Bottom}`}></div>

    //     </div>
    //     );
};

sandwichIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default sandwichIngredient;