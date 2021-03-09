import "./styles.css";
import React from "react";
import { merge, of, Observable, combineLatest, Subject } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { map, flatMap, switchMap, startWith, share } from "rxjs/operators";
import { bind, Subscribe  } from "@react-rxjs/core"

const refreshSubject = new Subject()
const refreshNext = (event) => {
  refreshSubject.next(event)
}
const [useRefresh, refresh$] = bind(refreshSubject.pipe(startWith(1)))

const click1Subject = new Subject()
const click1Next = (event) => {
  click1Subject.next(event)
}
const [useClick1, click1$] = bind(click1Subject.pipe(startWith(1)))

const click2Subject = new Subject()
const click2Next = (event) => {
  click2Subject.next(event)
}
const [useClick2, click2$] = bind(click2Subject.pipe(startWith(2)))

const click3Subject = new Subject()
const click3Next = (event) => {
  click3Subject.next(event)
}
const [useClick3, click3$] = bind(click3Subject.pipe(startWith(3)))

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      suggestion1: { avatar_url: "", login: "" },
      suggestion2: { avatar_url: "", login: "" },
      suggestion3: { avatar_url: "", login: "" }
    };
  }

  componentDidMount() {
    const requestStream = refresh$.pipe(
      map(function () {
        var randomOffset = Math.floor(Math.random() * 500);
        return "https://api.github.com/users?since=" + randomOffset;
      })
    );

    const responseStream = requestStream.pipe(
      flatMap(function (requestUrl) {
        return fromFetch(requestUrl).pipe(
          switchMap((response) => {
            if (response.ok) {
              // OK return data
              return response.json();
            } else {
              // Server is returning a status requiring the client to try something else.
              return of({ error: true, message: `Error ${response.status}` });
            }
          })
        );
      })
    );

    /**
     * 单个推荐 steam 在每次点击 close button 时触发
     * 返回点击按钮的顺序和对应的推荐用户
     */
    function createSuggestionStream(closeClickStream) {
      return combineLatest([closeClickStream, responseStream]).pipe(
        map(function ([click, listUsers]) {
          console.log("listuser", click, listUsers);
          if (listUsers) {
            return [
              click,
              listUsers[Math.floor(Math.random() * listUsers.length)]
            ];
          } else {
            return null;
          }
        })
      ).subscribe(function ([click, suggestedUser]) {
        renderSuggestion(suggestedUser, `suggestion${click}`);
      })
    }

    createSuggestionStream(click1$);
    createSuggestionStream(click2$);
    createSuggestionStream(click3$);

    const renderSuggestion = (userInfo, suggestion) => {
      if (userInfo === null) {
      } else {
        this.setState({
          [suggestion]: {
            img: userInfo.avatar_url,
            username: userInfo.login
          }
        });
      }
    };
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="header">
            <h2>Who to follow</h2>
            <button onClick={refreshNext} className="refresh">
              Refresh
            </button>
          </div>
          <ul className="suggestions">
            <Suggestions
              tag="1"
              closeClick={click1Next}
              {...this.state.suggestion1}
            />
            <Suggestions
              tag="2"
              closeClick={click2Next}
              {...this.state.suggestion2}
            />
            <Suggestions
              tag="3"
              closeClick={click3Next}
              {...this.state.suggestion3}
            />
          </ul>
        </div>
      </div>
    );
  }
}

class Suggestions extends React.Component {
  render() {
    const { img, username, closeClick, tag } = this.props;
    return (
      <li className="suggestion1">
        <img src={img} alt="" />
        <span className="username">{username}</span>
        <span className="close close1" onClick={() => closeClick(tag)}>
          &nbsp;&nbsp;x
        </span>
      </li>
    );
  }
}

export default App;
