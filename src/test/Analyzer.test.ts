import { Analyzer } from '../Analyzer'
import { WordFrequencyResult } from '../types/WordFrequencyResult'

const analyzer = new Analyzer()
const WF = (word: string, count: number) => new WordFrequencyResult(word, count)

const testString1 = 'The sun shines over the lake'
const testString2 = 'loREm`ipSUM1doLor2sit3AmEt4consectetur5adiPisCinG6eLit7sed8dO9eiuSmod0temPor-inciDiDunt=ut+laBORE_eT)doLore(\
MagnA*aliQuA&Ut^EnIm%AD$minIm#vEniam@quiS!noStRud~eXerciTaTiON[ullamco]laBorIs\\nIsI|ut}aliQuip{EX,ea.coMmodo/\
coNseQuat.DUis?aute>irurE<doloR,iN;repRehenderit:iN"voLuptate\'velIt eSse cILlum dOlOre EU FUGiat nulLa PariatuR \
ExcepteUr sInt occAecAt^cupIdaTat&nOn prOidEnt Sunt in0cUlpa_qUi ofFicia_deserunt-molLit-aNiM$id%EST!laBorum'
const testString3 = 'FIT grandfAther hEal frUiT frUit FruiT inConclUsive fRuit fruit dRess Smash sMash smash incoNclusive mIlk stEEp \
agreeAble Hesitant piN cLear fRuit Workable QUince tRain holistiC grOuchy agreeable scarEcrow sheEp heal HEAL listEning holIstic \
repulsivE cleAr lUsh Fruit listening Clear worKAble SmAsH agreeAble'

test('calculateFrequencyForWord 1', () => {
    expect(analyzer.calculateFrequencyForWord(testString1, 'the')).toEqual(2)
    expect(analyzer.calculateFrequencyForWord(testString1, 'sun')).toBe(1)
    expect(analyzer.calculateFrequencyForWord(testString1, 'shines')).toBe(1)
    expect(analyzer.calculateFrequencyForWord(testString1, 'over')).toBe(1)
    expect(analyzer.calculateFrequencyForWord(testString1, 'lake')).toBe(1)
})

test('calculateFrequencyForWord 2', () => {
    expect(analyzer.calculateFrequencyForWord(testString2, 'lorem')).toEqual(1)
    expect(analyzer.calculateFrequencyForWord(testString2, 'ipsum')).toBe(1)
    expect(analyzer.calculateFrequencyForWord(testString2, 'dolor')).toBe(2)
    expect(analyzer.calculateFrequencyForWord(testString2, 'sit')).toBe(1)
    expect(analyzer.calculateFrequencyForWord(testString2, 'amet')).toBe(1)
    expect(analyzer.calculateFrequencyForWord(testString2, 'consectetur')).toBe(1)
    expect(analyzer.calculateFrequencyForWord(testString2, 'ut')).toBe(3)
    expect(analyzer.calculateFrequencyForWord(testString2, 'ad')).toBe(1)
    expect(analyzer.calculateFrequencyForWord(testString2, 'in')).toBe(3)
    expect(analyzer.calculateFrequencyForWord(testString2, 'id')).toBe(1)
    expect(analyzer.calculateFrequencyForWord(testString2, 'dolore')).toBe(2)
    expect(analyzer.calculateFrequencyForWord(testString2, 'pariatur')).toBe(1)
    expect(analyzer.calculateFrequencyForWord(testString2, 'qui')).toBe(1)
    expect(analyzer.calculateFrequencyForWord(testString2, 'laborum')).toBe(1)
})

test('calculateFrequencyForWord 3', () => {
    expect(analyzer.calculateFrequencyForWord(testString3, 'heal')).toEqual(3)
    expect(analyzer.calculateFrequencyForWord(testString3, 'fruit')).toBe(7)
    expect(analyzer.calculateFrequencyForWord(testString3, 'inconclusive')).toBe(2)
    expect(analyzer.calculateFrequencyForWord(testString3, 'smash')).toBe(4)
    expect(analyzer.calculateFrequencyForWord(testString3, 'agreeable')).toBe(3)
    expect(analyzer.calculateFrequencyForWord(testString3, 'clear')).toBe(3)
    expect(analyzer.calculateFrequencyForWord(testString3, 'workable')).toBe(2)
    expect(analyzer.calculateFrequencyForWord(testString3, 'holistic')).toBe(2)
    expect(analyzer.calculateFrequencyForWord(testString3, 'listening')).toBe(2)
})

test('calculateFrequencyForWord 4', () => {
    expect(analyzer.calculateFrequencyForWord(testString3, 'notfound')).toEqual(0)
    expect(analyzer.calculateFrequencyForWord('', 'notfound')).toEqual(0)
})

test('calculateHighestFrequency 1', () => {
    expect(analyzer.calculateHighestFrequency(testString1)).toEqual(2)
})

test('calculateHighestFrequency 2', () => {
    expect(analyzer.calculateHighestFrequency(testString2)).toEqual(3)
})

test('calculateHighestFrequency 3', () => {
    expect(analyzer.calculateHighestFrequency(testString3)).toEqual(7)
})

test('calculateMostFrequentNWords 1', () => {
    expect(analyzer.calculateMostFrequentNWords(testString1, 3)).toEqual(
        [WF('the', 2), WF('lake', 1), WF('over', 1)])
})

test('calculateMostFrequentNWords 2', () => {
    expect(analyzer.calculateMostFrequentNWords(testString1, 2)).toEqual(
        [WF('the', 2), WF('lake', 1)])
})

test('calculateMostFrequentNWords 3', () => {
    expect(analyzer.calculateMostFrequentNWords(testString1, 1)).toEqual(
        [WF('the', 2)])
})

test('calculateMostFrequentNWords 4', () => {
    expect(analyzer.calculateMostFrequentNWords(testString1, 23)).toEqual(
        [WF('the', 2), WF('lake', 1), WF('over', 1), WF('shines', 1), WF('sun', 1)]
    )
})

test('calculateMostFrequentNWords 5', () => {
    expect(analyzer.calculateMostFrequentNWords(testString1, 0)).toEqual([])
    expect(analyzer.calculateMostFrequentNWords('', 0)).toEqual([])
})