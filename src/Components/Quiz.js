import React from "react"
import {useSelector, useDispatch} from "react-redux"

function Quiz(props) {

    const currentIndex = useSelector( state => state.index)
    const showMessage = useSelector(state => state.message)
    const point = useSelector( state => state.point)

    const dispatch = useDispatch()

    const index = props.questions[currentIndex]

    function restartQuiz() {
        dispatch({type:"HIDE_MESSAGE"})
        dispatch({type:"RESET_INDEX"})
        dispatch({type:"RESET_POINT"})
    }

    function nextQuestion(item) {
        if (item) {
            dispatch({type:"ADD_POINT"})
        }

        dispatch({type:"INCREMENT_INDEX"})

        const indexQuestion = currentIndex + 1

        if (props.questions.length === indexQuestion) {
            dispatch({type:"SHOW_MESSAGE"})
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