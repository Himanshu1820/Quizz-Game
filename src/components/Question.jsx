import React from "react";
import { getDatabase, ref, set } from "firebase/database";
import { v4 } from "uuid";

const Question = () => {
  const formhandler = (e) => {
    e.preventDefault();

    const db = getDatabase();
    const userId = v4();

    const data = {
      question: e.target.question.value,
      optionA: e.target.A.value,
      optionB: e.target.B.value,
      optionC: e.target.C.value,
      optionD: e.target.D.value,
      correct: e.target.correctOption.value,
      createdAt: new Date().getTime(),
    };

    set(ref(db, "newquizz/" + userId), data);

    e.target.reset();
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1
        className="text-2xl font-bold mb-4 text-center"
        style={{ fontFamily: "cursive" }}
      >
        Add a Question
      </h1>
      <hr className="mb-3" />
      <form onSubmit={formhandler} id="quizForm">
        <div className="mb-4">
          <label
            htmlFor="question"
            className="block text-gray-700 font-semibold mb-2"
          >
            Question:
          </label>
          <input
            type="text"
            id="question"
            name="question"
            placeholder="Enter your question here"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required={true}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="A" className="block text-gray-700 font-semibold mb-2">
            Option A:
          </label>
          <input
            type="text"
            id="A"
            name="A"
            placeholder="Enter option A"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required={true}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="B" className="block text-gray-700 font-semibold mb-2">
            Option B:
          </label>
          <input
            type="text"
            id="B"
            name="B"
            placeholder="Enter option B"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required={true}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="C" className="block text-gray-700 font-semibold mb-2">
            Option C:
          </label>
          <input
            type="text"
            id="C"
            name="C"
            placeholder="Enter option C"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required={true}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="D" className="block text-gray-700 font-semibold mb-2">
            Option D:
          </label>
          <input
            type="text"
            id="D"
            name="D"
            placeholder="Enter option D"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required={true}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="correctOption"
            className="block text-gray-700 font-semibold mb-2"
          >
            Correct Option:
          </label>
          <select
            id="correctOption"
            name="correctOption"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required={true}
            defaultValue=""
          >
            <option value="" disabled={true} hidden>
              Correct Option?
            </option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Question
        </button>
      </form>
    </div>
  );
};

export default Question;
