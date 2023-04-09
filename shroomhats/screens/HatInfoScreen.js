import RenderHat from '../features/hats/RenderHat';

const HatInfoScreen = ({ route }) => {
    const { hat } = route.params;
    return <RenderHat hat={hat} />
};

export default HatInfoScreen;