import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import MainHeader from "../component/Headers/index";
import NavBar from "../component/NavBars/NavBar";
import MainFooter from "../component/Footer/index";
import ContentEditParticipant from "../../src/component/Content/Participant/Edit/index";

function EditParticipantPage({ link, title, user, imgPath, imgTitle }) {
  return (
    <Container>
      <HeaderContainer>
        <MainHeader
          href={link}
          titleName={title}
          userName={user}
          imgSrc={imgPath}
          imgName={imgTitle}
        />
      </HeaderContainer>
      <NavContainer>
        <NavBar />
      </NavContainer>
      <ContentContainer>
        <ContentEditParticipant />
      </ContentContainer>
      <FooterContainer>
        <MainFooter />
      </FooterContainer>
    </Container>
  );
}

export default EditParticipantPage;

//Proptypes
EditParticipantPage.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  user: PropTypes.string,
  imgPath: PropTypes.string,
  imgTitle: PropTypes.string,
};

//Styling

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 120px);
  grid-template-rows: repeat(9, 120px);
`;

const HeaderContainer = styled.div`
  grid-column: 1 / 16;
  grid-row: 1 / 2;
  z-index: 1;
`;
const NavContainer = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 10;
  z-index: 2;
`;
const ContentContainer = styled.div`
  grid-column: 3 / 16;
  grid-row: 2 / 9;
`;

const FooterContainer = styled.div`
  grid-column: 1 / 16;
  grid-row: 9 / 10;
  z-index: 1;
`;
