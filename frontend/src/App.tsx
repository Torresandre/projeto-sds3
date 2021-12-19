import DataTable from 'components/dataTable';
import Footer from 'components/footer';
import NavBar from 'components/NavBar';
import React from 'react';


function App() {
  return (
    <>
    <NavBar/>
    <div className='container'>
      <DataTable/>
    </div>
    <Footer/>
    </>
    
  );
}

export default App;
