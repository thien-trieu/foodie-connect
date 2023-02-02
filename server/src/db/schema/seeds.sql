-- 10 users

INSERT INTO users (name, email, password, location, avatar, bio, created_at) 
VALUES 
('Carol C', 'carolc@mail.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'Vancouver, BC, Canada', 'https://github.com/thien-trieu/foodie-connect/blob/master/server/docs/default_avatar.png?raw=true', 'just looking to satisfy my cravings', '2023-02-01'),

('Stanley L', 'stanl@mail.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'Vancouver, BC, Canada', 'https://github.com/thien-trieu/foodie-connect/blob/master/server/docs/default_avatar.png?raw=true', 'looking for a food buddy', '2023-02-01'),

('Thien T', 'thient@mail.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'Vancouver, BC, Canada', 'https://github.com/thien-trieu/foodie-connect/blob/master/server/docs/default_avatar.png?raw=true', 'good food is like a hug for your taste buds', '2023-02-01'),

('Andy L', 'andya@mail.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'Vancouver, BC, Canada', 'https://github.com/thien-trieu/foodie-connect/blob/master/server/docs/default_avatar.png?raw=true', 'what are you craving today?', '2023-02-01'),

('Christian N', 'christiann@mail.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'Vancouver, BC, Canada', 'https://github.com/thien-trieu/foodie-connect/blob/master/server/docs/default_avatar.png?raw=true', 'looking for good food and good music', '2023-02-01'),

('Dominic T', 'dominicT@mail.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'Vancouver, BC, Canada', 'https://github.com/thien-trieu/foodie-connect/blob/master/server/docs/default_avatar.png?raw=true', 'would you be my food-ami?', '2023-02-01'),

('Francis B', 'francisb@mail.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'Vancouver, BC, Canada', 'https://github.com/thien-trieu/foodie-connect/blob/master/server/docs/default_avatar.png?raw=true', 'i can cook if there is nothing out there that interests you', '2023-02-01'),

('Gary J', 'garyj@mail.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'Vancouver, BC, Canada', 'https://github.com/thien-trieu/foodie-connect/blob/master/server/docs/default_avatar.png?raw=true', 'i love food and of course my pet dog', '2023-02-01'),

('Kyla W', 'kylaw@mail.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'Vancouver, BC, Canada', 'https://github.com/thien-trieu/foodie-connect/blob/master/server/docs/default_avatar.png?raw=true', 'up for any food adventure!!', '2023-02-01'),

('Vasiliy K', 'vasilyk@mail.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'Vancouver, BC, Canada', 'https://github.com/thien-trieu/foodie-connect/blob/master/server/docs/default_avatar.png?raw=true', 'do you crave food first or does the though of food make you crave it?', '2023-02-01')


-- 37 cuisine options
INSERT INTO cuisines (cuisine) VALUES ('Breakfast & Brunch'),('Bakeries'),('Bars'),('Bubble Tea'),('Buffet'),('Burgers'),('Coffee'),('Chinese'),('Curry'),('Donuts'),('Fast Food'),('Filipino'),('Fish & Chips'),('Food Trucks'),('Fried Chicken'),('Greek'),('Hotpot'),('Indian'),('Japanese'),('Korean'),('Korean BBQ'),('Mexican'),('Noodles'),('Pasta'),('Pho'),('Pizza'),('Poke'),('Sandwiches'),('Seafood'),('Singaporean'),('Soup'),('Steak'),('Sushi'),('Turkish'),('Thai'),('Vietnamese')

-- 10 user cuisines
INSERT INTO user_cuisines (user_id, choice1, choice2, choice3, created_at) VALUES (1, 1, 4, 17,'2023-02-01'), 
(2, 4, 16, 17,'2023-02-01'),
(3, 4, 17, 29,'2023-02-01'),
(4, 6, 7, 13,'2023-02-01'),
(5, 4, 7, 36,'2023-02-01'),
(6, 8, 15, 25,'2023-02-01'),
(7, 4, 17, 19,'2023-02-01'),
(8, 1, 8, 13,'2023-02-01'),
(9, 1, 4, 17,'2023-02-01'),
(10, 1, 8, 17,'2023-02-01');


-- -- figuring out how to match
-- INSERT INTO matches (user_id, match, created_at) VALUES (1, 2, TRUE, '2022-11-25');

