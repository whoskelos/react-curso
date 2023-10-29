import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App () {
    return (
        <div className='App'>
            <TwitterFollowCard 
                initialIsFollowing={true} 
                userName="whoskelos" 
                name="Kelvin Guerrero" 
            />
            <TwitterFollowCard 
                userName="tenkkah" 
                name="Aitor" 
            />
            <TwitterFollowCard 
                userName="AdriannGarzonn" 
                name="Eladri Carrion" 
            />
        </div>
    )
}