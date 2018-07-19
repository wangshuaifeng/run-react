import * as React  from 'react';

const initialState = { count: 0 };
type State = Readonly<typeof initialState>

class App extends React.Component<{}, State> {

  public state: State = initialState;
  
  public render() {
    const { count } = this.state;

    return (
      <div>
        <button onClick={this.handleIncrement}>增加</button>
        <p>当前计数：{count}</p>
      </div>
    )
  }
  private handleIncrement = () => this.setState(prevState => ({count: prevState.count + 1}))
}

export default App;
