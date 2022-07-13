import styled from "styled-components";

export const ChooseElementsStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 40px 0 80px;
`

export const AdultStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin-right: 15px;
`

export const BabyStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin-left: 15px;
`

export const ChooseElementStyled = styled.div`
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  color: #028CA6;
`

export const ChooseElementImageStyled = styled.img`
  margin-top: 20px;
  transition: all .3s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all .4s ease;
  }
`
export const ChooseElementContainerListsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-grow: inherit;
  flex: auto;
`

export const ChooseElementListStyled = styled.div`
  background: rgba(255, 255, 255, 0.7);
  border: 2px solid #068CA6;
  box-shadow: 0 4px 4px rgba(6, 140, 166, 0.31);
  border-radius: 10px;
  margin: 10px 0 15px;
  padding: 15px 20px;
`

export const ChooseElementListItemStyled = styled.p`
  font-weight: 400;
  font-size: 21px;
  line-height: 27px;
`