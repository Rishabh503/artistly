import React from 'react'

export const metadata = {
  title: 'Manager DashBoard ',
  description: 'Manage the Artists Requests in All over india',
  authors:[
    {name:"Rishabh",url:""}
  ],
  keywords:["Manager","Artists","BestArtists","Singers","Dancers","Speaker"]
}
const Layout = ({children}) => {
    
  return (
    <div>
        {children}
    </div>
  )
}

export default Layout