import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Activity from "../Activity/Activity";
import NavBar from "../NavBar/NavBar";
import { getActivities } from "../../actions";
import "./ActivityList.css";

//todo
const ActivityList = () => {
  const dispatch = useDispatch();
  let [actState, setActState] = useState([]);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const activities = useSelector((state) => state.activities);
  console.log(activities);

  const handleSelect = (event) => {
    if (event.target.value !== "title") {
      setActState(
        (actState = activities.find((act) => act.name === event.target.value))
      );
    } else {
      setActState((actState = {}));
    }
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="ContainerList">
        <div className="ItemContainer">
          <select onChange={handleSelect}>
            <option value="title">Activities</option>
            {activities.map((act) => (
              <option value={act.name}>{act.name}</option>
            ))}
          </select>
        </div>
        <div className="ItemContainer">
          <Activity
            name={actState.name}
            duration={actState.duration}
            dificulty={actState.dificulty}
            season={actState.season}
          />
        </div>
      </div>
    </div>
  );
};
export default ActivityList;
