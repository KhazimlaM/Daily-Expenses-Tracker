sudo -u postgres createdb trackers;
sudo -u postgres createuser Khazimla -P;

create table users(
	id serial not null primary key,
	first_name text not null,
    last_name text not null,
    email varchar(25)
);

create table categories (
	id serial not null primary key,
    descriptions text not null
	
);

insert into categories (descriptions) values ('food');
insert into categories (descriptions) values ('travel');
insert into categories (descriptions) values ('toiletries');
insert into categories (descriptions) values ('communication');


create table expenses(
	id serial not null primary key,
    users_id integer not null,
    categories_id integer not null,
    amount integer not null,
   expense_date varchar(20) not null,
    foreign key (users_id) references users (id),
    foreign key (categories_id) references categories (id)

);