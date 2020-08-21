import * as Yup from 'yup';


const newOid = {
    name: '',
    speciality: '',
};

const validation = Yup.object().shape({
    name: Yup.string()
        .min(2, 'This field must have at least 2 characters!')
        .max(100, 'This field may have max 100 characters!')
        .required('This field is required!'),
    speciality: Yup.string()
        .min(2, 'This field must have at least 2 characters!')
        .max(500, 'This field may have max 500 characters!')
        .required('This field is required!')
});

export const doctor = {
    newOid,
    validation
}