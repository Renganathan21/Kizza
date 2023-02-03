import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { CreateContainer, Header, MainContainer } from './components';
import {AnimatePresence} from 'framer-motion';

export const App = () => {
  return (
    <AnimatePresence mode='wait'>
      <div className='w-screen h-auto flex flex-col bg-primary'>
      <Header />
      <main className='mt-14 md:mt-20 px-4 py-4 w-full'>
        <Routes>
          <Route path='/*' element={<MainContainer />}></Route>
          <Route path='/createItem' element={<CreateContainer />}></Route>
        </Routes>
      </main>
    </div>
    </AnimatePresence>
    
  )
}
export default App;
