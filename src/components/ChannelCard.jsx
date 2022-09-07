import { Link } from "react-router-dom"
import {Box, Typography,Card,CardContent,CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoProfilePicture } from "../utils/constants"

const ChannelCard = ({channelDetail,  marginTop}) => {
  console.log(channelDetail?.snippet?.thumbnails?.high?.url)
 return  (
    <Box sx={{boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'cener', alignItems: 'center', width: {xs: '356px', md: '320px'}, height: '326px', margin: 'auto',marginTop}}>


      <Link to={`/channel/${channelDetail?.id?.channelId}`}>

        <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff'}} >
          <CardMedia component="img" 
          image="https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s800-c-k-c0xffffffff-no-rj-mo"
          alt={channelDetail?.snippet?.title}
           sx={{borderRadius: '50%', height: '180px', width: '180px'}}/>
          
         <Typography variant="h6">{channelDetail?.snippet?.title}
         <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px'}} />
         </Typography>
         {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
        </CardContent>
      </Link>
    </Box>
  )
   }

export default ChannelCard