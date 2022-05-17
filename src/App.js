
import './App.css';
import CustomerForm from './components/CustomerForm'

import Hello from './components/Hello';

import { CustomerProvider} from './contexts/customer.jsx'


function App() {



  return (
    <>
    <CustomerProvider> 
      <Hello />
      <CustomerForm />
    </CustomerProvider>
    </>
  );
}

export default App;
