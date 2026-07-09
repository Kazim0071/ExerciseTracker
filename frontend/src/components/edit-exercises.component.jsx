import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function EditExercise() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/exercises/${id}`)
      .then((response) => {
        setUsername(response.data.username);
        setDescription(response.data.description);
        setDuration(response.data.duration);
        setDate(new Date(response.data.date));
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/users/")
      .then((response) => {
        if (response.data.length > 0) {
          setUsers(response.data.map((user) => user.username));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const exercise = {
        username,
        description,
        duration,
        date,
      };

      axios
        .post(`http://localhost:5000/exercises/update/${id}`, exercise)
        .then((res) => {
          console.log(res.data);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [username, description, duration, date, id, navigate]
  );

  return (
    <div className="mx-auto max-w-lg rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-6 text-2xl font-semibold text-slate-900">
        Edit Exercise Log
      </h3>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Username
          </label>
          <select
            required
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          >
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Description
          </label>
          <input
            type="text"
            required
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Duration (in minutes)
          </label>
          <input
            type="text"
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Date
          </label>
          <DatePicker
            selected={date}
            onChange={(d) => setDate(d)}
            className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        <div className="pt-2">
          <input
            type="submit"
            value="Edit Exercise Log"
            className="w-full cursor-pointer rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          />
        </div>
      </form>
    </div>
  );
}
