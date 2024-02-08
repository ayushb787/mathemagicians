import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill} from 'react-icons/bs'
  import { MdEnergySavingsLeaf } from "react-icons/md";
  import { FaStore } from "react-icons/fa6";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <MdEnergySavingsLeaf   className='icon_header'/> Mathemagacians
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaStore  className='icon'/> Store 1
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaStore  className='icon'/> Store 2
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaStore  className='icon'/> Store 3
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaStore  className='icon'/> Store 4
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaStore  className='icon'/>  Store 5
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaStore  className='icon'/>  Store 6
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar