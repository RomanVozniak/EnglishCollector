import React from 'react'
import { connect } from 'react-redux'
import { DELETE_VOCAB, fetchDeleteVocab } from '../../actions/vocabulary'
import { MdDone } from 'react-icons/md';
import { MdClear } from 'react-icons/md';
import { MdModeEdit } from "react-icons/md";
import { bindActionCreators } from 'redux';

class VocabularyRowDisplay extends React.Component {
    constructor(props){
        super(props);
    }

    onDelete = () => {
        this.props.fetchDeleteVocab(this.props.vocab.id);
    }

    render(){
        let vocab = this.props.vocab;
        let index = this.props.index;

        return <tr>
            <td title={vocab.id}>{index}</td>
            <td>{vocab.phrase}</td>
            <td>{vocab.translation}</td>
            <td>
                <span className="icon-separate"><MdModeEdit onClick={this.props.onEditMode}/></span>
                <span className="icon-separate"><MdClear onClick={this.onDelete}/></span>
            </td>
        </tr>
    }
}

const mapeStateToProps = (state, ownProps) => {
    return {
        vocab: state.vocabulary.find(vocab => vocab.id === ownProps.id)
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchDeleteVocab: fetchDeleteVocab
}, dispatch);

export default connect(mapeStateToProps, mapDispatchToProps)(VocabularyRowDisplay);