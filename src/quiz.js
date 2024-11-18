class Quiz {
  constructor (questions, timeLimit, timeRemaining){
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
    this.score = 0;
  }

    getQuestion(){
      return this.questions[this.currentQuestionIndex];
    }
    moveToNextQuestion(){
      this.currentQuestionIndex++;
    }
    shuffleQuestions(){
      for (let i = this.questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
      }
    }
    checkAnswer(answer){
      const currentQuestion = this.questions[this.currentQuestionIndex];
      if (answer === currentQuestion.answer){
        this.correctAnswers++;
        this.score += currentQuestion.difficulty;
      }
    }
    hasEnded(){
      return this.currentQuestionIndex === this.questions.length;
    }
    
}