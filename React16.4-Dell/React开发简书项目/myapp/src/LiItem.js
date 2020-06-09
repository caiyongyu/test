import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LiItem extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        const { deleteItem, index } = this.props;
        deleteItem(index);
    }


    render() {
        const { prev, content } = this.props;
        return (
            <div  
            // dangerouslySetInnerHTML={{__html: content}} 
            onClick={this.handleDelete}>
                { prev }-{ content }
            </div>
        )
    }
}

LiItem.propTypes = {
    prev: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    index: PropTypes.number,
    deleteItem: PropTypes.func
}

LiItem.defaultProps = {
    prev: "yes"
}

export default LiItem;