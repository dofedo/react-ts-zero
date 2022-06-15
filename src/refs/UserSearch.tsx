import { useState, useRef, useEffect } from "react"

const users = [
    {name: "sad", age: 20},
    {name: "ter", age: 12},
    {name: "das", age: 43},
]

export const UserSearch: React.FC = () => {
    
    const inputRef = useRef<HTMLInputElement | null>(null);

    const [name, setName] = useState('')

    const [user, getUser] = useState<{name: string, age: number} | undefined>()

    useEffect(() => {
        if(!inputRef.current) return;
        inputRef.current.focus()
    }, [])

    const onClick = () => {
        const search = users.find(user => {
            return user.name === name;
        })
        getUser(search)
    }

    return(
        <div>
            <h3>Search User</h3>

            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />

            <button onClick={onClick}>Search</button>

            <h4>
                { user && user.name }
            </h4>

        </div>
        

    )
}