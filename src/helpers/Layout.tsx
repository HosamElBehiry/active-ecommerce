import { Fragment, useState } from "react";
import Header from "@/components/Layout/Header";
import Menu from "@/components/Layout/Menu/Menu";
import Offcanvas from "@/components/Layout/Offcanvas";
import TopHeader from "@/components/Layout/TopHeader";
import BottomMenu from "@/components/Layout/Menu/BottomMenu";
import * as Interfaces from "@/interfaces/Layout.interface";
import TopFooter from "@/components/Layout/TopFooter";
import Footer from "@/components/Layout/Footer";
import BottomFooter from "@/components/Layout/BottomFooter";

function Layout(props: Interfaces.Actions | Interfaces.Layout) {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <TopHeader />
      <Header setToggle={setToggle} />
      <Offcanvas toggle={toggle} setToggle={setToggle} />
      <Menu />
      {props.children}
      <TopFooter />
      <Footer />
      <BottomFooter />
      <BottomMenu />
    </Fragment>
  );
}

export default Layout;
