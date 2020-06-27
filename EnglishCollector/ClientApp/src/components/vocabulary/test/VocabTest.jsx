// redux
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGetVocabulary, fetchGetCards } from '../../../actions/vocabulary'
import { getVocabulary } from '../../../reducers/rootReducer'
// components
import { RunTest } from '../test/RunTest'
import VocabularyFilter from '../VocabularyFilter'


class VocabTest extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.fetched) {
            this.props.fetchGetCards();
            this.props.fetchGetVocabulary();
        }
    }

    render() {
        let vocabulary = this.props.vocabulary;

        return <React.Fragment>
            <div><VocabularyFilter /></div>
            <div><RunTest vocabulary={vocabulary} /></div>
        </React.Fragment>
    }
}

const mapStateToProps = (state) => {
    return {
        vocabulary: getVocabulary(state),
        fetched: state.fetched
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchGetVocabulary: fetchGetVocabulary,
    fetchGetCards: fetchGetCards
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(VocabTest);