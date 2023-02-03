module.exports = `INSERT INTO users (name, email, password, location, avatar, bio, created_at) 
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

('Vasiliy K', 'vasilyk@mail.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'Vancouver, BC, Canada', 'https://github.com/thien-trieu/foodie-connect/blob/master/server/docs/default_avatar.png?raw=true', 'do you crave food first or does the though of food make you crave it?', '2023-02-01');

INSERT INTO choices (name) VALUES 
('Breakfast & Brunch'), ('Bakeries'), ('Bars'), ('Bubble Tea'), ('Buffet'), ('Burgers'), ('Coffee'), ('Chinese'), ('Curry'), ('Donuts'), ('Fast Food'), ('Filipino'), ('Fish & Chips'), ('Food Trucks'), ('Fried Chicken'), ('Greek'), ('Hotpot'), ('Indian'), ('Japanese'), ('Korean'), ('Korean BBQ'), ('Mexican'), ('Noodles'), ('Pasta'), ('Pho'), ('Pizza'), ('Poke'), ('Sandwiches'), ('Seafood'), ('Singaporean'), ('Soup'), ('Steak'), ('Sushi'), ('Turkish'), ('Thai'), ('Vietnamese');


INSERT INTO user_choices (user_id, choice_id, created_at) VALUES 
('1', '1', '2023-02-01'), 
('1', '4', '2023-02-01'), 
('1', '7', '2023-02-01'), 
('2', '4', '2023-02-01'),
('2', '17', '2023-02-01'),
('2', '33', '2023-02-01'),
('3', '1', '2023-02-01'),
('3', '4', '2023-02-01'),
('3', '17', '2023-02-01'),
('4', '1', '2023-02-01'),
('4', '26', '2023-02-01'),
('4', '33', '2023-02-01'),
('5', '4','2023-02-01'),
('5', '15', '2023-02-01'),
('5', '33', '2023-02-01'),
('6', '1', '2023-02-01'),
('6', '15', '2023-02-01'),
('6', '17', '2023-02-01'),
('7', '2', '2023-02-01'),
('7', '17', '2023-02-01'),
('7', '21', '2023-02-01'),
('8', '1', '2023-02-01'),
('8', '4', '2023-02-01'),
('8', '33', '2023-02-01'),
('9', '4', '2023-02-01'),
('9', '19', '2023-02-01'),
('9', '26', '2023-02-01'),
('10', '7', '2023-02-01'),
('10', '15', '2023-02-01'),
('10', '26', '2023-02-01')
`;

