import { NavigationContainer } from "@react-navigation/native"
import "./src/App.css"
import MainPage from "./src/Views/MainPage"
import MovieDetails from "./src/Views/MovieDetails"
import ProfilePage from "./src/Views/ProfilePage";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from "./src/Views/Register";
import LoginPage from "./src/Views/LoginPage";
import Auth from "./src/Views/Auth";
import Feed from "./src/Views/Feed";


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
