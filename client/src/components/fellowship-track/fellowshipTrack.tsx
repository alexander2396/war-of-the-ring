import { OverlayTrigger, Popover, Button } from "react-bootstrap";
import { hideFellowship, revealFellowship, selectFellowship, setCorruption, setFellowshipTrackPosition } from "../../redux/game/gameSlice";
import { useAppDispatch, useAppSelector } from "../../tools/hooks/hooks";
import styles from './fellowshipTrack.module.css';

export const FellowshipTrack = () => {
    
    const fellowship = useAppSelector(selectFellowship);

    const dispatch = useAppDispatch();

    const getFellowshipTrackLeftStyle = () => (1087 + 42 * fellowship.trackPosition) + 'px';

    const getCorruptionLeftStyle = () => (1087 + 42 * fellowship.corruption) + 'px';

    function addPosition() {
        dispatch(setFellowshipTrackPosition(fellowship.trackPosition + 1));
    }

    function reducePosition() {
        dispatch(setFellowshipTrackPosition(fellowship.trackPosition - 1));
    }

    function addCorruption() {
        dispatch(setCorruption(fellowship.corruption + 1));
    }

    function reduceCorruption() {
        dispatch(setCorruption(fellowship.corruption - 1));
    }

    function reveal() {
        dispatch(revealFellowship());
    }

    function hide() {
        dispatch(hideFellowship());
    }

    return (
        <>
            <OverlayTrigger trigger="click" placement="bottom" rootClose 
                overlay={
                    <Popover>
                        <Popover.Body>
                            <div>            
                                <Button variant="primary" onClick={() => addPosition()}>Add</Button>
                                <Button className="ml-10" variant="secondary" onClick={() => reducePosition()}>Reduce</Button>
                            </div>
                            <div className="mt-2">           
                                <Button variant="danger" onClick={() => reveal()}>Reveal</Button>
                                <Button className="ml-10" variant="success" onClick={() => hide()}>Hide</Button>
                            </div>
                        </Popover.Body>
                    </Popover>
                }>
                <div className={styles.fellowship + (fellowship.trackPosition === fellowship.corruption ? ` ${styles.felEquals}` : '')} style={{ left: getFellowshipTrackLeftStyle() }}>
                    { fellowship.isRevealed === false && <img src='images/FSP.png' /> }
                    { fellowship.isRevealed === true && <img src='images/FSPR.png' /> }
                </div>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="bottom" rootClose
                overlay={
                    <Popover>
                        <Popover.Body>
                            <Button variant="primary" onClick={() => addCorruption()}>Add</Button>
                            <Button className="ml-10" variant="secondary" onClick={() => reduceCorruption()}>Reduce</Button>
                        </Popover.Body>
                    </Popover>
                }>
                <div className={styles.corruption + (fellowship.trackPosition === fellowship.corruption ? ` ${styles.cEquals}` : '')} style={{ left: getCorruptionLeftStyle() }}>
                    <img src='images/corruption.png' />
                </div>
            </OverlayTrigger>
        </>
    )
}