import React from "react";
import style from "./Users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: true,
        photoUrl:
          "https://sun9-84.userapi.com/impf/c845416/v845416949/1fbf3c/g4Zi5xvfh5E.jpg?size=320x268&quality=96&sign=b7a6e33d2663a190d4336dccbe685483&type=album",
        fullName: "Dmitry",
        status: "hello my niggas",
        location: {
          city: "Minsk",
          country: "Belarus",
        },
      },
      {
        id: 2,
        followed: false,
        photoUrl:
          "https://sun9-84.userapi.com/impf/c845416/v845416949/1fbf3c/g4Zi5xvfh5E.jpg?size=320x268&quality=96&sign=b7a6e33d2663a190d4336dccbe685483&type=album",
        fullName: "Katya",
        status: "да да я статус стросты ",
        location: {
          city: "Kiev",
          country: "Ukraine",
        },
      },
      {
        id: 3,
        followed: true,
        photoUrl:
          "https://sun9-84.userapi.com/impf/c845416/v845416949/1fbf3c/g4Zi5xvfh5E.jpg?size=320x268&quality=96&sign=b7a6e33d2663a190d4336dccbe685483&type=album",
        fullName: "Nikita",
        status: "За деньги да да0 а а",
        location: {
          city: "Moscow",
          country: "Russia",
        },
      },
      {
        id: 4,
        followed: true,
        photoUrl:
          "https://sun9-84.userapi.com/impf/c845416/v845416949/1fbf3c/g4Zi5xvfh5E.jpg?size=320x268&quality=96&sign=b7a6e33d2663a190d4336dccbe685483&type=album",
        fullName: "diggi",
        status: "status examle",
        location: {
          city: "New York",
          country: "USA",
        },
      },
    ]);
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={style.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  follow{" "}
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
