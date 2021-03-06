import React from 'react';
import styled from 'styled-components';
import bgImage from '../images/trio_vans.jpg';

const BannerWrapper = styled.div`
    margin: 0 2rem;
    position: relative;
`;

const Banner = styled.div`
    height: 50vh;
    background-image: url(${bgImage});
    background-size: cover;
    max-height: 400px;
`;
const Overlay = styled.div`
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.7);
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

const MusicPage = () => (
  <BannerWrapper>
    <Banner>
      <Overlay>
        <h1>Music</h1>
      </Overlay>
    </Banner>
  </BannerWrapper>
);

export default MusicPage;
