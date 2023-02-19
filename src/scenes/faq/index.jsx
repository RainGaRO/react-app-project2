import { Box, Typography, useTheme } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { tokens } from '../../theme';

import Header from '../../components/Header'

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    return (
        <Box m='20px'>
            <Header title='FAQ' subtitle='Ответы на часто задаваемые вопросы'/>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Accordion 1
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Accordion 2
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />}>
                    <Typography color={colors.greenAccent[500]} variant='h5'>
                        Accordion 3
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ