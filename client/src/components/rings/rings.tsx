import { OverlayTrigger, Popover, Button } from 'react-bootstrap';
import { ImageUrlResolver } from '../../core/imageUrlResolver';
import { Ring } from '../../models/ring';
import { selectRings, useFreePeopleRing, useSauronForcesRing } from '../../redux/game/gameSlice';
import { useAppDispatch, useAppSelector } from '../../tools/hooks/hooks';
import styles from './rings.module.css';

export const Rings = () => {
    const dispatch = useAppDispatch();
    
    const rings = useAppSelector(selectRings);

    function _useFPRing(ring: Ring) {
        dispatch(useFreePeopleRing(ring));
    }

    function _useSFRing(ring: Ring) {
        dispatch(useSauronForcesRing(ring));
    }

    function renderFPRing(ring: Ring,index: number) {
        return (
            <>
                <OverlayTrigger trigger="click" key={index} placement="bottom" rootClose
                    overlay={
                        <Popover>
                            <Popover.Body>
                                <Button variant="secondary" onClick={() => _useFPRing(ring)}>Use</Button>
                            </Popover.Body>
                        </Popover>
                    }>
                    <div className={styles.ring}>
                        <img src={ImageUrlResolver.getRingUrl(ring)} />
                    </div>
                </OverlayTrigger>
            </>
        )
    }

    function renderSFRing(ring: Ring,index: number) {
        return (
            <>
                <OverlayTrigger trigger="click" key={index} placement="top" rootClose
                    overlay={
                        <Popover>
                            <Popover.Body>
                                <Button variant="secondary" onClick={() => _useSFRing(ring)}>Use</Button>
                            </Popover.Body>
                        </Popover>
                    }>
                    <div className={styles.ring}>
                        <img src={ImageUrlResolver.getRingUrl(ring)} />
                    </div>
                </OverlayTrigger>
            </>
        )
    }

    return (<>
        <div className={styles.fpRings}>
            {
                rings.freePeople.map((x, i) => renderFPRing(x, i))
            }
        </div>
        <div className={styles.sfRings}>
            {
                rings.sauronForces.map((x, i) => renderSFRing(x, i))
            }
        </div>
    </>)
}