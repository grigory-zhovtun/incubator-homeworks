import React from 'react'
import {Slider, SliderProps} from '@mui/material'

type SuperRangeProps = SliderProps & { onChange: (event: Event, value: number | number[]) => void }

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
