
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
    id int,
    name varchar(255) NOT NULL ,
    muscle_group MUSCLE_GROUP NOT NULL ,
    description varchar(2000) NOT NULL ,
    difficulty DIFFICULTY NOT NULL ,
    url varchar(255) NOT NULL,
    unique (name)
)

CREATE TABLE USER (
    id int,
    login varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    UNIQUE (login)
)

CREATE TABLE PLAN (
    id int,
    date_from datetime,
    date_to datetime,
    name varchar(255),
    main_muscle_group MUSCLE_GROUP,
)

CREATE TABLE EXERCISE_WITH_REPS (
    id ,
    reps int,
    series int,
)



