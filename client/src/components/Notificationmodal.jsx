import React, { useState } from "react";
import { IoClose } from "react-icons/io5"; 
import { MdNotifications } from "react-icons/md";
import * as ScrollArea from '@radix-ui/react-scroll-area';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';


const Notificationmodal = ()=>{
    const List = [

        { id: 1, message: "Your leave application is apporved",profile:"leave.svg", time: "2H" },
        { id: 2, message: "Notification 2", time: "3H" },
        { id: 3, message: "Your leave application is apporved",profile:"leave.svg", time: "2H" },
        { id: 4, message: "Notification 2", time: "3H" },
        { id: 5, message: "Your leave application is apporved gtggggggggb h hhh h yyyyy y",profile:"leave.svg", time: "2H" },
        { id: 6, message: "Notification 2", time: "3H" },
        { id: 3, message: "Your leave application is apporved",profile:"leave.svg", time: "2H" },
        { id: 4, message: "Notification 2", time: "3H" },
        { id: 5, message: "Your leave application is apporved gtggggggggb h hhh h yyyyy y",profile:"leave.svg", time: "2H" },
        { id: 6, message: "Notification 2", time: "3H" },

      ];
    
      const [notificationList, setNotificationList] = useState(List);
      const [open, setOpen] = useState(false);

    
    
    
    
      const removeNotification = (index) => {
        const updatedList = notificationList.filter((_, i) => i !== index);
        setNotificationList(updatedList);
      };

      const renderProfileImage = (profile) => {
        return profile ? (
          <img src={profile} alt="Profile" className="profile-image" />
        ) : (
          <MdNotifications size="1.5em" color="#333" />
        );
      };

      return (
        <DropdownMenu.Root
          open={open}
          className="modal-wrapper"
          onOpenChange={(isOpen) => {
            setOpen(isOpen);
            document.body.classList.toggle('modal-open', isOpen);
          }}
        >
        <DropdownMenu.Trigger asChild>
          <button className="IconButton notification hidden md:flex items-center mr-3 rounded-full p-2 cursor-pointer" aria-label="Customise options">
            <MdNotifications size="1.5em" color="white" />
          </button>
        </DropdownMenu.Trigger>
  
        <DropdownMenu.Portal>
          <DropdownMenu.Content className="DropdownMenuContent modal-content" sideOffset={5}>
            <ScrollArea.Root className="ScrollAreaRoot">
              <ScrollArea.Viewport className="ScrollAreaViewport">
                <div style={{ padding: '15px 20px' }}>
                  <div className="header">
                  <div className="Text">Notifications
                  </div>
                  <button className="close-button">
                    <IoClose size="1.5em" color="#333" onClick={() => setOpen(false)} />
                  </button>
                  </div>
                    {notificationList.map((notification,index) => (
                      <div className="Tag notification-item" key={notification}>
                        <div className="profile-wrapper">
                          {renderProfileImage(notification.profile)}
                        </div>
                        <div className="notification-content">
                          <p>{notification.message}</p>
                        </div>
                        <button className="close-notification" onClick={()=>removeNotification(index)}>
                          <IoClose size="1.5em" color="#333" />
                        </button>
                      </div>
                    ))}
                  </div>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
                  <ScrollArea.Thumb className="ScrollAreaThumb" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
                  <ScrollArea.Thumb className="ScrollAreaThumb" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Corner className="ScrollAreaCorner" />
              </ScrollArea.Root>
              <DropdownMenu.Arrow className="DropdownMenuArrow" />
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

      );

    
}
export default Notificationmodal;