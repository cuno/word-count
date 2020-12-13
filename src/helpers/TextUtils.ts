import _ from 'lodash'
import { WordFrequencyResult } from '../types/WordFrequencyResult'

const groupByWordFrequencyChain = (inputWords: string[]) => _
    .chain(inputWords)
    .groupBy(w => w.toLowerCase())
    .map((words, lcword) => new WordFrequencyResult(lcword, words.length))

const mostFrequentNWords_ = (n: number) => (inputWords: string[]) => groupByWordFrequencyChain(inputWords)
    .sortBy(wfr => wfr.getWord())
    .sortBy(wfr => -wfr.getFrequency())
    .take(n)
    .value()

export const splitText = (text: string) => text
    .replace(/[^A-Za-z]+$/, '')
    .replace(/^[^A-Za-z]+/, '')
    .split(/[^A-Za-z]+/)

export const mostFrequentWord = mostFrequentNWords_(1)

export const mostFrequentNWords = (n: number) => mostFrequentNWords_(n)
