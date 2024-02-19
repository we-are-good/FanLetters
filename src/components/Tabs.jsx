import React, { useState } from "react";
import { Tab, TabsWrapepr } from "../styles/TabStyle";

function Tabs({ activeMember, setActiveMember }) {
  const onActiveMember = (event) => {
    if (event.target === event.currentTarget) return;
    setActiveMember(event.target.textContent);
  };
  return (
    <div>
      <TabsWrapepr onClick={onActiveMember}>
        <Tab $activeMember={activeMember}>Ava Max</Tab>
        <Tab $activeMember={activeMember}>IU</Tab>
        <Tab $activeMember={activeMember}>Eminem</Tab>
        <Tab $activeMember={activeMember}>Rihanna</Tab>
      </TabsWrapepr>
    </div>
  );
}

export default Tabs;
