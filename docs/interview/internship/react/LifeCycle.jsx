import React from 'react';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    this.setState({ counter: this.state.counter + 1 });
    console.log('id2: ', this.state.counter); // 0

    this.setState({ counter: this.state.counter + 1 });
    // this.setState((state) => {
    //   console.log('id3: ', state); // { counter: 1 }
    //   return { counter: state.counter + 1 };
    // });
    console.log('id4: ', this.state.counter); // 0

    // setTimeout(() => {
    //   console.log('setTimeout id', this.state.counter); // 3
    //   this.setState({ counter: this.state.counter + 1 });
    //   console.log('setTimeout id2', this.state.counter); // 3
    //
    //   this.setState({ counter: this.state.counter + 1 });
    //   console.log('setTimeout id4: ', this.state.counter); // 4
    // }, 0);
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        {/* 看不到中间状态，counter直接展示1或2 */}
        <div>{this.state.counter}</div>
        <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>Click Me</button>
      </div>
    );
  }
}

export default Hello;
