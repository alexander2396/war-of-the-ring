import { Faction } from "../../models/enums/faction";
import { selectUnitsPool } from "../../redux/game/gameSlice";
import { useAppSelector } from "../../tools/hooks/hooks";
import styles from './unitsPool.module.css';

export const UnitsPool = () => {

    const units = useAppSelector(selectUnitsPool);

    return (<>
        <div className="pt-2">
            <h5>Elves</h5>
            <div className={styles.units}>
                { units.filter(x => x.faction === Faction.Elves).map(unit => {
                    return (<>
                        <div className={styles.unit}>
                            <img style={{height: '50px'}} src={unit.imageUrl} alt=""/>
                        </div>
                    </>)
                }) }
            </div>
            <h5>Dwarfs</h5>
            <div className={styles.units}>
                { units.filter(x => x.faction === Faction.Dwarfs).map(unit => {
                    return (<>
                        <div className={styles.unit}>
                            <img style={{height: '50px'}} src={unit.imageUrl} alt=""/>
                        </div>
                    </>)
                }) }
            </div>
            <h5>Northmen</h5>
            <div className={styles.units}>
                { units.filter(x => x.faction === Faction.Northmen).map(unit => {
                    return (<>
                        <div className={styles.unit}>
                            <img style={{height: '50px'}} src={unit.imageUrl} alt=""/>
                        </div>
                    </>)
                }) }
            </div>
            <h5>Gondor</h5>
            <div className={styles.units}>
                { units.filter(x => x.faction === Faction.Gondor).map(unit => {
                    return (<>
                        <div className={styles.unit}>
                            <img style={{height: '50px'}} src={unit.imageUrl} alt=""/>
                        </div>
                    </>)
                }) }
            </div>
            <h5>Rohan</h5>
            <div className={styles.units}>
                { units.filter(x => x.faction === Faction.Rohan).map(unit => {
                    return (<>
                        <div className={styles.unit}>
                            <img style={{height: '50px'}} src={unit.imageUrl} alt=""/>
                        </div>
                    </>)
                }) }
            </div>
            <h5>Isengard</h5>
            <div className={styles.units}>
                { units.filter(x => x.faction === Faction.Isengard).map(unit => {
                    return (<>
                        <div className={styles.unit}>
                            <img style={{height: '50px'}} src={unit.imageUrl} alt=""/>
                        </div>
                    </>)
                }) }
            </div>
            <h5>Sauron</h5>
            <div className={styles.units}>
                { units.filter(x => x.faction === Faction.Sauron).map(unit => {
                    return (<>
                        <div className={styles.unit}>
                            <img style={{height: '50px'}} src={unit.imageUrl} alt=""/>
                        </div>
                    </>)
                }) }
            </div>
            <h5>Easterlings</h5>
            <div className={styles.units}>
                { units.filter(x => x.faction === Faction.Easterlings).map(unit => {
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