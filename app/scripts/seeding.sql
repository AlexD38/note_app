INSERT INTO folders (name) VALUES ('CSS'), ('HTML');

INSERT INTO tags (name) VALUES ('tag 1'), ('tag 2');

INSERT INTO
    files (title, folder_id)
VALUES ('CSS basics', 1), ('JS Callbacks and shit', 2), (
        'POSTGRES connexion string',
        1
    );

INSERT INTO
    users (mail, password)
VALUES (
        'dartiguelongue.alexis@gmail.com',
        'OmingBlake38!'
    );