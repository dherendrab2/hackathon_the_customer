import logo from './logo.svg';
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';


function App() {
  let arr = [7,9,2,3];
  let recentEngagementList = arr.map((item)=>{
    return(
      <div key={{item}}>
        <h5>Engagement on {item}</h5>
      </div>
    )
  })
  return (
  <>
  <div style ={{marginLeft :"10%", marginTop:"10%"}}>
    <Card sx={{ maxWidth: 500 , borderRadius: '25px', boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.1)"}}>
      <CardActionArea>
        <div style={{display:"flex",padding :"5%"}}>
          <div>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </div>
          <div style={{paddingLeft:"5%"}}>
              <div style={{marginTop:"-15px", color:"#AA2EAF"}}>
                <h3>Richard Rowan</h3>
              </div>
              <div>
                <h4>Persona, Department</h4>
              </div>
          </div>
          <div style={{paddingLeft:"15%", marginTop:"-15px"}}>
            <div>
              <h3>Engagement Level</h3>
            </div>
            <div>
              <p>some drop down will come here</p>
            </div>
          </div>
        </div>
        <Divider variant="middle" sx={{borderBottomWidth: 2, borderColor :"#E0E0E0"}} />
        <CardContent>
        <Box
        component="span"
        sx={{
          display: 'block',
          p: 1,
          m: 1,
          bgcolor: (theme) => (theme.palette.mode === '#37CAD3' ? '#37CAD3' : '#37CAD3'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'white' : 'white',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '300'
        }}
      >
        <div style={{display:"flex", justifyContent :"space-between" , alignItems:"center"}}>
          <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.75108 16.835C3.36357 17.2247 3.36444 17.8544 3.75304 18.243C4.14316 18.6332 4.77595 18.6323 5.16499 18.2411L5.54892 17.855C5.93643 17.4653 5.93556 16.8356 5.54696 16.447C5.15684 16.0568 4.52405 16.0577 4.13501 16.4489L3.75108 16.835ZM10.5 20.45C10.5 21.0023 10.9477 21.45 11.5 21.45C12.0523 21.45 12.5 21.0023 12.5 20.45V19.5C12.5 18.9477 12.0523 18.5 11.5 18.5C10.9477 18.5 10.5 18.9477 10.5 19.5V20.45ZM3.5 10.5C3.5 9.94771 3.05228 9.5 2.5 9.5H1.5C0.947715 9.5 0.5 9.94771 0.5 10.5C0.5 11.0523 0.947715 11.5 1.5 11.5H2.5C3.05228 11.5 3.5 11.0523 3.5 10.5ZM15.8713 6.39878C15.1259 5.6067 14.5 4.64068 14.5 3.55295V3.5C14.5 1.84315 13.1569 0.5 11.5 0.5C9.84315 0.5 8.5 1.84315 8.5 3.5V3.55295C8.5 4.64067 7.87415 5.6067 7.12866 6.39878C6.11989 7.47061 5.5 8.91102 5.5 10.5C5.5 13.81 8.19 16.5 11.5 16.5C14.81 16.5 17.5 13.81 17.5 10.5C17.5 8.91102 16.8801 7.47061 15.8713 6.39878ZM20.5 9.5C19.9477 9.5 19.5 9.94771 19.5 10.5C19.5 11.0523 19.9477 11.5 20.5 11.5H21.5C22.0523 11.5 22.5 11.0523 22.5 10.5C22.5 9.94771 22.0523 9.5 21.5 9.5H20.5ZM17.44 16.46C17.0531 16.8469 17.0522 17.474 17.438 17.8619L17.827 18.253C18.2149 18.6432 18.846 18.644 19.235 18.255C19.624 17.866 19.6232 17.2349 19.233 16.847L18.8419 16.458C18.454 16.0722 17.8269 16.0731 17.44 16.46Z" fill="white"/>
          </svg>

          <div style={{marginLeft:"-15%"}}>Richard Opened 4 consecutive mails</div>
          <div>Nudge SDR <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7839 1.944L14.2564 0.416504L8.20052 6.47234L2.14469 0.416504L0.617188 1.944L6.67302 7.99984L0.617188 14.0557L2.14469 15.5832L8.20052 9.52734L14.2564 15.5832L15.7839 14.0557L9.72802 7.99984L15.7839 1.944Z" fill='white'/></svg>
          </div>
        </div>
      </Box>
        <div style={{display:"flex",margin:"5%"}}>
          <div style={{textAlign:"center"}}>
            <div>EMAILS RECEIVED</div>
            <div style={{fontWeigth:"700", fontSize:"32px" , color:"#21DA8C"}}>24</div>
          </div>
          <div style={{textAlign:"center"}}>
            <div>EMAILS OPENED</div>
            <div style={{fontWeigth:"700", fontSize:"32px" , color:"#21DA8C"}}>19</div>
          </div>
          <div style={{textAlign:"center"}}>
            <div>EMAILS REPLIED</div>
            <div style={{fontWeigth:"700", fontSize:"32px" , color:"#21DA8C"}}>2</div>
          </div>
          <div style={{textAlign:"center"}}>
            <div>EVENTS ATTENDED</div>
            <div style={{fontWeigth:"700", fontSize:"32px" , color:"#21DA8C"}}>40</div>
          </div>
          <div style={{textAlign:"center"}}>
            <div>EVENT REGISTERED</div>
            <div style={{fontWeigth:"700", fontSize:"32px" , color:"#21DA8C"}}>5</div>
          </div>
          <div style={{marginTop:"5%"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
              <g filter="url(#filter0_d_17_5427)">
                <path d="M4.5 12C4.5 5.37258 9.87258 0 16.5 0C23.1274 0 28.5 5.37258 28.5 12C28.5 18.6274 23.1274 24 16.5 24C9.87258 24 4.5 18.6274 4.5 12Z" fill="white" shape-rendering="crispEdges"/>
                <path d="M4.5 12C4.5 5.37258 9.87258 0 16.5 0C23.1274 0 28.5 5.37258 28.5 12C28.5 18.6274 23.1274 24 16.5 24C9.87258 24 4.5 18.6274 4.5 12Z" fill="#37CAD3" fill-opacity="0.35" shape-rendering="crispEdges"/>
                <path d="M14.4998 6L13.0898 7.41L17.6698 12L13.0898 16.59L14.4998 18L20.4998 12L14.4998 6Z" fill="#030303" fill-opacity="0.6"/>
              </g>
              <defs>
              <filter id="filter0_d_17_5427" x="0.5" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_17_5427"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_17_5427" result="shape"/>
              </filter>
              </defs>
            </svg>
        </div>
        </div>
        <div>
          <div>Recent Engagements</div>
          {recentEngagementList}
        </div>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  </>
  );
}

export default App;
