DROP DATABASE IF EXISTS hats_dev;
CREATE DATABASE hats_dev;


\c hats_dev;

CREATE TABLE hats (
   id SERIAL PRIMARY KEY,
   style TEXT NOT NULL, 
   color TEXT NOT NULL, 
   size INTEGER DEFAULT 7, 
   is_available BOOLEAN DEFAULT TRUE,
   material TEXT NOT NULL,
   price INTEGER, 
   image TEXT NOT NULL
);