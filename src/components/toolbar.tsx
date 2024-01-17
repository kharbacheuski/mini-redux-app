import { Box, Typography, Slider, Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { canvasSlice } from "../pages/canvas/canvasSlice"
import { RootState } from '../store/store'

const Toolbar = () => {
    const canvasProperties = useSelector((state: RootState) => state.canvas)
    const dispatch = useDispatch()

    const actions = canvasSlice.actions

    const getRandomColor = () => {
        return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }

    const getRandomForm = () => {
        dispatch(actions.backgroundColor(getRandomColor()))
        dispatch(actions.color(getRandomColor()))
        dispatch(actions.opacity(Math.random()))
        dispatch(actions.width(Math.random()*1200))
        dispatch(actions.fontSize(Math.random()*35))
        dispatch(actions.height(Math.random()*1000))
        dispatch(actions.rotate(Math.random()*360))
        dispatch(actions.borderRadius(Math.random()*350))
        dispatch(actions.boxShadow(`${Math.floor(Math.random()*30)}px ${Math.floor(Math.random()*30)}px ${Math.floor(Math.random()*20)}px ${getRandomColor()}`))
    }

    return (
        <Box className="canvas__toolbar" id="toolbar">
            <Box>
                <Box>
                    <Typography>Width</Typography>
                    <Slider 
                        name='width'
                        sx={{width: 300}}
                        value={canvasProperties.width} 
                        max={1200} 
                        onChange={(e, v) => dispatch(actions.width(v))} 
                        aria-label="Default"
                        valueLabelDisplay="auto" 
                    />
                </Box>
                <Box>
                    <Typography>Height</Typography>
                    <Slider 
                        name='height'
                        sx={{width: 300}}
                        value={canvasProperties.height} 
                        max={1000} 
                        onChange={(e, v) => dispatch(actions.height(v))} 
                        aria-label="Default"
                        valueLabelDisplay="auto" 
                    />
                </Box>
            </Box>
            <Box className="mobile-hidden">
                <Box>
                    <Typography>Border-radius</Typography>
                    <Slider 
                        sx={{width: 300}}
                        value={canvasProperties.borderRadius} 
                        max={350} 
                        onChange={(e, v) => dispatch(actions.borderRadius(v))} 
                        aria-label="Default"
                        valueLabelDisplay="auto" 
                    />
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography>Rotate</Typography>
                    <Slider 
                        max={360}
                        sx={{width: 300}}
                        value={canvasProperties.transform.rotate} 
                        onChange={(e, v) => dispatch(actions.rotate(v))} 
                        aria-label="Default"
                        valueLabelDisplay="auto" 
                    />
                </Box>
            </Box>
           <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'space-between'}}>
                <Box className="mobile-hidden" sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography>Opacity</Typography>
                    <Slider 
                        min={0}
                        max={1}
                        step={0.01}
                        sx={{width: 300}}
                        value={canvasProperties.opacity} 
                        onChange={(e, v) => dispatch(actions.opacity(v))} 
                        aria-label="Default"
                        valueLabelDisplay="auto" 
                    />
                </Box>
                <Box sx={{
                    display: 'flex', 
                    gap: 1, 
                    marginTop: "20px",

                    "@media (max-width: 768px)": {
                        marginTop: "0px",
                    }
                }}>
                    <Button variant='contained' onClick={() => dispatch(actions.backgroundColor(getRandomColor()))}>Change background</Button>

                    <Button color='secondary' variant='contained' onClick={getRandomForm}>Random Form</Button>
                </Box>
           </Box>
        </Box>
    )
}

export default Toolbar