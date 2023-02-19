import { Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/Header';

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    address1: '',
    address2: '',
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
    firstName: yup.string().required('Введите имя!'),
    lastName: yup.string().required('Введите фамилию!'),
    email: yup.string().email('Некорректный email').required('Введите email!'),
    contact: yup
        .string()
        .matches(phoneRegExp, 'Некорректный номер!')
        .required('Введите номер телефона'),
    address1: yup.string().required('Введите адрес!'),
    address2: yup.string().required('Введите адрес!'),
})

const Form = () => {
    const isNonMobile = useMediaQuery('(min-width:600px)');

    const handleFormSubmit = (values) => {
        alert(`Пользователь ${values.firstName} ${values.lastName} создан!`)
        console.log(values);
    }

    return (
        <Box m='20px'>
            <Header title='Создание профиля' subtitle='Создать профиль нового пользователя'/>

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={userSchema}
            >
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Box 
                            display='grid' 
                            gap='30px' 
                            gridTemplateColumns='repeat(4, minmax(0, 1fr))'
                            sx={{
                                '& > div' : { gridColumn: isNonMobile ? undefined : 'span 4'}
                            }}
                        >
                            <TextField 
                                fullWidth
                                variant='filled'
                                type='text'
                                label='Имя'
                                name='firstName'
                                value={values.firstName}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{gridColumn: 'span 2'}}
                            />

                            <TextField 
                                fullWidth
                                variant='filled'
                                type='text'
                                label='Фамилия'
                                name='lastName'
                                value={values.lastName}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{gridColumn: 'span 2'}}
                            />

                            <TextField 
                                fullWidth
                                variant='filled'
                                type='text'
                                label='Email'
                                name='email'
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{gridColumn: 'span 4'}}
                            />

                            <TextField 
                                fullWidth
                                variant='filled'
                                type='text'
                                label='Номер телефона'
                                name='contact'
                                value={values.contact}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                                sx={{gridColumn: 'span 4'}}
                            />

                            <TextField 
                                fullWidth
                                variant='filled'
                                type='text'
                                label='Адрес 1'
                                name='address1'
                                value={values.address1}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={!!touched.address1 && !!errors.address1}
                                helperText={touched.address1 && errors.address1}
                                sx={{gridColumn: 'span 4'}}
                            />

                            <TextField 
                                fullWidth
                                variant='filled'
                                type='text'
                                label='Адрес 2'
                                name='address2'
                                value={values.address2}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={!!touched.address2 && !!errors.address2}
                                helperText={touched.address2 && errors.address2}
                                sx={{gridColumn: 'span 4'}}
                            />
                        </Box>

                        <Box display='flex' justifyContent='end' mt="20px">
                            <Button type="submit" color="secondary" variant='contained'>
                                Создать пользователя
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}

export default Form