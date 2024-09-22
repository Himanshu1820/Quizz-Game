import React, { createContext, useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Maincontext = createContext();
const Context = (props) => {
  const [question, setquestion] = useState([]);
  const [user, setuser] = useState(null);
  const [current, setcurrent] = useState(0);
  const [answers, setanswers] = useState({});
  const [result, setresult] = useState(null);
  const [selectall, setselectall] = useState("");

  const datecacl = (timestamp) => {
    const d = new Date(timestamp).toLocaleTimeString();
    return d;
  };

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "newquizz/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const keys = Object.keys(data);
      const arr = [];
      for (let k of keys) {
        arr.push({
          ...data[k],
          id: k,
        });
      }
      setquestion(arr);
    });
  }, []);

  const userlogin = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setuser(user);
  };

  const logout = () => {
    setuser(null);
    setanswers({});
    setselectall("");
    setcurrent(0);
    setresult(null);
    localStorage.removeItem("user");
    localStorage.removeItem("answers");
    localStorage.removeItem("current");
  };

  useEffect(() => {
    const users = localStorage.getItem("user");
    if (users != null) {
      setuser(JSON.parse(users));
    }

    const currentstate = localStorage.getItem("current");
    if (currentstate != null) {
      setcurrent(JSON.parse(currentstate));
    }

    const userans = localStorage.getItem("answers");
    if (userans != null) {
      console.log(userans);
      setanswers(JSON.parse(userans));
    }
  }, []);

  const prev = () => {
    if (current == 0) return;
    if (current == 1) localStorage.setItem("current", 0);
    setcurrent(current - 1);
  };
  const next = () => {
    if (current == question.length - 1) return;
    setcurrent(current + 1);
  };

  useEffect(() => {
    if (current != 0) localStorage.setItem("current", JSON.stringify(current));
  }, [current]);

  useEffect(() => {
    if (Object.keys(answers).length != 0)
      localStorage.setItem("answers", JSON.stringify(answers));
  }, [answers]);

  const useranswer = (ans) => {
    const a = { ...answers };
    a[current] = ans;
    setanswers(a);
  };

  const finish = () => {
    if (Object.keys(answers).length == question.length) {
      console.log("you are good to go");
      let marks = 0;
      for (let i = 0; i < question.length; i++) {
        if (question[i].correct == answers[i]) {
          marks++;
        }
      }
      const d = {
        marks,
        total: question.length,
      };
      setresult(d);
    } else {
      setselectall(" Please select all the answers First");
    }
  };

  useEffect(() => {
    setselectall("");
  }, [current]);

  const playagain = () => {
    setcurrent(0);
    setanswers({});
    setresult(null);
  };

  return (
    <Maincontext.Provider
      value={{
        question,
        userlogin,
        datecacl,
        user,
        logout,
        current,
        next,
        prev,
        useranswer,
        answers,
        finish,
        result,
        playagain,
        selectall,
      }}
    >
      {props.children}
    </Maincontext.Provider>
  );
};

export default Context;
export { Maincontext };
