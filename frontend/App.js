import { NavigationContainer } from "@react-navigation/native"
import "./src/App.css"
import MainPage from "./src/MainPage"
import MovieDetails from "./src/MovieDetails"
import ProfilePage from "./src/ProfilePage";
import {createNativeStackNavigator} from '@react-navigation/native-stack';


export default function App() {
  
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainPage} options={{title:'Home'}}/>
        <Stack.Screen name="Details" component={MovieDetails} options={{title:'Details'}}/>
        <Stack.Screen name="Profile" component={ProfilePage} options={{title:'Profile'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
