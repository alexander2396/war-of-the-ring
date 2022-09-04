import { OverlayTrigger, Popover, Button } from "react-bootstrap";
import { ImageUrlResolver } from "../../core/imageUrlResolver";
import { Politics } from "../../models/politics";
import { activatePolitics, movePolitics, selectPolitics } from "../../redux/game/gameSlice";
import { useAppDispatch, useAppSelector } from "../../tools/hooks/hooks";
import styles from './politicsTracks.module.css';

export const PoliticsTracks = () => {
    const dispatch = useAppDispatch();
    
    const politics = useAppSelector(selectPolitics);
    
    function activate(politics: Politics) {
       dispatch(activatePolitics(politics));
    }

    function move(politics: Politics) {
        dispatch(movePolitics(politics));
    }

    function renderTrack(track: Politics, index: number) {
        return (
            <>
                <OverlayTrigger trigger="click" key={index} placement="left" rootClose
                    overlay={
                        <Popover>
                            <Popover.Body>
                                {
                                    !track.isActive &&
                                    <Button variant="primary" onClick={() => activate(track)}>Activate</Button>
                                }
                                {
                                    track.track !== 0 &&
                                    <Button className="ml-10" variant="secondary" onClick={() => move(track)}>Move</Button>
                                }
                            </Popover.Body>
                        </Popover>
                    }>
                    <div className={styles.politics}>
                        <img src={ImageUrlResolver.getPoliticsUrl(track)} />
                    </div>
                </OverlayTrigger>
            </>
        )
    }

    return (
        <>
            <div className={styles.track3 + ' ' + styles.track}>
                {politics.filter(x => x.track === 3).map((track, i) => {
                    return renderTrack(track, i)
                })}
            </div>
            <div className={styles.track2 + ' ' + styles.track}>
                {politics.filter(x => x.track === 2).map((track, i) => {
                    return renderTrack(track, i)
                })}
            </div>
            <div className={styles.track1 + ' ' + styles.track}>
                {politics.filter(x => x.track === 1).map((track, i) => {
                    return renderTrack(track, i)
                })}
            </div>
            <div className={styles.track0 + ' ' + styles.track}>
                {politics.filter(x => x.track === 0).map((track, i) => {
                    return renderTrack(track, i)
                })}
            </div>
        </>
    )
}