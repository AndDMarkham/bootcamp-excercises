SELECT *
FROM `paragraphs`
WHERE `id` = 1337;

SELECT *
FROM `words`
WHERE `word` = "kissed"

INSERT
INTO `words`
(`word`, `count`)
VALUES
('february', 10);

SELECT *
FROM `paragraphs`
WHERE `text` LIKE '%Edmond Dantès%';