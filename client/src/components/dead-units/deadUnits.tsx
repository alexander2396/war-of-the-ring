import { selectDeadUnits } from "../../redux/game/gameSlice";
import { useAppSelector } from "../../tools/hooks/hooks";
import styles from './deadUnits.module.css';

export const DeadUnits = () => {

    const units = useAppSelector(selectDeadUnits);

    return (<>
        <div className="pt-2">
            <div className={styles.units}>
            { units.map(unit => {
                    return (<>
                        <div className={styles.unit}>
                            <img style={{height: '50px'}} src={unit.imageUrl} alt=""/>
                        </div>
                    </>)
                }) }
            </div>
        </div>
    </>)
}