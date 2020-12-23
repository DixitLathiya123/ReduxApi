import React,{useEffect} from 'react'
import { fetchUsers } from './Action'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function User() {

    const dispatch = useDispatch()
    const state = useSelector(state => state)
    console.log(state);

    useEffect(() => {
        if(state.user.length === 0){
            dispatch(fetchUsers())
        }
    }, [])

    return (
        <div>
            {state.loading ? <h1> Loading</h1> :

                state.error ? <h1>{state.error}</h1> :

                    <div>
                        <h2>User Lists</h2>
                        <div>
                            {
                                state && state.user && state.user.map(user => <h3>{user.name}</h3>)
                            }
                        </div>
                    </div>
            }
            <Link to="/">Back</Link>
        </div>
    )
}

export default User
