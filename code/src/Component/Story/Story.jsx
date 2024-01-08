import React, { useEffect } from "react";
import { useGlobalDataProvider } from "../Context/Context";
import './style.css';

const Story = () => {


    const { query, hits, isLoading, removePost} = useGlobalDataProvider();

    if(isLoading){
        return(
            <>
                <h1>Loading ....</h1>
            </>
        )
    }

    return (
        <div className="Search-Results">
            {query? <div className="title">
                <h3>Results: {`"${query}"`}</h3>
            </div>: <></>}
            {hits.map((post)=>{

                const {title, objectID, author, num_comments, url} = post;

                return (
                    <div key={objectID} className={[`search-field ${objectID+1}`]}>
                        
                        <div className="field-title">
                            <div className="label-title">
                                <span>{title}</span>
                            </div>
                        </div>
                        
                        <div className="field-info">
                            <div className="field-author">
                                <div className="label-author">
                                    By<span>{` ${author}`}</span>
                                </div>
                            </div>

                            <div className="field-comments">
                                <div className="label-comments">
                                    <span>{`| ${num_comments} comments`}</span>
                                </div>
                            </div>
                        </div>

                        <div className="field-action">
                            <div className="link-read-more">
                                <a href={url} target="_blank">Read more</a>
                            </div>

                            <div className="button-remove">
                                <button onClick={() => removePost(objectID)}>Remove</button>
                            </div>
                        </div>

                    </div>
                )
            })}
            
        </div>
    )
}

export default Story;