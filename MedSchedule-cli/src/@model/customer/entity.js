import * as Yup from 'yup';


const newOid = {
    name: '',
};

const validation = Yup.object().shape({
    name: Yup.string()
        .min(2, 'This field must have at least 2 characters!')
        .max(100, 'This field may have max 100 characters!')
        .required('This field is required!')
});

export const customer = {
    newOid,
    validation
}