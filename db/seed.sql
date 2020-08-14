drop table posts;
drop table users;

CREATE TABLE users (
    user_id serial primary key,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic text
);

CREATE TABLE posts (
    post_id serial primary key,
    title VARCHAR(45),
    post_img text,
    content text,
    author_id int references users(user_id)
);

ALTER TABLE users ALTER COLUMN password TYPE text;