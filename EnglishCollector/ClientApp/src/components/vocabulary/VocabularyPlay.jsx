import React from 'react'
import { connect } from 'react-redux'
import { getVocabulary } from './../../reducers/rootReducer'
import { Table, Button } from 'reactstrap';

class VocabularyPlay extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            startPlay: false,
            enFirst: true,
            lang: "en",
            text: null,
            vocabIndex: null,
            circle: 0,
            endlessPlaying: false
        }
    }

    componentDidUpdate(){
        if(this.state.startPlay){
            setTimeout(this.onPlay, 1000);
            //this.onPlay();
        }
    }

    onPlay = () => {
        let src = "http://translate.google.com/translate_tts?tl=" + this.state.lang + "&q=" + this.state.text + "&client=tw-ob";
        let audio = new Audio(src);

        audio.addEventListener('ended', () => {
            let prevLang = this.state.lang;
            let vocabIndex = this.state.enFirst ? 
                (prevLang === "uk" ? (this.state.vocabIndex + 1) : this.state.vocabIndex )
                : (prevLang === "en" ? (this.state.vocabIndex + 1) : this.state.vocabIndex )


            // new circle
            let circle = this.state.circle;
            let enFirst = this.state.enFirst;
            if(vocabIndex >= this.props.vocabulary.length){
                if (circle === 1 && !this.state.endlessPlaying){
                    return;
                }
                circle = circle+1;
                vocabIndex = 0;
                enFirst = !enFirst;
                prevLang = enFirst ? "uk" : "en";
            }
            // move next
            let vocab = this.props.vocabulary[vocabIndex];
            this.setState({
                text: prevLang === "en" ? vocab.translation : vocab.phrase,
                lang: prevLang === "en" ? "uk" : "en",
                vocabIndex: vocabIndex,
                enFirst, enFirst,
                circle: circle
            })
        }, false);

        audio.play();
    }

    onStartPlay = (enFirst) => {
        let vocab = this.props.vocabulary[0];
        let vocabIndex = 0;

        this.setState({
            startPlay: true,
            enFirst: enFirst,
            lang: enFirst ? "en" : "uk",
            text: enFirst ? vocab.phrase : vocab.translation,
            vocabIndex: vocabIndex
        })
    }

    render(){
        if(this.props.vocabulary === null){
            return <React.Fragment />
        }

        let maxIndex = this.props.vocabulary.length;
        let phrase = "";
        let translation = ""
        if(this.state.vocabIndex != null){
            phrase = this.props.vocabulary[this.state.vocabIndex].phrase;
            translation = this.props.vocabulary[this.state.vocabIndex].translation;
        }

        return <React.Fragment>
            <Table borderless className="section-shadow">
                <thead>
                   
                </thead>
                <tbody>
                    <tr>
                        <td><Button onClick={() => this.onStartPlay(true)}>Play EN first</Button></td>
                        <td>{this.state.enFirst ? "EN first" : "UK first"}</td>
                        <td colSpan="3">Phrase</td>
                        <td colSpan="3">Traslation</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><Button onClick={() => this.onStartPlay(false)}>Play UK first</Button></td>
                        <td>{(this.state.vocabIndex + 1) + ' of ' + maxIndex}</td>
                        <td colSpan="3">{phrase}</td>
                        <td colSpan="3">{translation}</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </React.Fragment>
    }
}

const mapStateToProps = (state) => {
    return {
        vocabulary: getVocabulary(state)
    }
}

export default connect(mapStateToProps)(VocabularyPlay);