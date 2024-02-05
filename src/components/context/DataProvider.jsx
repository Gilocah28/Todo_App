import React, { useEffect, useState } from 'react'
import DataContext from './DataContext'

const DataProvider = ({ children }) => {

    const [theme, setTheme] = useState(true)

    const handleToggle = () => {
        setTheme((prevTheme) => !prevTheme)
        localStorage.setItem('theme', JSON.stringify(!theme))
    }

    useEffect(() => {
        const dataTheme = JSON.parse(localStorage.getItem('theme')) ?? true
        setTheme(dataTheme)
    }, [])

    return (
        <DataContext.Provider
            value={{
                theme,
                handleToggle
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider
