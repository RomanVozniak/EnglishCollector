﻿import React from 'react'
import Router, { Route } from 'react-router'
import Layout from './components/Layout'
import VocabularyGrid from './components/vocabulary/VocabularyGrid'
import VocabularyImport from './components/import/VocabularyImport'
import CardsGrid from './components/cards/CardsGrid'


export default () => (
        <Layout >
            <Route path='/cards'>
                <CardsGrid/>
            </Route>
            <Route path='/vocabulary'>
                <VocabularyGrid/>
            </Route>
            <Route path='/import'>
                <VocabularyImport/>
            </Route>
        </Layout>
)