import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    Container,
    Row,
    Col,
    Card,
} from 'react-bootstrap';


import {
    LIST_DOCTOR,
} from '@model';

import { DoctorNew } from './DoctorNew';

class Doctor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // /////////////////////////////////////////////////////////////////////////////
    async componentDidMount() {
        await this.props.listDoctor();
    }
    // /////////////////////////////////////////////////////////////////////////////

    render() {

        const { t } = this.props;
        const { doctorReducer } = this.props;

        return (
            <Container>
                <Row>
                    <Col md='12'><h1>{t('doctor_page_title')}</h1></Col>
                </Row>
                <Row>
                    <Col md='1'>
                        <DoctorNew reloadPage={() => this.componentDidMount()} />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md='12'>
                        {doctorReducer.list && doctorReducer.list.map((doctor) =>
                            <div key={doctor.id}>
                                <Card>
                                    <Card.Header>
                                        {doctor.name}
                                    </Card.Header>
                                    <Card.Body>
                                        <pre>{doctor.speciality}</pre>
                                    </Card.Body>
                                </Card>
                                <hr />
                            </div>
                        )}
                    </Col>
                </Row>
            </Container >
        );
    }
}

export function mapStateToProps(state) {
    const { doctorReducer } = state.model;
    return { doctorReducer };
};

function mapDispatchToProps(dispatch) {
    return {
        listDoctor: () => dispatch({ type: LIST_DOCTOR })
    }
}

const connectedDoctor = connect(mapStateToProps, mapDispatchToProps);
let exportDoctor = (connectedDoctor)(Doctor);
exportDoctor = withTranslation()(exportDoctor);
exportDoctor = withRouter(exportDoctor);
export { exportDoctor as Doctor };