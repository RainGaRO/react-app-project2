import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';


const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem 
            active={selected === title}
            style={{color: colors.grey[100]}}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{ title }</Typography>
            <Link to={to} />
        </MenuItem>
    )
}

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard')
    return (
        <Box sx={{
            '& .pro-sidebar-inner': {
                background: `${colors.primary[400]} !important`
            },
            '& .pro-icon-wrapper': {
                backgroundColor: `transparent !important`
            },
            '& .pro-inner-item': {
                padding: `5px 35px 5px 20px !important`
            },
            '& .pro-inner-item:hover': {
                color: `#868dfb !important`
            },
            '& .pro-menu-item.active': {
                color: '#6870fa !important'
            },
        }}>
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape='square'>
                    <MenuItem 
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        style={{
                            margin: '10px 0 20px 0',
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                                ml='15px'
                            >
                                <Typography variant='h3' color={colors.grey[100]}>
                                    Администратор
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/* user */}
                    {!isCollapsed && (
                        <Box mb='25px'>
                            <Box display='flex' justifyContent='center' alignItems='center'>
                                <img src={'../../assets/user.png'} alt='profile-user' width='100px' height='100px' style={{cursor: 'pointer', borderRadius: '50%'}}/>
                            </Box>

                            <Box textAlign='center'>
                                <Typography variant='h2' color={colors.grey[100]} fontWeight='bold' sx={{m: '10px 0 0 0'}}>Админ</Typography>
                                <Typography variant='h5' color={colors.greenAccent[500]}>Админ</Typography>
                            </Box>
                        </Box>
                    )}

                    {/* основное меню */}
                    <Box paddingLeft={isCollapsed ? undefined : '10%'}>
                        <Item 
                            title='Общее'
                            to='/'
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        {isCollapsed ? (<
                            Box display="block" width='50%' border="1px solid" color={colors.grey[300]} sx={{m: '15px 0 5px 20px'}}/>
                        ) : (
                            <Typography variant='h6' color={colors.grey[300]} sx={{m: '15px 0 5px 20px'}}>
                                Данные
                            </Typography>
                            )
                        }

                        <Item 
                            title='Команда'
                            to='/team'
                            icon={<PeopleAltOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item 
                            title='Контакты'
                            to='/contacts'
                            icon={<ContactsOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item 
                            title='Счета'
                            to='/invoices'
                            icon={<ReceiptOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        {isCollapsed ? (<
                            Box display="block" width='50%' border="1px solid" color={colors.grey[300]} sx={{m: '15px 0 5px 20px'}}/>
                        ) : (
                            <Typography variant='h6' color={colors.grey[300]} sx={{m: '15px 0 5px 20px'}}>
                                Пользователь
                            </Typography>
                            )
                        }

                        <Item 
                            title='Профиль'
                            to='/form'
                            icon={<Person2OutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item 
                            title='Календарь'
                            to='/calendar'
                            icon={<CalendarTodayOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item 
                            title='FAQ'
                            to='/faq'
                            icon={<HelpOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        {isCollapsed ? (<
                            Box display="block" width='50%' border="1px solid" color={colors.grey[300]} sx={{m: '15px 0 5px 20px'}}/>
                        ) : (
                            <Typography variant='h6' color={colors.grey[300]} sx={{m: '15px 0 5px 20px'}}>
                                Диаграммы
                            </Typography>
                            )
                        }

                        <Item 
                            title='Столбчатая диаграмма'
                            to='/bar'
                            icon={<BarChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item 
                            title='Круговая диаграмма'
                            to='/pie'
                            icon={<PieChartOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item 
                            title='График'
                            to='/line'
                            icon={<TimelineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item 
                            title='Гео-диаграмма'
                            to='/geography'
                            icon={<MapOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
}

export default Sidebar;