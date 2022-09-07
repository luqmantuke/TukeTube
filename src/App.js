import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Box } from '@mui/material'
import { NavBar,Feed,VideoDetail,ChannelDetail,SearchFeed } from './components'

const App = () => {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor: '#000'}} >
    <NavBar />
    <Routes>
        <Route  path='/' exact element={<Feed />}/>
        <Route  path='/video/:id' exact element={<VideoDetail />}/>
        <Route  path='/channel/:id' exact element={<ChannelDetail />}/>
        <Route  path='/search/:searchTerm' exact element={<SearchFeed />}/>


    </Routes>


    </Box>
    
    </BrowserRouter>
  )
}

export default App