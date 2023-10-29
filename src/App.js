import React, { useEffect } from 'react';
import './App.css';
import TopNav from './components/TopNav/TopNav';
import DashView from './components/DashBoard/DashView';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllData } from './Actions/DataAction';
import Loading from './components/Loading/Loading';

const App = () => {
  const dispatch = useDispatch();
  const { allTickets } = useSelector(state => state.DataReducer);

  // useEffect is used for handling side effects, in this case, data fetching.
  useEffect(() => {
    // Dispatch the fetchAllData action when the component mounts.
    dispatch(fetchAllData());
  }, [dispatch]);

  // Render the component. If allTickets is available, display TopNav and DashView.
  return allTickets ? (
    <div style={{ paddingTop: "10px" }}>
      <TopNav />
      <hr style={{ marginTop: "10px" }} />
      <DashView />
    </div>
  ) : (
    // If allTickets is not available, display a loading component.
    <Loading />
  );
};

export default App;
