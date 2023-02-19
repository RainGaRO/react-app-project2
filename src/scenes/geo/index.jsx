import { Box } from '@mui/material';
import Header from '../../components/Header';
import GeoChart from '../../components/GeoChart';
import { useTheme } from "@emotion/react";
import { tokens } from '../../theme';

const Geo = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m='20px'>
            <Header title='Гео-диаграмма' subtitle='Диаграмма популярности закусок'/>

            <Box height='75vh' border={`1px solid ${colors.grey[100]}`} borderRadius='4px'>
                <GeoChart />
            </Box>
        </Box>
    )
}

export default Geo