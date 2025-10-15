import "./ShowUsers.css";

export default function ShowUsers({ users=[] }) {
  let allUser = users.users;

//   console.log(allUser);
//   allUser.forEach(element => {
//     console.log(element);
    
//   });

  return (
    <>
      <div className="textContainer">
        <div>
          <h2>
            Realtime Chat Application
            <span role="img" aria-label="emoji">
              💬
            </span>
          </h2>
          <h3>
            Created with React, Express, Node and Socket.IO
            <span role="img" aria-label="emoji">
              ❤️
            </span>
          </h3>
          <h3>
            Desined by Mohammed Kamal
            <span role="img" aria-label="emoji">
              ⬅️
            </span>
          </h3>
        </div>
        
        { allUser ? (
          <div>
            <h3>People currently chatting:</h3>
            <div className="activeContainer">
              <h2>
                {allUser.map(({ name }) => (
                  <div key={name} className="activeItem">
                    {name}
                  </div>
                ))}
              </h2>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
