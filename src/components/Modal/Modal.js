import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../../actions/app';

import '../../styles/modal.scss';


class Modal extends Component {

    render() {
        const { closeModal } = this.props; 
        return (
            <>
                <div onClick={closeModal} className="modal-layout" ></div>
                <div className="modal-window" >
                    <button onClick={closeModal} className="modal-close_btn" >&times;</button>
                    <div className="modal-content" >
                        {this.props.children}
                    </div>
                </div>
            </>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(null, mapDispatchToProps)(Modal);