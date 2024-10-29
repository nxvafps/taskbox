import React from "react";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchTasks } from "../lib/store/asyncActions.js";

import TaskList from "./TaskList.js";

import { RootState, AppDispatch } from "../lib/store";

import { ThunkDispatch } from "@reduxjs/toolkit";

const InboxScreen: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, void, any> = useDispatch();
  // retrieving the error field from our updated store
  const { error } = useSelector((state: RootState) => state.taskbox);
  // the useEffect triggers the data fetching when the component is mounted
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <p className="title-message">Oh no!</p>
          <p className="subtitle-message">Something went wrong</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">Taskbox</h1>
      </nav>
      <TaskList />
    </div>
  );
};

export default InboxScreen;
