import * as Yup from 'yup';


const newOid = {
    email: '',
    password: '',
};

const validation = Yup.object().shape({
    email: Yup.string()
        .email('Invalid Email!')
        .required('This field is required!'),
    password: Yup.string()
        .required('This field is required!'),
});

export const auth = {
    newOid,
    validation
}