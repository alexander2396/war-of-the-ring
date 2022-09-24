import { Container, Row, Col } from "react-bootstrap";
import { DiceType } from "../../models/enums/diceType";
import { Side } from "../../models/enums/side";
import { selectStatistics } from "../../redux/game/gameSlice";
import { useAppSelector } from "../../tools/hooks/hooks";
import styles from './turnStatistics.module.css';

export const TurnStatisticsPage = () => {
    const statistics = useAppSelector(selectStatistics);

    function getCountPercentage(diceType: DiceType, side: Side): number {
        let count = 0;
        let total = 0;

        if (side === Side.FreePeople) {
            statistics.freePeople.map(x => x.dices).forEach((y) => {
                y.forEach((dice) => {
                    total++;
                    if (dice.type === diceType)
                        count++;
                })
            });
        }

        if (side === Side.SauronForces) {
            statistics.sauronForces.map(x => x.dices).forEach((y) => {
                y.forEach((dice) => {
                    total++;
                    if (dice.type === diceType)
                        count++;
                })
            });
        }

        return Math.round((count / total) * 100);
    }
    return (<>
        {
            statistics && 
            <Container>
                <Row>
                    <Col>
                        {statistics.freePeople.map((stat, i) => {
                            return (<>
                                <Container className="p-2 ">
                                    <Row>
                                        <Col lg={2} className="d-flex align-items-center">Turn {stat.turn}</Col>
                                        <Col lg={10}>
                                            <div className="d-flex flex-row">
                                                {stat.dices.map((dice, i) => {
                                                    return (<>
                                                        <div key={i} className="m-1 c-pointer">
                                                            <img width={"40px"} src={dice.imageUrl} />
                                                        </div>
                                                    </>) 
                                                })}
                                            </div>
                                        </Col>
                                        <Col></Col>
                                    </Row>
                                </Container>
                            </>) 
                        })}
                        <div>
                            <div>
                                <div className="m-1">
                                    <img width={"40px"} src="images/dices/ADFPcharacter.png" />
                                    <span className={styles.counter}>{ getCountPercentage(DiceType.Character, Side.FreePeople) }%</span>
                                </div>
                                <div className="m-1">
                                    <img width={"40px"} src="images/dices/ADFParmymuster.png" />
                                    <span className={styles.counter}>{ getCountPercentage(DiceType.ArmyMuster, Side.FreePeople) }%</span>
                                </div>
                                <div className="m-1">
                                    <img width={"40px"} src="images/dices/ADFPevent.png" />
                                    <span className={styles.counter}>{ getCountPercentage(DiceType.Palantir, Side.FreePeople) }%</span>
                                </div>
                                <div className="m-1">
                                    <img width={"40px"} src="images/dices/ADFPmuster.png" />
                                    <span className={styles.counter}>{ getCountPercentage(DiceType.Muster, Side.FreePeople) }%</span>
                                </div>
                                <div className="m-1">
                                    <img width={"40px"} src="images/dices/ADFPwill.png" />
                                    <span className={styles.counter}>{ getCountPercentage(DiceType.WillOfTheWest, Side.FreePeople) }%</span>
                                </div>
                            </div>
                        </div>    
                    </Col>
                    <Col>
                        {statistics.sauronForces.map((stat, i) => {
                            return (<>
                                <Container className="p-2 ">
                                    <Row>
                                    <Col lg={2} className="d-flex align-items-center">Turn {stat.turn}</Col>
                                        <Col lg={10}>
                                            <div className="d-flex flex-row">
                                                {stat.dices.map((dice, i) => {
                                                    return (<>
                                                        <div key={i} className="m-1 c-pointer">
                                                            <img width={"40px"} src={dice.imageUrl} />
                                                        </div>
                                                    </>) 
                                                })}
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </>) 
                        })}
                        <div>
                            <div>
                                <div className="m-1">
                                    <img width={"40px"} src="images/dices/ADSAcharacter.png" />
                                    <span className={styles.counter}>{ getCountPercentage(DiceType.Character, Side.SauronForces) }%</span>
                                </div>
                                <div className="m-1">
                                    <img width={"40px"} src="images/dices/ADSAarmymuster.png" />
                                    <span className={styles.counter}>{ getCountPercentage(DiceType.ArmyMuster, Side.SauronForces) }%</span>
                                </div>
                                <div className="m-1">
                                    <img width={"40px"} src="images/dices/ADSAevent.png" />
                                    <span className={styles.counter}>{ getCountPercentage(DiceType.Palantir, Side.SauronForces) }%</span>
                                </div>
                                <div className="m-1">
                                    <img width={"40px"} src="images/dices/ADSAmuster.png" />
                                    <span className={styles.counter}>{ getCountPercentage(DiceType.Muster, Side.SauronForces) }%</span>
                                </div>
                                <div className="m-1">
                                    <img width={"40px"} src="images/dices/ADSAarmy.png" />
                                    <span className={styles.counter}>{ getCountPercentage(DiceType.Army, Side.SauronForces) }%</span>
                                </div>
                                <div className="m-1">
                                    <img width={"40px"} src="images/dices/ADSAeye.png" />
                                    <span className={styles.counter}>{ getCountPercentage(DiceType.Eye, Side.SauronForces) }%</span>
                                </div>
                            </div>
                        </div> 
                    </Col>
                </Row>
            </Container>
        }
    </>)
}