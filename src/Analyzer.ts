import { mostFrequentNWords, mostFrequentWord, splitText } from './helpers/TextUtils'
import { WordFrequency } from './types/WordFrequency'
import { WordFrequencyAnalyzer } from './types/WordFrequencyAnalyzer'

export class Analyzer implements WordFrequencyAnalyzer {

    calculateHighestFrequency(text: string): number {
        const words = splitText(text)
        const result = mostFrequentWord(words)
        console.debug('calculateHighestFrequency result', result)

        return result.length >= 1 ? result[0].getFrequency() : -1
    }

    calculateFrequencyForWord(text: string, word: string): number {
        const words = splitText(text)

        return words
            .map(w => w.toLowerCase())
            .filter(w => w === word)
            .length
    }

    calculateMostFrequentNWords(text: string, n: number): WordFrequency[] {
        const words = splitText(text)
        const result = mostFrequentNWords(n)(words)
        console.debug('calculateMostFrequentNWords result', result)

        return result
    }

}
