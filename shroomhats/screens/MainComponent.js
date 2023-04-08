import { useState } from 'react';
import { HATS } from '../shared/hats';
import DirectoryScreen from './DirectoryScreen';

const Main = () => {
    const [hats, setHats] = useState(HATS);

    return <DirectoryScreen hats={hats} />;
};

export default Main;