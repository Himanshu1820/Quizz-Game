import React, { useContext } from "react";
import { Maincontext } from "../context/Context";

const Listing = () => {
  const { question, datecacl } = useContext(Maincontext);

  return (
    <div className="max-w-[1300px] mx-auto ">
      <div className="relative overflow-x-auto rounded-[10px] w-full mx-auto">
        <table className="rounded-lg text-sm w-full text-left rtl:text-right text-cyan-500 dark:text-cyan-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-500  dark:bg-gray-700 dark:text-cyan-500">
            <tr>
              <th scope="col" className="px-12 py-3">
                Question
              </th>
              <th scope="col" className="px-12 py-3">
                Option A
              </th>
              <th scope="col" className="px-12 py-3">
                Option B
              </th>
              <th scope="col" className="px-12 py-3">
                Option C
              </th>
              <th scope="col" className="px-12 py-3">
                Option D
              </th>
              <th scope="col" className="px-12 py-3">
                Created At
              </th>
            </tr>
          </thead>
          <tbody>
            {question.map((ques) => {
              return (
                <tr
                  key={ques.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {ques.question}
                  </th>
                  <td className="px-12 py-4">{ques.optionA}</td>
                  <td className="px-12 py-4">{ques.optionB}</td>
                  <td className="px-12 py-4">{ques.optionC}</td>
                  <td className="px-12 py-4">{ques.optionD}</td>
                  <td className="px-12 py-4">{datecacl(ques.createdAt)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Listing;
