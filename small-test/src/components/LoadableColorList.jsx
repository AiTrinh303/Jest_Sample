import {useState, useEffect} from 'react'

const fakeFetchColors = () => Promise.resolve(['red', 'green', 'blue']);


const LoadableColorList = () => {
    const [colors, setColors] = useState([])

    useEffect(() => {
        fakeFetchColors().then(c => setColors(c))
    }, [])

    const renderedColors = colors.map(color => <li key={color}>{color}</li>)

    return (<ul>{renderedColors}</ul>)
}

export default LoadableColorList