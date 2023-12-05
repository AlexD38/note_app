-- Active: 1699364041500@@localhost@5432@noteapp

DROP TABLE IF EXISTS "folders", "files", "tags";

CREATE TABLE
    users (
        id SERIAL PRIMARY KEY,
        mail VARCHAR(255),
        password VARCHAR(255),
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
    );

CREATE TABLE
    folders (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        "user_id" INTEGER REFERENCES "users"("id") ON DELETE CASCADE,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
    );

CREATE TABLE
    files (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255),
        slug VARCHAR(255),
        body TEXT,
        "folder_id" INTEGER REFERENCES "folders"("id") ON DELETE CASCADE,
        updated_at TIMESTAMP DEFAULT NOW()
    );

CREATE TABLE
    tags (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
    );