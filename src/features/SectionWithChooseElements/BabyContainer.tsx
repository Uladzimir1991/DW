import {FC} from 'react';
import {
    BabyStyled,
    ChooseElementImageStyled, ChooseElementListItemStyled,
    ChooseElementListStyled,
    ChooseElementStyled
} from "./SectionWithChooseElements.styled";
import React from "react";

export const BabyContainer = ({pageData, setPhoto, setPhotoTitle}: any) => {
    const babyPhoto: string = '../../../baby.png';
    const handlerForItems = () => {
        setPhoto(babyPhoto);
        setPhotoTitle(pageData.baby);
    };
    return (
        <BabyStyled>
            <ChooseElementStyled>{pageData.baby}</ChooseElementStyled>
            <ChooseElementImageStyled onClick={() => handlerForItems()} src={babyPhoto} alt='adult' />
            <ChooseElementListStyled>
                <ChooseElementListItemStyled>{pageData.babyItem1}</ChooseElementListItemStyled>
            </ChooseElementListStyled>
            <ChooseElementListStyled>
                <ChooseElementListItemStyled>{pageData.babyItem2}</ChooseElementListItemStyled>
            </ChooseElementListStyled>
        </BabyStyled>
    )
}