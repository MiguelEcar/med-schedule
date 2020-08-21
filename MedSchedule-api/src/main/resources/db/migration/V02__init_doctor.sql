
CREATE TABLE doctor
(
  id bigint auto_increment NOT NULL,
  doc_name character varying(100) NOT NULL,
  speciality character varying(500) NOT NULL,

  PRIMARY KEY (id)
);