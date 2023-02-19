import React, { useContext } from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../../theme';
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display='flex' justifyContent='space-between' p={2}>
            {/* поисковая строка */}
            <Box display='flex' backgroundColor={colors.primary[400]} borderRadius='3px'>
                <InputBase sx={{ml: 2, flex: 1}} placeholder='Найти...'/>
                <IconButton type='button' sx={{p: 1}}>
                    <SearchOutlinedIcon />
                </IconButton>
            </Box>

            <Box display='flex'>
                 <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon/>
                    )}
                 </IconButton>
                 <IconButton>
                    <NotificationsNoneOutlinedIcon />
                 </IconButton>
                 <IconButton>
                    <SettingsApplicationsOutlinedIcon />
                 </IconButton>
                 <IconButton>
                    <Person2OutlinedIcon />
                 </IconButton>
            </Box>
        </Box>
    );
}

export default Topbar;