import React from "react";
import axios from "axios";
import "./index.css";

class App extends React.Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <div className="image" STYLE="background:url(../images/keval.jpg">
          <h1 className="bg-red-400 text-white text-center p-9 text-lg mb-40">
            {"[ Q           U          O          T          E          S ]" }
           
          </h1>
          <div className="">
            <div className="">
              <h1 className="text-center text-4xl font-medium">
                {this.state.advice}
              </h1>
            </div>
            <div className="flex items-center justify-center mt-5 animate-pulse">
              <button
                className="text-white font-medium p-3 rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500"
                onClick={this.fetchAdvice}
              >
                Okay Next..
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
