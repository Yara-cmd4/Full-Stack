import "./App.css";
import Header from "./Compents/Header";
import Information from "./Compents/Information";
import Navbar from "./Compents/Navbar";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { useEffect, useState } from "react";

function getUser() {
  return new Promise((resolve, reject) => {
    var flag = false;
    fetch("/users/get-user")
      .then((r) => r.json())
      .then((data) => {
        if (data.index === 1) {
          flag = false;
          console.log(data);
        } else {
          console.log("it's not goo");
          flag = true;
        }
        console.log(data.user[0].name);
        resolve({ user: data.user[0], flag });
      });
  });
}
function getVote() {
  return new Promise((resolve, rejecte) => {
    var flag = false;
    fetch("/users/vote")
      .then((r) => r.json())
      .then((data) => {
        if (data.index === 1) {
          console.log(data);
          flag = false;
        } else {
          console.log("it's not goo");
          flag = true;
        }
        resolve({ data, flag });
      });
  });
}

function App() {
  const [personal_data, setPersonal] = useState([]);
  const [voted, setVoted] = useState([]);
  const [flag, setFlag] = useState(false);
  useEffect(async () => {
    let first = await getUser();
    let second = await getVote();
    setPersonal(first.user);
    setVoted(second.data.vote);
    setFlag(second.flag);
    console.log("this is first ", first.user);
    console.log("this is seconde ", second.data.vote);
  }, []);

  if (flag) {
    return (
      <div className="app">
        <div className="contaner">you dont have authorized to join in</div>
      </div>
    );
  } else {
    return (
      <div className="app">
        <div className="contaner">
          <Header
            company={personal_data.company}
            Icon={personal_data.src}
            name={personal_data.name}
          />
          <Navbar />
          <Information withNum={voted.with} without={voted.without} />
          <p>????? ???????????? ??????</p>
          <div className="thumps">
            <div className="thumpItem">
              <ThumbUpIcon className="thump" />
              <p>?????? ??????</p>
            </div>
            <div className="thumpItem">
              <ThumbDownIcon className="thump" />
              <p>?????? ??????</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
