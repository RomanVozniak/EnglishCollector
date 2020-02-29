import React from 'react'
import { Table, Input } from 'reactstrap';
import { api } from '../../js/globalJs'
import { VocabularyRowEdit } from './VocabularyRowEdit'
import { MdDone } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";

export class VocabularyRow extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            editMode: false
        }

        this.onRemove = this.onRemove.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onRemove() {}

    onSave() {
        this.setState({editMode: false});
        this.props.onSave();
    }

    render() {
        if (this.state.editMode) {
            return <VocabularyRowEdit 
                        row={this.props.row} 
                        index={this.props.index} 
                        cards={this.props.cards}
                        onSave={this.onSave}
                        />
        } else {
            return <VocabularyRowDisplay 
                        row={this.props.row} 
                        index={this.props.index} 
                        onEditMode={() => this.setState({editMode: true})} 
                        onRemove={() => this.onRemove()} 
                        />
        }
    }
}

class VocabularyRowDisplay extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return <tr>
            <td>{this.props.index}</td>
            <td>{this.props.row.phrase}</td>
            <td>{this.props.row.translation}</td>
            <td>
                <span className="icon-separate"><MdModeEdit onClick={this.props.onEditMode}/></span>
                <span className="icon-separate"><MdClear onClick={this.props.onRemove}/></span>
            </td>
        </tr>
    }
}