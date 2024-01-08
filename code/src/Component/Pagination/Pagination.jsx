import React from "react";
import { useGlobalDataProvider } from "../Context/Context";
import './style.css';

const Pagination = () => {
    const {pages, totalPages, fetchDataByPageNo} = useGlobalDataProvider();
    
    if(!totalPages){
        return <></>
    }

    return (

        <div className="Pagination">
            <div className={["pagination-button"]}>
                <button onClick={()=> fetchDataByPageNo(pages-1)} disabled={pages?false: true}>Prev</button>
            </div>

            <div className="page-field-info">
                <span>{`${pages+1} of ${totalPages}`}</span>
            </div>

            <div className={["pagination-button"]}>
                <button onClick={()=> fetchDataByPageNo(pages+1)} disabled={pages==totalPages-1?true: false}>Next</button>
            </div>
        </div>

    )
}

export default Pagination;