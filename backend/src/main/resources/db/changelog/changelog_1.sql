CREATE TABLE usertypes
(
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE colors
(
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE manufacturers
(
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE bodytypes
(
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE regions
(
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE enginetypes
(
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE models
(
    id BIGSERIAL PRIMARY KEY,
    manufacturer_id BIGINT,
    name VARCHAR(50) NOT NULL,
    CONSTRAINT models_manufacturer_id_fk FOREIGN KEY (manufacturer_id) REFERENCES manufacturers (id) ON DELETE CASCADE
);

CREATE TABLE engines
(
    id BIGSERIAL PRIMARY KEY,
    type_id BIGINT,
    horsepower FLOAT NOT NULL,
    displacement FLOAT NOT NULL,
    power FLOAT NOT NULL,
    CONSTRAINT engines_type_id_fk FOREIGN KEY (type_id) REFERENCES enginetypes (id) ON DELETE SET NULL
);

CREATE TABLE vehicles
(
    id BIGSERIAL PRIMARY KEY,
    color_id BIGINT,
    model_id BIGINT,
    bodytype_id BIGINT,
    engine_id BIGINT,
    region_id BIGINT,
    mileage INTEGER NOT NULL,
    year INTEGER NOT NULL,
    CONSTRAINT vehicles_color_id_fk FOREIGN KEY (color_id) REFERENCES colors (id) ON DELETE SET NULL,
    CONSTRAINT vehicles_model_id_fk FOREIGN KEY (model_id) REFERENCES models (id) ON DELETE SET NULL,
    CONSTRAINT vehicles_bodytype_id_fk FOREIGN KEY (bodytype_id) REFERENCES bodytypes (id) ON DELETE SET NULL,
    CONSTRAINT vehicles_engine_id_fk FOREIGN KEY (engine_id) REFERENCES engines (id) ON DELETE SET NULL,
    CONSTRAINT vehicles_region_id_fk FOREIGN KEY (region_id) REFERENCES regions (id) ON DELETE SET NULL
);

CREATE TABLE users
(
    id BIGSERIAL PRIMARY KEY,
    type_id BIGINT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone VARCHAR(15) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(144) NOT NULL,
    CONSTRAINT users_type_id_fk FOREIGN KEY (type_id) REFERENCES usertypes (id) ON DELETE CASCADE
);

CREATE TABLE ads
(
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL ,
    vehicle_id BIGINT NOT NULL,
    description VARCHAR(2000) NOT NULL,
    price FLOAT NOT NULL,
    date TIMESTAMP NOT NULL DEFAULT NOW(),
    CONSTRAINT ads_user_id_fk FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    CONSTRAINT ads_vehicle_id_fk FOREIGN KEY (vehicle_id) REFERENCES vehicles (id) ON DELETE CASCADE
);











