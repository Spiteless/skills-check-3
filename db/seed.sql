DROP TABLE if exists users cascade;
DROP TABLE if exists posts cascade;

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

INSERT INTO users (username, password, profile_pic)
-- username: bob // password: bob
VALUES (
'bob',
'$2b$10$CPpV.sIrav1hUvzYdGezzua9gbBsWa32KPZfNlAagUQyykiC5y/im',
'https://robohash.org/asdfafa'
)
