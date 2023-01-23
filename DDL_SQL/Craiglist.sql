-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

CREATE TABLE "Post" (
    "ID" int   NOT NULL,
    "Title" text   NOT NULL,
    "Text" Text   NOT NULL,
    "User_ID" int   NOT NULL,
    "Region_ID" int   NOT NULL,
    "Category_ID" int   NOT NULL,
    CONSTRAINT "pk_Post" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "User" (
    "ID" int   NOT NULL,
    "Name" text   NOT NULL,
    "Region_ID" int   NOT NULL,
    CONSTRAINT "pk_User" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Category" (
    "ID" int   NOT NULL,
    "Name" text   NOT NULL,
    CONSTRAINT "pk_Category" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Region" (
    "ID" int   NOT NULL,
    "Name" text   NOT NULL,
    CONSTRAINT "pk_Region" PRIMARY KEY (
        "ID"
     )
);

ALTER TABLE "Post" ADD CONSTRAINT "fk_Post_User_ID" FOREIGN KEY("User_ID")
REFERENCES "User" ("ID");

ALTER TABLE "Post" ADD CONSTRAINT "fk_Post_Region_ID" FOREIGN KEY("Region_ID")
REFERENCES "Region" ("ID");

ALTER TABLE "Post" ADD CONSTRAINT "fk_Post_Category_ID" FOREIGN KEY("Category_ID")
REFERENCES "Category" ("ID");

ALTER TABLE "User" ADD CONSTRAINT "fk_User_Region_ID" FOREIGN KEY("Region_ID")
REFERENCES "Region" ("ID");

