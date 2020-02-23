import React from 'react'
import Router, { Route } from 'react-router'
import Layout from './components/Layout'
import { VocabularyGrid } from './components/Vocabulary/VocabularyGrid'


export default () => (
        <Layout >
            <Route path='/Vocabulary'>
                <VocabularyGrid/>
            </Route>
        </Layout>
)