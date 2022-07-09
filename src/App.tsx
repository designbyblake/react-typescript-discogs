import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loading } from 'components/Loading';
import { SelectUser, Collection } from 'views';

import './App.css';
import { Layout } from 'views/Layout/Layout';

export const App = (): JSX.Element => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<SelectUser />} />
          <Route path='/collection/:userName' element={<Collection />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
