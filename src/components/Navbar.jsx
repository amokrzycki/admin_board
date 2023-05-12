import React, { useEffect } from "react";
import { CgMenu } from "react-icons/cg";
import { BsCart } from "react-icons/bs";
import { IoMdChatbubbles } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, func, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={func}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        func={() => {
          setActiveMenu((prevActiveMenu) => !prevActiveMenu);
        }}
        color={currentColor}
        icon={<CgMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          func={() => {
            setActiveMenu(() => handleClick("cart"));
          }}
          color={currentColor}
          icon={<BsCart />}
        />
        <NavButton
          title="Chat"
          dotColor="red"
          func={() => {
            setActiveMenu(() => handleClick("chat"));
          }}
          color={currentColor}
          icon={<IoMdChatbubbles />}
        />
        <NavButton
          title="Notifications"
          dotColor="red"
          func={() => {
            setActiveMenu(() => handleClick("notification"));
          }}
          color={currentColor}
          icon={<IoMdNotificationsOutline />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="avatarimg"
            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>
              <span className="text-gray-400 font-bold ml-1 text-14">
                Adrian
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
