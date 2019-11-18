import React, { useState, useEffect } from 'react';

const Card = props => {
    const [people, setPeople] = useState()

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://nemadywgu6.execute-api.us-west-2.amazonaws.com/prod/');
            const data = await response.json();
            setPeople(data);
        }
        
        getData();
        
    }, []);

    return (
        <>
                {   people &&
                    people.map((person, key) => (
                        <div className="card_container" key={key} >
                            <img src={ person.image } alt={ person.name } style={{ width: '3rem', margin: '1rem 0 1rem 0'}} />
                            <div className="card_details">
                                <h5>
                                    { person.name }
                                </h5>
                                <p>
                                    { person.age }
                                </p>
                                <p>
                                    { person.job }
                                </p>
                            </div>
                        </div>
                    ))
                }
        </>
    )
}

export default Card;