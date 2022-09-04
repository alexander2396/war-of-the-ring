import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Side } from "../../models/enums/side";
import { HuntTile } from "../../models/huntTile";
import { addHuntTileToPool, getRandomHuntTileFromPool, removeHuntTileFromPool, selectHunt } from "../../redux/game/gameSlice";
import { useAppDispatch, useAppSelector } from "../../tools/hooks/hooks";
import styles from './hunt.module.css';

type DicesProps = {
    side: Side
}

export const Hunt = () => {
    const [SelectedTile, setSelectedTile] = useState(null as HuntTile);

    const hunt = useAppSelector(selectHunt);
    
    const dispatch = useAppDispatch();

    function selectTile(tile: HuntTile) {
        setSelectedTile(tile);
    }

    function _addHuntTileToPool(tile: HuntTile) {
        dispatch(addHuntTileToPool(tile));
    }

    function _removeHuntTileFromPool(tile: HuntTile) {
        dispatch(removeHuntTileFromPool(tile));
    }

    function _getRandomHuntTileFromPool() {
        dispatch(getRandomHuntTileFromPool());
    }
    
    function renderTile(tile: HuntTile) {
        return (<>
            <div className={styles.tile + (SelectedTile === tile ? ` ${styles.selectedTile}` : '')} onClick={() => selectTile(tile)}>
                <img src={tile.imageUrl} />
            </div>
        </>);
    }

    return (<>
        <div className="pt-2">
            <Container>
                <Row>
                    <Col xs={6}>
                        <h4>Not in the pool</h4>
                    </Col>
                    <Col xs={6} className="d-flex flex-row-reverse">
                        <Button className="ml-10" variant="primary" onClick={() => _getRandomHuntTileFromPool()}>Drawn from pool</Button>
                        {SelectedTile && hunt.drawn.some(x => x.key === SelectedTile.key) &&
                        <>
                            <Button className="ml-10" variant="success" onClick={() => _addHuntTileToPool(SelectedTile)}>Add to pool</Button>
                        </>}
                        {SelectedTile && hunt.pool.some(x => x.key === SelectedTile.key) &&
                        <>
                            <Button variant="danger" onClick={() => _removeHuntTileFromPool(SelectedTile)}>Remove from pool</Button>
                        </>}
                    </Col>
                </Row>
            </Container>
            <div className={styles.tiles}>
                { hunt.drawn.map(x => renderTile(x)) }
            </div>
        </div>
        <div className="pt-2">
            <h4>Pool</h4>
            <div className={styles.tiles}>
                { hunt.pool.map(x => renderTile(x)) }
            </div>
        </div>
    </>)
}