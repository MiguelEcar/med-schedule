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
    LIST_CUSTOMER,
} from '@model';

import { CustomerNew } from './CustomerNew';

class Customer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    // /////////////////////////////////////////////////////////////////////////////
    async componentDidMount() {
        await this.props.listCustomer();
    }
    // /////////////////////////////////////////////////////////////////////////////

    render() {

        const { t } = this.props;
        const { customerReducer } = this.props;

        return (
            <Container>
                <Row>
                    <Col md='12'><h1>{t('customer_page_title')}</h1></Col>
                </Row>
                <Row>
                    <Col md='1'>
                        <CustomerNew reloadPage={() => this.componentDidMount()} />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md='12'>
                        {customerReducer.list && customerReducer.list.map((customer) =>
                            <div key={customer.id}>
                                <Card>
                                    <Card.Header>
                                        {customer.name}
                                    </Card.Header>
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
    const { customerReducer } = state.model;
    return { customerReducer };
};

function mapDispatchToProps(dispatch) {
    return {
        listCustomer: () => dispatch({ type: LIST_CUSTOMER })
    }
}

const connectedCustomer = connect(mapStateToProps, mapDispatchToProps);
let exportCustomer = (connectedCustomer)(Customer);
exportCustomer = withTranslation()(exportCustomer);
exportCustomer = withRouter(exportCustomer);
export { exportCustomer as Customer };