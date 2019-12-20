create table shelfie_product (
id serial primary key,
name varchar(25),
price integer,
img text
)
insert into shelfie_product(name, price, img)
values('Santa poopin sweater', 89.99, 'https://images.halloweencostumes.com/products/54423/1-1/tipsy-elves-mens-roof-santa-ugly-christmas-sweater.jpg')


insert into shelfie_product(name, price, img)
values('POTUS Sweater', 1.99,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdgIuXf2vCHOv39Z47nTBDRjqG7-rs-DGx_S-LRJKTKRKRkxK&s')


insert into shelfie_product(name, price, img)
values('Betty Sweaty', 149.99, 'https://i.etsystatic.com/5648529/r/il/b6f6a4/885869183/il_570xN.885869183_ekt1.jpg')