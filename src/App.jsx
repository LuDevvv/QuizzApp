import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsFillPlayFill } from "react-icons/bs";
import { BiExit, BiTimer, BiShow } from "react-icons/bi";
import { RiGamepadFill } from "react-icons/ri";
import questions from "./questions.js";
import "./index.css";

const App = () => {
  
  const [currentAnswer, setcurrentAnswer] = useState(0);
  const [points, setpoints] = useState(0);
  const [isFinished, setisFinished] = useState(false);
  const [timeLeft, settimeLeft] = useState(10);
  const [timeDisable, settimeDisable] = useState(false);
  const [answerShow, setanswerShow] = useState(false);
  const [starGame, setstarGame] = useState(false);

  const handleAnswerEvent = (isCorrect, event) => {
    // add points
    if (isCorrect) setpoints(points + 10);

    // add styles of answer
    event.target.classList.add(isCorrect ? "set-true" : "set-false");

    // choose the next question
    setTimeout(() => {
      if (currentAnswer === questions.length - 1) {
        setisFinished(true);
      } else {
        setcurrentAnswer(currentAnswer + 1);
        settimeLeft(10);
      }
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) settimeLeft((prev) => prev - 1);
      if (timeLeft === 0) settimeDisable(true);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  if (isFinished) {
    return (
      <main className="app">
        <div className="card-finish-ct">
          <div className="card-finish">
            <span>Score</span>
            <b>{points}</b>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btn-finish again"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <BsFillPlayFill /> Play Again
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btn-finish exit"
            onClick={() => {
              setisFinished(false);
              setanswerShow(true);
              setcurrentAnswer(0);
            }}
          >
            <BiShow /> Show Answers
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btn-finish show"
            onClick={() => {
              setstarGame(false);
              window.location.href = "/";
            }}
          >
            <BiExit /> Exit
          </motion.button>
        </div>
      </main>
    );
  }

  if (answerShow) {
    return (
      <main className="app">
        <section className="card">
          <div className="status-quiz">
            <div className="status-quiz-current">
              <div className="action-bar action-question">
                Question {currentAnswer + 1} of {questions.length}
              </div>
            </div>
          </div>

          <div className="container-flex">
            <div className="card-question">
              <h1 className="question-title">
                {questions[currentAnswer].title}
              </h1>
              <br />
              <br />
            </div>
            <div
              className="answers"
              style={{ fontSize: "25px", fontWeight: "400" }}
            >
              {
                questions[currentAnswer].options.filter(
                  (prop) => prop.isCorrect
                )[0].answertext
              }
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              disabled={timeDisable}
              type="button"
              className="check"
              onClick={() => {
                if (currentAnswer === questions.length - 1) {
                  window.location.href = "/";
                } else {
                  setcurrentAnswer(currentAnswer + 1);
                  settimeLeft(10);
                }
              }}
            >
              {currentAnswer === questions.length - 1 ? "Play again" : "Next"}
            </motion.button>
          </div>
        </section>
      </main>
    );
  }

  if (starGame) {
    return (
      <main className="app">
        <section className="card">
          <div className="status-quiz">
            <div className="status-quiz-current">
              <div className="action-bar action-question">
                Question {currentAnswer + 1} of {questions.length}
              </div>
              <div className="action-bar action-time">
                {!timeDisable ? (
                  <span> Time : {timeLeft}s </span>
                ) : (
                  <motion.button
                    className="btn-time-continue"
                    style={{
                      position: "absolute",
                      display: "flex",
                      gap: "5px",
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 0.9 }}
                    whileTap={{ scale: 0.9 }}
                    type="button"
                    onClick={() => {
                      settimeDisable(false);
                      setcurrentAnswer(currentAnswer + 1);
                      settimeLeft(10);
                    }}
                  >
                    <BiTimer /> Continuar
                  </motion.button>
                )}
              </div>
            </div>
          </div>

          <div className="container-flex">
            <div className="card-question">
              <h1 className="question-title">
                {questions[currentAnswer].title}
              </h1>
              <br />
              <br />

              <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileInView={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className="question-img"
                src={questions[currentAnswer].img}
              />
            </div>
            <form className=" answers">
              {questions[currentAnswer].options.map((prop) => {
                return (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    key={prop.answertext}
                    disabled={timeDisable}
                    type="button"
                    className="check"
                    onClick={(e) => {
                      handleAnswerEvent(prop.isCorrect, e);
                    }}
                  >
                    {" "}
                    {prop.answertext}
                  </motion.button>
                );
              })}
            </form>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="app">
      <div className="card-finish-ct">
        <motion.button
          className="btn-finish"
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            padding: "1rem 1.5rem",
            fontSize: "50px",
            backgroundColor: "#288bee",
            textAlign: "center",
          }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 0.9 }}
          type="button"
          onClick={() => {
            setstarGame(true);
            settimeLeft(10);
          }}
        >
          <RiGamepadFill /> Start Game
        </motion.button>
      </div>
    </main>
  );
};

export default App;
