import styled from "styled-components";

export const RotateSliderStyled = styled.div`
  max-width: 700px;
  height: 700px;
  display: block;
  position: relative;
  margin: 150px auto 50px;

   html.touch & {
       height: auto
   }

   &::-moz-selection {
       background: transparent;
       text-shadow: none
   }

  &::selection {
    background: transparent;
    text-shadow: none
  }
`

export const RotateCarouselStyled = styled.ul`
  width: 500px !important;
  height: 500px !important;
  padding: 0;
  margin: 0 auto;
  list-style: none;
  position: relative;
  z-index: 1;
  top: 4em;
  animation: carousel 100s infinite linear;

  @keyframes carousel {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes carouselItem {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
  & > li {
    position: absolute;
    z-index: 8
  }
  & > li > span {
    display: inline-block;
    width: 110px;
    cursor: pointer;
    height: 110px;
    transition: -webkit-transform 2s;
    transition: transform 2s;
    overflow: visible;
  }

  & > li > span > .hidden1 {
    opacity: 0;
    animation: carouselDescription1 100s infinite linear;
    z-index: -1;
  }

  & > li > span > .hidden2 {
    opacity: 0;
    animation: carouselDescription2 100s infinite linear;
    z-index: -1;
  }

  & > li > span > .hidden3 {
    opacity: 0;
    animation: carouselDescription3 100s infinite linear;
    z-index: -1;
  }

  & > li > span > .hidden4 {
    opacity: 0;
    animation: carouselDescription4 100s infinite linear;
    z-index: -1;
  }

  & > li > span > .hidden5 {
    opacity: 0;
    animation: carouselDescription5 100s infinite linear;
    z-index: -1;
  }

  & > li > span > .hidden6 {
    opacity: 0;
    animation: carouselDescription6 100s infinite linear;
    z-index: -1;
  }

  & > li > span > .hidden7 {
    opacity: 0;
    animation: carouselDescription7 100s infinite linear;
    z-index: -1;
  }

  & > li > span > .hidden8 {
    opacity: 0;
    animation: carouselDescription8 100s infinite linear;
    z-index: -1;
  }
  
  & > li > span > .description1 {
    width: 240px;
    ${({prop}) => prop === '1' ? 'opacity: 1;' : ''};
    animation: carouselDescription1 100s infinite linear;
    
    @keyframes carouselDescription1 {
      0% {
        top: -35%;
        left: 15%;
      }
      10% {
        top: -25%;
        left: 60%;
      }
      20% {
        top: -15%;
        left: 90%;
      }
      30% {
        top: 15%;
        left: 130%;
      }
      40% {
        top: 85%;
        left: 90%;
      }
      50% {
        top: 125%;
        left: 20%;
      }
      60% {
        top: 105%;
        left: -50%;
      }
      70% {
        top: 65%;
        left: -90%;
      }
      80% {
        top: 25%;
        left: -120%;
      }
      90% {
        top: -25%;
        left: -80%;
      }
      100% {
        top: -35%;
        left: 15%;
      }
    }
  }

  & > li > span > .description2 {
    width: 250px;
    animation: carouselDescription2 100s infinite linear;

    @keyframes carouselDescription2 {
      0% {
        top: -55%;
        left: 35%;
      }
      10% {
        top: -15%;
        left: 100%;
      }
      20% {
        top: 55%;
        left: 100%;
      }
      30% {
        top: 100%;
        left: 50%;
      }
      40% {
        top: 135%;
        left: -10%;
      }
      50% {
        top: 95%;
        left: -120%;
      }
      60% {
        top: 75%;
        left: -200%;
      }
      70% {
        top: 25%;
        left: -220%;
      }
      80% {
        top: -60%;
        left: -170%;
      }
      90% {
        top: -60%;
        left: -20%;
      }
      100% {
        top: -55%;
        left: 35%;
      }
    }
  }

  & > li > span > .description3 {
    width: 240px;
    top: 40%;
    right: -15%;
    animation: carouselDescription3 100s infinite linear;

    @keyframes carouselDescription3 {
      0% {
        top: 5%;
        left: 125%;
      }
      10% {
        top: 35%;
        left: 115%;
      }
      20% {
        top: 105%;
        left: 80%;
      }
      25% {
        top: 110%;
        left: 20%;
      }
      30% {
        top: 120%;
        left: -30%;
      }
      40% {
        top: 125%;
        left: -100%;
      }
      50% {
        top: 35%;
        left: -225%;
      }
      60% {
        top: -20%;
        left: -220%;
      }
      70% {
        top: -35%;
        left: -170%;
      }
      80% {
        top: -55%;
        left: -40%;
      }
      90% {
        top: -40%;
        left: 65%;
      }
      100% {
        top: 5%;
        left: 125%;
      }
    }
  }

  & > li > span > .description4 {
    width: 240px;
    top: 75%;
    right: 3%;
    animation: carouselDescription4 100s infinite linear;

    @keyframes carouselDescription4 {
      0% {
        top: 35%;
        left: 115%;
      }
      10% {
        top: 105%;
        left: 80%;
      }
      20% {
        top: 120%;
        left: -30%;
      }
      30% {
        top: 105%;
        left: -100%;
      }
      40% {
        top: 85%;
        left: -170%;
      }
      50% {
        top: -55%;
        left: -160%;
      }
      60% {
        top: -105%;
        left: -90%;
      }
      70% {
        top: -110%;
        left: -10%;
      }
      80% {
        top: -80%;
        left: 65%;
      }
      90% {
        top: -35%;
        left: 125%;
      }
      100% {
        top: 35%;
        left: 115%;
      }
    }
  }

  & > li > span > .description5 {
    width: 240px;
    top: 89%;
    right: 42%;
    animation: carouselDescription5 100s infinite linear;

    @keyframes carouselDescription5 {
      0% {
        top: 125%;
        left: -10%;
      }
      10% {
        top: 110%;
        left: -90%;
      }
      20% {
        top: 75%;
        left: -200%;
      }
      30% {
        top: 35%;
        left: -220%;
      }
      40% {
        top: -25%;
        left: -200%;
      }
      50% {
        top: -65%;
        left: -100%;
      }
      60% {
        top: -45%;
        left: 25%;
      }
      70% {
        top: -20%;
        left: 125%;
      }
      80% {
        top: 15%;
        left: 135%;
      }
      90% {
        top: 75%;
        left: 115%;
      }
      100% {
        top: 125%;
        left: -10%;
      }
    }
  }

  & > li > span > .description6 {
    width: 240px;
    bottom: 4%;
    left: 11%;
    animation: carouselDescription6 100s infinite linear;

    @keyframes carouselDescription6 {
      0% {
        top: 110%;
        left: -90%;
      }
      10% {
        top: 75%;
        left: -200%;
      }
      20% {
        top: -5%;
        left: -220%;
      }
      30% {
        top: -45%;
        left: -130%;
      }
      40% {
        top: -55%;
        left: -40%;
      }
      50% {
        top: -35%;
        left: 25%;
      }
      60% {
        top: 5%;
        left: 125%;
      }
      70% {
        top: 45%;
        left: 145%;
      }
      80% {
        top: 85%;
        left: 95%;
      }
      90% {
        top: 125%;
        left: -40%;
      }
      100% {
        top: 110%;
        left: -90%;
      }
    }
  }

  & > li > span > .description7 {
    width: 240px;
    top: 38%;
    left: -15%;
    animation: carouselDescription7 100s infinite linear;

    @keyframes carouselDescription7 {
      0% {
        top: 75%;
        left: -130%;
      }
      10% {
        top: 35%;
        left: -160%;
      }
      20% {
        top: -50%;
        left: -90%;
      }
      30% {
        top: -40%;
        left: 20%;
      }
      40% {
        top: -35%;
        left: 80%;
      }
      50% {
        top: 5%;
        left: 125%;
      }
      60% {
        top: 45%;
        left: 145%;
      }
      70% {
        top: 85%;
        left: 95%;
      }
      80% {
        top: 125%;
        left: -40%;
      }
      90% {
        top: 110%;
        left: -90%;
      }
      100% {
        top: 75%;
        left: -130%;
      }
    }
  }

  & > li > span > .description8 {
    width: 240px;
    top: 0;
    left: 0;
    animation: carouselDescription8 100s infinite linear;

    @keyframes carouselDescription8 {
      0% {
        top: -25%;
        left: -150%;
      }
      10% {
        top: -35%;
        left: -80%;
      }
      20% {
        top: -50%;
        left: 10%;
      }
      30% {
        top: 5%;
        left: 125%;
      }
      40% {
        top: 45%;
        left: 145%;
      }
      50% {
        top: 85%;
        left: 95%;
      }
      60% {
        top: 135%;
        left: 20%;
      }
      70% {
        top: 115%;
        left: -30%;
      }
      80% {
        top: 85%;
        left: -90%;
      }
      90% {
        top: 35%;
        left: -150%;
      }
      100% {
        top: -25%;
        left: -150%;
      }
    }
  }


  li > span > div {
    cursor: default;
  }
  
  & > li {
    animation: carouselItem 100s infinite linear;
  }
  
  & > li > span:before {
    content: '';
    position: absolute;
    background-size: auto;
  }
  & > li.active > span {
    background-position: -162px 0;
    transform: scale(1.25);
  }

  & > li.item1 {
    top: 0;
    left: 50%;
    margin-left: -66px;
    margin-top: -73px;
  }
  & > li.item1 > span:before {
    width: 110px;
    height: 110px;
    background-image: url(icons/carousel_ico1.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }
  & > li.item1 > span::after {
    content: '';
    position: absolute;
    left: -40px;
    top: -30px;
    width: 100px;
    height: 100px;
    background-image: url(icons/carousel_ico__cross.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }
  & > li.item2 {
    width: 130px;
    height: 130px;
    top: 0;
    right: 0;
  }
  & > li.item2 > span:before {
    width: 130px;
    height: 130px;
    background-image: url(icons/carousel_ico2.svg);
    background-size: auto;
    background-repeat: no-repeat;
  }
  & > li.item2 > span::after {
    content: '';
    position: absolute;
    left: -35px;
    top: -25px;
    width: 100px;
    height: 100px;
    background-image: url(icons/carousel_ico__cross.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }
  & > li.item3 {
    top: 40%;
    right: -15%;
  }
  & > li.item3 > span:before {
    width: 110px;
    height: 110px;
    background-image: url(icons/carousel_ico3.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }
  & > li.item3 > span::after {
    content: '';
    position: absolute;
    left: -40px;
    top: -30px;
    width: 100px;
    height: 100px;
    background-image: url(icons/carousel_ico__cross.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }
  & > li.item4 {
    top: 75%;
    right: 3%;
  }
  & > li.item4 > span:before {
    width: 110px;
    height: 110px;
    background-image: url(icons/carousel_ico4.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }
  & > li.item4 > span::after {
    content: '';
    position: absolute;
    left: -40px;
    top: -30px;
    width: 100px;
    height: 100px;
    background-image: url(icons/carousel_ico__cross.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }
  & > li.item5 {
    top: 89%;
    right: 42%;
  }
  & > li.item5 > span:before {
    width: 110px;
    height: 110px;
    background-image: url(icons/carousel_ico5.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }
  & > li.item5 > span::after {
    content: '';
    position: absolute;
    left: -40px;
    top: -30px;
    width: 100px;
    height: 100px;
    background-image: url(icons/carousel_ico__cross.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }
  & > li.item6 {
    bottom: 4%;
    left: 11%;
    margin-left: -60px;
    margin-bottom: -7px;
  }
  & > li.item6 > span:before {
    width: 110px;
    height: 110px;
    background-image: url(icons/carousel_ico6.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }
  & > li.item6 > span::after {
    content: '';
    position: absolute;
    left: -40px;
    top: -30px;
    width: 100px;
    height: 100px;
    background-image: url(icons/carousel_ico__cross.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }
  & > li.item7 {
    top: 38%;
    left: -15%;
  }
  & > li.item7 > span:before {
    width: 110px;
    height: 110px;
    background-image: url(icons/carousel_ico7.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }
  & > li.item7 > span::after {
    content: '';
    position: absolute;
    left: -40px;
    top: -35px;
    width: 100px;
    height: 100px;
    background-image: url(icons/carousel_ico__cross.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }
  & > li.item8 {
    top: 0;
    left: 0;
  }
  & > li.item8 > span:before {
    width: 110px;
    height: 110px;
    background-image: url(icons/carousel_ico8.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }
  & > li.item8 > span::after {
    content: '';
    position: absolute;
    left: -42px;
    top: -32px;
    width: 100px;
    height: 100px;
    background-image: url(icons/carousel_ico__cross.svg);
    background-size: contain;
    background-repeat: no-repeat;
  }
`

export const ImageForCarouselContainerStyled = styled.div`
  position: absolute;
  top: 22%;
  left: 28%;
  ${({photo: photo}) => photo ? `background: url(${photo}), linear-gradient(180deg, rgba(255, 255, 255, 0) 59.9%, #FFFFFF 85.42%);` : ''};
  background-position: center;
  opacity: 0.6;
  background-repeat: no-repeat;
  background-size: 116%;
  width: 315px;
  height: 315px;
  border-radius: 100%;
`

export const TitleForCarouselContainerStyled = styled.div`
  position: absolute;
  top: 55%;
  left: 40%;
`

export const RotateCarouselDescriptionStyled = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  transform: rotate(0);
  position: absolute;
`