CREATE TABLE administrator (
    administrator_id VARCHAR PRIMARY KEY,
    administrator_name VARCHAR,
    administrator_password VARCHAR
);

CREATE TABLE course (
    course_id VARCHAR NOT NULL,
    course_year INTEGER NOT NULL,
    course_semester INTEGER NOT NULL,
    course_name VARCHAR,
    course_time VARCHAR,
    type_of_credit VARCHAR,
    classroom_id VARCHAR, -- classroom
    classroom_name VARCHAR, -- classroom
    change VARCHAR,
    comment VARCHAR,
    teacher_id VARCHAR, -- REFERENCES teacher (teacher_id)
    teacher_assistant_id VARCHAR, -- REFERENCES teacher(teacher_assistant_id)
    CONSTRAINT pk_course_id PRIMARY KEY (course_id,course_year,course_semester)
);

CREATE TABLE course_limit (
    course_id VARCHAR PRIMARY KEY, -- REFERENCES course(course_id)
    registered INTEGER,
    maximum INTEGER,
    in_class INTEGER,
    same_batch INTEGER,
    different_batch INTEGER,
    double_limit INTEGER,
    minor_limit INTEGER,
    signable_adding VARCHAR,
    waiting INTEGER
);

CREATE TABLE opnion (
    option_id VARCHAR PRIMARY KEY,
    course_id VARCHAR, -- REFERENCES course(course_id)
    course_year INTEGER,
    course_semester INTEGER,
    content VARCHAR,
    score INTEGER
);

CREATE TABLE previous_question (
    course_id VARCHAR,
    question_id VARCHAR PRIMARY KEY
);

CREATE TABLE student (
    student_id VARCHAR PRIMARY KEY,
    student_name VARCHAR,
    student_grade INTEGER,
    major VARCHAR,
    double_major VARCHAR,
    minor_one VARCHAR,
    minor_two VARCHAR,
    gender VARCHAR,
    credit INTEGER,
    student_password VARCHAR
);

CREATE TABLE syllabus (
    course_id VARCHAR NOT NULL,
    course_year INTEGER NOT NULL,
    course_semester INTEGER NOT NULL,
    introduction VARCHAR,
    teaching_lecture INTEGER,
    teaching_discuss INTEGER,
    teaching_group INTEGER,
    teaching_e_learn INTEGER,
    teaching_other INTEGER,
    criteria_participation INTEGER,
    criteria_homework INTEGER,
    criteria_midterm INTEGER,
    criteria_final INTEGER,
    criteria_project INTEGER,
    textbook VARCHAR,
    CONSTRAINT pk_syllabus_id PRIMARY KEY (course_id,course_year,course_semester)
);

CREATE TABLE teacher (
    teacher_id VARCHAR PRIMARY KEY,
    teacher_name VARCHAR,
    teacher_talent VARCHAR,
    teacher_email VARCHAR,
    teacher_office VARCHAR,
    teacher_office_hour VARCHAR,
    gender VARCHAR
);

CREATE INDEX ix_course_name ON course (course_name);
CREATE INDEX ix_course_time ON course (course_time);
CREATE INDEX ix_course_teacher_id ON course (teacher_id);
CREATE INDEX ix_question_id ON previous_question (question_id);
CREATE INDEX ix_student_name ON student (student_name);
CREATE INDEX ix_syllabus_course_id ON syllabus (course_id);
CREATE INDEX ix_syllabus_intro ON syllabus (introduction);
CREATE INDEX ix_teacher_teacher_id ON teacher (teacher_id);
CREATE INDEX ix_teacher_name ON teacher (teacher_name);
