// in src/comments/OcrResultButton.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { showNotification as showNotificationAction } from 'admin-on-rest';
import { push as pushAction } from 'react-router-redux';

class OcrResultButton extends Component {
    handleClick = () => {
        const { push, record, showNotification } = this.props;
        console.log(this.props);
        console.log(push);
        console.log(record);

        /*fetch(`/comments/${record.id}`, { method: 'PUT', body: updatedRecord })
            .then(() => {
                showNotification('Comment approved');
                push('/comments');
            })
            .catch((e) => {
                console.error(e);
                showNotification('Error: comment not approved', 'warning')
            });*/
    }

    render() {
        return <FlatButton label="OCR-Engine" onClick={this.handleClick} />;
    }
}

OcrResultButton.propTypes = {
    push: PropTypes.func,
    record: PropTypes.object,
    showNotification: PropTypes.func,
};

export default connect(null, {
    showNotification: showNotificationAction,
    push: pushAction,
})(OcrResultButton);