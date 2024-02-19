import React, { useState } from "react";
import AddForm from "../components/AddForm";
import Header from "../components/Header";
import { Container } from "../styles/HomeStyle";
import LetterList from "../components/LetterList";

function Home({ letters, setLetters }) {
  const [activeMember, setActiveMember] = useState("Ava Max");

  return (
    <div>
      <Container>
        <Header activeMember={activeMember} setActiveMember={setActiveMember} />
        <AddForm setLetters={setLetters} />
        <LetterList letters={letters} activeMember={activeMember} />
      </Container>
    </div>
  );
}

export default Home;
