
CREATE TYPE MUSCLE_GROUP AS ENUM (
    'Plecy',
    'Nogi',
    'Brzuch',
    'Biceps',
    'Triceps',
    'Klatka piersiowa',
    'Łydki',
    'Barki'
);

CREATE TYPE DIFFICULTY AS ENUM (
    'Łatwe',
    'Średnie',
    'Trudne'
)

CREATE TABLE EXERCISE (
    id serial primary key,
    name varchar(255) unique NOT NULL ,
    muscle_group MUSCLE_GROUP NOT NULL ,
    description varchar(2000) NOT NULL ,
    difficulty DIFFICULTY NOT NULL ,
    url varchar(255) NOT NULL,
)

CREATE TABLE USER (
    id serial primary key ,
    login varchar(255) unique NOT NULL,
    password varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
)

CREATE TABLE PLAN (
    id serial primary key,
    date_from datetime,
    date_to datetime,
    name varchar(255),
    main_muscle_group MUSCLE_GROUP,
)

CREATE TABLE EXERCISE_WITH_REPS (
    id serial primary key ,
    reps int,
    series int,
    FOREIGN KEY (exercise_id)
        REFERENCES EXERCISE (id)
)



