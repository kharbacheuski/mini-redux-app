import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { Box, Typography } from '@mui/material'
import './canvasStyles.scss'
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import Toolbar from '../../components/toolbar'
import { useState } from 'react';

type Position = {
    x: number;
    y: number;
  };

const Canvas = () => {
    const canvasProperties = useSelector((state: RootState) => state.canvas)

    const [currentPosition, setCurrentPosition] = useState<Position>({
        x: 0,
        y: 450
    });

    const onDrag = (e: DraggableEvent, data: DraggableData) => {
        setCurrentPosition({ ...data });
    };
 
    return (
        <Box className="canvas">
            <Box className="container">
                <Box className="canvas__inner">
                    <Toolbar />
                    
                    {/* <Draggable
                        position={currentPosition}
                        onDrag={onDrag}
                    > */}
                        <Box id="canvas-block" className="canvas__content" style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: canvasProperties.width,
                            height: canvasProperties.height,
                            borderRadius: canvasProperties.borderRadius,
                            backgroundColor: canvasProperties.backgroundColor,
                            opacity: canvasProperties.opacity,
                            transform: `rotate(${canvasProperties.transform.rotate}deg)`,
                            boxShadow: canvasProperties.boxShadow,
                            color: canvasProperties.color,
                            fontWeight: 600,
                            fontSize: canvasProperties.fontSize,
                            padding: "20px"
                        }}></Box>  
                    {/* </Draggable> */}

                    <Box className="author" onClick={() => window.open("https://github.com/kharbacheuski")} sx={{ textAlign: "center", position: 'fixed', bottom: "20px", right: "20px",}}>
                        <Typography sx={{ 
                            fontWeight: 600,
                            
                            "a": {
                                color: "#f50057",
                                textDecoration: "none",

                                "&:hover": {
                                    textDecoration: "underline"
                                }
                            }
                        }}>Created by <a href="https://github.com/kharbacheuski">Kiryl Harbacheuski</a></Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
        
    )
}

export default Canvas