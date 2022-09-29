import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { Main } from './screens/Main/Main';
import { RootStackParamList } from './types';

type AppScreenProps = NativeStackScreenProps<RootStackParamList, 'Logout'>
const App: React.FC<AppScreenProps> = (props) => {
  return (
    <Main />
  )
}
  
export default App;