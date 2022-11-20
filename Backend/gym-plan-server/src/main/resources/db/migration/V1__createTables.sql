CREATE TYPE MUSCLE_GROUP AS ENUM (
    'BACK',
    'THIGHS',
    'BELLY',
    'BICEPS',
    'TRICEPS',
    'FOREARMS',
    'BUTTOCKS',
    'CHEST',
    'CALVES',
    'SHOULDERS'
);

CREATE TYPE DIFFICULTY AS ENUM (
    'EASY',
    'MEDIUM',
    'HARD'
);

CREATE CAST (character varying as difficulty) WITH INOUT AS IMPLICIT;

CREATE TABLE EXERCISE (
          id           SERIAL NOT NULL,
          exercise_name         varchar(255) NOT NULL UNIQUE,
          description  varchar(2000) NOT NULL,
          url          varchar(255),
          muscle_group MUSCLE_GROUP NOT NULL,
          difficulty   DIFFICULTY NOT NULL,
          PRIMARY KEY (id)
);
CREATE TABLE EXERCISE_WITH_REPS (
        id          SERIAL NOT NULL,
        plan_id     int4 NOT NULL,
        exercise_id int4 NOT NULL,
        reps        int4 NOT NULL,
        series      int4 NOT NULL,
        PRIMARY KEY (id)
);
CREATE TABLE GYM_USER (
        id       SERIAL NOT NULL,
        login    varchar(255) NOT NULL UNIQUE,
        email    varchar(255) NOT NULL,
        password varchar(255) NOT NULL,
        PRIMARY KEY (id)
);
CREATE TABLE TRAINING_PLAN (
        id                SERIAL NOT NULL,
        user_id           int4 NOT NULL,
        name              varchar(255) NOT NULL,
        date_from         date NOT NULL,
        date_to           date NOT NULL,
        main_muscle_group MUSCLE_GROUP NOT NULL,
        PRIMARY KEY (id)
);

ALTER TABLE EXERCISE_WITH_REPS ADD CONSTRAINT FKEXERCISE_W590838 FOREIGN KEY (plan_id) REFERENCES TRAINING_PLAN (id);
ALTER TABLE TRAINING_PLAN ADD CONSTRAINT FKTRAINING_P371733 FOREIGN KEY (user_id) REFERENCES GYM_USER (id);
ALTER TABLE EXERCISE_WITH_REPS ADD CONSTRAINT FKEXERCISE_W919732 FOREIGN KEY (exercise_id) REFERENCES EXERCISE (id);
