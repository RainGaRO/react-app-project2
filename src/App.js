import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ColorModeContext, useMode } from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar'
import Dashboard from './scenes/dashboard'
import Team from './scenes/team/index'
import Invoices from './scenes/invoices/invoices'
import Contacts from './scenes/contacts/index'
import Calendar from './scenes/calendar/index'
import Form from './scenes/form/index'
import Bar from './scenes/bar/index'
import Line from './scenes/line/index'
import Pie from './scenes/pie'
import FAQ from './scenes/faq/index'
import Geo from './scenes/geo/index'

function App() {
  const [theme, colorMode] = useMode();
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <Sidebar />
          <main className='content'>
          <Topbar />
          <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/team' element={<Team />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/invoices' element={<Invoices />} />
              <Route path='/form' element={<Form />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/line' element={<Line />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/geography' element={<Geo />} />
          </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
