
CREATE TABLE appointment
(
  id bigint auto_increment NOT NULL,
  appointment_date timestamp without time zone NOT NULL,
  doctor bigint NOT NULL,
  customer bigint NOT NULL,

  PRIMARY KEY (id),
  FOREIGN KEY (doctor) REFERENCES doctor(id),
  FOREIGN KEY (customer) REFERENCES customer(id)
);
