import { OverlayTrigger, Popover, Button } from "react-bootstrap";
import { selectVictoryPoints, setFreePeopleVictoryPoints, setSauronForcesVictoryPoints } from "../../redux/game/gameSlice";
import { useAppDispatch, useAppSelector } from "../../tools/hooks/hooks";
import styles from './victoryPoints.module.css';

export const VictoryPoints = () => {
    
    const victoryPoints = useAppSelector(selectVictoryPoints);

    const dispatch = useAppDispatch();

    const getFPLeftStyle = () => (349 + 42 * victoryPoints.freePeople) + 'px';

    const getSFLeftStyle = () => (349 + 42 * victoryPoints.sauronForces) + 'px';

    function addFP() {
        dispatch(setFreePeopleVictoryPoints(victoryPoints.freePeople + 1));
    }

    function reduceFP() {
        dispatch(setFreePeopleVictoryPoints(victoryPoints.freePeople - 1));
    }

    function addSF() {
        dispatch(setSauronForcesVictoryPoints(victoryPoints.sauronForces + 1));
    }

    function reduceSF() {
        dispatch(setSauronForcesVictoryPoints(victoryPoints.sauronForces - 1));
    }

    return (
        <>
            <OverlayTrigger trigger="click" placement="top" rootClose 
                overlay={
                    <Popover>
                        <Popover.Body>
                            <Button variant="primary" onClick={() => addFP()}>Add</Button>
                            <Button className="ml-10" variant="secondary" onClick={() => reduceFP()}>Reduce</Button>
                        </Popover.Body>
                    </Popover>
                }>
                <div className={styles.fpVP + (victoryPoints.freePeople === victoryPoints.sauronForces ? ` ${styles.FPequals}` : '')} style={{ left: getFPLeftStyle() }}>
                    <img src='images/vp_free.png' />
                </div>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="top" rootClose
                overlay={
                    <Popover>
                        <Popover.Body>
                            <Button variant="primary" onClick={() => addSF()}>Add</Button>
                            <Button className="ml-10" variant="secondary" onClick={() => reduceSF()}>Reduce</Button>
                        </Popover.Body>
                    </Popover>
                }>
                <div className={styles.sfVP + (victoryPoints.freePeople === victoryPoints.sauronForces ? ` ${styles.SFequals}` : '')} style={{ left: getSFLeftStyle() }}>
                    <img src='images/vp_shadow.png' />
                </div>
            </OverlayTrigger>
        </>
    )
}