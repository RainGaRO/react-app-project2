import React from 'react';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { mockTransactions } from '../../data/mockData';
// --------------------------------------------------------
import Header from '../../components/Header';
import LineChart from '../../components/LineChart';
import BarChart from '../../components/BarChart';
import GeoChart from '../../components/GeoChart';
import StatBox from '../../components/StatBox';
import ProgressCircle from '../../components/ProgressCircle';
// ----------------------------------------------------------
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import TrafficOutlinedIcon from '@mui/icons-material/TrafficOutlined';



const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    return (
        <Box m='20px'>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Header title='Общая информация' subtitle='Вы находитесь на странице с общей информацией'/>
                <Box>
                    <Button sx={{
                        backgroundColor: colors.blueAccent[700],
                        color: colors.grey[100],
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "10px 20px",
                    }}>
                        <DownloadOutlinedIcon sx={{mr: '10px'}}/>
                        Скачать данные
                    </Button>
                </Box>
            </Box>

            {/* сетка */}
            <Box
                display='grid'
                gridTemplateColumns='repeat(12, 1fr)'
                gridAutoRows='140px'
                gap='20px'
            >

                {/* строка 1 */}
                <Box 
                    gridColumn='span 3'
                    backgroundColor={colors.primary[400]}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    <StatBox 
                        title='12,361'
                        subtitle='Почта'
                        progress='0.75'
                        increase='+14%'
                        icon={
                            <EmailOutlinedIcon 
                                sx={{ color: colors.greenAccent[600], fontSize: '26px'}}
                            />
                        }
                    />
                </Box>

                <Box 
                    gridColumn='span 3'
                    backgroundColor={colors.primary[400]}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    <StatBox 
                        title='385,545'
                        subtitle='Продажи'
                        progress='0.50'
                        increase='+21%'
                        icon={
                            <PointOfSaleOutlinedIcon 
                                sx={{ color: colors.greenAccent[600], fontSize: '26px'}}
                            />
                        }
                    />
                </Box>

                <Box 
                    gridColumn='span 3'
                    backgroundColor={colors.primary[400]}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    <StatBox 
                        title='10,156'
                        subtitle='Клиенты'
                        progress='0.30'
                        increase='+5%'
                        icon={
                            <PersonAddAlt1OutlinedIcon 
                                sx={{ color: colors.greenAccent[600], fontSize: '26px'}}
                            />
                        }
                    />
                </Box>

                <Box 
                    gridColumn='span 3'
                    backgroundColor={colors.primary[400]}
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    <StatBox 
                        title='1,544,446'
                        subtitle='Загрузка'
                        progress='0.80'
                        increase='+43%'
                        icon={
                            <TrafficOutlinedIcon 
                                sx={{ color: colors.greenAccent[600], fontSize: '26px'}}
                            />
                        }
                    />
                </Box>
        
                {/* строка 2.1 */}
                <Box
                    gridColumn="span 8"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    >
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex "
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography
                                variant="h5"
                                fontWeight="600"
                                color={colors.grey[100]}
                            >
                                Revenue Generated
                            </Typography>
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                color={colors.greenAccent[500]}
                            >
                                $38,342.344
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height="250px" m="-20px 0 0 0">
                        <LineChart isDashboard={true} />
                    </Box>
                </Box>
                {/* ---2.2---- */}
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    overflow="auto"
                >
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        colors={colors.grey[100]}
                        p="15px"
                    >
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                            Recent Transactions
                        </Typography>
                    </Box>
                    {mockTransactions.map((transaction, i) => (
                        <Box
                            key={`${transaction.txId}-${i}`}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`4px solid ${colors.primary[500]}`}
                            p="15px"
                        >
                        <Box>
                            <Typography
                                color={colors.greenAccent[500]}
                                variant="h5"
                                fontWeight="600"
                            >
                                {transaction.txId}
                            </Typography>
                            <Typography color={colors.grey[100]}>
                                {transaction.user}
                            </Typography>
                        </Box>
                        <Box color={colors.grey[100]}>{transaction.date}</Box>
                            <Box
                                backgroundColor={colors.greenAccent[500]}
                                p="5px 10px"
                                borderRadius="4px"
                            >
                                ${transaction.cost}
                            </Box>
                        </Box>
                    ))}
                </Box>
                {/* 3.1 */}
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    p="30px"
                >
                    <Typography variant="h5" fontWeight="600">
                        Campaign
                    </Typography>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        mt="25px"
                    >
                        <ProgressCircle size="125"/>

                        <Typography
                            variant="h5"
                            color={colors.greenAccent[500]}
                            sx={{ mt: "15px" }}
                        >
                            $48,352 revenue generated
                        </Typography>

                        <Typography>Includes extra misc expenditures and costs</Typography>
                    </Box>
                </Box>
                {/* 3.2 */}
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                >
                    <Typography
                        variant="h5"
                        fontWeight="600"
                        sx={{ padding: "30px 30px 0 30px" }}
                    >
                        Sales Quantity
                    </Typography>
                    <Box height="250px" mt="-20px">
                        <BarChart isDashboard={true} />
                    </Box>
                </Box>
                {/* 3.3 */}
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    padding="30px"
                >
                    <Typography
                        variant="h5"
                        fontWeight="600"
                        sx={{ marginBottom: "15px" }}
                    >
                        Geography Based Traffic
                    </Typography>

                    <Box height="200px">
                        <GeoChart isDashboard={true} />
                    </Box>
                </Box>

            </Box>
        </Box>
    );
}

export default Dashboard;