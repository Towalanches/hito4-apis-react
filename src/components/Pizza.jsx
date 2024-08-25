import React, { useState, useEffect } from 'react'

const Pizza = () => {
    const [pizza, setPizza] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPizza = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/pizzas/P001')
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`)
                }
                const data = await response.json()
                setPizza(data)
            } catch (error) {
                console.error('Error fetching pizza:', error)
                setError('Hubo un problema al cargar la pizza.')
            }
        }

        fetchPizza()
    }, [])

    return (
        <div>
            {error ? (
                <p>{error}</p>
            ) : (
                pizza && (
                    <div>
                        <h1>{pizza.name}</h1>
                        <img src={pizza.img} alt={pizza.name} />
                        <p>{pizza.desc}</p>
                        <h3>Ingredientes:</h3>
                        <ul>
                            {pizza.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <p><strong>Precio: </strong>${pizza.price}</p>
                        <button>Añadir al carrito</button>
                    </div>
                )
            )}
        </div>
    )
}

export default Pizza
