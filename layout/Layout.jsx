import { Fragment } from "react";
import { SideNavbar, ChatBot, NavBar } from "@/container";
import { TwinklingStars } from "@/components";
import { IconMeta, CommonMeta } from "@/components";
import { YandexMetrika } from "@/components";
function Layout({ children, isOpen, setIsOpen }) {
  return (
    <Fragment>
      <IconMeta></IconMeta>
      <CommonMeta></CommonMeta>
      {/* <YandexMetrika></YandexMetrika> */}
      <TwinklingStars></TwinklingStars>

      <SideNavbar isOpen={isOpen} setIsOpen={setIsOpen}></SideNavbar>
      <ChatBot></ChatBot>
      {children}
    </Fragment>
  );
}

export default Layout;
