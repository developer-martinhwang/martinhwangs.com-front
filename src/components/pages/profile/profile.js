import React from 'react'
import resume from '../../../assets/files/Martin-Hwang-Resume.pdf'
import portfolio from '../../../assets/files/Martin-Hwang-Portfolio.pdf'
import transcript from '../../../assets/files/Martin-Hwang-Transcript.pdf'

function profile() {
    return (
        <div>
            <a href={resume}>Open a Martin-Hwang-Resume.pdf file</a><br/>
            <a href={portfolio}>Open a Martin-Hwang-Portfolio.pdf file</a><br/>
            <a href={transcript}>Open a Martin-Hwang-Transcript.pdf file</a><br/>
        </div>
    )
}

export default profile
