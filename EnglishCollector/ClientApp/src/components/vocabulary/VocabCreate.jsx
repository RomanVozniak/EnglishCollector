// react, redux
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCreateVocab } from '../../actions/vocabulary'
// other
import { Table, Input, Button } from 'reactstrap'
import { convertToSelectOptions } from '../../js/globalJs'
// components
import { Select } from '../common/Select'


class VocabCreate extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            vocab: {
                orderId: null,
                phrase: null,
                translation: null,
                description: null,
                statusId: 2,
                importanceId: 2,
                complexityId: 2,
                cardId: this.props.vocabularyFilter.cardId
            }
        }

        this.isChanged = false;
        //this.cardsOptions = convertToSelectOptions(this.props.cards, 'title', 'id');
        this.statusOptions = convertToSelectOptions(this.props.status, 'title', 'value');
        this.importanceOptions = convertToSelectOptions(this.props.importance, 'title', 'value');
        this.complexityOptions = convertToSelectOptions(this.props.complexity, 'title', 'value');

        this.onSave = this.onSave.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    onSave() {
        if(this.isChanged){
            this.props.fetchCreateVocab(this.state.vocab);
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.isChanged = true;
        let updated_vocab = this.state.vocab;
        updated_vocab[name] = value;

        this.setState({ vocab: updated_vocab });
    }

    render(){
        const vocab = this.state.vocab;
        const cardsOptions = convertToSelectOptions(this.props.cards, 'title', 'id');
        const cardId = this.props.vocabularyFilter.cardId;

        return <React.Fragment>
            <Table borderless className="section-shadow">
                <tbody>
                    <tr>
                        <td>{this.props.index}</td>
                        <td><Input type="text" name="phrase" placeholder="phrase" onChange={this.handleInputChange} /></td>
                        <td><Input type="text" name="translation" placeholder="translation" onChange={this.handleInputChange} /></td>
                        <td>
                            <Button onClick={this.onSave}>Create</Button>
                            {/* <span className="icon-separate"><MdDone onClick={this.onSave}/></span> */}
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan="2"><Input type="text" name="description" placeholder="description" onChange={this.handleInputChange} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan="2">
                            <Select id="cardId" options={cardsOptions} value={vocab.cardId} label={"Card"} onChange={this.handleInputChange} className={{width:"25%",float:"left", paddingRight:"10px"}} />
                            <Select id="statusId" options={this.statusOptions} value={vocab.statusId} label={"Status"} onChange={this.handleInputChange} className={{width:"25%",float:"left", paddingRight:"10px"}} />
                            <Select id="importanceId" options={this.importanceOptions} value={vocab.importanceId} label={"Importance"} onChange={this.handleInputChange} className={{width:"25%",float:"left", paddingRight:"10px"}} />
                            <Select id="complexityId" options={this.complexityOptions} value={vocab.complexityId} label={"Complexity"} onChange={this.handleInputChange} className={{width:"25%",float:"left"}} />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </React.Fragment>
    }
}

const mapeStateToProps = (state, ownProps) => {
    return {
        cards: state.cards,
        importance: state.importance,
        complexity: state.complexity,
        status: state.status,
        vocabularyFilter: state.vocabularyFilter
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchCreateVocab: fetchCreateVocab
}, dispatch)

export default connect(mapeStateToProps, mapDispatchToProps)(VocabCreate)