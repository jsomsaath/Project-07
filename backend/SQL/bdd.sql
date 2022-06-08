mysql> CREATE TABLE users (
    -> id INTEGER NOT NULL AUTO_INCREMENT,
    -> firstName VARCHAR(100) NOT NULL,
    -> lastName VARCHAR(100) NOT NULL,
    -> email VARCHAR(255) UNIQUE NOT NULL,
    -> password VARCHAR(255) NOT NULL,
    -> admin TINYINT NOT NULL DEFAULT 0,
    -> createdAt datetime NOT NULL,
    -> updatedAt datetime NOT NULL,
    -> imageUrl VARCHAR(255) NULL,
    -> PRIMARY KEY (id))

mysql> CREATE TABLE posts (
    -> id INTEGER NOT NULL AUTO_INCREMENT,
    -> userId INTEGER NOT NULL,
    -> content VARCHAR(255) NOT NULL,
    -> imageUrl VARCHAR(255) NULL,
    -> createdAt datetime NULL,
    -> updatedAt datetime NULL,
    -> Primary KEY (id),
    -> CONSTRAINT fk_post_userId FOREIGN KEY (userID) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE)

mysql> CREATE TABLE comments (
    -> id INTEGER NOT NULL AUTO_INCREMENT,
    -> userId INTEGER NOT NULL,
    -> postId INTEGER NOT NULL,
    -> content VARCHAR(255) NOT NULL,
    -> imageUrl VARCHAR(255) NULL,
    -> createdAt datetime NULL,
    -> updatedAt datetime NULL,
    -> PRIMARY KEY (id),
    -> CONSTRAINT fk_comment_post_id FOREIGN KEY (postId) REFERENCES posts(id) ON DELETE CASCADE ON UPDATE CASCADE,
    -> CONSTRAINT fk_comment_user_id FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE)
