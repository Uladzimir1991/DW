import {
    ChooseElementsStyled,

} from "./SectionWithChooseElements.styled";
import {AdultContainer} from "./AdultContainer";
import {BabyContainer} from "./BabyContainer";
import {FC} from "react";

export const SectionWithChooseElementsContainer: FC = ({pageData, setPhoto, setPhotoTitle}: any) => {
    return (
        <ChooseElementsStyled>
            <AdultContainer setPhotoTitle={setPhotoTitle} setPhoto={setPhoto} pageData={pageData} />
            <BabyContainer setPhotoTitle={setPhotoTitle} setPhoto={setPhoto} pageData={pageData} />
        </ChooseElementsStyled>
    )
}