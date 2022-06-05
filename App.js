import { NavigationContainer } from '@react-navigation/native'
import RootStack from './navigations/RootStack'
import { AuthContext, AuthContextProvider } from './hooks/AuthContextProvider'

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </AuthContextProvider>
  )
}
