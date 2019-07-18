import React from 'react'
import Question from './Question'
import QUESTIONS from '../questions'

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [quizFinished, setQuizFinished] = React.useState(false);
  const currentQuestion = QUESTIONS[currentQuestionIndex]

  const moveToNextQuestion = () => {
    if(currentQuestionIndex === QUESTIONS.length - 1){
      setQuizFinished(true);
    }else{
      setCurrentQuestionIndex(currentIndex => currentIndex + 1)
    }
  }
  return (
    <main className='quiz-wrapper'>
      {
        !quizFinished ?
        <Question
          text={currentQuestion.text}
          answers={currentQuestion.answers}
          correctIndex={currentQuestion.correctIndex}
          onNextButtonClicked={moveToNextQuestion}
          key={currentQuestionIndex}
        />
        :
        <p className='finished-message'>Thanks for taking my quiz!</p>
      }
    </main>
  )
}

export default Quiz
