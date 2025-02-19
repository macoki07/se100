import React from 'react'

const users = [
    { name: 'Tom', country: 'Singapore' },
    { name: 'Jerry', country: 'Malaysia' },
    { name: 'Sarah', country: 'Indonesia' }
];

const WelcomeMessage = (props) => {
    return <li>Welcome {props.name} from {props.country}</li>
}

const WelcomeMessagesList = () => {
  return (
    <ul>
        {
            users.map(user => (
                <WelcomeMessage key={user.name} name={user.name} country={user.country} />
            ))
        }
    </ul>
  )
}

export default WelcomeMessagesList