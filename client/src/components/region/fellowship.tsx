import { Region } from "../../models/region";
import styles from './fellowship.module.css';

type PropTypes = {
    region: Region
}
export const Fellowship = ({region}: PropTypes) => {

        return (
            <>
                <div className={styles.fellowship}>
                    <div><img src='images/units/Fellowship.png' alt = ""/></div>
                </div>
            </>
        )
}
