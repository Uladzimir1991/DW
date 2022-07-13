import {FC, ReactNode, ReactPropTypes, SetStateAction, useEffect, useRef, useState} from "react";
import {
    RotateCarouselStyled,
    RotateSliderStyled,
    TitleForCarouselContainerStyled,
    ImageForCarouselContainerStyled,
    RotateCarouselDescriptionStyled,
} from "./Carousel.styled";
import {
    ChooseElementStyled,
} from "../SectionWithChooseElements/SectionWithChooseElements.styled";

export const CarouselContainer: FC = ({pageData, photo, photoTitle}: any) => {
    const [prop, setProp] = useState<string>('0');
    const handleMouseOver = (event, prop: string) => {
        if(event.target.nodeName === 'SPAN') {
            setProp(prop);
        }
    }
    return (
        <>
            <RotateSliderStyled>
                <RotateCarouselStyled>
                    <li className="item1">
                        <span onMouseLeave={() => setProp('0')} onMouseOver={(event) => handleMouseOver(event, '1')}>
                            <RotateCarouselDescriptionStyled className={prop === '1' ? 'description1' : 'hidden1'} prop={prop}>Сколиоз</RotateCarouselDescriptionStyled>
                        </span>
                    </li>
                    <li className="item2">
                        <span onMouseLeave={() => setProp('0')} onMouseOver={(event) => handleMouseOver(event, '2')}>
                            <RotateCarouselDescriptionStyled className={prop === '2' ? 'description2' : 'hidden2'} prop={prop}>Ограниченная способность поднимать руки и переносить предметы</RotateCarouselDescriptionStyled>
                        </span>
                    </li>
                    <li className="item3">
                        <span onMouseLeave={() => setProp('0')} onMouseOver={(event) => handleMouseOver(event, '3')}>
                            <RotateCarouselDescriptionStyled className={prop === '3' ? 'description3' : 'hidden3'} prop={prop}>Нарушения жевания и глотания</RotateCarouselDescriptionStyled>
                        </span>
                    </li>
                    <li className="item4">
                        <span onMouseLeave={() => setProp('0')} onMouseOver={(event) => handleMouseOver(event, '4')}>
                            <RotateCarouselDescriptionStyled className={prop === '4' ? 'description4' : 'hidden4'} prop={prop}>Дыхательная недостаточность/ респираторная дисфункция</RotateCarouselDescriptionStyled>
                        </span>
                    </li>
                    <li className="item5">
                        <span onMouseLeave={() => setProp('0')} onMouseOver={(event) => handleMouseOver(event, '5')}>
                            <RotateCarouselDescriptionStyled className={prop === '5' ? 'description5' : 'description5 hidden5'} prop={prop}>Неспособность бегать, изменение походки</RotateCarouselDescriptionStyled>
                        </span>
                    </li>
                    <li className="item6">
                        <span onMouseLeave={() => setProp('0')} onMouseOver={(event) => handleMouseOver(event, '6')}>
                            <RotateCarouselDescriptionStyled className={prop === '6' ? 'description6' : 'hidden6'} prop={prop}>Контрактура суставов</RotateCarouselDescriptionStyled>
                        </span>
                    </li>
                    <li className="item7">
                        <span onMouseLeave={() => setProp('0')} onMouseOver={(event) => handleMouseOver(event, '7')}>
                            <RotateCarouselDescriptionStyled className={prop === '7' ? 'description7' : 'hidden7'} prop={prop}>Вывих бедра</RotateCarouselDescriptionStyled>
                        </span>
                    </li>
                    <li className="item8">
                        <span onMouseLeave={() => setProp('0')} onMouseOver={(event) => handleMouseOver(event, '8')}>
                            <RotateCarouselDescriptionStyled className={prop === '8' ? 'description8' : 'hidden8'} prop={prop}>Утомляемость</RotateCarouselDescriptionStyled>
                        </span>
                    </li>
                </RotateCarouselStyled>
                <ImageForCarouselContainerStyled photo={photo} />
                <TitleForCarouselContainerStyled>
                    <ChooseElementStyled>
                        {photoTitle}
                    </ChooseElementStyled>
                </TitleForCarouselContainerStyled>
            </RotateSliderStyled>
        </>
    )
}