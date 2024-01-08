import React from "react";

const Reducer = (state, action) => {
    switch(action.type){
        case "GET_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "GET_STORIES": 
            return {
                ...state,
                hits: action.payload.hits,
                pages: action.payload.pages,
                totalPages: action.payload.totalPages,
                isLoading: false
            }
        case "REMOVE_POST":
            return{
                ...state,
                hits: state.hits.filter((cur)=> cur.objectID!=action.payload)
            }
        case "SET_QUERY":
            return{
                ...state,
                query: action.payload
            }
        case "SET_INITIALSTATE":
            return{
                ...action.payload
            }
    }
    return state;
}

export default Reducer;