import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import * as React from 'react';
import { Main } from './src/screens/Main/Main';
import { RootStackParamList } from './types';

type AppScreenProps = NativeStackScreenProps<RootStackParamList, 'Logout'>
const App: React.FC<AppScreenProps> = (props) => {
  return (
    <NativeBaseProvider>
      <Main />
    </NativeBaseProvider>
  )
}
  
export default App;