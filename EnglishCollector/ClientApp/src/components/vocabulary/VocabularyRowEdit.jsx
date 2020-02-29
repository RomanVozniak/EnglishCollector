import React from 'react'
import { Input, Label } from 'reactstrap';
import { api, convertToSelectOptions } from '../../js/globalJs'
import { MdDone } from 'react-icons/md';
import { Select } from '../common/Select'


export class VocabularyRowEdit extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            data: this.props.row
        }
        this.isChanged = false;
        this.cardsOptions = convertToSelectOptions(this.props.cards, 'title', 'id');

        this.onSave = this.onSave.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    onSave() {
        if(this.isChanged){
            fetch(api.vocabulary.updateVocabulary, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(this.state.data)
            })
        }
        this.props.onSave();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.isChanged = true;
        let new_data = this.state.data;
        new_data[name] = value;

        this.setState({ data: new_data });
    }

    render(){
        console.log(this.props.cards);

        return <React.Fragment>
        <tr>
            <td>{this.props.index}</td>
            <td><Input type="text" name="phrase" value={this.props.row.phrase} placeholder="phrase" onChange={this.handleInputChange} /></td>
            <td><Input type="text" name="translation" value={this.props.row.translation} placeholder="translation" onChange={this.handleInputChange} /></td>
            <td>
                <span className="icon-separate"><MdDone onClick={this.onSave}/></span>
            </td>
        </tr>
        <tr>
            <td></td>
            <td colSpan="2"><Input type="text" name="description" value={this.props.row.description} placeholder="description" onChange={this.handleInputChange} /></td>
        </tr>
        <tr>
            <td></td>
            <td>
                <Select id="cardId" options={this.cardsOptions} value={this.props.row.cardId} label={"Card"} onChange={this.handleInputChange} />
            </td>
        </tr>
        </React.Fragment>
    }
}