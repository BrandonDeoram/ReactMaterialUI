import './App.css';
import * as React from 'react';

import UserForm from './UserForm';
import { useState } from 'react';
import { ConfirmDetails } from './ConfirmDetails';

//Moving between pages



function App() {
  const handleNextStep = (values) => {
    setAllValues(prev => ({ ...prev, ...values }))
    setCurrentStep(prev => prev + 1);

  }
  const [allValues, setAllValues] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [<UserForm next={handleNextStep} />, <ConfirmDetails data={allValues} />];

  return (
    <div className='App'>
      {steps[currentStep]}
    </div>
  );
}


export default App;
