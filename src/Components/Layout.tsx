import Header from "./Header";
import Footer from "./Footer"; 
import { Fragment } from "react";

import { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren){

    return (
        <Fragment>
        <Header/>


        {props.children}

        <Footer/>
        </Fragment>
        
    )

    


}