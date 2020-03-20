import React from 'react'
import { Input, Label } from 'reactstrap';

export class Select extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let label = this.props.label;
        let options = this.props.options;
        let value = this.props.value ? this.props.value : "";
        let id = this.props.id;

        let selectOne = null;
        if(this.props.allowSelectOne){
            selectOne = <option value="0" key={id + "_" + 0}>
                Select one
            </option>
        }

        if(options == null){
            return <Label>{label}</Label>
        } else {
            return <span style={this.props.className}>
                <Label for={id} sm={2}>{label}</Label>
                <Input type="select" 
                    id={id} 
                    name={id} 
                    value={value} 
                    onChange={this.props.onChange} 
                    >
                    {selectOne}
                    {options.map(function(option){
                        return <option value={option.value} key={id + "_" + option.value}>
                                {option.label}
                            </option>
                    })}
                </Input>
            </span>
        }
    }
}