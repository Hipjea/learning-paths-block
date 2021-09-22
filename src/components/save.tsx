import React, { useEffect, useState, FunctionComponent } from 'react';


const Save = ({ ...props }: any) => {
    const content = props.attributes.content;
    return (
        <div>
            { content && content.diplomas && 
                content.diplomas.map((row : any) => {
                return (
                    <>
                        <h3>{row.name}</h3>
                        { row.years && row.years.map((year : any) => {
                            return (
                                <>
                                    <h4>{year.name}</h4>
                                    { row.ue && row.ue.map((ue : any) => {
                                        return (
                                            <h5>{ue.name}</h5>
                                        )
                                    }) }
                                </>
                            )
                        }) }
                    </>
                )
            }) }
        </div>
    )
};

export default Save;