import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

function Layout(){
    return(
        <>
      <NavBar />  {/*  this navbar shere the ui accros the pages */}
      <Outlet />   {/*  this page actual which will be
                        rendered along with the anvbar */}
        </>
    )
}
export default Layout;