\echo 'Delete and recreate portfolio db?'
\prompt 'Return for yes or control-C to cancel > ' answer

DROP DATABASE portfolio;
CREATE DATABASE portfolio;
\connect portfolio

\i portfolio-schema.sql
\i portfolio-seed.sql


DROP DATABASE portfolio_test;
CREATE DATABASE portfolio_test;
\connect portfolio_test


\i portfolio-schema.sql
\i portfolio-seed.sql