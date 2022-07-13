import React, {FC, ReactPropTypes} from 'react';
import {
    AdultStyled,
    ChooseElementImageStyled,
    ChooseElementStyled,
    ChooseElementListStyled,
    ChooseElementListItemStyled,
    ChooseElementContainerListsStyled
} from "./SectionWithChooseElements.styled";

export const AdultContainer = ({pageData, setPhoto, setPhotoTitle}: any) => {
    const AdultPhoto = '../../../adult.png';
    const handlerForItems = () => {
        setPhoto(AdultPhoto);
        setPhotoTitle(pageData.adult)
    };
    return (
        <AdultStyled>
            <ChooseElementStyled>{pageData.adult}</ChooseElementStyled>
            <ChooseElementImageStyled onClick={() => handlerForItems()} src={AdultPhoto} alt='adult' />
            <ChooseElementContainerListsStyled>
                <ChooseElementListStyled>
                    <ChooseElementListItemStyled>{pageData.adultItem1}</ChooseElementListItemStyled>
                </ChooseElementListStyled>
                <ChooseElementListStyled>
                    <ChooseElementListItemStyled>{pageData.adultItem2}</ChooseElementListItemStyled>
                </ChooseElementListStyled>
                <ChooseElementListStyled>
                    <ChooseElementListItemStyled>{pageData.adultItem3}</ChooseElementListItemStyled>
                </ChooseElementListStyled>
            </ChooseElementContainerListsStyled>
        </AdultStyled>
    )
}