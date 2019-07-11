import { createAppContainer, createStackNavigator } from 'react-navigation';
import Main from './pages/Main';
import User from './pages/User';
import GitPage from './pages/User/gitPage';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Main,
            User,
            GitPage,
        },
        {
            headerLayoutPreset: 'center',
            headerBackTitleVisible: 'false', // esconder o voltar do IOS
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: '#7159c1',
                },
                headerTintColor: '#fff',
            },
        }
    )
);

export default Routes;
