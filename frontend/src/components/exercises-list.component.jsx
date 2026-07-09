import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = (props) => {
  return (
    <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
      <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-slate-900">
        {props.exercise.username}
      </td>
      <td className="px-4 py-3 text-sm text-slate-600">
        {props.exercise.description}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-600">
        {props.exercise.duration} min
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-600">
        {props.exercise.date.substring(0, 10)}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-sm">
        <Link
          to={`/edit/${props.exercise._id}`}
          className="font-medium text-indigo-600 hover:text-indigo-800"
        >
          Edit
        </Link>
        <span className="mx-2 text-slate-300">|</span>
        <Link
          to="/"
          onClick={() => {
            props.deleteExercise(props.exercise._id);
          }}
          className="font-medium text-red-600 hover:text-red-800"
        >
          Delete
        </Link>
      </td>
    </tr>
  );
};

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises")
      .then((response) => {
        this.setState({ exercises: response.data });
      })
      .catch((error) => console.log(error));
  }

  deleteExercise(id) {
    axios
      .delete(`http://localhost:5000/exercises/${id}`)
      .then((res) => console.log(res.data));

    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
    });
  }

  exerciseList() {
    return this.state.exercises.map((currentExercise) => {
      return (
        <Exercise
          exercise={currentExercise}
          deleteExercise={this.deleteExercise}
          key={currentExercise._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3 className="mb-4 text-2xl font-semibold text-slate-900">
          Logged Exercises
        </h3>
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-800">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-200">
                    Username
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-200">
                    Description
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-200">
                    Duration
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-200">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-200">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {this.exerciseList()}
              </tbody>
            </table>
          </div>
          {this.state.exercises.length === 0 && (
            <p className="px-4 py-8 text-center text-sm text-slate-500">
              No exercises logged yet.
            </p>
          )}
        </div>
      </div>
    );
  }
}
