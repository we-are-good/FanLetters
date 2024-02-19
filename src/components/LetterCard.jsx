import React from "react";
import {
  AvatarFigure,
  Content,
  LetterWrapper,
  NicknameAndData,
  UserInfo,
} from "../styles/LetterCardStyle";
import letterimage from "../assets/letterimage.png";
import { useNavigate } from "react-router-dom";
import { getFormattedDate } from "../util/date";

function LetterCard({ letter }) {
  const { id, avatar, nickname, createdAt, content } = letter;

  const navigation = useNavigate();
  return (
    <LetterWrapper onClick={() => navigation(`/detail/${id}`)}>
      <UserInfo>
        <AvatarFigure>
          <img src={avatar ?? letterimage} alt="아바타이미지" />
        </AvatarFigure>
        <NicknameAndData>
          <p>{nickname}</p>
          <time>{getFormattedDate(createdAt)}</time>
        </NicknameAndData>
      </UserInfo>
      <Content>{content}</Content>
    </LetterWrapper>
  );
}

export default LetterCard;
