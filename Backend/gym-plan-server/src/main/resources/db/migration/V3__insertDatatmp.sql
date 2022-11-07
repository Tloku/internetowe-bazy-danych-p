insert into gym_user(login, email, password) VALUES ('login', 'email', 'password');

insert into training_plan(user_id, name, date_from, date_to, main_muscle_group) VALUES (1, 'plan 1', '07/11/2022', '14/11/2022', 'SHOULDERS');

insert into exercise_with_reps(plan_id, exercise_id, reps, series) VALUES (1, 1, 5, 3);
insert into exercise_with_reps(plan_id, exercise_id, reps, series) VALUES (1, 3, 6, 4);
insert into exercise_with_reps(plan_id, exercise_id, reps, series) VALUES (1, 8, 5, 5);
insert into exercise_with_reps(plan_id, exercise_id, reps, series) VALUES (1, 5, 5, 10);