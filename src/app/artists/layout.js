import React from 'react'

export const metadata = {
  title: 'Artists ',
  description: 'Get the best Artists in All over india',
  authors:[
    {name:"Rishabh",url:""}
  ],
  keywords:["Artists","BestArtists","Singers","Dancers","Speaker"]
}
const Layout = ({children}) => {
    
  return (
    <div>
        {children}
    </div>
  )
}

export default Layout