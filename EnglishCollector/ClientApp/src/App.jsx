import React from 'react'
import Router, { Route } from 'react-router'
import Layout from './components/Layout'
import { VocabularyGrid } from './components/vocabulary/VocabularyGrid'


export default () => (
        <Layout >
            <Route path='/vocabulary'>
                <VocabularyGrid/>
            </Route>
        </Layout>
)