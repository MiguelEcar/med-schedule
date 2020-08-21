import * as Yup from 'yup';


const newOid = {
    date: '',
    doctor: null,
    customer: null,
};

const validation = Yup.object().shape({
    date: Yup.string()
        .min(2, 'This field must have at least 2 characters!')
        .max(100, 'This field may have max 100 characters!')
        .required('This field is required!'),
    doctor: Yup.number()
        .required('This field is required!'),
    customer: Yup.number()
        .required('This field is required!'),
});

export const appoint = {
    newOid,
    validation
}