import React from 'react';
import { connect } from 'react-redux';

const createConnectWithStore = attachedStore => (...connectParams) => Component => {
    const ComponentOmitStore = ({ store, ...props }) => <Component {...props} />;
    const ConnectedComponent = connect(...connectParams)(ComponentOmitStore);
    return props => <ConnectedComponent {...props} store={attachedStore} />;
};

export default createConnectWithStore;
