
// import './App.css';
import FormUserDetails from './components/FormUserDetails';
import ButtonAppBar from './components/AppBar';
import StepForm from './components/StepForm';
import LinaerStepper from './components/LinaerStepper';


function App() {
  return (
    <div className="App">
     <ButtonAppBar/>
     {/* <FormUserDetails/> */}
     {/* <StepForm/> */}
     <LinaerStepper mt={4}/>
    </div>
  );
}

export default App;
