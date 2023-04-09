import { useState } from 'react';
import { HATS } from '../shared/hats';
import DirectoryScreen from './DirectoryScreen';
import HatInfoScreen from './HatInfoScreen';
import Header from '../components/headercomponent';
import Footer from '../components/footercomponent';

const Main = () => {
    const [hats, setHats] = useState(HATS);
    const [selectedHatId, setSelectedHatId] = useState();

    return (
        <>
            <Header />
            <DirectoryScreen 
                hats={hats}
                onPress={(hatId) => setSelectedHatId(hatId)}
                />
            <HatInfoScreen
                hat={
                    hats.filter(
                        (hat) => hat.id === selectedHatId
                    )[0]
                }
            />
            <Footer />
        </>
    );
    
};

export default Main;