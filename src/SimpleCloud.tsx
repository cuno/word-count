import { FunctionComponent } from 'react'
import { WordFrequency } from './types/WordFrequency'

type SimpleCloudProps = {
    wordFrequencies: WordFrequency[]
}

export const SimpleCloud: FunctionComponent<SimpleCloudProps> = ({ wordFrequencies }) => {
    return <div className="tagcloud">
        <ul>
            {wordFrequencies.map(wf =>
                <li>
                    <div>{wf.getWord()}<span>{wf.getFrequency()}</span></div>
                </li>)}
        </ul>
    </div>
}
