import React from 'react'
import VocabularyRowEdit from './VocabularyRowEdit'
import VocabularyRowDisplay from './VocabularyRowDisplay'

export class VocabularyRow extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            editMode: false
        }
    }

    onSwitchView = () => {
        this.setState({editMode: false});
    }

    render() {
        if (this.state.editMode) {
            return <VocabularyRowEdit
                        id={this.props.row.id}
                        index={this.props.index}
                        cards={this.props.cards}
                        onSwitchView={this.onSwitchView}
                        />
        } else {
            return <VocabularyRowDisplay 
                        id={this.props.row.id}
                        className="section-shadow"
                        index={this.props.index}
                        onEditMode={() => this.setState({editMode: true})}
                        />
        }
    }
}