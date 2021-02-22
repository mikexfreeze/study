import "./styles.css";
import React from "react";
import { merge, of, Observable, combineLatest } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { map, flatMap, switchMap, startWith, share } from "rxjs/operators";

class App extends React.Component {
  constructor() {
    super();

    const refreshClickStream = new Observable((observer) => {
      this.handleClick = (event) => {
        observer.next(event);
      };
    })

    const close1ClickStream = new Observable((observer) => {
      this.close1Click = (event) => {
        observer.next(event);
      };
    })
    const close2ClickStream = new Observable((observer) => {
      this.close2Click = (event) => {
        observer.next(event);
      };
    })
    const close3ClickStream = new Observable((observer) => {
      this.close3Click = (event) => {
        observer.next(event);
      };
    })

    const requestStream = refreshClickStream.pipe(
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
     * 点击 refresh 按钮的 steam
     * 触发三次 suggestionStream
     */
    // const shareRefreshSteam = responseStream.pipe(share())

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
      );
    }

    const suggestion1Stream = createSuggestionStream(close1ClickStream);
    const suggestion2Stream = createSuggestionStream(close2ClickStream);
    const suggestion3Stream = createSuggestionStream(close3ClickStream);

    
    // responseStream.subscribe(
    //   (listUsers) => {
    //     console.log('listUsers', listUsers)
    //   }
    // )

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

    suggestion1Stream.subscribe(function ([click, suggestedUser]) {
      console.log("userInfo", click, suggestedUser);
      renderSuggestion(suggestedUser, `suggestion${click}`);
    });
    suggestion2Stream.subscribe(function ([click, suggestedUser]) {
      console.log("userInfo", click, suggestedUser);
      renderSuggestion(suggestedUser, `suggestion${click}`);
    });
    suggestion3Stream.subscribe(function ([click, suggestedUser]) {
      console.log("userInfo", click, suggestedUser);
      renderSuggestion(suggestedUser, `suggestion${click}`);
    });

    this.state = {
      suggestion1: { avatar_url: "", login: "" },
      suggestion2: { avatar_url: "", login: "" },
      suggestion3: { avatar_url: "", login: "" }
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="header">
            <h2>Who to follow</h2>
            <button onClick={this.handleClick} className="refresh">
              Refresh
            </button>
          </div>
          <ul className="suggestions">
            <Suggestions
              tag="1"
              closeClick={this.close1Click}
              {...this.state.suggestion1}
            />
            <Suggestions
              tag="2"
              closeClick={this.close2Click}
              {...this.state.suggestion2}
            />
            <Suggestions
              tag="3"
              closeClick={this.close3Click}
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
