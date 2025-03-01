import Sidebar from "./Sidebar";
import { useState } from "react";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";

function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(false);

  const toogleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className=' w-screen h-screen flex'>
      <Sidebar showMenu={showMenu} />
      {/* icono menu y icono close menu */}
      <div className='fixed bottom-2 right-2 lg:hidden'>
        <button className='' onClick={toogleMenu}>
          {showMenu ? (
            <RiCloseFill className='text-2xl p-3 rounded-full bg-secondary box-content' />
          ) : (
            <RiMenuFill className='text-2xl p-3 rounded-full bg-secondary box-content' />
          )}
        </button>
      </div>
      <main className='w-full lg:w-[calc(100vw-96px)] bg-bg_primary h-screen'>{children}</main>
    </div>
  );
}

export default Layout;
