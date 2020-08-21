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
    appoint,
    CREATE_APPOINT,
    NEW_APPOINT,
    LIST_DOCTOR,
    LIST_CUSTOMER,
} from '@model';
import { Input, Select } from '@theme';

class AppointNew extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false,
        }
    }
    // /////////////////////////////////////////////////////////////////////////////
    async componentDidMount() {
        await this.props.listDoctor();
        await this.props.listCustomer();
    }
    // /////////////////////////////////////////////////////////////////////////////

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

        values.doctor = {id: values.doctor}
        values.customer = {id: values.customer}

        await this.props.createAppoint(values);
        this.handleClose();
        this.props.reloadPage();
    }
    // /////////////////////////////////////////////////////////////////////////////

    render() {

        const { t } = this.props;
        const { initialValues } = this.props;
        const { doctorReducer, customerReducer } = this.props;

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
                        validationSchema={appoint.validation}
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
                                                    label={t('appoint_date')}
                                                    placeholder={t('appoint_date')}
                                                    name='date'
                                                    type='datetime-local'
                                                />
                                            </Row>
                                            {/* // ///////////////////////////////////////////////////////////// */}
                                            {doctorReducer.list &&
                                                <Row>
                                                    <Select {...formik}
                                                        label={t('doctor_name')}
                                                        placeholder={t('doctor_name')}
                                                        name='doctor'
                                                        list={doctorReducer.list}
                                                    />
                                                </Row>
                                            }
                                            {/* // ///////////////////////////////////////////////////////////// */}
                                            {customerReducer.list &&
                                                <Row>
                                                    <Select {...formik}
                                                        label={t('customer_name')}
                                                        placeholder={t('customer_name')}
                                                        name='customer'
                                                        list={customerReducer.list}
                                                    />
                                                </Row>
                                            }
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
    const { appointReducer, doctorReducer, customerReducer } = state.model;

    return { appointReducer, doctorReducer, customerReducer, initialValues: appointReducer.oid };
};

function mapDispatchToProps(dispatch) {
    return {
        newForm: () => dispatch({ type: NEW_APPOINT }),
        createAppoint: (data) => dispatch({ type: CREATE_APPOINT, data }),
        listDoctor: () => dispatch({ type: LIST_DOCTOR }),
        listCustomer: () => dispatch({ type: LIST_CUSTOMER }),
    }
}

const connectedAppointNew = connect(mapStateToProps, mapDispatchToProps);
let exportAppointNew = (connectedAppointNew)(AppointNew);
exportAppointNew = withTranslation()(exportAppointNew);
exportAppointNew = withRouter(exportAppointNew);
export { exportAppointNew as AppointNew };