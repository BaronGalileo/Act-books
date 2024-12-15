import React from "react";
import "./styles.css"
import { useSelector } from "react-redux";
import { Cover } from "../../components/Cover/Cover";
import { BookPresentation } from "../../components/BookPresentation/BookPresentation"
import { Reviews } from "../../components/Reviews/Reviews";
import { Slider } from "../../components/Slider/Slider";

import { TestSlider} from '../../components/Test/TestSlider'
import { AdminPanel } from "../../components/AdminPanel/AdminPanel";
import { CardsBook } from "../../components/CardsBook/CardsBook";
import { Catalog } from "../../components/Catalog/Catalog";
import { TeamOfWizards } from "../../components/TeamOfWizards/TeamOfWizards";
import { Epilogue } from "../../components/Epilogue/Epilogue";


export const Book = () => {

    const isAuth = useSelector(state => state.auth)

    return(
        <div className="book">
            {isAuth.isAuth && 
            <div className="item item-admin" >
                <AdminPanel/>
            </div>}
            <div className="item cover" >
                <Cover/>
            </div>
            <div className="item bookPresentation" >
               <BookPresentation/> 
            </div>
            <div className="item" >
                <TestSlider/>
                
            </div>
            <div className="item" >
                <Reviews/>
            </div>
            <div className="item-catalog" >
                <Catalog/>
            </div>
            <div className="item" >
                <TeamOfWizards/>
                
            </div>
            <div className="item" >
                <Epilogue/>
            </div>
        </div>
    )
}