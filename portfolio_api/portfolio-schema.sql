CREATE TABLE users (
  id          SERIAL PRIMARY KEY,
  password    TEXT NOT NULL,
  first_name  TEXT NOT NULL,
  last_name   TEXT NOT NULL,
  email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
  is_admin    BOOLEAN NOT NULL DEFAULT FALSE,
  created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE projects (
  id            SERIAL PRIMARY KEY,
  name          TEXT NOT NULL,
  image         TEXT NOT NULL,
  description   TEXT NOT NULL,
  url           TEXT NOT NULL 
);