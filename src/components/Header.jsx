import React from "react";
import { Banner, Title } from "../styles/HeaderStyle";
import Tabs from "./Tabs";

function Header({ activeMember, setActiveMember }) {
  return (
    <Banner>
      <Title> Artist FanLetters </Title>
      <Tabs activeMember={activeMember} setActiveMember={setActiveMember} />
    </Banner>
  );
}

export default Header;
