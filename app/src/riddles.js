/** @jsx React.DOM */

var Parse = require('parse').Parse;
Parse.initialize("TcZ80EiPLEGfv5mV3I6boYmPwb0PL0iTL0P0QR32", "jnh4IUAeF8r23K0nKvcX0bNbKyoptQ8ZcGYzjqsK");
$ = require('jquery');
var React = require('react');

require('./styles.css')

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var StartupScreen = React.createClass({
  render: function() {
    return (
      <Screen>
        <div className="startupScreen">
          Starting up...
          <div className="progress">
            <div className="progress-bar progress-bar-striped active" style={{width: this.props.percentComplete+"%"}}>
              <span className="sr-only">Starting up...</span>
            </div>
          </div>
        </div>
      </Screen>
    );
  }
});

var NavBar = React.createClass({
  render: function() {
    return (
      <div className="navBar">
        {"Bellow's Riddles"}
      </div>
      );
  }
});

var Screen = React.createClass({
  render: function() {
    return (
      <div className="screen">
        <NavBar />
        {this.props.children}
      </div>
      );
  }
});

var AnswersList = React.createClass({
  getDefaultProps: function() {
    return {
      onCorrectAnswer: function() {},
      onWrongAnswer: function() {},
      answer: "",
      correctAnswer: ""
    }
  },
  handleAnswerClick: function(answer, event) {
    if (answer == this.props.correctAnswer) {
      this.props.onCorrectAnswer(answer);
    } else {
      this.props.onWrongAnswer(answer);
    }
  },
  render: function() {
    var answers = this.props.answers.map(function(answer, index) {
      return (
        <button
          className="riddleAnswer btn"
          onClick={this.handleAnswerClick.bind(this, answer)}
          key={"answer-list"+index}>
          {answer}
        </button>
      );
    }.bind(this));
    return (
      <div className="answersPane">
        <div className="answersList">
          {answers}
        </div>
      </div>
    );
  }
})

var RiddlesScreen = React.createClass({
  getDefaultProps: function() {
    return {
      riddles: {},
      onNoLivesLeft: function() {}
    }
  },

  getInitialState: function() {
    return {
      showRiddle: "r1",
      completedRiddles: {},
      livesLeft: 3,
      hintsLeft: 4,
    }
  },

  handleCorrectAnswer: function(riddle) {
    var completedRiddles = this.state.completedRiddles;
    completedRiddles[riddle.id] = riddle;
    this.setState({completedRiddles:completedRiddles});
    for (var key in this.props.riddles) {
      if (this.state.completedRiddles[key]) {
        continue;
      }
      this.setState({showRiddle: key});
      break;
    }
  },

  handleWrongAnswer: function(riddle) {
    if (this.state.livesLeft <= 0) {
      this.props.onNoLivesLeft();
    }
    this.setState({livesLeft:this.state.livesLeft - 1});
  },

  render: function() {
    var riddle = this.props.riddles[this.state.showRiddle];
    if (!riddle) {
      return <Screen></Screen>;
    }
    var lines = riddle.riddle.map(function(line, index) {
      return <div key={"riddle-line-"+index} className="riddleLine">{line}</div>;
    });
    var answers = [];
    $.each(this.props.riddles, function(key, riddle) {
      if (!this.state.completedRiddles[key]) {
        answers.push(riddle.answer);
      }
    }.bind(this));
    answers = shuffle(answers);
    return (
      <Screen>
        <div className="riddlesView">
          <div className="riddleStats clearfix">
            <div className="riddleStat">
              Riddles: <strong>{answers.length}</strong>
            </div>
            <div className="riddleStat">
              Lives: <strong>{this.state.livesLeft}</strong>
            </div>
            <div className="riddleStat">
              Hints: <strong>{this.state.hintsLeft}</strong>
            </div>
          </div>
          <AnswersList
            answers={answers}
            correctAnswer={riddle.answer}
            onCorrectAnswer={this.handleCorrectAnswer.bind(this, riddle)}
            onWrongAnswer={this.handleWrongAnswer.bind(this, riddle)}/>
          <div className="riddleLines">
            {lines}
          </div>
        </div>
      </Screen>
    );

  }
})

var CreateAccountScreen = React.createClass({
  getInitialState: function() {
    return {
      showLoginScreen: false,
      isCreatingAccount: false,
      isLoggingIn: false
    };
  },

  handleCreateAccountClick: function() {
    var username = this.refs.usernameField.getDOMNode().value;
    var password = this.refs.passwordField.getDOMNode().value;
    if (password != this.refs.passwordConfirmField.getDOMNode().value) {
      alert("Passwords do not match.");
    } else {
      this.setState({isCreatingAccount:true});
      var user = new Parse.User();
      user.set('username', username);
      user.set('password', password);
      user.signUp(null, {
        success: function(user) {
          RiddlesApp.instance.setState({user:user});
        },
        error: function(user, error) {
          alert("Something went wrong: "+error.code+' '+error.message);
        }
      })
    }
  },

  handleShowLoginClick: function(shouldShowLoginScreen) {
    this.setState({showLoginScreen:shouldShowLoginScreen});
  },

  handleLoginClick: function() {
    this.setState({isLoggingIn:true});
    Parse.User.logIn(
      this.refs.usernameField.getDOMNode().value,
      this.refs.passwordField.getDOMNode().value,
      {
        success: function(user) {
          RiddlesApp.instance.setState({user:user});
        },
        error: function(user, error) {
          alert("Something went wrong: "+error.code+' '+error.message);
        }
      });
  },

  render: function() {

    var content = null;
    if (this.state.isCreatingAccount) {
      // we are in the middle of creating an account, so say so.
      content = <h3>Creating Account...</h3>;
    } else if (this.state.showLoginScreen) {
      // user clicked the login button, so show them that.
      content = (
        <div>
          <h3>Log In</h3>
          <div className="form-group">
            <label>Username</label>
            <input ref="usernameField" type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input ref="passwordField" type="password" className="form-control"/>
          </div>
          <button className="pull-left btn btn-default" onClick={this.handleShowLoginClick.bind(this, false)}>Sign Up</button>
          <button className="pull-right btn btn-primary" onClick={this.handleLoginClick}>Login</button>
        </div>
        );
    } else {
      // Ask the user to create an account
      content = (
        <div>
          <h3>Sign Up</h3>
          <div className="form-group">
            <label>Username</label>
            <input ref="usernameField" type="text" className="form-control" placeholder="Something fun..." />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input ref="passwordField" type="password" className="form-control" placeholder="Something good..." />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input ref="passwordConfirmField" type="password" className="form-control" placeholder="One more time..." />
          </div>
          <button className="pull-left btn btn-default" onClick={this.handleShowLoginClick.bind(this, true)}>Login</button>
          <button className="pull-right btn btn-primary" onClick={this.handleCreateAccountClick}>Create Account</button>
        </div>
        );
    }

    return <div className="introScreen">
      <h1>{"Bellow's Riddle Adventure"}</h1>
      {content}
    </div>
  }
});

var RiddlesApp = React.createClass({
  getInitialState: function() {
    return {
      startupPercent: 0,
      riddles: {},
      gameOver: false,
      user: null
    }
  },

  simulateStartup: function() {
    var newPercent = this.state.startupPercent + 100;
    newPercent = Math.min(newPercent, 100);
    this.setState({startupPercent: newPercent});
    if (newPercent < 100) {
      window.setTimeout(this.simulateStartup, 30)
    }
  },

  handleNoLivesLeft: function() {
    this.setState({gameOver: true});
  },

  componentDidMount: function() {
    RiddlesApp.instance = this;
    // simulate fetching of data and other app initialization
    this.simulateStartup();

    this.setState({user: Parse.User.current()});

    $.ajax({
      url: 'json-db/json/riddles/riddles.json',
      dataType: 'json',
      success: function(data) {
        this.setState({riddles: data, startupPercent:100});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("failed loading riddles", status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    if (!this.state.user) {
      return <CreateAccountScreen />
    } else if (this.state.startupPercent < 100) {
      return <StartupScreen percentComplete={this.state.startupPercent}/>;
    } else if (this.state.gameOver) {
      return <Screen><h1>Game Over</h1></Screen>;
    } else {
      return <RiddlesScreen riddles={this.state.riddles} onNoLivesLeft={this.handleNoLivesLeft}/>;
    }
  }
});

React.renderComponent(
  <RiddlesApp/>,
  document.getElementById('main')
);