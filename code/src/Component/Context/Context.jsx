import React, {createContext, useContext, useReducer, useEffect} from "react";
import Reducer from "./Reducer";

const AppContext = createContext();

const initialState = {
    isLoading: false,
    query: "",
    totalPages: 0,
    page: 0,
    hits: []
}

const API = "http://hn.algolia.com/api/v1/search?";

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(Reducer, initialState);
    
    const fetchData = async (url) => {
        dispatch({type: "GET_LOADING", payload: {isLoading: true}})
        try {
            let res = await fetch(url);
            let proRes = await res.json();
            
            dispatch({type:"GET_STORIES", payload: {
                hits: proRes.hits,
                pages: proRes.page,
                totalPages: proRes.nbPages
            }})
        } catch (error) {
            console.log(error);
        }
    }

    const fetchDataByPageNo = async (pageNo) => {
        fetchData(`${API}query=${state.query}&page=${pageNo}`);
    }

    const removePost = (postId) => {
        dispatch({type: "REMOVE_POST", payload: postId});
    }

    const setQuery = (query) => {
        if (!query.target.value) {
            dispatch({type: "SET_INITIALSTATE", payload: {
                isLoading: false,
                query: "",
                totalPages: 0,
                page: 0,
                hits: []
        }})} else dispatch({type: "SET_QUERY", payload: query.target.value});
    }

    useEffect(()=>{
        if(state.query) fetchData(`${API}query=${state.query}`);
    }, [state.query]);

    return (
        <AppContext.Provider value={{...state, removePost, fetchDataByPageNo, setQuery}}>
            {children}
        </AppContext.Provider>
    );
}

const useGlobalDataProvider = () => {
    return useContext(AppContext);
}

export {useGlobalDataProvider, AppProvider};