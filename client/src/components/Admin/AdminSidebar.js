import React from 'react'
import './Admin.css'
import adminsidebarimg from '../../assets/images/adminsidebarimg.png'
import { RxDashboard } from "react-icons/rx";
import { MdPeopleAlt } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { TbTrolley } from "react-icons/tb";
import { MdAddModerator } from "react-icons/md";
import { AiFillInteraction } from "react-icons/ai";
function AdminSidebar() {
  return (
    <div>
      <div className='admin-sidebar-color'>
        <div className='admin-sidebar-logotext'>
            <img className='admin-sidebar-img' src={adminsidebarimg} alt='img'></img>&nbsp; &nbsp;
            Admin
        </div>
        <div className='mt-4'>
                <ol className='admin-sidebar-list'>
                    <li><RxDashboard/> Dashboard</li>
                    <li><MdPeopleAlt/> View User</li>
                    <li><GiReceiveMoney/> Transaction</li>
                    <li><TbTrolley/> Delivery Agent</li>
                    <li><MdAddModerator/> Moderator</li>
                    <li><AiFillInteraction/> Interaction</li>
                    <li>Guidelines</li>
                    <li>Logout</li>
                </ol> 
        </div>
      </div>
    </div>
  )
}

export default AdminSidebar
