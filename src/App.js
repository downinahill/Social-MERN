import './App.css';
import styled from 'styled-components'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Feed from './Components/Feed'
import Widget from './Components/Widget'
import Story from './Components/Story';
// import Stories from './Components/Stories'

function App() {
  return (
    <AppWrapper>
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
        <Widget />
        <Story />
        {/* <Stories /> */}
      </div>
    </AppWrapper >
  );
}
const AppWrapper = styled.div`
  background-color: #f1f2f5;
  .app_body{
    display: flex;
  }
`


export default App;
