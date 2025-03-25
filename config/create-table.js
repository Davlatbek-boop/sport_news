const pool = require("./db");

const tables = [
  `
    CREATE TABLE IF NOT EXISTS category(
        id SERIAL PRIMARY KEY,
        category_name VARCHAR(255) NOT NULL,
        description VARCHAR(255),
        parent_id BIGINT
        )
        `,

  `
    CREATE TABLE IF NOT EXISTS languages(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    code VARCHAR(255)
    )
    `,
    `
    CREATE TABLE IF NOT EXISTS tags(
    id SERIAL PRIMARY KEY,
    tag_name VARCHAR(255) NOT NULL,
    description VARCHAR(255)
    )
    `,
    `
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(50),
    role VARCHAR(50),
    is_active BOOLEAN,
    created_at DATE,
    interests BIGINT, 
    bookmarks BIGINT
    )
    `,
    `
    CREATE TABLE IF NOT EXISTS authors(
    id SERIAL PRIMARY KEY,
    user_id BIGINT,
    is_approved BOOLEAN,
    is_editor BOOLEAN
    )
    `,
    `
    CREATE TABLE IF NOT EXISTS news_with_lang(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content VARCHAR(255),
    summary_news VARCHAR(255),
    lang_id BIGINT
    )
    `,
    `
    CREATE TABLE IF NOT EXISTS news(
    id SERIAL PRIMARY KEY,
    news_id BIGINT,
    category_id BIGINT,
    author_id BIGINT,
    status VARCHAR(50),
    published_at DATE,
    source VARCHAR(100),
    lang_id BIGINT
    )`,
  `
    CREATE TABLE IF NOT EXISTS news_tags(
    id SERIAL PRIMARY KEY,
    news_id BIGINT,
    tag_id BIGINT
    )
    `,
 
  
  `
    CREATE TABLE IF NOT EXISTS notifactions(
    id SERIAL PRIMARY KEY,
    user_id BIGINT,
    news_id BIGINT,
    msg_type VARCHAR(200),
    is_checked BOOLEAN,
    created_at TIMESTAMP
    )
    `,

  `
    CREATE TABLE IF NOT EXISTS media(
    id SERIAL PRIMARY KEY,
    news_id BIGINT,
    media_type VARCHAR(50),
    media_url VARCHAR(250),
    uploaded_at DATE
    )
    `,
  `
      CREATE TABLE IF NOT EXISTS likes(
      id SERIAL PRIMARY KEY,
      news_id BIGINT,
      user_id BIGINT,
      liked_at TIMESTAMP
      )
      `,
  `
    CREATE TABLE IF NOT EXISTS comments(
    id SERIAL PRIMARY KEY,
    user_id BIGINT, 
    news_id  BIGINT,
    content VARCHAR(255),
    created_at TIMESTAMP,
    reply_comment_id BIGINT,
    is_approved BOOLEAN,
    is_deleted BOOLEAN,
    views BIGINT,
    likes BIGINT
    )
    `,
  `
    CREATE TABLE IF NOT EXISTS reports (
    id SERIAL PRIMARY KEY,
    user_id BIGINT,
    news_id BIGINT,
    reason VARCHAR(200),
    status VARCHAR(200),
    created_at TIMESTAMP
    )
    `,
  `
    CREATE TABLE IF NOT EXISTS views(
    id SERIAL PRIMARY KEY,
    news_id BIGINT,
    user_id BIGINT,
    viewed_at TIMESTAMP
    )
    `, 

];

module.exports = (req, res) => {
  tables.forEach(async (item) => {
    await pool.query(item);
  });
};
