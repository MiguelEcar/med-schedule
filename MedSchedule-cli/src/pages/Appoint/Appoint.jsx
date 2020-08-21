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
    LIST_APPOINT,
} from '@model';

import { AppointNew } from './AppointNew';

class Appoint extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // /////////////////////////////////////////////////////////////////////////////
    async componentDidMount() {
        await this.props.listAppoint();
    }
    // /////////////////////////////////////////////////////////////////////////////

    render() {

        const { t } = this.props;
        const { appointReducer } = this.props;

        return (
            <Container>
                <Row>
                    <Col md='12'><h1>{t('appoint_page_title')}</h1></Col>
                </Row>
                <Row>
                    <Col md='1'>
                        <AppointNew reloadPage={() => this.componentDidMount()} />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md='12'>
                        {appointReducer.list && appointReducer.list.map((appoint) =>
                            <div key={appoint.id}>
                                <Card>
                                    <Card.Header>
                                        {appoint.dateConverted.complete}
                                    </Card.Header>
                                    <Card.Body>
                                        <pre>{appoint.doctor.name + ' - ' + appoint.doctor.speciality}</pre>
                                        <pre>{t('customer_name')}: {appoint.customer.name}</pre>
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
    const { appointReducer } = state.model;
    return { appointReducer };
};

function mapDispatchToProps(dispatch) {
    return {
        listAppoint: () => dispatch({ type: LIST_APPOINT })
    }
}

const connectedAppoint = connect(mapStateToProps, mapDispatchToProps);
let exportAppoint = (connectedAppoint)(Appoint);
exportAppoint = withTranslation()(exportAppoint);
exportAppoint = withRouter(exportAppoint);
export { exportAppoint as Appoint };