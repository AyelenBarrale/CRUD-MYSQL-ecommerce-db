### comandos ingresados en DBeaver para crear los esquemas de cada tabla:

## creación de tabla para productos

create table producto (id int primary key not null auto_increment, nombre varchar(50) not null, codigo varchar(50) not null, descripcion varchar(200) not null, precio float not null, foto varchar(500) not null, stock int not null, fecha_hora timestamp default current_timestamp);

## creación de tabla para carritos

create table carrito (id int primary key not null auto_increment, userName varchar(50) not null, fecha_hora timestamp default current_timestamp);

## creación de tabla extra para unir id de carrito con los id de los productos que lo integran.

create table carrito_producto (cp_id int not null auto_increment, cp_carrito int not null, cp_producto int not null, primary key (cp_id), foreign key (cp_carrito) references carrito (id), foreign key (cp_producto) references producto (id));

# al momento de insertar un producto mediante DBeaver sería:

insert into carrito_producto (cp_carrito, cp_producto) values (1 , 2);

# pero al momento de aplicarlo en el services de la siguiente forma:

const prodInCart = await db('carrito_producto').insert(cartId, productId)

# me arroja el siguiente error:

Error: The query is empty
