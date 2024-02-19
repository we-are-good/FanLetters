import React from "react";
import { Tab, TabsWrapepr } from "../styles/TabStyle";
import { useSelector, useDispatch } from "react-redux";
import { setMember } from "../redux/modules/member";

function Tabs() {
  const activeMember = useSelector((state) => state.member);
  const dispatch = useDispatch();

  const onActiveMember = (event) => {
    if (event.target === event.currentTarget) return;
    dispatch(setMember(event.targe.value));
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
