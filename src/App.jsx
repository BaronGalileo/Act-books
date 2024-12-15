import React from 'react';
import { Book } from './Pages/Book/Book';
import { Route, Routes } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { LoginPage } from './Pages/LoginPage/LoginPage';
import { Notfoundpage } from './Pages/NotFoundPage/NotFoundPage';
import './index.css';
import { Layout } from './components/Layout/Layout';

function App() {

  const methods = useForm({
    mode: "onChange"
  })

  return (
    <div className="App">
      <FormProvider {...methods}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Book/>}/>
            <Route path="admin" element={<LoginPage/>}/>
            <Route path="*" element={<Notfoundpage/>}/>
          </Route>
        </Routes>
      </FormProvider>
    </div>
  );
}

export default App;
