import React from 'react';

export default class ProductList extends React.Component {
    constructor(props) {
        super(props)

        this.data = [
            {
                "id": 1,
                "img_url": "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/propulsion-gel.jpg",
                "name": "Propulsion gel"
            },
            {
                "id": 2,
                "img_url": "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/weight-cube.jpg",
                "name": "Weight cube"
            },
            {   
                "id": 3,
                "img_url": "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/friendly-cube.jpg",
                "name": "A friend"
            },
            {
                "id": 4,
                "img_url": "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/portal-gun.jpg",
                "name": "Portal gun"
            },
            {
                "id": 5,
                "img_url": "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/defense-robot.jpg",
                "name": "Home-defense robot"
            },
            {
                "id": 6,
                "img_url": "https://classes.codingbootcamp.cz/assets/classes/workouts/aperture/cake.jpg",
                "name": "Cake (not a lie)"
            }
        ]
    }

    render() {
        return (
           <>
            {
                this.data.map((product, key) => (
                    <div key={key} className="product">
                        <img src={product.img_url} alt="" />
                        <div className="name">
                            {product.name}
                        </div>
                    </div>
                ))
            }
            </>
        )}
}