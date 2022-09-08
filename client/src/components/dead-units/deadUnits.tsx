import { useState } from "react";
import { Button } from "react-bootstrap";
import { Unit } from "../../models/unit";
import { moveDeadUnitToPool, selectDeadUnits } from "../../redux/game/gameSlice";
import { useAppDispatch, useAppSelector } from "../../tools/hooks/hooks";
import styles from './deadUnits.module.css';

export const DeadUnits = () => {

    const [SelectedUnit, setSelectedUnit] = useState(null as Unit);

    const units = useAppSelector(selectDeadUnits);
    
    const dispatch = useAppDispatch();

    function selectUnit(unit: Unit) {
        setSelectedUnit(unit);
    }

    function _addToPool() {
        dispatch(moveDeadUnitToPool(SelectedUnit));
        setSelectedUnit(null);
    }

    return (<>
        <div className="pt-2">
            {SelectedUnit &&
            <>
                <Button variant="primary" onClick={() => _addToPool()}>Move to pool</Button>
            </>}
        </div>
        <div className="pt-4">
            <div className={styles.units}>
            { units.map(unit => {
                    return (<>
                        <div className={styles.unit + (SelectedUnit === unit ? ` ${styles.selectedUnit}` : '')} onClick={() => selectUnit(unit)}>
                            <img style={{height: '50px'}} src={unit.imageUrl} alt=""/>
                        </div>
                    </>)
                }) }
            </div>
        </div>
    </>)
}