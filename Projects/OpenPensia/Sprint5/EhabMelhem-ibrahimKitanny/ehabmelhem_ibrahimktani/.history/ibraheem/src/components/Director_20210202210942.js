import "./Header.css";
import React from "react";
import "./Director.css";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

function Director(props) {
  // const input = 0;
  // function isInput(){
  //     if(props.unlikeColor){
  //         return "disactive"
  //     }else{
  //         return "normal"
  //     }
  // }
  return (
    <div className="director2">
      <img src={process.env.PUBLIC_URL + props.img} />
      <p>{props.name}</p>
      {/* <div id="icon1"><ThumbDownIcon className={isInput()}/></div>   */}
      <div id="icon1">
        <ThumbDownIcon className={props.unlikeColor ? "disactive" : "normal"} />
      </div>
      {/* ` ${line && ""}` */}
      <ThumbUpAltIcon className={props.likeColor ? "active" : "normal"} />
      <InfoOutlinedIcon className="info" />
    </div>
  );
}
export default Director;
