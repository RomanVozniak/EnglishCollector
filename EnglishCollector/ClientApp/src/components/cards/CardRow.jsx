import React from 'react'
import CardRowDisplay from './CardRowDisplay'

export class CardRow extends React.Component {
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
        return <CardRowDisplay 
                id={this.props.row.id}
                index={this.props.index}
                onEditMode={() => this.setState({editMode: true})}
            />

        // if (this.state.editMode) {
        //     return <VocabularyRowEdit
        //                 id={this.props.row.id}
        //                 index={this.props.index}
        //                 cards={this.props.cards}
        //                 onSwitchView={this.onSwitchView}
        //                 />
        // } else {
        //     return <VocabularyRowDisplay 
        //                 id={this.props.row.id}
        //                 className="section-shadow"
        //                 index={this.props.index}
        //                 onEditMode={() => this.setState({editMode: true})}
        //                 />
        // }
    }
}