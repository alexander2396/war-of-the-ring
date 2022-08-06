import './App.css';
import { AppMenu } from './features/menu/AppMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { selectRegions } from './features/gameSlice';
import { Region } from './models/region';
import { UnitType } from './models/unitType';

function App() {
  const regions = useAppSelector(selectRegions);
  const dispatch = useAppDispatch();
  
  

  function renderRegions(): any {
    const regionBlocks: any = [];

    regions.forEach((region) => {
        regionBlocks.push(<div className='regionArmy d-flex flex-row' 
            style={{ left: region.xposition, top: region.yposition }}>{renderRegionUnits(region)}</div>)
    })

    return regionBlocks;
  }

  function renderRegionUnits(region: Region): any {
    let regularBlock;
    if (region.units.some(x => x.type === UnitType.Regular)) {
        const imageUrl = region.units.find(x => x.type === UnitType.Regular).imageUrl;
        const count = region.units.filter(x => x.type === UnitType.Regular).length;
        regularBlock = <div className='unit d-flex flex-column'>
            <div><img style={{height: '65px'}} src={imageUrl} /></div>
            <div className="unitCount">{count}</div>
        </div>
    }

    let eliteBlock;
    if (region.units.some(x => x.type === UnitType.Elite)) {
        const imageUrl = region.units.find(x => x.type === UnitType.Elite).imageUrl;
        const count = region.units.filter(x => x.type === UnitType.Elite).length;
        eliteBlock = <div className='unit d-flex flex-column'>
            <div><img style={{height: '65px'}} src={imageUrl} /></div>
            <div className="unitCount">{count}</div>
        </div>
    }

    
    let leaderBlock;
    if (region.units.some(x => x.type === UnitType.Leader)) {
        const imageUrl = region.units.find(x => x.type === UnitType.Leader).imageUrl;
        const count = region.units.filter(x => x.type === UnitType.Leader).length;
        leaderBlock = <div className='unit d-flex flex-column'>
            <div><img style={{height: '65px'}} src={imageUrl} /></div>
            <div className="unitCount">{count}</div>
        </div>
    }

    return (
        [
            regularBlock,
            eliteBlock,
            leaderBlock
        ]
    );
  }

  return (
    <div className="App">
      <AppMenu/>
      <clipPath id="clip" >
        <polygon onClick={() => console.log('clicked')}
          points="50,0  61,35 98,35
                  68,57 79,91 50,70
                  21,91 32,57 2,35 39,35"/>
      </clipPath>

      <img className='board' src={require("./images/board.jpg")} useMap="#Map" />

      <map name="Map" id="Map">
        {/* <area href="#" shape="poly" onClick={() => console.log('clicked 1')} coords="730,100,784,104,805,165,1490,1028" /> */}
        <area className='region' shape="rect" onClick={() => console.log('clicked 1')} coords="916,120,1040,239" /></map>

        {renderRegions()}
    </div>
  );
}

export default App;
