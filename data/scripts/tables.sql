-- Active: 1698675345832@@localhost@5432@noteapp@public

DROP TABLE IF EXISTS "folders", "files", "tags";

CREATE TABLE
    folders (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
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