import { Typography } from "@mui/material"
import { useEffect, useState } from "react"

const Filter = ({setRegex}) => {
    const [filter, setFilter] = useState('')

    const escapeRegex = (string) => {
        return string.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&')
    }
    
    useEffect(() => {
        const regex = new RegExp(`^(${escapeRegex(filter)})`, 'i')
        setRegex(regex)
    }, [filter])
    
    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    return (
        <Typography variant="h6">
            Filter for: <input value={filter} onChange={handleFilterChange} />
        </Typography>
    )
}

export default Filter