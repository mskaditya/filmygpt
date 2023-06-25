import React, { useEffect, useRef } from 'react';
import $ from 'jquery';

import './App.css';

import { ScrollContainer } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";


function App() {

  const chatRef = useRef(null);

  useEffect(() => {


    $(chatRef.current).on('click', function () {
      // Handle click event
      console.log('Chat clicked!');
    });
  }, [])


  return (

    <div className="container">
      <div className="content container-fluid bootstrap snippets bootdey">
        <div className="row row-broken">

          <div className="col-sm-3 col-xs-12">

            <div className="chat col-inside-lg decor-default" ref={chatRef} style={{ overflow: 'hidden', outline: 'none' }} tabIndex="5000">

              <ScrollContainer>
                <section style={{ height: '190vh' }}>

                  <div className="chat-users">
                    <h6>Online</h6>
                    <div className="user">
                      <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="User name" />
                        <div className="status off"></div>
                      </div>
                      <div className="name">User name</div>
                      <div className="mood">User mood</div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="User name" />
                        <div className="status online"></div>
                      </div>
                      <div className="name">User name</div>
                      <div className="mood">User mood</div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="User name" />
                        <div className="status busy"></div>
                      </div>
                      <div className="name">User name</div>
                      <div className="mood">User mood</div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="User name" />
                        <div className="status offline"></div>
                      </div>
                      <div className="name">User name</div>
                      <div className="mood">User mood</div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="User name" />
                        <div className="status off"></div>
                      </div>
                      <div className="name">User name</div>
                      <div className="mood">User mood</div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="User name" />
                        <div className="status online"></div>
                      </div>
                      <div className="name">User name</div>
                      <div className="mood">User mood</div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="User name" />
                        <div className="status busy"></div>
                      </div>
                      <div className="name">User name</div>
                      <div className="mood">User mood</div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="User name" />
                        <div className="status offline"></div>
                      </div>
                      <div className="name">User name</div>
                      <div className="mood">User mood</div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="User name" />
                        <div className="status off"></div>
                      </div>
                      <div className="name">User name</div>
                      <div className="mood">User mood</div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="User name" />
                        <div className="status online"></div>
                      </div>
                      <div className="name">User name</div>
                      <div className="mood">User mood</div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="User name" />
                        <div className="status busy"></div>
                      </div>
                      <div className="name">User name</div>
                      <div className="mood">User mood</div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="User name" />
                        <div className="status offline"></div>
                      </div>
                      <div className="name">User name</div>
                      <div className="mood">User mood</div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="User name" />
                        <div className="status off"></div>
                      </div>
                      <div className="name">User name</div>
                      <div className="mood">User mood</div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="User name" />
                        <div className="status off"></div>
                      </div>
                      <div className="name">User name</div>
                      <div className="mood">User mood</div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="User name" />
                        <div className="status online"></div>
                      </div>
                      <div className="name">User name</div>
                      <div className="mood">User mood</div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="User name" />
                        <div className="status busy"></div>
                      </div>
                      <div className="name">User name</div>
                      <div className="mood">User mood</div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="User name" />
                        <div className="status offline"></div>
                      </div>
                      <div className="name">User name</div>
                      <div className="mood">User mood</div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="User name" />
                        <div className="status off"></div>
                      </div>
                      <div className="name">User name</div>
                      <div className="mood">User mood</div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="User name" />
                        <div className="status online"></div>
                      </div>
                      <div className="name">User name</div>
                      <div className="mood">User mood</div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="User name" />
                        <div className="status busy"></div>
                      </div>
                      <div className="name">User name</div>
                      <div className="mood">User mood</div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="User name" />
                        <div className="status offline"></div>
                      </div>
                      <div className="name">User name</div>
                      <div className="mood">User mood</div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="User name" />
                        <div className="status off"></div>
                      </div>
                      <div className="name">User name</div>
                      <div className="mood">User mood</div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="User name" />
                        <div className="status online"></div>
                      </div>
                      <div className="name">User name</div>
                      <div className="mood">User mood</div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="User name" />
                        <div className="status busy"></div>
                      </div>
                      <div className="name">User name</div>
                      <div className="mood">User mood</div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="User name" />
                        <div className="status offline"></div>
                      </div>
                      <div className="name">User name</div>
                      <div className="mood">User mood</div>
                    </div>
                    <div className="user">
                      <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="User name" />
                        <div className="status off"></div>
                      </div>
                      <div className="name">User name</div>
                      <div className="mood">User mood</div>
                    </div>
                  </div>

                </section>
              </ScrollContainer>

            </div>

          </div>

          <div className="chat col-sm-9 col-xs-12" style={{ overflow: 'hidden', outline: 'none' }} tabIndex="5001">


          <ScrollContainer>
                <section style={{ height: '180vh' }}>

            <div className="col-inside-lg decor-default">
              <div className="chat-body">
                <h6>Mini Chat</h6>
                <div className="answer left">
                  <div className="avatar">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="User name" />
                    <div className="status offline"></div>
                  </div>
                  <div className="name">Alexander Herthic</div>
                  <div className="text">
                    Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adiping elit
                  </div>
                  <div className="time">5 min ago</div>
                </div>
                <div className="answer right">
                  <div className="avatar">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="User name" />
                    <div className="status offline"></div>
                  </div>
                  <div className="name">Alexander Herthic</div>
                  <div className="text">
                    Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adiping elit
                  </div>
                  <div className="time">5 min ago</div>
                </div>
                <div className="answer left">
                  <div className="avatar">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="User name" />
                    <div className="status online"></div>
                  </div>
                  <div className="name">Alexander Herthic</div>
                  <div className="text">
                    ...
                  </div>
                  <div className="time">5 min ago</div>
                </div>
                <div className="answer right">
                  <div className="avatar">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="User name" />
                    <div className="status busy"></div>
                  </div>
                  <div className="name">Alexander Herthic</div>
                  <div className="text">
                    It is a long established fact that a reader will be. Thanks Mate!
                  </div>
                  <div className="time">5 min ago</div>
                </div>
                <div className="answer right">
                  <div className="avatar">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="User name" />
                    <div className="status off"></div>
                  </div>
                  <div className="name">Alexander Herthic</div>
                  <div className="text">
                    It is a long established fact that a reader will be. Thanks Mate!
                  </div>
                  <div className="time">5 min ago</div>
                </div>
                <div className="answer left">
                  <div className="avatar">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="User name" />
                    <div className="status offline"></div>
                  </div>
                  <div className="name">Alexander Herthic</div>
                  <div className="text">
                    Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adiping elit
                  </div>
                  <div className="time">5 min ago</div>
                </div>
                <div className="answer right">
                  <div className="avatar">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="User name" />
                    <div className="status offline"></div>
                  </div>
                  <div className="name">Alexander Herthic</div>
                  <div className="text">
                    Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adipisicing elit Lorem ipsum dolor amet, consectetur adiping elit
                  </div>
                  <div className="time">5 min ago</div>
                </div>
                <div className="answer left">
                  <div className="avatar">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="User name" />
                    <div className="status online"></div>
                  </div>
                  <div className="name">Alexander Herthic</div>
                  <div className="text">
                    ...
                  </div>
                  <div className="time">5 min ago</div>
                </div>
                <div className="answer right">
                  <div className="avatar">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="User name" />
                    <div className="status busy"></div>
                  </div>
                  <div className="name">Alexander Herthic</div>
                  <div className="text">
                    It is a long established fact that a reader will be. Thanks Mate!
                  </div>
                  <div className="time">5 min ago</div>
                </div>
                <div className="answer right">
                  <div className="avatar">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="User name" />
                    <div className="status off"></div>
                  </div>
                  <div className="name">Alexander Herthic</div>
                  <div className="text">
                    It is a long established fact that a reader will be. Thanks Mate!
                  </div>
                  <div className="time">5 min ago</div>
                </div>
                <div className="answer-add">
                  <input placeholder="Write a message" />
                  <span className="answer-btn answer-btn-1"></span>
                  <span className="answer-btn answer-btn-2"></span>
                </div>
              </div>
            </div>

            </section>
            </ScrollContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
