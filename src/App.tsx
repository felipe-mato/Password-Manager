/* eslint-disable import/no-named-as-default */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable no-multi-spaces */
/* eslint-disable react/jsx-indent */
// import React, { useState } from 'react';
// import Header from './components/Header';
// import Form from './components/Form';
// import ServiceList from './components/ServiceList';
import './App.css';
import Form from './Components/Form/Form';
import MainComponent from './Components/Form/MainComponent';

function App() {
  return (
    <MainComponent />
  )
}

// codigo realizado com auxilio de Michelle Fernandes
// interface Service {
//   nomeServico: string;
//   login: string;
//   senha: string;
//   url: string;
// }

// function App() {
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [services, setServices] = useState<Service[]>([]);
//   const [hidePasswords, setHidePasswords] = useState(false);

//   const handleToggleForm = () => {
//     setIsFormVisible(!isFormVisible);
//   };

//   const handleFormCancel = () => {
//     setIsFormVisible(false);
//   };

//   const handleAddService = (service: Service) => {
//     setServices([...services, service]);
//     setIsFormVisible(false);
//   };

//   const handleRemoveService = (index: number) => {
//     const updatedServices = [...services];
//     updatedServices.splice(index, 1);
//     setServices(updatedServices);
//   };

//   const handleToggleHidePasswords = () => {
//     setHidePasswords(!hidePasswords);
//   };

//   return (
//     <div>
//       <Header
//         hidePasswords={ hidePasswords }
//         onToggleHidePasswords={ handleToggleHidePasswords }
//       />

//       {isFormVisible ? (
//         <Form onAddService={ handleAddService } onCancel={ handleFormCancel } />
//       ) : (
//         <button onClick={ handleToggleForm }>Cadastrar nova senha</button>
//       )}

//       {services.length === 0 ? (
//         <p>Nenhuma senha cadastrada</p>
//       ) : (
//         <ServiceList
//           services={ services }
//           hidePasswords={ hidePasswords }
//           onRemoveService={ handleRemoveService }
//         />
//       )}
//     </div>
//   );
// }

export default App;
