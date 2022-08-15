import React, { useState } from "react"

function Quiz(props) {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [showMessage, setShowMessage] = useState(false)
    const [point, setPoint] = useState(0)

    const index = props.questions[currentIndex]

    function restartQuiz() {
        setPoint(0)
        setCurrentIndex(0)
        setShowMessage(false)
    }

    function nextQuestion(item) {
        if (item) {
            setPoint(point + 1)
        }

        const indexQuestion = currentIndex + 1
        setCurrentIndex(indexQuestion)

        if (props.questions.length === indexQuestion) {
            setShowMessage(true)
        }
    }

    function Message() {
        return (
            <div>
                <p style={{ marginBottom: "20px" }}>Você acertou {point} de {props.questions.length}</p>
                <button onClick={restartQuiz}>Reiniciar</button>
            </div>
        )
    }

    return (
        <div className="container">
            {showMessage ? <Message></Message> :
                <>
                    <p>{index.question}</p>
                    <div className="square">
                        {index.options.map((item, index) => {
                            return (
                                <button key={index} onClick={() => nextQuestion(item.isTrue)}>{item.answer}</button>
                            )
                        })}
                    </div>
                </>
            }
        </div>
    )
}

export default Quiz