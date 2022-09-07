import { Link } from "react-router-dom"
import { Typography,Card,CardContent,CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl,demoChannelUrl,demoChannelTitle } from "../utils/constants"
const VideoCard = ({video: {id:{videoId},snippet}}) => {
console.log()

  return (
    <Card sx={{width: {md: '320px', xs: '100%'}, boxShadow: 'none'}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia     component="img" image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={snippet?.title} sx={{width: 358, height:180}} />      </Link>
       <CardContent sx={{backgroundColor: "#1e1e1e", height: '100px'}} >

       <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" sx={{fontWeight: "bold", color: "white"}}>

          {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
        </Typography>
        </Link><Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        <Typography variant="subtitle2" sx={{fontWeight: "bold", color: "gray"}}>
          {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
<CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px'}} />
        </Typography>
        </Link>
       </CardContent>
    </Card>
  )
}


export default VideoCard