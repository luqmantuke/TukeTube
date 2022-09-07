import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import {fetchFromAPI} from '../utils/fetchFromApi'
import {ChannelCard,Videos} from './index'

const ChannelDetail = () => {
  const {id} = useParams()
  const [channelDetail, setchannelDetail] = useState(null)
  const [videos, setVideos] = useState(null);

  useEffect(() => {
  fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=>setchannelDetail(data?.items[0]))
  fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`).then((data)=>setVideos(data?.items))

  }, [id])
  console.log(channelDetail, videos)
  return (
    <Box minHeight= '95vh' >
      
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }}  />
                <ChannelCard channelDetail={channelDetail} marginTop="-93px" />


      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
       </Box>
  )
}

export default ChannelDetail