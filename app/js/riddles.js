/** @jsx React.DOM */

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
      <div className="startupScreen">
        <h1 className="page-header">
          {"Bellow's Riddles"}
        </h1>
        Starting up...
        <div className="progress">
          <div className="progress-bar progress-bar-striped active" style={{width: this.props.percentComplete+"%"}}>
            <span className="sr-only">Starting up...</span>
          </div>
        </div>
      </div>
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
          className="riddleAnswer btn btn-link btn-sm"
          onClick={this.handleAnswerClick.bind(this, answer)}
          key={"answer-list"+index}>
          {answer}
        </button>
      );
    }.bind(this));
    return (
      <div className="answersList">
        {answers}
      </div>
    );
  }
})

var RiddlesScreen = React.createClass({
  getDefaultProps: function() {
    return {
      riddles: {}
    }
  },

  getInitialState: function() {
    return {
      showRiddle: "r-1",
      completedRiddles: {}
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
    alert("wrong!")
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
          <div className="riddleStats">
            Riddles Remaining: {answers.length}
          </div>
          <div className="riddleLines">
            {lines}
          </div>
          <AnswersList
            answers={answers}
            correctAnswer={riddle.answer}
            onCorrectAnswer={this.handleCorrectAnswer.bind(this, riddle)}
            onWrongAnswer={this.handleWrongAnswer.bind(this, riddle)}/>
        </div>
      </Screen>
    );

  }
})

var RiddlesApp = React.createClass({
  getInitialState: function() {
    return {
      startupPercent: 0,
      riddles: {}
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

  componentDidMount: function() {
    RiddlesApp.instance = this;
    // simulate fetching of data and other app initialization
    this.simulateStartup();

    $.ajax({
      url: '../json-db/riddles/riddles.json',
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
    if (this.state.startupPercent < 100) {
      return <StartupScreen percentComplete={this.state.startupPercent}/>;
    } else {
      return <RiddlesScreen riddles={this.state.riddles} />;
    }
  }
});

React.renderComponent(
  <RiddlesApp/>,
  document.getElementById('main')
);