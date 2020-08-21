import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    Row,
    Modal,
    Button,
} from 'react-bootstrap';

import { Formik, Form } from 'formik';

import {
    doctor,
    CREATE_DOCTOR,
    NEW_DOCTOR,
} from '@model';
import { Input } from '@theme';

class DoctorNew extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false,
        }
    }

    // /////////////////////////////////////////////////////////////////////////////
    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true })
    // /////////////////////////////////////////////////////////////////////////////

    // /////////////////////////////////////////////////////////////////////////////
    newForm = async () => {
        await this.props.newForm();
        this.handleShow();
    }
    // /////////////////////////////////////////////////////////////////////////////

    // /////////////////////////////////////////////////////////////////////////////
    onSubmit = async (values) => {
        await this.props.createDoctor(values);
        this.handleClose();
        this.props.reloadPage();
    }
    // /////////////////////////////////////////////////////////////////////////////

    render() {

        const { t } = this.props;
        const { initialValues } = this.props;

        return (
            <>
                <Button variant='outline-primary' className='fas fa-plus'
                    onClick={this.newForm}>
                    {t('def_btn_add')}
                </Button>

                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop='static'
                    keyboard={false}
                >
                    <Formik
                        initialValues={initialValues}
                        validationSchema={doctor.validation}
                        onSubmit={(values) => this.onSubmit(values)}
                    >
                        {(formik) => (
                            <Form>

                                <Modal.Header closeButton>
                                    <Modal.Title><i className='fas fa-plus' />{t('def_modal_new')}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>


                                    {formik.values &&
                                        <>
                                            {/* // ///////////////////////////////////////////////////////////// */}
                                            <Row>
                                                <Input {...formik}
                                                    label={t('doctor_name')}
                                                    placeholder={t('doctor_name')}
                                                    name='name'
                                                />
                                            </Row>
                                            {/* // ///////////////////////////////////////////////////////////// */}
                                            <Row>
                                                <Input {...formik}
                                                    label={t('doctor_spec')}
                                                    placeholder={t('doctor_spec')}
                                                    name='speciality'
                                                />
                                            </Row>
                                            {/* // ///////////////////////////////////////////////////////////// */}
                                        </>
                                    }

                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant='secondary' onClick={this.handleClose}>
                                        {t('def_close')}
                                    </Button>
                                    <Button variant='outline-primary' className='fas fa-check' type='submit' >
                                        {t('def_btn_add')}
                                    </Button>
                                </Modal.Footer>

                            </Form>
                        )}
                    </Formik>
                </Modal>
            </>
        );
    }
}

export function mapStateToProps(state) {
    const { doctorReducer } = state.model;

    return { doctorReducer, initialValues: doctorReducer.oid };
};

function mapDispatchToProps(dispatch) {
    return {
        newForm: () => dispatch({ type: NEW_DOCTOR }),
        createDoctor: (data) => dispatch({ type: CREATE_DOCTOR, data }),
    }
}

const connectedDoctorNew = connect(mapStateToProps, mapDispatchToProps);
let exportDoctorNew = (connectedDoctorNew)(DoctorNew);
exportDoctorNew = withTranslation()(exportDoctorNew);
exportDoctorNew = withRouter(exportDoctorNew);
export { exportDoctorNew as DoctorNew };