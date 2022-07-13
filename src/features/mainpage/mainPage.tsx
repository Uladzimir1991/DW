import {FC, useState} from "react";
import {
    ContainerStyled,
    MainPageStyled,
    MainPageTitleStyled,
    MainPageChooseTitleStyled,
    InfoTitleStyled,
    InfoTitleBlueStyled,
} from "./mainPage.styled";
import {SectionWithChooseElementsContainer} from "../SectionWithChooseElements/SectionWithChooseElementsContainer";
import {CarouselContainer} from "../Carousel/CarouselContainer";

export const MainPageContainer = ({pageData}: any) => {
    const [photo, setPhoto] = useState<string>('../../../adult.png');
    const [photoTitle, setPhotoTitle] = useState<string>('Взрослый');
    return (
        <MainPageStyled>
            <ContainerStyled>
                <MainPageTitleStyled>{pageData.title}</MainPageTitleStyled>
                <MainPageChooseTitleStyled>{pageData.chooseTitle}</MainPageChooseTitleStyled>
                <SectionWithChooseElementsContainer setPhotoTitle={setPhotoTitle} setPhoto={setPhoto} pageData={pageData} />
                <InfoTitleStyled>{pageData.infoTitle1}<InfoTitleBlueStyled>{pageData.infoTitle2}</InfoTitleBlueStyled></InfoTitleStyled>
                <CarouselContainer photoTitle={photoTitle} photo={photo} pageData={pageData} />
            </ContainerStyled>
        </MainPageStyled>
    )
}
