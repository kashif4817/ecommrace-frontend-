import { Outlet } from 'react-router-dom';
import Sidebar from '../sideBar/Sidebar';
import NavBar from './Navbar';

const Home = () => {

    return (
        <div className="h-screen w-screen overflow-hidden">
            <div className="fixed top-0 left-0 w-full h-16 z-50 bg-white shadow-md">
                <NavBar />
            </div>

            <div className="flex pt-16 h-full">
                <div className="w-56 fixed top-16 left-0 h-[calc(100vh-4rem)]">
                    <Sidebar />
                </div>

                <div className="ml-56 flex-1 h-[calc(100vh-4rem)] overflow-y-auto p-4 bg-gray-100">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Home;
