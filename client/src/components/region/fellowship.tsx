import { Region } from "../../models/region";
import { selectFellowship } from "../../redux/game/gameSlice";
import { useAppSelector } from "../../tools/hooks/hooks";
import styles from './fellowship.module.css';

type PropTypes = {
    region: Region
}
export const Fellowship = ({region}: PropTypes) => {
    const fellowship = useAppSelector(selectFellowship);

        return (
            <>
            {
                fellowship.mordorPosition === 0 &&
                <div className={styles.fellowship}>
                    <div><img src='images/units/Fellowship.png' alt = ""/></div>
                </div>
            }
            </>
        )
}
