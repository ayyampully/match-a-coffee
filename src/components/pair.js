import React from "react";
import { LOCATIONS } from "../utils/constants";

const Pair = ({ pair }) => {
  const { person1, person2 } = pair;
  return (
    <div className="item">
      <h4>{`${getNameFormatted(person1)} -- ${getNameFormatted(person2)}`}</h4>
      <h6>{getDepartmentFormatted(person1, person2)}</h6>
      <label>{getLocationFormatted(person1, person2)}</label>
    </div>
  );
};
/**
 * helper function to format name
 * @param person - person object
 * @returns string formated in firstname lastname
 */
function getNameFormatted(person) {
  let str = ``;
  if (typeof person === "object") {
    str += `${person.name.first} ${person.name.last}`;
  } else {
    str += person;
  }
  return str;
}
/**
 * helper function to get department
 * @param person1 - person object
 * @param person2 - person object
 * @returns string formatted
 */
function getDepartmentFormatted(person1, person2) {
  let dept1 = "",
    dept2 = "";
  if (typeof person1 === "object") {
    dept1 = person1.department;
  }
  if (typeof person2 === "object") {
    dept2 = person2.department;
  }
  if (dept1 && dept2) {
    return `${dept1} - ${dept2}`;
  } else {
    return dept1 || dept2;
  }
}
/**
 * helper function to get location formatted
 * @param person1 - person object
 * @param person2 - person object
 * @returns string formatted
 */
function getLocationFormatted(person1, person2) {
  let location1 = "",
    location2 = "";
  if (typeof person1 === "object") {
    location1 = person1.location;
  } else {
    location1 = person2.location;
  }
  if (typeof person2 === "object") {
    location2 = person2.location;
  } else {
    location2 = location1;
  }
  if (location1 === location2) {
    return LOCATIONS[location1];
  } else {
    return `${LOCATIONS[location1]} - ${LOCATIONS[location2]}`;
  }
}
export default Pair;
