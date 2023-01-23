-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

CREATE TABLE "Field" (
    "ID" int   NOT NULL,
    "Disease" int   NOT NULL,
    "Doctor_ID" int   NOT NULL,
    CONSTRAINT "pk_Field" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Patient" (
    "ID" int   NOT NULL,
    "Name" text   NOT NULL,
    "Disease" int   NOT NULL,
    CONSTRAINT "pk_Patient" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Appointments" (
    "ID" int   NOT NULL,
    "Doctor_ID" int   NOT NULL,
    "Patient_ID" int   NOT NULL,
    CONSTRAINT "pk_Appointments" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Doctor" (
    "ID" int   NOT NULL,
    "Name" text   NOT NULL,
    "Field" text   NOT NULL,
    CONSTRAINT "pk_Doctor" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Disease" (
    "ID" int   NOT NULL,
    "Name" text   NOT NULL,
    CONSTRAINT "pk_Disease" PRIMARY KEY (
        "ID"
     )
);

ALTER TABLE "Field" ADD CONSTRAINT "fk_Field_Disease" FOREIGN KEY("Disease")
REFERENCES "Disease" ("ID");

ALTER TABLE "Field" ADD CONSTRAINT "fk_Field_Doctor_ID" FOREIGN KEY("Doctor_ID")
REFERENCES "Doctor" ("ID");

ALTER TABLE "Patient" ADD CONSTRAINT "fk_Patient_Disease" FOREIGN KEY("Disease")
REFERENCES "Disease" ("ID");

ALTER TABLE "Appointments" ADD CONSTRAINT "fk_Appointments_Doctor_ID" FOREIGN KEY("Doctor_ID")
REFERENCES "Doctor" ("ID");

ALTER TABLE "Appointments" ADD CONSTRAINT "fk_Appointments_Patient_ID" FOREIGN KEY("Patient_ID")
REFERENCES "Patient" ("ID");

