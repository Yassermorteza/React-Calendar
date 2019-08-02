import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../../actions/app';

import '../../styles/modal.scss';


class Modal extends Component {

    render() {
        const { closeModal } = this.props; 
        return (
            <>
                <div onClick={closeModal} className="modal-layout" >
                </div>
                <div className="modal-window" >
                    <section className="modal-content">
                        <button onClick={closeModal} className="modal-close_btn" >&times;</button>
                        <div>
                            {this.props.children}
                        </div>
                    </section>
                </div>
            </>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(null, mapDispatchToProps)(Modal);