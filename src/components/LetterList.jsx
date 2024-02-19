import React, { useContext } from "react";
import LetterCard from "./LetterCard";
import { ListWrapper } from "../styles/LetterCardStyle";
import { LetterContext } from "../context/LetterContext";
import { MemberContext } from "../context/MemberContext";

function LetterList() {
  const { letters } = useContext(LetterContext);
  const { activeMember } = useContext(MemberContext);

  const filteredLetters = letters.filter(
    (letter) => letter.writedTo === activeMember
  );
  return (
    <ListWrapper>
      {filteredLetters.length === 0 ? (
        <p>
          {activeMember}의 팬레터가 없습니다. 첫번째 팬체터의 주인공이
          되어보세요.
        </p>
      ) : (
        filteredLetters.map((letter) => (
          <LetterCard key={letter.id} letter={letter} />
        ))
      )}
    </ListWrapper>
  );
}

export default LetterList;
