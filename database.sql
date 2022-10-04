sudo -u postgres createdb my_trackers;
sudo -u postgres createuser zingce -;
 

create table userz (
	id serial primary key,
	first_name text not null,
    last_name text not null,
    email text not null
);

create table categoriez (
	id serial not null primary key,
    descriptions text not null
	
);

insert into categoriez (descriptions) values ('food');
insert into categoriez (descriptions) values ('travel');
insert into categoriez (descriptions) values ('toiletries');
insert into categoriez (descriptions) values ('communication');


create table expensez(
	id serial not null primary key,
    userz_id integer not null,
    categoriez_id integer not null,
    amount integer not null,
   expense_date varchar(20) not null,
    foreign key (userz_id) references userz (id),
    foreign key (categoriez_id) references categoriez (id)

);
insert into userz
(first_name,last_name,email) values ('KHAZIMLA','MAHOMANA', 'MAHOMANA@GMAIL.COM');

