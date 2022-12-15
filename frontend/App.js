import { NavigationContainer } from "@react-navigation/native"
import "./src/App.css"
import MainPage from "./src/views/MainPage"
import MovieDetails from "./src/views/MovieDetails"
import ProfilePage from "./src/views/ProfilePage";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from "./src/views/Register";
import LoginPage from "./src/views/LoginPage";
import Auth from "./src/views/Auth";
import Feed from "./src/views/Feed";


export default function App() {
  
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainPage} options={{title:'Home'}}/>
        <Stack.Screen name="Details" component={MovieDetails} options={{title:'Details'}}/>
        <Stack.Screen name="Profile" component={ProfilePage} options={{title:'Profile'}}/>
        <Stack.Screen name="Register" component={Register} options={{title:'Register'}}/>
        <Stack.Screen name="Login" component={LoginPage} options={{title:'Login'}}/>
        <Stack.Screen name="Auth" component={Auth} options={{title:'Auth'}}/>
        <Stack.Screen name="Feed" component={Feed} options={{title:'Updates'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
