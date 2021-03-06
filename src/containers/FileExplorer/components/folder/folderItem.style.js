import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const FolderMenuTrigger = styled.div`
  margin: 0px 5px;
  border-radius: 5%;
  display: grid;
  grid-template-columns: 30% 70%;
  font-family: "Montserrat", sans-serif;
  justify-content: center;
  align-items: center;
  &:hover {
         opacity: 0.25;

  }

  &.active {
          opacity: 0.25;

  }
  img{
   align-self: center;
  justify-self: center;
  }
`;

export const AwesomeIcon = styled(FontAwesomeIcon)`
  align-self: center;
  justify-self: center;
`;

export const FolderInfo = styled.div`
  h2 {
    font-size: 24px;
    font-wieght: bold;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  h3 {
    font-size: 12px;
  }
  display: flex;
  flex-direction: column;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
