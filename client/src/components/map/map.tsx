import { fromLonLat } from 'ol/proj';
import 'ol/ol.css';
import { RMap, ROSM } from 'rlayers';
const center = fromLonLat([34.8, 32.056227]);
export default function Map(): JSX.Element {
  return (
    <div style={{ width: '50%', height: '75%', marginLeft: '100px' }}>
      {' '}
      <RMap
        width={'100%'}
        height={'300px'}
        initial={{ center: center, zoom: 11 }}
      >
        {' '}
        <ROSM />{' '}
      </RMap>{' '}
    </div>
  );
}
