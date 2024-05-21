import { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";

const AdatContext = createContext();

export const AdatProvider = ({children}) => {
    const [szavakLista, setSzavakLista] = useState([]);
    const [temaLista, setTemaLista] = useState([]);

    const getLista = async (vegpont, callBack) => {
        const { data } = await axios.get(vegpont);
        callBack(data);

    }

    useEffect( () => {
        getLista("/szavak" , setSzavakLista);
        getLista("/tema" , setTemaLista);
    }, []);

    return(
        <AdatContext.Provider value = {{ szavakLista , temaLista}}>
            {children}
        </AdatContext.Provider>

    );
 

}

export default function useAdatContext(){
    return useContext(AdatContext);

}