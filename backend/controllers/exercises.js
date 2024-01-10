import Exercise from "../models/exercise.model.js";

// PATH    : /exercises
// METHOD  : Get
// ACCESS  : Public
// DESC    : Get all exercises
export const getExercises = (req, res) => {
  Exercise.find()
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error:" + err));
};

// PATH    : /exercises/:id
// METHOD  : Get
// ACCESS  : Public
// DESC    : Get an exercise by id
export const getExercisesById = (req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error:" + err));
};

// PATH    : /exercises/add
// METHOD  : Post
// ACCESS  : Public
// DESC    : Creat new exercise
export const postExercises = (req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise
    .save()
    .then(() => res.json("Exercise Added!"))
    .catch((err) => res.status(400).json("Error:" + err));
};

// PATH    : /exercises/update/:id
// METHOD  : Post
// ACCESS  : Public
// DESC    : Creat new exercise by id
export const postExercisesById = (req, res) => {
  Exercise.findById(req.params.id).then((exercise) => {
    if (!exercise) {
      return res.status(404).json("Exercise not found");
    }

    exercise.username = req.body.username;
    exercise.description = req.body.description;
    exercise.duration = Number(req.body.duration);
    exercise.date = Date.parse(req.body.date);

    exercise
      .save()
      .then(() => res.json("Exercise Added!"))
      .catch((err) => res.status(400).json("Error:" + err));
  });
};

// PATH    : /exercises/:id
// METHOD  : Delete
// ACCESS  : Public
// DESC    : Delete an exercise
export const deleteExercisesById = (req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted"))
    .catch((err) => res.status(400).json("Error:" + err));
};
