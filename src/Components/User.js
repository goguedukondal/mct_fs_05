import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setValue } from "../slice";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import "./User.css";

const User = () => {
  const [data, setData] = useState([]);
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const [sort, setSort] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=20`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setData(data.results);
      });
  }, []);

  function setStatus(e) {
    console.log(e.target.value);
    const value1 = e.target.value;
    dispatch(setValue(value1));
    if (value1 !== 1) {
      setShow(true);
      setSort(value1);
    }
  }
  return (
    <div className="user_container">
      <Navbar />
      <h1>User Details</h1>
      <div className="lorem">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <form className="form" method="post" action="/">
        <input
          name="type"
          type="radio"
          value="1"
          onChange={(e) => {
            setStatus(e);
          }}
          checked
        />
        <label for="all">ALL</label>
        <input
          name="type"
          type="radio"
          value="2"
          onChange={(e) => {
            setStatus(e);
          }}
        />
        <label for="all">Male</label>
        <input
          name="type"
          type="radio"
          value="3"
          onChange={(e) => {
            setStatus(e);
          }}
        />
        <label for="all">Female</label>
      </form>
      <table>
        <thead>
          <tr className="head_part">
          <th className="image">Image</th>
          <th className="name">name</th>
          <th className="mail">email</th>
          <th className="gender">gender</th>

          </tr>
          
        </thead>
        <tbody>
          { value === "2" ? (
            <>
              {data
                ?.filter((e) => e.gender === "male")
                .map((e, idx) => {
                  console.log(e);
                  return (
                    <tr className="body_part" key={idx}>
                      <td>
                        <img src={e.picture.thumbnail} />
                      </td>
                      <td>{e.name.first}</td>
                      <td>{e.email}</td>
                      <td>{e.gender}</td>
                    </tr>
                  );
                })}
            </>
          ) : value === "3" ?  (
            <>
              {data
                ?.filter((e) => e.gender === "female")
                .map((e, idx) => {
                  console.log(e);
                  return (
                    <tr className="body_part" key={idx}>
                      <td>
                        <img src={e.picture.thumbnail} />
                      </td>
                      <td>{e.name.first}</td>
                      <td>{e.email}</td>
                      <td>{e.gender}</td>
                    </tr>
                  );
                })}
            </>
          ):
          (
            data?.map((e, idx) => {
              return (
                <tr className="body_part" key={idx}>
                  <td>
                    <img src={e.picture.thumbnail} />
                  </td>
                  <td>{e.name.first}</td>
                  <td>{e.email}</td>
                  <td>{e.gender}</td>
                </tr>
              );
            })
          ) 

        }
        </tbody>
      </table>
    </div>
  );
};

export default User;
